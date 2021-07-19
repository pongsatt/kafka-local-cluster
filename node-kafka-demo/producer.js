const kafka = require('./client')

async function main() {
    const producer = kafka.producer()

    await producer.connect()

    for (let i = 0; i < 10; i++) {
        await producer.send({
            topic: 'test',
            messages: [
                { value: `message ${i}` },
            ],
        })

        console.log(`producing message ${i}`)
    }

    await producer.disconnect()

    console.log('done.')
}

main()