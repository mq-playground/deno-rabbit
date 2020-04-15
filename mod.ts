import { createRabbitClient } from './lib/client.ts'
import { AmqpConnection, AmqpConnectOptions } from 'https://deno.land/x/amqp/mod.ts'

class DenoRabbit {
  private options: AmqpConnectOptions
  private client: AmqpConnection
  constructor (options: AmqpConnectOptions) {
    this.options = options;
  }

  public async setup() {
    this.client = await createRabbitClient(this.options)
  }
}
