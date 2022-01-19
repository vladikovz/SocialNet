import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MainAppLayout } from '../layouts/MainAppLayout/MainAppLayout'
import { useTypedSelector } from '../redux/hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { GetAds } from '../redux/actions/adsActions'

export const AdsPage = () => {
    const params = useParams()
    const { currentAds } = useTypedSelector((store) => store.ads)
    const dispatch = useDispatch()
    const [isReady, setIsReady] = useState(false)
    useEffect(() => {
        dispatch(GetAds(params.id))
        Object.keys(currentAds).length && setIsReady(true)
    }, [])

    return isReady ? (
        <MainAppLayout>{JSON.stringify(currentAds, null, 4)}</MainAppLayout>
    ) : (
        <></>
    )
}
