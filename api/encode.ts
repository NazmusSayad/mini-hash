import { wrapper } from './utils/core'
import crypt from './utils/crypt'
import checkBody from './utils/check-body'

export default wrapper((req, res) => {
  checkBody(req.body)
  res.success(crypt.encode(req.body.data, req.body.salt))
})
