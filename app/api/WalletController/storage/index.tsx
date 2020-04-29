// const JsStore = require('jsstore')
// import JsStore from 'jsstore'
// import * as JsStore from 'jsstore';

// const JsStore = require('jsstore')
// import * as JsStore from 'jsstore';
// import { DATA_TYPE } from 'jsstore';


// var dbName ='JsStore_Demo';

// function getDbSchema() {
//   var tblProduct = {
//     name: 'Product',
//     columns: {
//         // Here "Id" is name of column 
//         id:{ primaryKey: true, autoIncrement: true },
//         itemName:  { notNull: true, dataType: DATA_TYPE.String },
//         price:  { notNull: true, dataType: DATA_TYPE.Number },
//         quantity : { notNull: true, dataType: DATA_TYPE.Number }
//     }
//   };
//   var db = {
//       name: dbName,
//       tables: [tblProduct]
//   }
//   return db;
// }

class Wallet {
  store:any
  constructor() {
  }
  init = async () => {
    console.log('initializing store...')
    // console.log('initializing the wallet store class')
    // this.store =  await new JsStore.Connection(new Worker('node_modules/jsstore/dist/jsstore.worker.js'));
    // var database = getDbSchema();
    // console.log('where is this')
    // const isDbCreated = await this.store.initDb(database);
    // if(isDbCreated===true){
    //   console.log("db created");
    //   // here you can prefill database with some data
    // }
    // else {
    //   console.log("db opened");
    // }
  }
  addItem = (item:any) => {
    console.log("adding item")
    console.log(item)
    // this.db.insert()
  }
}


export default Wallet
