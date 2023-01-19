const methodCrud = {
    createUser: (name, filename, url) => {
        return `INSERT INTO user_test VALUES ('${null}', '${name}', '${filename}', '${url}')`
    },
    readUser: `SELECT * FROM user_test`
}

export default methodCrud