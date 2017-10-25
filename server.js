const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    massive = require('massive');

const mainCtrl = require('./mainCtrl');

const app = express();

app.use(bodyParser.json())
app.use(cors());

const connectionString = 'postgres://peach@localhost/assessbox'

massive(connectionString).then(db => {
    app.set('db', db);

    // Initialize user table and vehicle table.
    db.init_tables.user_create_seed().then(response => {
        console.log('User table init');
        db.init_tables.vehicle_create_seed().then(response => {
            console.log('Vehicle table init');
        })
    })

})


// ===== Build enpoints below ============

const userCtrl = require('./controller/userCtrl.js')

app.get('/api/users', userCtrl.getAllUsers)
app.get('/api/vehicles', userCtrl.getAllVehicles)

app.post('/api/users', userCtrl.addUser)
app.post('/api/vehicles', userCtrl.addVehicle)

app.get('/api/user/:userId/vehiclecount', userCtrl.vehicleCount)
app.get('/api/user/:userId/vehicle', userCtrl.getVehiclesByUser)
app.get('/api/vehicle', userCtrl.getQuery)

app.get('/api/newervehiclesbyyear', userCtrl.getVehiclesByYear)

app.put('/api/vehicle/:vehicleId/user/:userId', userCtrl.changeOwnership)

app.delete('/api/user/:userId/vehicle/:vehicleId', userCtrl.deleteOwnership)
app.delete('/api/vehicle/:vehicleId', userCtrl.deleteVehicle)



// ===== Do not change port ===============
const port = 3000;
app.listen(port, () => {
    console.log('Listening on port: ', port);
})