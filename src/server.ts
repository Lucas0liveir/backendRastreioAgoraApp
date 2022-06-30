import { TrackPackagesController } from './controllers/TrackPackagesController'
import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const trackPackagesController = new TrackPackagesController()

app.post('/track', trackPackagesController.handle)

app.listen(port, () => { console.log('server is running at 3000') })