import { LOG_IN } from '../types'

export interface IServiceAction {
    type: typeof LOG_IN
    payload?: boolean
}

interface IServiceStore {
    login: boolean
}

const initialStore: IServiceStore = {
    login: false,
}

export const serviceReducer = (
    store = initialStore,
    action: IServiceAction
): IServiceStore => {
    switch (action.type) {
        case LOG_IN:
            return { ...store, login: action.payload }
        default:
            return store
    }
}
