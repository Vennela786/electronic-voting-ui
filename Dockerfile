FROM node:19.0-alpine
RUN mkdir /app
WORKDIR /app
COPY . /app
CMD ["npm", "start"]
