import {
  BaseService
} from "./baseService";

export class TransactionService extends BaseService {

  constructor() {
      super();
      this.tableName = "Transactions";
  }

  getTxs() {
      return this.connection.select({
          from: this.tableName,
      })
  }

  addTxs(txs) {
      return this.connection.insert({
          into: this.tableName,
          values: txs,
          return: true // since studentid is autoincrement field and we need id, 
          // so we are making return true which will return the whole data inserted.
      })
  }

  getTxById(id) {
      return this.connection.select({
          from: this.tableName,
          where: {
              id: id
          }
      })
  }

  removeTxById(id) {
      return this.connection.remove({
          from: this.tableName,
          where: {
              id: id
          }
      })
  }

  updateTxById(id, updateData) {
      return this.connection.update({ in: this.tableName,
          set: updateData,
          where: {
              id: id
          }
      })
  }
}