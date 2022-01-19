import { AdsActionType, AdsActionTypes } from '../types'
import { IAds } from '../../Interfaces/IAds'
import { SampleAds } from '../../constants/dataFilling'

export interface IAdsAction {
    type: AdsActionType
    payload: any
}

interface IAdsStore {
    adsList: IAds[]
    currentAds: IAds
}

const initialStore: IAdsStore = {
    adsList: SampleAds,
    currentAds: {} as IAds,
}

export const adsReducer = (store = initialStore, action: IAdsAction) => {
    const adsList = [...store.adsList]

    switch (action.type) {
        case AdsActionTypes.ADD_ADS:
            adsList.push(action.payload)
            return { ...store, adsList }
        case AdsActionTypes.GET_ADS: {
            const foundAds = store.adsList.find(
                (item) => item.id === action.payload
            )
            return { ...store, currentAds: foundAds }
        }
        default:
            return store
    }
}
