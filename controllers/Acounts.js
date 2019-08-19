const Users = require('../models/Users');
const controllers={
Login: (req, res) => {
    let userId=req.body;
   
    if (userId == null) return res.status(404).send({ mensage: 'el documento no existe' })
    Users.findOne( { email: req.body.email,password:req.body.password } ).then( (user)=> {
      if (!user) {
        res.status(403).json({ message: 'Invalid Password/Username' });
      } else if (user) {
      res.status(200).json({
          userId: user.id,
          role: user.type
        })
      } else {
        res.status(403).json({ message: 'Invalid Password/Username' });
      }
    }).catch((err) => {
      return res.status(500).json(err)
    });
},
saveUser: (req, res) => {
    let user = new Users();
 
    let params = req.body;
   
    user.name = params.name;
    user.lastname = params.lastname;
    user.type = params.type;
    user.years = params.years;
    user.password = params.password;
    user.email=params.email;
    user.image = null;
   
   
    user.save((err, userStored) => {
        if (err) return res.status(500).send({ mensage: 'error en la peticion' })

        if (!userStored) return res.status(404).send({ message: 'no se pudo guardar el proyecto' })
        return res.status(200).send({ user: userStored })
    });

}
}
module.exports = controllers;