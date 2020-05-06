import React, { useMemo } from 'react'
import { AccountService } from '../../../api/WalletController/storage/accountsService'
const UserAccount = new AccountService()
// import { UserTransactionTypes } from '/imports/api/collections/userTransactionsCollection'
import { toCrypto } from '../../helpers/numbersHelpers'
import { shortSymbol } from '../../helpers/tokenHelpers'
import { List, Typography } from 'antd'
const { Text } = Typography
import Block from '../Block'

type Props = {transactions: any[]}
const TransactionsList: React.FC<Props> = ({transactions}): JSX.Element => {
  return (
    <List dataSource={transactions}
      renderItem={transaction => (
       <List.Item key={transaction._id} >
          <ItemRow transaction={transaction} key={transaction._id} />
       </List.Item>
      )}>
    </List>
  )
}
export default TransactionsList

// type ItemProps = { transaction: UserTransactionTypes }
type ItemProps = { transaction: any }
const ItemRow: React.FC<ItemProps> = (props): JSX.Element => {
  const tx = props.transaction
  type PartyTypes = {msg: string, label: string, address: string, color: string, op: string}
  const party: PartyTypes = useMemo(() => {
    const from = tx.fromAddr
    const to = tx.toAddr
    const usr:any = UserAccount.findOne()
    switch (tx.txType) {
      case 'TRANSFER':
        if (from === usr.address) {
          return {msg:"send", label: "to", address:to, color:"error", op:"-"}
        } else {
          return {msg:"receive", label: "from", address:from, color:"success", op:"+"}
        }
      case "outboundTransferInfo":
        if (from === usr.address) {
          return {msg:"pending", label: "to", address:to, color:"secondary", op:"-"}
        } else {
          return {msg:"pending", label: "from", address:from, color:"secondary", op:"+"}
        }
      case 'FREEZE_TOKEN':
        return {msg:"freeze", label: "from", address:from, color:"info", op:"-"}
      case 'UN_FREEZE_TOKEN':
        return {msg:"unfreeze", label: "to", address:from, color:"warning", op:"+"}
      default:
        return {msg:'',label:'',address:'',color:'',op:''}
    }
  },[])

  return (
    <Block layout center>

      <Block flex style={{maxWidth:'84px'}}>
        <Text className={"text-color-" + party.color}>{party.msg}</Text>
      </Block>

      <Block layout horizontal center style={{flexWrap:'nowrap',overflow:'hidden',whiteSpace:'wowrap'}}>
        <Text ellipsis>
          <strong style={{textTransform:'capitalize',marginRight:12}}>{party.label}:</strong><span className="small text-monospace">{party.address}</span>
        </Text>
        <Block layout vertical end style={{width:62}}>
          <div className={"text-color-" + party.color}>{party.op}{toCrypto(tx.value)}</div>
          <div className={"text-color-secondary"}>[{shortSymbol(tx.txAsset)}]</div>
        </Block>
      </Block>

    </Block>
  )
}

