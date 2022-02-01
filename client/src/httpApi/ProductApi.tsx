import { $pubHost, $authHost } from ".";

export const getAllProductsApi = async () => {

    const { data } = await $authHost.get('api/product');
    return data.products;
}

export const getAllProductsByBrendApi = async (userId: number, brandId?: number, catalogeId?: number) => {

    const { data } = await $authHost.post(`api/product/user`, { userId, brandId, catalogeId });
    return data;
}