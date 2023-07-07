import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { rootReducerType } from '../reducers'

export const useTypedSelector: TypedUseSelectorHook<rootReducerType> =
    useSelector
