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
}

module.exports = PeopleController;