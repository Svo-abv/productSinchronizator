import { $pubHost, $authHost } from ".";

export const getAllProductsApi = async (userId?: number) => {

    const { data } = await $pubHost.get('api/product');
    return data.products;
}