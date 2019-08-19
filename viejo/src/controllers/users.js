'use stric'
const User=require('../model/users');
const controller={
    CreateUser: (req, res) => {
        let users = new User();
        let params = req.body;
        users.name = params.name;
        user.lastname = params.lastname;
        user.type = params.type;
        user.years = params.years;
        user.password = params.password;
        user.image = null

        console.log(params)
        users.save((err, userCreate) => {
            if (err) return res.status(500).send({ mensage: 'error en la peticion' })

            if (!userCreate) return res.status(404).send({ message: 'no se logro crear el usuario' })
            return res.status(200).send({ users: userCreate })
        });

    }
}
module.exports = controller;