# specify the image name 
FROM node:18-alpine

# sets the working directory of the container
WORKDIR /app

# copy package.json and all dependencies to the the specified new container directory
COPY package.json /app

# executes the node command to start the application
RUN npm install

# copies the entire application to the new container directory
COPY . /app

# specifies the command to run when the container starts
CMD [ "node","app.js" ]