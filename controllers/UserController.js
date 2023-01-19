import { connection } from '../config/database.js'
import methodCrud from '../models/UserModel.js'

export const createUserController = (req, res) => {
    const { name } = req.body
    const { filename } = req.file

    const url = `${req.protocol}://${req.get('host')}/images/${filename}`

    connection.query(methodCrud.createUser(name, filename, url), (err, fields) => {
        if (err) {
            console.log(`Error create user: ${err.stack}`)
            res.status(400).json({ message: 'Error ro create a new user' })
        }
        res.status(200).json({
            data: fields,
            message: 'Data added successfully.'
        })
    })
}

export const readUsersController = (req, res) => {
    connection.query(methodCrud.readUser, (err, fields) => {
        if (err) console.log(`Error to read data: ${err.stack}`)
        res.render('index', {
            title: 'Read Users',
            datas: fields
        })
    })
}