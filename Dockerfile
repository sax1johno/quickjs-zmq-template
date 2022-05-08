FROM alpine:3.13.2 AS builder

# This build process requires static linking, with everything copied into a single javascript bundle.
ARG FILE_NAME=main.js
ARG OUTPUT=a.out

# Install all dependencies required for compiling quickjs
RUN apk add gcc musl-dev make

# Get the quickjs sources
RUN wget https://github.com/bellard/quickjs/archive/refs/heads/master.zip \
  && unzip master.zip \
  && mv quickjs-master quickjs
  # && mv master /quickjs
  # && tar xzf thttpd-${THTTPD_VERSION}.tar.gz \
  # && mv /thttpd-${THTTPD_VERSION} /thttpd

# Compile quickjs to a static binary which we can copy around
RUN cd /quickjs \
  && CFLAGS_OPT="-static -no-pie" make
 
# # Create a non-root user to own the files and run our server
RUN adduser -D static

COPY ./build /build

WORKDIR /binaries

RUN /quickjs/qjsc -o /binaries/a.out /build/${FILE_NAME}

FROM scratch

# RUN apk add musl-dev

# Copy over the user
COPY --from=builder /etc/passwd /etc/passwd

# Use our non-root user
USER static
WORKDIR /home/static

# Copy runtime libraries
# Note: this was determined by running ldd on the binary in the build container
COPY --from=builder /lib/ld-musl-x86_64.so.1 /lib/ld-musl-x86_64.so.1

# Copy the binary
COPY --from=builder /binaries/a.out /
# Copy the static website
# Use the .dockerignore file to control what ends up inside the image!

# Run the state machine.
CMD ["/a.out"]