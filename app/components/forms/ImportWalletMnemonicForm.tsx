import React, { useState, useEffect, useRef, useCallback } from 'react'
// import { FlowRouter } from 'meteor/kadira:flow-router'
// import { Session } from 'meteor/session'
import { WALLET } from '../../index'
import { ImportMnemonicFormSchema } from '../forms/schemas/importFormSchemas'
// import { Button, Input}

import { Form, Input, Button } from 'antd'
import { useHistory } from 'react-router'

// import { AutoForm, AutoField } from 'uniforms-antd'
// import { SubmitFieldBranded as SubmitField, ErrorField } from '/imports/uniforms-antd-custom/'

const ImportMnemonicForm: React.FC<{activetab?:boolean}> = ({activetab}): JSX.Element => {
  const [loadingMsg, setLoadingMsg] = useState<string>('')
  let history = useHistory()
  let formRef:any = useRef(null) // TODO: add autoform type
  useEffect(() => {
    // if (!activetab) { formRef.resetFields() }
  },[activetab])

  const importMnemonicWallet = (mnemonic: string, password: string) => {
    // const network = Session.get('network')
    const network = 'testnet'
    WALLET.generateNewWallet(password, mnemonic, null, network).then(async () => {
      await WALLET.unlock(password)
      // FlowRouter.go("home")
      history.push('/user-assets')
    }).catch(e => { throw Error(e)}) // TODO: Display some error
  }

  // type values = {password:string;repeatPassword:string;mnemonic:string}
  const handleImportFormSubmit = useCallback((vals:any) => {
    setLoadingMsg("Generating wallet")
    // Delay to allow for UI render DOM update before CPU takes over keystore processing
    console.log('handling form submit...')
    console.log(vals)
    setTimeout(() => {
      try {
        console.log('trying...')
        importMnemonicWallet(vals.mnemonic, vals.password)
      } catch (err) {
        setLoadingMsg('')
        console.log(err)
      }
    }, 200);
  },[])
  return (
    // <AutoForm
    //   ref={(ref:any) => (formRef = ref)}
    //   model={ImportMnemonicFormSchema.clean({})}
    //   schema={ImportMnemonicFormBridge}
    //   onSubmit={handleImportFormSubmit}
    // >
    //   <AutoField name="mnemonic" size="large"/>
    //   <ErrorField name="mnemonic"/>
    //   <AutoField name="password" type="password" size="large"/>
    //   <ErrorField name="password"/>
    //   <AutoField name="repeatPassword" type="password" size="large"/>
    //   <ErrorField name="repeatPassword"/>
    //   <SubmitField value={loadingMsg || 'Import'} size="large" loading={loadingMsg}/>
    // </AutoForm>
    <Form onFinish={handleImportFormSubmit}>
      <Form.Item name="mnemonic" label="Mnemonic (Phrase)">
        <Input size="large" type="text"/>
      </Form.Item>
      <Form.Item name="password" label="New Password">
        <Input size="large" type="password"/>
      </Form.Item>
      <Form.Item name="repeatPassword" label="Repeat Password">
        <Input size="large" type="password"/>
      </Form.Item>
      <Form.Item>
        <Button size="large" type="primary" htmlType="submit" block>
          {loadingMsg || 'Import'}
        </Button>
      </Form.Item>
    </Form>
  )
}
export default ImportMnemonicForm
