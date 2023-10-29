import {Button, Result} from "antd";

export default function Result500(){
    return (
        <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
            extra={<Button type="primary" href={'/'}>Back Home</Button>}
        />
    )
}