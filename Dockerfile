FROM node:alpine AS node-builder

WORKDIR /backend

COPY package*.json .
RUN npm install

COPY . .
RUN npm run build

COPY --from=node-builder /backend/build/*.js /var/www/html/scripts