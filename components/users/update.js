const pool = require("../../database/connection")

module.exports = async (req, res) => {


    const Id = req.params.user_Id
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const email = req.body.email
    const number_phone = req.body.number_phone
    const user_role = req.body.userRole
    const password = req.body.password

    try {

        const request = await pool.query("UPDATE  users SET first_name = $1,last_name = $2, email = $3 , password = $4 , number_phone = $5 WHERE user_Id = $6 RETURNING *",
            [
                first_name,
                last_name,
                email,
                password,
                number_phone,
                Id
            ])

        res.send(request.rows[0])
    } catch (error) {
        res.send(error)
    }



}