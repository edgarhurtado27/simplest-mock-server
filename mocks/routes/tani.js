const { sessions, forbbiden, internalError } = require("../data/tani-sessions");


const tanistuff = [
  {
    id: 1,
    response: "Custom response from TANI mock service",
  },
];

module.exports = [
  {
    id: "get-tani",
    url: "/api/tani",
    method: "GET",
    variants: [
      {
        id: "success",
        response: {
          status: 200,
          body: tanistuff,
        },
      },
      {
        id: "error",
        response: forbbiden
      },
    ],
  },
  {
    id: "get-tani-sessions",
    url: "/vi/projects/:projectId/sessions",
    method: "GET",
    variants: [
      {
        id: "success",
        response: sessions
      },
      {
        id: "error-forbbiden",
        response: forbbiden
      },
      {
        id: "error-internal",
        response: internalError 
      },
    ],
  },
];
