import {Menu, MenuProps} from 'antd';
import styles from './index.module.scss'
import {NavLink} from "react-router-dom";
import {useState} from "react";

export default function Navbar() {

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

    const [current, setCurrent] = useState('home');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    return (
        <div>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={menuItems}
                  style={{marginBottom: "20px"}} className={styles.menu}/>
        </div>
    )
}