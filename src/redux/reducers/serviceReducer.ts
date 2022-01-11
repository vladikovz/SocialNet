import { ServiceActionType, ServiceActionTypes } from '../types'

export interface IServiceAction {
    type: ServiceActionType
    payload?: any
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
        case ServiceActionTypes.LOG_IN:
            return { ...store, login: action.payload }
        default:
            return store
    }
}
