const pool = require('../../database/connection')

module.exports = async (req, res) => {

    const id = req.params.user_Id

    try {
        const getbyId = await pool.query("SELECT * FROM users WHERE user_Id = ($1)", [id])
        res.send(getbyId.rows[0])
    } catch (error) {
        res.send(error)
    }

}