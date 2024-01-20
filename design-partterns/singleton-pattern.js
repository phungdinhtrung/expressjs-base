// descriptiom: Singleton pattern is a class that has only one instance.

class ConnectDB {
    constructor() {
        if (ConnectDB.instance == null) {
            this.connection = "Connected to database";
            ConnectDB.instance = this;
        }
        return ConnectDB.instance;
    }

    getConnection() {
        console.log(':=====', this.connection);
        return this.connection;
    }
}

module.exports = ConnectDB;