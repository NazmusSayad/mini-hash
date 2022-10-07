import { ReqError } from './core'

export default (body: {
  data: string
  salt?: number
  password?: string
  depth?: string | number
}): void => {
  if (!(body instanceof Object)) {
    throw new ReqError('Invalid body', 400)
  }
  if (typeof body.data !== 'string') {
    throw new ReqError('Data must be type of string', 400)
  }
  if (body.salt && typeof body.salt !== 'number') {
    throw new ReqError('Salt must be type of number', 400)
  }
  if (body.password && typeof body.password !== 'string') {
    throw new ReqError('Password must be type of string', 400)
  }
  if (
    body.depth &&
    !(typeof body.depth === 'string' || typeof body.depth === 'number')
  ) {
    throw new ReqError('Depth must be type of string or number', 400)
  }
}
