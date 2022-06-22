import convict from 'convict'
import * as path from 'path'

// eslint-disable-next-line @typescript-eslint/no-var-requires
convict.addFormat(require('convict-format-with-validator').ipaddress)

const vars = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
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
