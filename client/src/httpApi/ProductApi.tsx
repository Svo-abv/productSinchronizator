import { $pubHost, $authHost } from ".";

export const getAllProductsApi = async () => {

    const { data } = await $authHost.get('api/product');
    return data.products;
}

export const getAllProductsByBrendApi = async (userId: number, brandId?: number, catalogeId?: number) => {

    const { data } = await $authHost.post(`api/product/user`, { userId, brandId, catalogeId });
    return data;
}

export const setDeletedProductApi = async (uuid_1c: string, deleted: boolean) => {

    const { data } = await $authHost.post(`api/product/delete`, { uuid_1c, deleted });
    return data;
}