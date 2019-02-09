FROM node:10-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY .env.production ./.env

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]