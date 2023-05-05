import {Component} from 'react';
import {Menu} from 'antd';
import './index.scss'
import {NavLink} from "react-router-dom";

class Navbar extends Component {
    render() {

        const menuItems = [
            {
                key: 'home',
                label: (<NavLink to={'/'}>{'Home'}</NavLink>),
            },
            {
                key: 'problems',
                label: (<NavLink to={'/problems'}>{'Problems'}</NavLink>),
            },
            {
                key: 'profile',
                label: (<NavLink to={'/profile'}>{'Profile'}</NavLink>),
            },
        ];


        return (
            <div>
                <Menu mode="horizontal" activeKey={'home'} style={{marginBottom: "20px"}} items={menuItems}/>
            </div>
        );
    }
}

export default Navbar;