import User from "../models/User"
import { hashPassword, checkPassword } from "../utils/password";

class UserService {

    async create(userData: any): Promise<User> {
        userData.password = hashPassword(userData.password)
        const user = await User.create(userData)
        return user.toJSON()
    }

    async getById(id: number): Promise<User> {
        const user: User | null = await User.findByPk(id)
        if (user != null) {
            return user.toJSON()
        }
        throw new Error("Invalid identifier")
    }

    async get(username: string, password: string): Promise<User> {
        const user: User | null = await User.findOne({
            where: {
                username: username,
            },
        })

        if (user != null && checkPassword(password, user.password)) {
            return user.toJSON()
        }
        throw new Error("Invalid username/password")
    }

    async update(userData: any): Promise<User> {
        if (userData.id == undefined) {
            throw new Error("Id is undefined")
        }

        await User.update(userData, { where: {
                id: userData.id
            }})
        let user: User = await this.getById(userData.id)
        return user
    }

    async delete(id: number): Promise<void> {
        const user: User | null = await User.findByPk(id)
        if (user != null) {
            return user.destroy()
        }

        throw new Error("Invalid identifier")
    }
}

export default UserService
