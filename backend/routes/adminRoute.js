import express from 'express'
import { addDoctor } from '../controllers/adminController'
import upload from '../middlewares/multer'

const adminRouter = express.Router()

adminRouter.post('/add-doctor', upload.single('image'),addDoctor) // form - file upload karne ke liye

export default adminRouter