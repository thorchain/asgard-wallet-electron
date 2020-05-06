import * as JsStore from 'jsstore';
import { TransactionTable, AssetTable, TokenTable, AccountTable } from './tables'

const workerPath = 'node_modules/jsstore/dist/jsstore.worker.js';
export const idbCon = new JsStore.Connection(new Worker(workerPath));
export const dbname = 'wallet_store';

const getDatabase = () => {
    const dataBase = {
        name: dbname,
        tables: [TransactionTable, AssetTable, TokenTable, AccountTable]
    };
    return dataBase;
};

export const initJsStore = async () => {
    try {
        const dataBase = getDatabase()
        console.log('initializing database')
        console.log(dataBase)
        const res = await idbCon.initDb(dataBase);
        console.log('did we create the db?')
        console.log(res)
    }
    catch (ex) {
        console.error(ex);
    }
};
