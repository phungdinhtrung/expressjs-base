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

// const connect1 = new ConnectDB();
// const connect2 = new ConnectDB();
// console.log('is duplicate conn ?:=====', connect1 === connect2 ? 'false' : 'true');

module.exports = ConnectDB;