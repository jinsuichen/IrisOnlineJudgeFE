import {useEffect} from 'react';
import axios from 'axios';
import {message} from 'antd';
import api, {IrisMessage} from "./config.ts";

const APIResponseListener = () => {
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        const interceptor = api.interceptors.response.use(response => {
            const irisMessage = response.data as IrisMessage<any>
            console.log(irisMessage)
            if (!irisMessage.success) {
                messageApi.open({
                    type: "error",
                    content: irisMessage.message
                })
            }
            return response;
        }, error => {
            switch (error.response.status) {
                case 403:
                    window.location.href = '/403'
                    break
                case 404:
                    window.location.href = '/404'
                    break
                case 500:
                    window.location.href = '/500'
                    break
            }
            return Promise.reject(error);
        });

        return () => {
            axios.interceptors.response.eject(interceptor);
        };
    }, []);


    return (
        <>
            {contextHolder}
        </>
    );
}

export default APIResponseListener;
