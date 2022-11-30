FROM node:19.0-alpine
MAINTAINER Jahnavi <jahnavi.manne.1@slu.edu>
RUN mkdir /app
WORKDIR /app
COPY . /app
ENV BIND_ADDR=0.0.0.0:4200
EXPOSE 4200
ENTRYPOINT ["npm", "start"]
