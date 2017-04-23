
module.exports = {
    db1: {
        url: process.env.DATABASE_URL
    },
    defaultMail: {
        name: "defaultMail",
        connector: "mail",
        transports: [{
            "type": "SMTP",
            "host": process.env.SMTP_SERVER,
            "secureConnection": true,
            "port": process.env.SMTP_PORT,
            "auth": {
                "user": process.env.SMTP_USER,
                "pass": process.env.SMTP_PASSWORD
            }
        }]
    }
};