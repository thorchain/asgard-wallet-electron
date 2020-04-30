import { DATA_TYPE } from 'jsstore';

export const TransactionTable = {
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
export const AssetTable = {
    name: 'Assets',
    columns: {
        id: {
            primaryKey: true,
            autoIncrement: true
        },
        free: {
            dataType: DATA_TYPE.String
        },
        frozen: {
            dataType: DATA_TYPE.String,
        },
        locked: {
            dataType: DATA_TYPE.String
        },
        symbol: {
            dataType: DATA_TYPE.String,
        }
    }
};

    // "free": "66.00000000",
    // "frozen": "15.00000000",
    // "locked": "0.00000000",
    // "symbol": "RUNE-A1F"