import {useState} from 'react';
import {Button, Form, Input} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import Title from "antd/lib/typography/Title";
import styles from './index.module.scss'
import {login} from "../../api/user.ts";
import {LocalStorageKeys} from "../../common/localStorageKeys.ts";


const saveAuthToken = (authToken: string) => {
    const key = LocalStorageKeys.AUTH_TOKEN
    localStorage.setItem(key, authToken)
}

export default function Login() {
    const [formData, setFormData] = useState({handler: '', password: ''});

    const handleSubmit = () => {
        login({
            handle: formData.handler,
            password: formData.password
        }).then(resp => {
            const authToken = resp.data
            saveAuthToken(authToken)
        })
    };

    return (
        <div style={{width: 300, padding: 40, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', background: '#fff'}}>
            <Title level={2} className={styles.title}>Login</Title>
            <Form onFinish={handleSubmit}>
                <Form.Item rules={[{required: true, message: 'Please input handle'}]}>
                    <Input prefix={<UserOutlined/>} placeholder="handle"
                           onChange={e => setFormData({...formData, handler: e.target.value})}/>
                </Form.Item>
                <Form.Item rules={[{required: true, message: 'Please input password'}]}>
                    <Input.Password prefix={<LockOutlined/>} placeholder="password"
                                    onChange={e => setFormData({...formData, password: e.target.value})}/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
