import { v4 as uuidv4 } from 'uuid'
import { UserStatus } from './userStatus'
import elenaAvatar from '../assets/avatars/elena.svg'
import vladAvatar from '../assets/avatars/vlad.svg'

export const Vlad = {
    id: uuidv4(),
    status: UserStatus.Available,
    firstName: '',
    lastName: '',
    username: 'VladS',
    email: '',
    avatar: vladAvatar,
    bio: '',
}

export const Elena = {
    id: uuidv4(),
    status: UserStatus.Available,
    firstName: '',
    lastName: '',
    username: 'ElenaTut',
    email: '',
    avatar: elenaAvatar,
    bio: '',
}
