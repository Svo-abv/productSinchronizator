import ApiError from "../error/ApiError.mjs";
import { Brand } from "../models/schema.mjs";
import sequelize from "../modules/db.mjs";


class BrandController {

    async create(request, response, next) {

        if (!request.body.name && !request.body.uuid_1c) {
            return next(ApiError.noneSetFields());
        }
        try {
            const brand = await Brand.create(request.body);
            return response.json({ brand });
        } catch (e) {
            return next(ApiError.internal(e.message));
        }
    }
    async getAll(request, response, next) {
        try {
            const brands = await Brand.findAll();
            return response.json({ brands })
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
            const brand = await Brand.findOne({ where: { id } });
            return response.json({ brand });
        } catch (e) {
            return next(ApiError.internal(e.message));
        };
    }
    async getUuid(request, response, next) {
        const { uuid_1c } = request.params;
        if (!uuid_1c) {
            return next(ApiError.noneSetFields());
        }
        try {
            const brand = await Brand.findOne({ where: { uuid_1c } });
            return response.json({ brand });
        } catch (e) {
            return next(ApiError.internal(e.message));
        };
    }
    async getByUser(request, response, next) {
        if (!request.body.userId) {
            return next(ApiError.noneSetFields());
        }
        try {
            const brand = await sequelize.query(`SELECT b.* FROM user_brands as u left join brands as b on u.brandId = b.id  where u.userId = ${request.body.userId}`);
            return response.json(brand[0]);
        } catch (e) {
            return next(ApiError.internal(e.message));
        };
    }
}

export default new BrandController();