const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Marvel Characters API",
            description: "This is the documentation for Marvel Characters API. Every response of the API has been simplified based on the requirements.",
            contact: {
                name: process.env.PORT
            },
            servers: [`${process.env.HOST}:${process.env.PORT}`]
        }
    },
    // ['.routes/*.js']
    // apis: ["src/app.ts"]
    apis: ["src/routes/*.ts"]
}

export default swaggerOptions;