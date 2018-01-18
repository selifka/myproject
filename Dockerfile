FROM ubuntu:xenial
WORKDIR /src
COPY . /src

RUN apt-get update && apt-get install -y \
    apt-utils \
    build-essential \
    python3 \
    python3-pip \
    python3-dev \

RUN pip3 install Flask==0.12 \
RUN pip3 install prometheus_client

# Please note, this EXPOSE command does not publish port 8080
# This has been added so anyone trying to run the container 
# will know what port to map
EXPOSE 8080
