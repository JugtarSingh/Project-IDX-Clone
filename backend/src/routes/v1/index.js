import express from 'express';
import { pingCheck } from '../../controllers/pingController.js';
import projectRoutes from './projects.js'

const router = express.Router();
router.use('/ping',pingCheck)
router.use('/projects',projectRoutes)


export default router;