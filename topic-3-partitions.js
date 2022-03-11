const Kafka = require("kafkajs").Kafka
run();

async function run()
{
	try
	{
		const kafka = new Kafka({
			"clientId": "myApp",
			"brokers": ["athul-Lenovo-YOGA-720-13IKB:9092"]

		})

		const admin = kafka.admin();
		console.log("Connecting...");
		await admin.connect();
		console.log("Connected!");

		await admin.createTopics({
			"topics": [{
				"topic": "Orders",
				"numPartitions": 3
			}]
		})
		console.log("Created successfully!");
		await admin.disconnect();
	}
	catch (ex)
	{
		console.error(`Something bad happens ${ex}`)

	}
	finally{
		process.exit(0);
	}
}