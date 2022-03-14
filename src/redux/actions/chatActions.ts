import { ChatActionTypes } from '../types'
import { IChatAction, IMessage } from '../reducers/chatReducer'

export const AddMessage = (payload: IMessage): IChatAction => ({
    type: ChatActionTypes.ADD_MESSAGE,
    payload,
})
