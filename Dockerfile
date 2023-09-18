FROM node:alpine

WORKDIR C:\deeflow\codes\deeflow\blog-backends\deeflow-ex\app
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5400

CMD ["npm","start"]