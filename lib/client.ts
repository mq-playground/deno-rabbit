import { connect, AmqpConnection, AmqpConnectOptions } from 'https://deno.land/x/amqp/mod.ts'

const createRabbitClient: AmqpConnection = async (options: AmqpConnectOptions) => {
  const connection: AmqpConnection = await connect(options)
  console.info('[galen-RabbitMQ.connect]: Connect to RabbitMQ success!')
  connection.on('error', (err): void => {
    console.error('[galen-RabbitMQ.error]: ', err)
  })
  connection.on('close', (): void => {
    console.error('[galen-RabbitMQ.close]: ', 'RabbitQM connection closed!')
  })
}

export default createRabbitClient
