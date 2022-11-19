const pool = require('../../database/connection')

module.exports = async (req, res) => {

    try {
        const users = await pool.query("SELECT * FROM users")
        res.send(users.rows)
    } catch (error) {
        res.send(error)
    }
}