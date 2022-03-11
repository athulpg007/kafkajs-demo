const Kafka = require("kafkajs").Kafka
const num_msg= parseInt(process.argv[2]);
run();

async function run()
{
	try
	{
		const kafka = new Kafka({
			"clientId": "myApp",
			"brokers": ["athul-Lenovo-YOGA-720-13IKB:9092"]

		})

		const producer = kafka.producer();
		console.log("Connecting...");
		await producer.connect();
		console.log("Connected!");

		var partition;

		for (let i = 0; i < num_msg; i++) 
		{
  			msg = makeid(10);

  			if (msg[0] < "G")
  			{
  				partition = 0;
  			}

  			else if (msg[0] < "N")
  			{
  				partition = 1;
  			}

  			else
  			{
  				partition = 2;
  			}



			const result = await producer.send({
				"topic" : "Orders",
				"messages": 
					[
						{
							"value": msg,
							"partition": partition
						}
					]
		});
			console.log(`Sent successfully ${JSON.stringify(result)}`);
		} 

		
		
		
		await producer.disconnect();
	}
	catch (ex)
	{
		console.error(`Something bad happens ${ex}`)

	}
	finally{
		process.exit(0);
	}
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}