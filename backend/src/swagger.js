const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Campus Connect API",
      version: "1.0.0",
      description: "API documentation for Campus Connect backend",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "jwt",
        },
      },
    },
    security: [
      {
        cookieAuth: [],
      },
    ],
  },
 apis: ["./src/routes/*.js"], // path to your routes
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;