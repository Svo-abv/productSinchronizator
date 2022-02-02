import { $pubHost, $authHost } from ".";

export const getAllCatalogsApi = async (userId?: number) => {

    const { data } = await $authHost.get('api/cataloge');
    return data.cataloges;
}
export const getCatalogeByUserApi = async (userId: number, brandId?: number) => {

    const { data } = await $authHost.post('api/cataloge/user', { userId, brandId });
    return data;
}