export const wrapper = fn => async (req, res) => {
  res.success = function (data) {
    this.json({ status: 'success', data })
  }

  try {
    const returnValue = fn(req, res)
    if (returnValue instanceof Promise) await returnValue
  } catch (err) {
    if (err.isOperational) {
      res.status(err.statusCode).json({
        status: err.statusCode < 500 ? 'fail' : 'error',
        message: err.message,
      })
    } else {
      console.log(err)
      res.status(500).json({
        status: 'error',
        message: 'Boom!',
      })
    }
  }
}
export const ReqError = class ReqError extends Error {
  statusCode
  name = 'ReqError'
  isOperational = true

  constructor(message, statusCode = 404) {
    super(message)
    this.statusCode = statusCode
  }
}
