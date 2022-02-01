import { $pubHost, $authHost } from ".";

export const getAllBrandsApi = async (userId?: number) => {

    const { data } = await $authHost.get('api/brand');
    return data.brands;
}
export const getBrandsByUserApi = async (userId: number) => {

    const { data } = await $authHost.post('api/brand/user', { userId });
    return data;
}