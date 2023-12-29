import express from 'express'
import { dbConnection } from './database/dbConnection.js'

import cors from 'cors';
import router from './src/modules/crud/crud.route.js'
const app = express()
const port = 3000
app.use(cors({ origin: 'http://crud-mongoose-ten.vercel.app' }));
app.use(express.json())
app.use(router)



//Run Database
dbConnection()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))