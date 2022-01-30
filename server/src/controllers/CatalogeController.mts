import ApiError from "../error/ApiError.mjs";
import { Cataloge } from "../models/schema.mjs";

class CatalogeController {

    async create(request, response, next) {

        if (!request.body.name && !request.body.uuid_1c) {
            return next(ApiError.noneSetFields());
        }
        try {
            const cataloge = await Cataloge.create(request.body);
            return response.json({ cataloge });
        } catch (e) {
            return next(ApiError.internal(e.message));
        }
    }
    async getAll(request, response, next) {
        try {
            const cataloges = await Cataloge.findAll();
            return response.json({ cataloges })
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
            const cataloge = await Cataloge.findOne({ where: { id } });
            return response.json(cataloge);
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
            const cataloge = await Cataloge.update({ deleted: true }, { where: { id } });
            return response.json(cataloge);
        } catch (e) {
            return next(ApiError.internal(e.message));
        };
    };
}


export default new CatalogeController();