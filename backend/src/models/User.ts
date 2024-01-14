import {Table, Column, Model, AllowNull, PrimaryKey, AutoIncrement, IsEmail, Unique} from 'sequelize-typescript'

@Table
class User extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number

    @AllowNull(false)
    @IsEmail
    @Column
    email: string

    @Unique
    @AllowNull(false)
    @Column
    username: string

    @AllowNull(false)
    @Column
    password: string

}

export default User