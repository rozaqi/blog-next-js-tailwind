FROM node:18.12.1
WORKDIR /usr/src/app
COPY . .
RUN npm install --production
RUN npm run build
CMD ["npm", "run", "start"]
