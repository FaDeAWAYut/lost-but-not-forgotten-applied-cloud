FROM node:24-alpine
EXPOSE 4000
WORKDIR /app
COPY . .
RUN npm install
ENTRYPOINT ["npm", "run", "dev"]