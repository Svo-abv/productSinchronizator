import jwtDecode from "jwt-decode";
import { $pubHost, $authHost } from ".";

export const loginApi = async (name: string, password: string) => {

    const { data } = await $pubHost.post('api/user/login', { name, password });
    localStorage.setItem("jwtHash", data.jwtHash);
    return jwtDecode(data.jwtHash);
}
export const checkApi = async (name: string, password: string) => {

    const { data } = await $authHost.post('api/user/auth', { name, password });
    localStorage.setItem("jwtHash", data.jwtHash);
    return jwtDecode(data.jwtHash);
}