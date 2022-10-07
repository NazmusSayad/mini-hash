import { wrapper, ReqError } from './utils/core'

export default wrapper(() => {
  throw new ReqError(`Oops, looks like you're lost in space!`)
})
