import checkBody from './utils/check-body'
import { wrapper, ReqError } from './utils/core'
import crypt from './utils/crypt'

export default wrapper((req, res) => {
  checkBody(req.body)

  if (process.env.PASSWORD !== req.body.password) {
    throw new ReqError(`You aren't authorized`, 401)
  }

  res.success(crypt.attack(req.body.data, req.body.depth))
})
