
module.exports = {
    host: process.env.CUSTOM_HOST,
    port: process.env.CUSTOM_PORT,
    mailFrom: "localhost",
    clientUrl: "https://example.com",
    remoting: {
        "rest": {
            "normalizeHttpPath": false,
            "xml": false
        },
        "json": {
            "strict": false,
            "limit": "100kb"
        },
        "urlencoded": {
            "extended": true,
            "limit": "100kb"
        },
        "cors": false,
        "handleErrors": true
    }
};