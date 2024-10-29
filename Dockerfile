# Dockerfile
# Pull the base image
FROM node:18.16.1-alpine
# Set the working directory
WORKDIR /front-redux

# Copy app dependencies to container
COPY ./package*.json ./

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install dependencies
RUN npm install

# LIVE RELOAD DOCKER
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

# Deploy app for local development
CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true