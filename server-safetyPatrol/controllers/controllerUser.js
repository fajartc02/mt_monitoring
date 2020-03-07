const ModelUser = require('../models/modelUser')
const Nexmo = require('nexmo')

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
    const nexmo = new Nexmo({
      apiKey: 'f2dfe7ab',
      apiSecret: 'zwjV3nc2lKgwTftA'
    })

    const from = 'Anonymous'
    const to = '6282211511213'
    const text = 
    `
    Seseorang menambahkan Anggota;
      nama: ${addUser.name}
      noreg: ${addUser.noreg}
      time: ${new Date().getDate()} / ${new Date().getMonth()} / ${new Date().getFullYear()}
    `

    nexmo.message.sendSms(from, to, text)
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
    let userId = {
      _id: req.params.UserId
    }
    if(req.query) {
      idCheckPatrol: req.query.idCheckPatrol
    }
    ModelUser.findOne(userId)
    .then((result) => {
      let modifiedUser = {
        name: req.body.name || result.name,
        noreg: req.body.noreg || result.noreg,
        shift: req.body.shift || result.shift,
        noPolice: req.body.noPolice || result.noPolice,
        simValid: req.body.simValid || result.simValid,
        stnkValid: req.body.stnkValid || result.stnkValid,
        checkPatrol: req.body.checkPatrol || result.checkPatrol
      }
      ModelUser.updateOne(userId, {
        $set: modifiedUser
      })
      .then((result) => {
        res.status(201).json({
          message: 'Success Update',
          data: result
        })
      }).catch((err) => {
        res.status(500).json({
          message: 'error',
          err: err.message
        })
      })
    }).catch((err) => {
      res.status(500).json({
        message: 'Error',
        err: err.message
      })
    });
  },
  removeUser: (req, res) => {
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
      lfSpion: req.body.lfSpion,
      rgSpion: req.body.rgSpion,
      simChecked: req.body.simChecked,
      sinarMasChecked: req.body.sinarMasChecked,
      stnkChecked: req.body.stnkChecked,
      helm: req.body.helm,
      klakson: req.body.klakson,
      shoe: req.body.shoe,
      wheel: req.body.wheel,
      rainCoat: req.body.rainCoat,
      spareLampFr: req.body.spareLampFr,
      spareLampBrake: req.body.spareLampBrake,
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