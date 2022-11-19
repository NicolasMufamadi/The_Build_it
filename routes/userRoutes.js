const express = require('express')
const router = express.Router()

const add = require('../components/users/add')
const getById = require('../components/users/getById')
const getAll = require('../components/users/getall')
const update = require('../components/users/update')
const deleteUser = require('../components/users/delete')

router.post('/', add)
router.get('/:user_Id', getById)
router.get('/', getAll)
router.put('/:user_Id', update)
router.delete('/:user_Id', deleteUser)

module.exports = router 