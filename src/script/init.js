window.catchError = fn =>
  async function () {
    try {
      const returnValue = fn(...arguments)
      if (returnValue instanceof Promise) await returnValue
    } catch (err) {
      alert(err.response?.data?.message || err.message)
    }
  }
