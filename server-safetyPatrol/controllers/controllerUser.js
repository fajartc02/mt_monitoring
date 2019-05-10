const ModelUser = require('../models/modelUser')

module.exports = {
  addUser: (req, res) => {
    let addUser = {
      name: req.body.name,
      noreg: req.body.noreg,
      shift: req.body.shift,
      noPolice: req.body.noPolice,
      simValid: req.body.simValid,
      stnkValid: req.body.stnkValid
    }
    ModelUser.create(addUser)
    .then((result) => {
      res.status(201).json({
        message: 'Success To Add User',
        data: result
      })
    }).catch((err) => {
      res.status(500).json({
        message: 'Error To add User',
        err: err.status
      })
    });
  },
  getAllUser: (req, res) => {
    ModelUser.find()
    .then((result) => {
      res.status(200).json({
        message: 'Success To Get All Users',
        data: result || result.data
      })
    }).catch((err) => {
      res.status(500).json({
        message: 'Error To Get Users',
        err: err.status
      })
    });
  },
  getOneUser: (req, res) => {
    let UserId = req.params.UserId
    ModelUser.findById(UserId)
    .then((result) => {
      res.status(201).json({
        message: 'Success To Get User',
        data: result
      })
    }).catch((err) => {
      res.status(500).json({
        message: 'Error To Get User',
        err: err.status
      })
    });
  },
  editUser: (req, res) => {
    // comming soon
  },
  removeUser: (req, res) => {
    // comming soon
    let userId = {
      _id: req.params.UserId
    }
    ModelUser.deleteOne(userId)
    .then((result) => {
      res.status(201).json({
        message: 'Success To Delete User',
        data: result
      })
    }).catch((err) => {
      res.status(500).json({
        message: 'Error To Delete User',
        err: err.status
      })
    });
  },
  checkPatrolUser: (req, res) => {
    let idUser = {
      _id: req.params.UserId
    }

    let checkUser = {
      frLamp: req.body.frLamp,
      rrLamp: req.body.rrLamp,
      stopLamp: req.body.stopLamp,
      lfSein: req.body.lfSein,
      rgSein: req.body.rgSein,
      note: req.body.note,
      dateCheck: new Date(`${req.body.dateCheck}`) || new Date()
    }

    ModelUser.updateOne(idUser, {
      $push: {
        checkedPatrol: checkUser
      }
    })
    .then((result) => {
      res.status(201).json({
        message: 'Success To Check Patrol',
        data: result
      })
    }).catch((err) => {
      res.status(500).json({
        message: 'Error To Check Patrol',
        err: err.status
      })
    });
  }
}