const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9091', 'localhost:9092', 'localhost:9093']
})

module.exports = kafka

