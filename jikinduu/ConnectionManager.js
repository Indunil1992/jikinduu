module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["indunil11"] = {
        host: process.env.EndPoint_rdsIndunil11,
        port: process.env.Port_rdsIndunil11,
        user: process.env.User_rdsIndunil11,
        password: process.env.Password_rdsIndunil11,
        database: "indunil11"
    };
};