import { ServiceActionType, ServiceActionTypes } from '../types'

interface IServiceStore {
    isLogin: boolean
    login: string | null
}

export interface IServiceAction {
    type: ServiceActionType
    payload?: IServiceStore
}

const initialStore: IServiceStore = {
    isLogin: false,
    login: null,
}

export const serviceReducer = (
    store = initialStore,
    action: IServiceAction
): IServiceStore => {
    switch (action.type) {
        case ServiceActionTypes.LOGIN:
            return { ...store, ...action.payload }
        default:
            return store
    }
}
