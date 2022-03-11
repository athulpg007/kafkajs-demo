# Kafka Introduction Demo 

See video link here: [https://www.youtube.com/watch?v=R873BlNVUB4](https://www.youtube.com/watch?v=R873BlNVUB4). Associated GitHub repo: [https://github.com/hnasr/javascript_playground/tree/master/kafka](https://github.com/hnasr/javascript_playground/tree/master/kafka)

In addition to what is shown in the video, I use a docker container for node so you do not need node installed on your machine.

## Spin up Zookeeper container

```docker run --name zookeeper -p 2181:2181 zookeeper```

## Spin up Kafka container

```docker run --name kafka -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=athul-Lenovo-YOGA-720-13IKB:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://athul-Lenovo-YOGA-720-13IKB:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka```

## Spin up node container

```docker run --rm -it --name node-docker -d -e "PORT=3000" -p 8080:3000 -v ~/Documents/Codes/kafkajs-demo/:/src/ node:13-alpine```
```docker exec -it node-docker /bin/sh```
```cd src/```

## Create a topic: Users
```node topic.js```

## Create a producer
```node producer.js ATHUL```
```node producer.js GIRIJA```
```node producer.js TAYLOR```
```node producer.js YOUYUNG```
```node producer.js ZARA```

## Create a consumer
```node consumer.js```




