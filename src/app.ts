import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db'
import { errorHandler } from './middlewares/errorMiddleware'
import cookieParser from 'cookie-parser'
import path from 'path'
import { endpointsByCategory } from './views/endpointsByCategory'
import locationRoutes from './routes/locationRoutes'

const bodyParser = require('body-parser');

dotenv.config()
connectDB()

const app = express()

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true
  })
)
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cookieParser())

app.use(express.json())


app.use('/api/', locationRoutes)


// Cấu hình EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('index', { endpointsByCategory })
})

app.use(errorHandler)

export default app