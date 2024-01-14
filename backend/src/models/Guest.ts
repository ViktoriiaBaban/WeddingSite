import {Table, Column, Model, AllowNull, PrimaryKey, AutoIncrement, Default} from 'sequelize-typescript'

@Table
class Guest extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number

    @AllowNull(false)
    @Column
    lastName: string

    @AllowNull(false)
    @Column
    firstName: string

    @AllowNull(false)
    @Default('-')
    @Column
    patronymic: string

    @AllowNull(false)

    @Column
    email: string

    @AllowNull(false)
    @Default('-')
    @Column
    attend: string

    @AllowNull(false)
    @Default(false)
    @Column
    invited: boolean

    @Default(new Date().toLocaleString('ru'))
    @AllowNull(false)
    @Column
    date: string
}

export default Guest