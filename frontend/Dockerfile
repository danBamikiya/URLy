# build environment
FROM node:15.10.0  AS ui-dev
WORKDIR /app
COPY [".", "./"]
RUN npm i @angular/cli && npm i
EXPOSE 4200
CMD ["npm", "start"]

# production environment
# FROM node  AS ui-build
# WORKDIR /app
# COPY ["package.json", "package-lock.json", "./"]
# RUN cd app && npm ci @angular/cli && npm ci
# COPY . .
# EXPOSE 4200
# CMD ["npm", "build"]