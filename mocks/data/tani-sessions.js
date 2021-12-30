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
    "id":12,
    "name":"VI Integration",
    "type": "InterVu",
    "description":"Project Description",
    "startsAt":"2022-02-01T11:36:07.962230Z",
    "endsAt":"2022-02-02T11:36:07.962230Z",
    "numberOfSessions":17,
    "salesforceId":"#0000001",
    "webcams":true,
    "state":"ACTIVE",
    "usabilityStudy": false
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
