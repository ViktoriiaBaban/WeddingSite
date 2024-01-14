import express from "express"
import guestRoutes from "./GuestRoutes"
import userRoutes from './UserRoutes';

const router: express.Router = express.Router()

router.use('/guests', guestRoutes)
router.use('/user', userRoutes)

export default router