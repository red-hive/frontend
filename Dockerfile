FROM ubuntu:24.04

WORKDIR /opt

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get -y update && \
    apt-get -y install python3 python3-pip git

RUN apt-get -y install nodejs npm

WORKDIR /opt/stocknear-frontend

COPY package.json package-lock.json /opt/stocknear-frontend/
RUN npm install

# add local repo stuff so we can test any local modifications
COPY ./src /opt/stocknear-frontend/src
COPY ./static /opt/stocknear-frontend/static
COPY ./tests /opt/stocknear-frontend/tests
COPY . /opt/stocknear-frontend/

ENTRYPOINT ["npm", "run", "dev", "--", "--host"]
