const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Campus Connect API',
      version: '1.0.0',
      description: 'API documentation for the Campus Connect internship project',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 5000}`, // Dynamic port
      },
    ],
    // ADD THIS for JWT support in the UI
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  // FIX: Added .route.js to match your file naming convention
  apis: ['./src/routes/*.route.js', './routes/*.route.js'], 
};

const specs = swaggerJsdoc(options);
module.exports = specs;