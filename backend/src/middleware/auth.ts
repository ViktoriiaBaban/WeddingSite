import jwt from 'jsonwebtoken';
import UserService from '../services/User';
import User from '../models/User';

const jwtSecret: jwt.Secret = "sUbGuVE~t[)ByQDjcV?LCa_c4};LI-_n"

class Auth {
    private userService: UserService = new UserService

    auth = async (request: any, response: any, next: any) => {
        const authHeader = request.headers['authorization']

        if (authHeader) {
            try {
                const token = authHeader.split(' ')[1]
                const userPayload: any = jwt.verify(token, jwtSecret)

                request.user = await this.userService.getById(userPayload.id)

                next()
            }
            catch (error: any) {
                if (error as Error)
                    response.sendStatus(401)
                else
                    response.status(500).send(error.message)
            }
        }
        else {
            response.sendStatus(401)
        }
    }
}

export default new Auth()