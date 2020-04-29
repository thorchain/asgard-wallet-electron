import * as JsStore from 'jsstore';
import { IDataBase, DATA_TYPE, ITable } from 'jsstore';

// const getWorkerPath = () => {
//     if (process.env.NODE_ENV === 'development') {
//         return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js");
//     }
//     else {
//         return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js");
//     }
// };

// This will ensure that we are using only one instance. 
// Otherwise due to multiple instance multiple worker will be created.
// const workerPath = getWorkerPath();
const workerPath = 'node_modules/jsstore/dist/jsstore.worker.js';
export const idbCon = new JsStore.Instance(new Worker(workerPath));
export const dbname = 'wallet_store';

// import { Trasnactions, Tokens } from '../api/db/definitions

const getDatabase = () => {
    const tblTransaction = {
        name: 'Transactions',
        columns: {
            id: {
                primaryKey: true,
                autoIncrement: true
            },
            type: {
                dataType: DATA_TYPE.String
            },
            to: {
                dataType: DATA_TYPE.String,
            },
            from: {
                dataType: DATA_TYPE.String
            },
            txid: {
                dataType: DATA_TYPE.String,
            },
            amount: {
              dataType: DATA_TYPE.Number
            },
            assest: {
                dataType: DATA_TYPE.String,
            },
        }
    };
    const dataBase = {
        name: dbname,
        tables: [tblTransaction]
    };
    return dataBase;
};

export const initJsStore = () => {
    try {
        const dataBase = getDatabase();
        idbCon.initDb(dataBase);
        console.log('waiting to init..')
    }
    catch (ex) {
        console.error(ex);
    }
};
