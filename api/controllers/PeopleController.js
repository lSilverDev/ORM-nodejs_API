const db = require('../models');

class PeopleController{

    static async getAllPeople(request, response){
        try{
            const AllPeople = await db.people.findAll();
            return response.status(200).json(AllPeople);
        } catch (err){
            return response.status(500).json(err.message);
        }
    }

    static async getPeopleById(request, response){
        const {id} = request.params;

        try{
            const person = await db.people.findOne({
                where: {
                    id: Number(id)
                }
            });
            return response.status(200).json(person);
        } catch (err){
            return response.status(500).json(err.message);
        }
    }

    static async createPeople(request, response){
        const newPerson = request.body;

        try{
            const person = await db.people.create(newPerson);
            return response.status(200).json(person);
        } catch (err){
            return response.status(500).json(err.message);
        }
    }

    static async updatePeople(request, response){
        const {id} = request.params;
        const updatePerson = request.body;

        try{
            await db.people.update(updatePerson, {
                where: {
                    id: Number(id)
                }
            });

            const person = await db.people.findOne({
                where: {
                    id: Number(id)
                }
            });

            return response.status(200).json(person);
        } catch (err){
            return response.status(500).json(err.message);
        }
    }

    static async deletePeople(request, response){
        const {id} = request.params;

        try{
            await db.people.destroy({
                where: {
                    id: Number(id)
                }
            });

            return response.status(200).json("Person deleted!");
        } catch (err){
            return response.status(500).json(err.message);
        }
    }
}

module.exports = PeopleController;