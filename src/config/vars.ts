import convict from 'convict'
import * as path from 'path'

// eslint-disable-next-line @typescript-eslint/no-var-requires
convict.addFormat(require('convict-format-with-validator').ipaddress)

const vars = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'local',
    env: 'NODE_ENV',
  },

  queue: {
    doc: 'Queue to consume messages',
    format: String,
    default: 'test',
    env: 'queue',
  },

  subject: {
    doc: 'Notification Subject',
    format: String,
    default: '',
    env: 'subject',
  },

  public_key: {
    doc: 'Public Key Web Push',
    format: String,
    default: '',
    env: 'public_key',
  },

  private_key: {
    doc: 'Private Key Web Push',
    format: String,
    default: '',
    env: 'private_key',
  },

  rabbit: {

    url: {

      format: String,
      default: 'amqp://localhost',
      env: 'RABBIT_URL',

    }

  }
})

const env = vars.get('env')

if (env == 'local') {
  vars.loadFile(path.join(__dirname, '.env.' + env + '.json'))
}

// Perform validation
vars.validate({ allowed: 'strict' })
export { vars }
