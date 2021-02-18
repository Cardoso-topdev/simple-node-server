import express from 'express'
import { triggerCustomrules } from '../controllers/triggerController.js'

const router = express.Router();

router.post('/trigger', triggerCustomrules)

export default router