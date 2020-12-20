import React, { Component } from 'react'
import { connect } from 'dva'
import { Menu } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons'

const namespace = 'mypage'

@connect(({ mypage }) => ({
	model: mypage
}))

class Mypage extends Component {
  state = {
  	current: 'mail',
  }
  componentDidMount = () => {
  	console.debug('init success')
  }

  // 调用 model 处理函数
  callModel = (funcName, params) => {
  	const { dispatch } = this.props
  	dispatch({
  		type: `${namespace}/${funcName}`,
  		payload: params
  	})
  }
  // 修改单个model state 成员
  changeState = (name, newValue) => {
  	this.callModel('updateState', {
  		name: name, newValue: newValue
  	})
  }
  handleClick = e => {
  	console.log('click ', e)
  	this.setState({ current: e.key })
  };
  render () {
  	const { SubMenu } = Menu
  	return (
  		<Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
  			<Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
  			</Menu.Item>
  			<Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
  			</Menu.Item>
  			<SubMenu
  				key="SubMenu"
  				icon={<SettingOutlined />}
  				title="Navigation Three - Submenu"
  			>
  				<Menu.ItemGroup title="Item 1">
  					<Menu.Item key="setting:1">Option 1</Menu.Item>
  					<Menu.Item key="setting:2">Option 2</Menu.Item>
  				</Menu.ItemGroup>
  				<Menu.ItemGroup title="Item 2">
  					<Menu.Item key="setting:3">Option 3</Menu.Item>
  					<Menu.Item key="setting:4">Option 4</Menu.Item>
  				</Menu.ItemGroup>
  			</SubMenu>
  			<Menu.Item key="alipay">
  				<a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
  				</a>
  			</Menu.Item>
  		</Menu>
  	)
  }
}

export default Mypage