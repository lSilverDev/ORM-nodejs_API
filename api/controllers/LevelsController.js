const db = require('../models');

class LevelsController{

    static async getAllLevels(request, response){
        try{
            const Alllevels = await db.levels.findAll();
            return response.status(200).json(Alllevels);
        } catch (err){
            return response.status(500).json(err.message);
        }
    }

    static async getLevelsById(request, response){
        const {id} = request.params;

        try{
            const level = await db.levels.findOne({
                where: {
                    id: Number(id)
                }
            });
            return response.status(200).json(level);
        } catch (err){
            return response.status(500).json(err.message);
        }
    }

    static async createLevels(request, response){
        const newLevel = request.body;

        try{
            const level = await db.levels.create(newLevel);
            return response.status(200).json(level);
        } catch (err){
            return response.status(500).json(err.message);
        }
    }

    static async updateLevels(request, response){
        const {id} = request.params;
        const updateLevel = request.body;

        try{
            await db.levels.update(updateLevel, {
                where: {
                    id: Number(id)
                }
            });

            const level = await db.levels.findOne({
                where: {
                    id: Number(id)
                }
            });

            return response.status(200).json(level);
        } catch (err){
            return response.status(500).json(err.message);
        }
    }

    static async deleteLevels(request, response){
        const {id} = request.params;

        try{
            await db.levels.destroy({
                where: {
                    id: Number(id)
                }
            });

            return response.status(200).json("level deleted!");
        } catch (err){
            return response.status(500).json(err.message);
        }
    }
}

module.exports = LevelsController;