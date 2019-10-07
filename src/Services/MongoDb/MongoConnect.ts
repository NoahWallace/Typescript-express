import {MongoClient, Db, MongoError} from 'mongodb';

export class MongoConnect {
    public db: Db | undefined;
    public client: MongoClient | undefined;
    static options = {
        autoReconnect: true,
        keepAlive: true,
        authSource: 'admin',
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    // TODO: isolate username and password -> devops
    init = async () => {
        try {
            const client = await MongoClient
                .connect('mongodb+srv://db_dev_maui_user:2MkEkxnI0c8nB9RF@dev-cluster0-27oms.mongodb.net/test?retryWrites=true&w=majority',
                    MongoConnect.options,
                )
            this.client = client;
            this.db = client.db('dev_maui')
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}