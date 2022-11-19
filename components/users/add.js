const pool = require("../../database/connection")

module.exports = async (req, res) => {

    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const email = req.body.email
    const number_phone = req.body.number_phone
    const user_role = req.body.userRole
    const password = req.body.password

    try {

        const request = await pool.query("INSERT INTO users(first_name,last_name,email,password,number_phone) VALUES($1,$2,$3,$4,$5) RETURNING *",
            [
                first_name,
                last_name,
                email,
                password,
                number_phone,
            ])

        res.send(request.rows[0])
    } catch (error) {
        res.send(error)
    }



}