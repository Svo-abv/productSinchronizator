import jwtDecode from "jwt-decode";
import { $pubHost, $authHost } from ".";
import { IUser } from "../store/UserStore";

export const loginApi = async (name: string, password: string) => {

    const { data } = await $pubHost.post('api/user/login', { name, password });
    localStorage.setItem("jwtHash", data.jwtHash);
    return jwtDecode(data.jwtHash);
}
export const checkApi = async () => {

    const { data } = await $authHost.get('api/user/auth', { timeout: 5000 });
    //localStorage.setItem("jwtHash", data);
    //jwtDecode(data);
    return data;
}