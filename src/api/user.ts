import api, {IrisMessage} from "./config/config.ts";

interface RegisterRequest {
    nickName: string,
    handle: string,
    password: string
}

interface LoginRequest {
    handle: string,
    password: string
}

export const register = async (data: RegisterRequest): Promise<IrisMessage<string>> => {
    return api.post('/v1/auth/user/register', data);
}

export const login = async (data: LoginRequest): Promise<IrisMessage<string>> => {
    return api.post('/v1/auth/user/login', data);
}

export const isLogin= async (): Promise<IrisMessage<boolean>> => {
    return api.get('/v1/auth/user/login');
}