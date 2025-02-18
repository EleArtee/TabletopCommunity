module.exports = {
    HOST: "192.168.0.27",
    USER: "root",
    PASSWORD: "thorpedo65",
    DB: "db_tabletopcommunity",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
}