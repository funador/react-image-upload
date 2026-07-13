import 'dotenv/config'
import express, { Request, Response } from 'express'
import { v2 as cloudinary } from 'cloudinary'
import formData from 'express-form-data'
import cors from 'cors'
import { CLIENT_ORIGIN } from './config'

const app = express()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

app.use(cors({
  origin: CLIENT_ORIGIN
}))

app.use(formData.parse())

app.get('/wake-up', (req: Request, res: Response) => res.send('👌'))

app.post('/image-upload', (req: Request, res: Response) => {

  const values = Object.values(req.files || {})
  const promises = values.map(image => cloudinary.uploader.upload(image.path))

  Promise
    .all(promises)
    .then(results => res.json(results))
    .catch((err) => res.status(400).json(err))
})

export default app

// Vercel imports this file as a module rather than executing it, so only
// start listening on a port when it's run directly (local dev via
// ts-node-dev, or a traditional `node dist/server.js` host).
if (require.main === module) {
  app.listen(process.env.PORT || 8080, () => console.log('👍'))
}
