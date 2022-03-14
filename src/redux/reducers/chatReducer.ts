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
        },
        {
            time: new Date(),
            message: 'Hello, maan!',
            userId: Vlad.id,
        },
        {
            time: new Date(),
            message: 'Hello, maan!',
            userId: Vlad.id,
        },
        {
            time: new Date(),
            message: 'Hello, maan!',
            userId: Elena.id,
        },
        {
            time: new Date(),
            message: 'Hello, maan!',
            userId: Vlad.id,
        },
    ],
}

export const chatReducer = (store = initialStore, action: IChatAction) => {
    const messages = JSON.parse(JSON.stringify(store.messages))
    messages.push(action.payload)
    switch (action.type) {
        case ChatActionTypes.ADD_MESSAGE:
            return { ...store, messages }
        default:
            return store
    }
}
