import Guest from '../models/Guest';
import GuestService from './Guest';

const nodemailer = require('nodemailer')

class MailService {
    private transporter;

    constructor() {
        this.transporter = nodemailer.createTransport(({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        }))
    }


    async sendRememberMail( guest: Guest) {
        console.log(process.env.SMTP_HOST, process.env.SMTP_PORT)
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: guest.email,
            subject: 'Придете ли Вы на нашу свадьбу?',
            text: '',
            html:
                `
                 <div style="background-color: #EEF2F3; padding: 20px;">
                    <h3>Здравствуйте, ${guest.firstName} ${guest.patronymic}</h3>
                    <h4>Наша свадьба состоится 7 июля 2024</h4>
                    
                    <p>
                        ${ guest.attend === 'Не знаю' 
                        ? 'При заполнении формы присутствия в прошлый раз, Вы указали что пока не можете дать точного ответа.' 
                        : guest.attend === 'Нет'
                        ? 'При заполнении формы присутствия в прошлый раз, Вы указали что не сможете прийти к нам на свадьбу.'
                        : 'При заполнении формы присутствия в прошлый раз, Вы указали что придете к нам на свадьбу.'}
                    </p>
                    <p>
                        ${guest.attend === 'Не знаю'
                        ? 'Надеемся, что за прошедшее время ваша ситуация прояснилась. Пожалуйста, ответьте на следующий вопрос:'
                        : guest.attend === 'Нет' 
                        ? 'Возможно за прошедшее время что-то поменялось. Уточните это пожалуйста, ответив на следующий вопрос:'
                        : 'Мы очень этому рады и надеемся, что Ваши планы не изменились. Уточните это пожалуйста, ответив на следующий вопрос:'}
                    </p>
                    
                    <h4>Будете ли Вы на нашей свадьбе?</h4>
                
                    <div style="display: flex; justify-content: space-evenly;">
                        <a href="${process.env.CLIENT_URL}/${guest.id}/yes">
                            <img src="https://i.ibb.co/2PTVbzY/yes.png" alt="Конечно приду" border="0" height="80px">
                        </a>
                        <a href="${process.env.CLIENT_URL}/${guest.id}/not_sure">
                            <img src="https://i.ibb.co/S73nBwY/not-sure.png" alt="Пока не знаю" border="0" height="80px">
                        </a>
                        <a href="${process.env.CLIENT_URL}/${guest.id}/no">
                            <img src="https://i.ibb.co/z5q3L4k/no.png" alt="К сожалению, не приду" border="0" height="80px">
                        </a>                    
                    </div>
                    <br>
                    <h4>C уважением, Максим и Кристина</h4>
                 </div>
            `
        })
    }
}

export default MailService