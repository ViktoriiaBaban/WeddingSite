import GuestController from "../controllers/Guest";
import express from "express";

const guestRouter = express.Router()

const guestController: GuestController = new GuestController()

guestRouter.route('/').get(guestController.getGuests)
guestRouter.route('/add').post(guestController.add)
guestRouter.route('/:id').put(guestController.update)
guestRouter.route('/:id').get(guestController.getById)
guestRouter.route('/:id').delete(guestController.delete)
guestRouter.route('/:id/sendMail').post(guestController.sendMail)


export default guestRouter