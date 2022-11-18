const db = require('../models');

class ClassesController{

    static async getAllClasses(request, response){
        try{
            const AllClasses = await db.classes.findAll();
            return response.status(200).json(AllClasses);
        } catch (err){
            return response.status(500).json(err.message);
        }
    }

    static async getClassesById(request, response){
        const {id} = request.params;

        try{
            const Aclass = await db.classes.findOne({
                where: {
                    id: Number(id)
                }
            });
            return response.status(200).json(Aclass);
        } catch (err){
            return response.status(500).json(err.message);
        }
    }

    static async createClasses(request, response){
        const newClass = request.body;

        try{
            const Aclass = await db.classes.create(newClass);
            return response.status(200).json(Aclass);
        } catch (err){
            return response.status(500).json(err.message);
        }
    }

    static async updateClasses(request, response){
        const {id} = request.params;
        const updateClass = request.body;

        try{
            await db.classes.update(updateClass, {
                where: {
                    id: Number(id)
                }
            });

            const Aclass = await db.classes.findOne({
                where: {
                    id: Number(id)
                }
            });

            return response.status(200).json(Aclass);
        } catch (err){
            return response.status(500).json(err.message);
        }
    }

    static async deleteClasses(request, response){
        const {id} = request.params;

        try{
            await db.classes.destroy({
                where: {
                    id: Number(id)
                }
            });

            return response.status(200).json("class deleted!");
        } catch (err){
            return response.status(500).json(err.message);
        }
    }
}

module.exports = ClassesController;