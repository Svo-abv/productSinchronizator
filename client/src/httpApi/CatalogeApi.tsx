import { $pubHost, $authHost } from ".";

export const getAllCatalogsApi = async (userId?: number) => {

    const { data } = await $pubHost.get('api/cataloge');
    return data.cataloges;
}