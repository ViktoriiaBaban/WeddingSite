export enum attendValues {
    YES = 'Да',
    NO = 'Нет',
    NOT_SURE = 'Не знаю',
    EMPTY = ''
}

export interface NewGuest {
    lastName: string,
    firstName: string,
    patronymic: string,
    attend: attendValues,
    email: string,
}

export interface Guest extends NewGuest{
    id: number,
    invited: boolean,
    date: string
}