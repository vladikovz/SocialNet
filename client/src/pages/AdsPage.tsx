import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MainAppLayout } from '../layouts/MainAppLayout/MainAppLayout'
import { useTypedSelector } from '../redux/hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { GetAds } from '../redux/actions/adsActions'
import { TopLayout } from '../layouts/AdsPageLayouts/TopLayout'
import { PhotoViewer } from '../components/AdsPageComponents/PhotoViewer/PhotoViewer'
import { UserBox } from '../components/AdsPageComponents/UserBox/UserBox'
import { InfoBlock } from '../components/InfoBlock/InfoBlock'

export const AdsPage = () => {
    const params = useParams()
    const { currentAds } = useTypedSelector((store) => store.ads)
    const dispatch = useDispatch()
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        dispatch(GetAds(params.id))
    }, [])

    useEffect(() => {
        Object.keys(currentAds).length && setIsReady(true)
    }, [currentAds])

    if (!isReady) {
        return null
    }
    return (
        <MainAppLayout>
            <TopLayout>
                <PhotoViewer photo={currentAds.data.photo} />
                <UserBox />
            </TopLayout>
            <InfoBlock items={currentAds.data} />
        </MainAppLayout>
    )
}
