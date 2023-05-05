import {Component} from 'react';
import {Menu} from 'antd';

class Navbar extends Component {
    render() {
        return (
            <div>
                <Menu mode="horizontal" activeKey={'home'} style={{marginBottom: "20px"}}>
                    <Menu.Item key="home" style={{marginLeft: "20%"}}>
                        <a href="/">Home</a>
                    </Menu.Item>
                    <Menu.Item key="problems">
                        <a href="/problems">Problems</a>
                    </Menu.Item>
                    <Menu.Item key="profile" style={{marginLeft: 'auto', marginRight: "20%"}}>
                        <a href="/profile">Profile</a>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Navbar;