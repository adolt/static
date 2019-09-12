const nullObj = null

setTimeout(() => {
  if (!nullObj) {
    console.log(nullObj.willThrowError)
  }
}, 5000)
