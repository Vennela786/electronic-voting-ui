FROM node:19.0-alpine
MAINTAINER Jahnavi <jahnavi.manne.1@slu.edu>
RUN mkdir /app
WORKDIR /app
COPY . /app
CMD ["npm", "start"]
