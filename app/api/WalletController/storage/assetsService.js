import { BaseService } from './baseService';

export class AssetService extends BaseService {
  constructor() {
      super();
      console.log('constructing assets service...')
      this.tableName = "Assets";
  }

  findAll() {
    console.log('attempting to find all assets')
      return this.connection.select({
          from: this.tableName,
      })
  }

  insert(txs) {
      return this.connection.insert({
          into: this.tableName,
          values: txs,
          return: true // since studentid is autoincrement field and we need id, 
          // so we are making return true which will return the whole data inserted.
      })
  }

  findOne(id) {
      return this.connection.select({
          from: this.tableName,
          where: {
              id: id
          }
      })
  }

  removeOne(id) {
      return this.connection.remove({
          from: this.tableName,
          where: {
              id: id
          }
      })
  }
  removeAll() {
      return this.connection.remove({
          from: this.tableName
      })
  }

  updateOne(id, updateData) {
      return this.connection.update({ in: this.tableName,
          set: updateData,
          where: {
              id: id
          }
      })
  }

}