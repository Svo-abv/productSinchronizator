import ApiError from "../error/ApiError.mjs";
import { Products } from "../models/schema.mjs";
import sequelize from "../modules/db.mjs";
class ProductController {
    async create(request, response, next) {
        if (!request.body.name && !request.body.uuid_1c) {
            return next(ApiError.noneSetFields());
        }
        try {
            const product = await Products.create(request.body);
            return response.json({ product });
        }
        catch (e) {
            return next(ApiError.internal(e.message));
        }
    }
    async getAll(request, response, next) {
        try {
            const products = await Products.findAll();
            return response.json({ products });
        }
        catch (e) {
            return next(ApiError.internal(e.message));
        }
        ;
    }
    ;
    async get(request, response, next) {
        const { id } = request.params;
        if (!id) {
            return next(ApiError.noneSetFields());
        }
        try {
            const product = await Products.findOne({ where: { id } });
            return response.json(product);
        }
        catch (e) {
            return next(ApiError.internal(e.message));
        }
        ;
    }
    async setDeleted(request, response, next) {
        const { id } = request.params;
        if (!id) {
            return next(ApiError.noneSetFields());
        }
        try {
            const product = await Products.update({ deleted: true }, { where: { id } });
            return response.json({ product });
        }
        catch (e) {
            return next(ApiError.internal(e.message));
        }
        ;
    }
    async getByUser(request, response, next) {
        if (!request.body.userId) {
            return next(ApiError.noneSetFields());
        }
        try {
            let tmp = ``;
            if (request.body.brandId) {
                tmp = `and b.brandId =${request.body.brandId}`;
            }
            let tmp1 = ``;
            if (request.body.catalogeId) {
                tmp1 = `and p.catalogeId =${request.body.catalogeId}`;
            }
            const product = await sequelize.query('SELECT  p.*  FROM user_brands as b left join products as p on b.brandId=p.brandId ' +
                `where b.userId=${request.body.userId} ${tmp} ${tmp1}`);
            return response.json(product[0]);
        }
        catch (e) {
            return next(ApiError.internal(e.message));
        }
        ;
        ;
    }
    async getByCataloge(request, response, next) {
        const { catalogeId } = request.params;
        if (!catalogeId) {
            return next(ApiError.noneSetFields());
        }
        try {
            const product = await Products.findAll({ where: { catalogeId } });
            return response.json({ product });
        }
        catch (e) {
            return next(ApiError.internal(e.message));
        }
        ;
    }
    async getUuid(request, response, next) {
        const { uuid_1c } = request.params;
        if (!uuid_1c) {
            return next(ApiError.noneSetFields());
        }
        try {
            const product = await Products.findAll({ where: { uuid_1c } });
            return response.json({ product });
        }
        catch (e) {
            return next(ApiError.internal(e.message));
        }
        ;
    }
}
export default new ProductController();
