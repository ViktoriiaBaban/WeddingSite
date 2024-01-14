import GuestService from "../services/Guest"

class GuestController {
    private guestService: GuestService = new GuestService()

    add = async (request: any, response: any) => {
        try {
            const result = await this.guestService.create(request.body)
            response.send({ id: result.id })
        } catch (error: any) {
                response.status(400).send(error)
        }
    }

    update = async (request: any, response: any) => {
        const { body } = request
        const id = request.params.id
        try {
            const guest = await this.guestService.update(Number(id), body)
            response.send(guest)
        } catch (error: any) {
            response.status(400).send({ "error": error.message })
        }
    }

    delete = async (request: any, response: any) => {
        const id = request.params.id
        try {
            await this.guestService.delete(Number(id))
            response.status(200).send({ message: `Guest with id ${id} has been deleted` })
        } catch (error: any) {
            response.status(400).send({ "error": error.message })
        }
    }


    getGuests = async (request: any, response: any) => {
        try {
            const data = await this.guestService.getByFilter(request.body)
            response.send(data)
        } catch (error: any) {
            response.status(400).send(error.message)
        }
    }

    getById = async (request: any, response: any) => {
        const id = request.params.id
        try {
            const guest = await this.guestService.getById(Number(id))
            response.send(guest)
        } catch (error: any) {
            response.status(404).send({ "error": error.message })
        }
    }

    sendMail = async (request: any, response: any) => {
        const id = request.params.id
        try {
            await this.guestService.sendRememberMail(id)
            response.status(200).send({ message: `Mail sent successfully for guest with id ${id}` })
        } catch (error: any) {
        response.status(400).send({ "error": error.message })
    }
    }

}

export default GuestController