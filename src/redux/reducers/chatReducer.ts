import { ChatActionType, ChatActionTypes } from '../types'
import { Elena, Vlad } from '../../sampleData/users'

export interface IChatAction {
    type: ChatActionType
    payload: any
}

export interface IMessage {
    time: Date
    message: string
    userId: string
    id: string
}

export interface IChatStore {
    chatId: string
    sellerId: string
    buyerId: string
    messages: IMessage[]
}

const initialStore: IChatStore = {
    chatId: '1',
    sellerId: '2342',
    buyerId: '234233',
    messages: [
        // {
        //     time: new Date(),
        //     message: 'Hello, maan!',
        // },
        // {
        //     time: new Date(),
        //     message: 'Hello, maan!',
        // },
        // {
        //     time: new Date(),
        //     message: 'Hello, maan!',
        // },
        // {
        //     time: new Date(),
        //     message: 'Hello, maan!',
        // },
        {
            time: new Date(),
            message: 'Hello, maan!',
            userId: Elena.id,
            id: 'sdasa',
        },
        {
            time: new Date(),
            message: 'Hello, maan!',
            userId: Vlad.id,
            id: 'sdasaasdas',
        },
        {
            time: new Date(),
            message: 'Hello, maan!',
            userId: Vlad.id,
            id: 'sd34234asa',
        },
        {
            time: new Date(),
            message: 'Hello, maan!',
            userId: Elena.id,
            id: 'sdasa344',
        },
        {
            time: new Date(),
            message: 'Hello, maan!',
            userId: Vlad.id,
            id: 'sda278sa',
        },
    ],
}

export const chatReducer = (store = initialStore, action: IChatAction) => {
    let messages = [...store.messages]
    switch (action.type) {
        case ChatActionTypes.ADD_MESSAGE:
            messages.push(action.payload)
            return { ...store, messages }
        case ChatActionTypes.DEL_MESSAGE:
            messages = messages.filter(
                (item: any) => item.id !== action.payload
            )
            return { ...store, messages }
        default:
            return store
    }
}
