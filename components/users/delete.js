const pool = require('../../database/connection')

module.exports = async (req, res) => {

    const id = req.params.user_Id

    try {
        const deletebyId = await pool.query("DELETE  FROM users WHERE user_Id = ($1) RETURNING *", [id])
        res.send(deletebyId.rows[0])
    } catch (error) {
        res.send(error)
    }

}