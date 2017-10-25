const getAllUsers = (req, res) => {
    req.app
        .get('db')
        .getAllUsers().then(result => {
            res.json(result)
        })
}

const getAllVehicles = (req, res) => {
    req.app
        .get('db')
        .getAllVehicles().then(result => {
            res.json(result)
        })
}

const addUser = (req, res) => {
    const { name, email } = req.body;
    req.app
        .get('db')
        .createUser([name, email]).then(result => {
            res.json(result);
        })
}

const addVehicle = (req, res) => {
    const { make, model, year, owner_id } = req.body
    req.app
        .get('db')
        .createVehicle([make, model, year, owner_id])
        .then(result => {
            console.log(result)
            res.json(result)
        })
}

const vehicleCount = (req, res) => {
    req.app
        .get('db')
        .vehicleCount(req.params.userId)
        .then(result => {
            res.json(result)
        })
}

const getVehiclesByUser = (req, res) => {
    req.app
        .get('db')
        .getVehiclesByUser(req.params.userId)
        .then(result => {
            res.json(result);
        })
}

const getQuery = (req, res) => {
    const db = req.app.get("db");
    if (req.query.userEmail) {
        return db.getVehiclesByEmail(req.query.userEmail).then(result => {
            return res.json(result);
        });
    }
    if (req.query.userFirstStart) {
        return db
            .getVehiclesByLetters(req.query.userFirstStart + "%")
            .then(result => {
                return res.json(result);
            });
    }
}

const getVehiclesByYear = (req, res) => {
    req.app
        .get('db')
        .getVehiclesByYear().then(result => {
            res.json(result)
        })
}

const changeOwnership = (req, res) => {
    req.app
        .get('db')
        .changeOwnership([req.params.vehicleId, req.params.userId]).then(
            result => {
                res.json(result)
            })
}

const deleteOwnership = (req, res) => {

    req.app
        .get('db')
        .deleteOwnership([req.params.vehicleId, req.params.userId]).then(result => {
            res.json(result)
        })
}

const deleteVehicle = (req, res) => {
    req.app
        .get('db')
        .deleteVehicle([req.params.vehicleId]).then(result => {
            res.json(result)
        })
}



module.exports = {
    getAllUsers,
    getAllVehicles,
    addUser,
    addVehicle,
    vehicleCount,
    getVehiclesByUser,
    getQuery,
    getVehiclesByYear,
    changeOwnership,
    deleteOwnership,
    deleteVehicle
}