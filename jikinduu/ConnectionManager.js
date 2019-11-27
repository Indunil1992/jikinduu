module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["indu1"] = {
        host: process.env.EndPoint_rdsIndu1,
        port: process.env.Port_rdsIndu1,
        user: process.env.User_rdsIndu1,
        password: process.env.Password_rdsIndu1,
        database: "indu1"
    };
};