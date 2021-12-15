const sessions = {
  status: 200,
  body: [
    {
        "date": "2021-12-14T11:36:07.962230Z",
        "sessionName": "hmHyspcA",
        "sessionLink": null
    },
    {
        "date": "2021-12-14T12:06:07.962230Z",
        "sessionName": "GSjeBRnm",
        "sessionLink": null
    }
  ]     
}

const forbbiden = {
  status : 403,
  body : "Forbbiden"
}

const internalError = {
  status : 500,
  body : "Internal Server Error"
}


module.exports = {
  sessions,
  forbbiden,
  internalError
}
