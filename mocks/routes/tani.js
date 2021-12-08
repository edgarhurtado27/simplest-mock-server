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
        response: {
          status: 403,
          body: {
            message: "Forbbiden",
          },
        },
      },
    ],
  },
];
