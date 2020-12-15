FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5001
ENTRYPOINT ["node", "server.js"]