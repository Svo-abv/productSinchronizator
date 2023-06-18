import { QueryTypes } from "sequelize/dist";
import ApiError from "../error/ApiError.mjs";
import { Cataloge } from "../models/schema.mjs";
import sequelize from "../modules/db.mjs";

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
            return response.json({ cataloge });
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
            const cataloge = await Cataloge.findOne({ where: { uuid_1c } });
            return response.json({ cataloge });
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
            return response.json({ cataloge });
        } catch (e) {
            return next(ApiError.internal(e.message));
        };
    };
    async getByUser(request, response, next) {

        if (!request.body.userId) {
            return next(ApiError.noneSetFields());
        }
        try {

            let tmp = ``;
            if (request.body.brandId) {
                tmp = `and b.brandId =${request.body.brandId}`;
            }

            const cataloge = await sequelize.query("select c.* from cataloges as c " +
                "inner join(SELECT distinct p.catalogeId as pId FROM user_brands as b " +
                "left join products as p on b.brandId = p.brandId " +
                `where p.deleted=0 and b.userId = ${request.body.userId} ${tmp}) as v on v.pId = c.id order by c.id`);
            return response.json(cataloge[0]);
        } catch (e) {
            return next(ApiError.internal(e.message));
        }
    };
}


export default new CatalogeController();