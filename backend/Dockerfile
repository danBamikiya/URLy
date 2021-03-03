# build environment
FROM node:15.10.0 AS server-dev
WORKDIR /app
COPY [".", "./"]
RUN npm i
EXPOSE 3000
CMD ["npm", "run", "dev"]

# production environment
# FROM node AS server-build
# WORKDIR /app
# COPY [".", "./"]
# RUN cd app && npm ci
# EXPOSE 3000
# CMD ["npm", "start"]