const router = require('express').Router()
const {addUser, getAllUser, getOneUser, checkPatrolUser, removeUser} = require('../controllers/controllerUser')

router.get('/', getAllUser)
router.get('/:UserId', getOneUser)

router.post('/', addUser)
router.post('/delete/:UserId', removeUser)
router.post('/patrolCheck/:UserId', checkPatrolUser)

module.exports = router