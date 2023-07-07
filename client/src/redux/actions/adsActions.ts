import { AdsActionTypes } from '../types'
import { IAds } from '../../Interfaces/IAds'
import { IAdsAction } from '../reducers/adsReducer'

export const AddAds = (payload: IAds): IAdsAction => ({
    type: AdsActionTypes.ADD_ADS,
    payload,
})

export const GetAds = (payload: string): IAdsAction => ({
    type: AdsActionTypes.GET_ADS,
    payload,
})
