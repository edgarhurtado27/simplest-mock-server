const sessions = {
  status: 200,
  body: [
    {
      "sessionName": "IDI w/ Terry G.",
      "startDate": "11:00am",
      "endDate": "12:00pm",
      "sessionLink": "someURL",
      "status": "In Progress"
    },
    {
      "sessionName": "IDI w/ Edgar H.",
      "startDate": "3:00pm",
      "endDate": "4:00pm",
      "sessionLink": "someURL",
      "status": "In Progress"
    }
  ]     
}

const project = {
  status: 200,
  body: {
    "startsAt": "2021-10-11T05:00:00Z",
    "state": "ACTIVE",
    "subscriptionType": "SUBSCRIPTION",
    "templates": [],
    "type": "FULL_SERVICE",
    "usabilityStudy": false,
    "webcams": true
  }
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
  internalError,
  project
}
