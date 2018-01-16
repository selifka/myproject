FROM ubuntu:xenial
WORKDIR /app
ADD . /app
RUN apt-get update && \
    apt-get install -y \
    apt-utils \
    build-essential \
    python3 \
    python3-dev \
    python3-setuptools \
    python3-pip \
    pip3 install --upgrade pip \
    pip3 install Flask==0.12.2 \
    pip3 install prometheus_client

EXPOSE 8080
CMD ["python", "index.py"]

