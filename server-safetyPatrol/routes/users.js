const router = require('express').Router()
const {addUser, getAllUser, getOneUser, checkPatrolUser, removeUser, editUser} = require('../controllers/controllerUser')

router.get('/', getAllUser)
router.get('/:UserId', getOneUser)

router.post('/', addUser)
router.delete('/delete/:UserId', removeUser)
router.put('/edit/:UserId', editUser)
router.post('/patrolCheck/:UserId', checkPatrolUser)

module.exports = router