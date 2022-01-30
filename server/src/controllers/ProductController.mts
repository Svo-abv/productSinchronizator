import ApiError from "../error/ApiError.mjs";
import { Products } from "../models/schema.mjs";

class ProductController {

    async create(request, response, next) {

        if (!request.body.name && !request.body.uuid_1c) {
            return next(ApiError.noneSetFields());
        }
        try {
            const product = await Products.create(request.body);
            return response.json({ product });
        } catch (e) {
            return next(ApiError.internal(e.message));
        }
    }
    async getAll(request, response, next) {
        try {
            const products = await Products.findAll();
            return response.json({ products })
        } catch (e) {
            return next(ApiError.internal(e.message));
        };
    };
    async get(request, response, next) {
        const { id } = request.params;
        if (!id) {
            return next(ApiError.noneSetFields());
        }
        try {
            const product = await Products.findOne({ where: { id } });
            return response.json(product);
        } catch (e) {
            return next(ApiError.internal(e.message));
        };
    }

    async setDeleted(request, response, next) {
        const { id } = request.params;
        if (!id) {
            return next(ApiError.noneSetFields());
        }
        try {
            const product = await Products.update({ deleted: true }, { where: { id } });
            return response.json(product);
        } catch (e) {
            return next(ApiError.internal(e.message));
        };

    }
    async getByBrend(request, response, next) {
        const { brandId } = request.params;
        if (!brandId) {
            return next(ApiError.noneSetFields());
        }
        try {
            const product = await Products.findAll({ where: { brandId } });
            return response.json(product);
        } catch (e) {
            return next(ApiError.internal(e.message));
        };
    }
}

export default new ProductController();