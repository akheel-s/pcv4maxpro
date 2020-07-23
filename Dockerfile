FROM node:12.18.2
# Create and define the node_modules's cache directory.
RUN mkdir /usr/src/cache
WORKDIR /usr/src/cache

# Install the application's dependencies into the node_modules's cache directory.
RUN yarn global add @vue/cli
COPY package*.json .
RUN yarn install

# Create and define the application's working directory.
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . .
EXPOSE 8080

CMD [ "yarn", "run", "serve" ]