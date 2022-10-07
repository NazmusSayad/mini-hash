import checkBody from './utils/check-body'
import { wrapper } from './utils/core'
import crypt from './utils/crypt'

export default wrapper((req, res) => {
  checkBody(req.body)
  res.success(crypt.decode(req.body.data, req.body.salt))
})
