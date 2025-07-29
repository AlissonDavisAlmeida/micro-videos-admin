FROM node:22-alpine

USER node

WORKDIR /home/node/app



CMD ["tail", "-f", "/dev/null"]

