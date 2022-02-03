import http from 'http';
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

    async setDeleted(req, response, next) {
        const { uuid_1c, deleted } = req.body;
        console.log(req.body);
        if (!uuid_1c) {
            return next(ApiError.noneSetFields());
        }
        try {
            const product = await Products.update({ deleted: deleted }, { where: { uuid_1c } });
            let uri = '';
            if (deleted) {
                uri = process.env.LOCAL_API_SERVER + `del/${uuid_1c}`;
            }
            else {
                uri = process.env.LOCAL_API_SERVER + `rec/${uuid_1c}`;
            }
            http.request(uri).end();
            return response.json({ product });
        } catch (e) {
            return next(ApiError.internal(e.message));
        };

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
                `where p.deleted=0 and b.userId=${request.body.userId} ${tmp} ${tmp1}`);
            return response.json(product[0]);
        } catch (e) {
            return next(ApiError.internal(e.message));
        };
    };


    async getByCataloge(request, response, next) {
        const { catalogeId } = request.params;
        if (!catalogeId) {
            return next(ApiError.noneSetFields());
        }
        try {
            const product = await Products.findAll({ where: { catalogeId } });
            return response.json({ product });
        } catch (e) {
            return next(ApiError.internal(e.message));
        };

    };
    async getUuid(request, response, next) {
        const { uuid_1c } = request.params;
        if (!uuid_1c) {
            return next(ApiError.noneSetFields());
        }
        try {
            const product = await sequelize.query("SELECT p.*, b.uuid_1c as brandUuid, c.uuid_1c as catalogeUuid FROM products as p " +
                "inner join brands as b on p.brandId = b.id " +
                `inner join cataloges as c on p.catalogeId = c.id where p.uuid_1c = '${uuid_1c}'`);

            return response.json({ product });
        } catch (e) {
            return next(ApiError.internal(e.message));
        };
    };
    async updateData(request, response, next) {
        if (!request.body.id) {
            return next(ApiError.noneSetFields());
        }
        try {
            const product = await Products.update(
                { ...request.body },
                { where: { id: request.body.id } });
            return response.json({ product });
        } catch (e) {
            return next(ApiError.internal(e.message));
        };
    }
    async getAllDeleted(request, response, next) {
        const { status } = request.params;
        if (!status) {
            return next(ApiError.noneSetFields());
        }
        try {
            const product = await Products.findAll(
                {
                    attributes: ['uuid_1c'],
                    where: { deleted: status }
                });
            return response.json(product);
        } catch (e) {
            return next(ApiError.internal(e.message));
        };
    }
    async setDeletedUuid(request, response, next) {
        const { uuid_1c } = request.params;
        if (!uuid_1c) {
            return next(ApiError.noneSetFields());
        }
        try {
            const product = await Products.update({ deleted: 1 }, { where: { uuid_1c } });
            return response.json(product);
        } catch (e) {
            return next(ApiError.internal(e.message));
        };
    }
    async getClearAll(request, response, next) {
        try {
            const product = await Products.destroy({ where: { deleted: true } });
            return response.json(product);
        } catch (e) {
            return next(ApiError.internal(e.message));
        };
    }
}

export default new ProductController();