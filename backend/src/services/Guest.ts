import Guest from '../models/Guest'
import sequelize from '../providers/db'
import MailService from './Mail';

const guestsRepository = sequelize.getRepository(Guest)

class GuestService {
    private mailService: MailService = new MailService()

    async create(guests: any) {
        try{
            const new_guests = await guestsRepository.create(guests)
            return new_guests.toJSON()
        }
        catch (e: any) {
            const errors = e.errors.map((error: any) => error.message)
            throw console.log(errors)
        }
    }

    async update(id: number, guestsData: Partial<Guest>): Promise<Guest> {
        try {
            const guests = await guestsRepository.findByPk(id)
            if (guests) {
                await guests.update(guestsData)
                return guests.toJSON()
            }
            throw new Error(`Guests with id ${id} not found`)
        }
        catch (e: any) {
            const errors = e.errors.map((error: any) => error.message)
            throw console.log(errors)
        }
    }

    async delete(id: number): Promise<void> {
        const guests = await guestsRepository.findByPk(id)
        if (guests) {
            await guests.destroy();
            return;
        }
        throw new Error(`Guests with id ${id} not found`);
    }

    async getByFilter(params: any) {
        const guests = await guestsRepository.findAll({ where: params })
        if (guests) return guests
        throw new Error("Guests not found!")
    }

    async getById(id: number): Promise<Guest> {
        const guest = await guestsRepository.findByPk(id)
        if (guest) return guest
        throw new Error(`Guests with id ${id} not found`)
    }

    async sendRememberMail(id: number) {
        const guest = await guestsRepository.findByPk(id)
        if (guest) {
            await this.mailService.sendRememberMail(guest);
            return;
        }
        throw new Error(`Guests with id ${id} not found`)
    }
}

export default GuestService