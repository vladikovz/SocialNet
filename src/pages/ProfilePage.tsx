import React, { useEffect, useState } from 'react'
import { fetchAds } from '../redux/api/adsApi'
import { useDispatch } from 'react-redux'
import { MainAppLayout } from '../layouts/MainAppLayout/MainAppLayout'
import { ProfileLayout } from '../layouts/ProfilePageLayout/ProfileLayout'
import styled from 'styled-components'
import { BioBlock } from '../components/ProfilePageComponents/BioBlock/BioBlock'
import { TipsBlock } from '../components/ProfilePageComponents/TipsBlock/TipsBlock'
import { ButtonsBlock } from '../components/ProfilePageComponents/ButtonsBlock/ButtonsBlock'
import { useTypedSelector } from '../redux/hooks/useTypedSelector'
import { AdsCard } from '../components/AdsCard/AdsCard'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'
import { IProfileTabsValue } from '../Interfaces/IProfileTabsValue'
import { ProfileTabs } from '../constants/profileTabs'
import { SettingsBlock } from '../components/SettingsBlock/SettingsBlock'

const Item = styled.div`
    display: flex;
    flex-direction: column;
    //border: 1px solid black;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
`

export const ProfilePage = () => {
    const params = useParams<{
        tab: IProfileTabsValue
    }>()
    const dispatch = useDispatch()
    const [tabValue, setTabValue] = useState<IProfileTabsValue>(
        params.tab ? params.tab : ProfileTabs.myAds
    )
    const navigate = useNavigate()

    useEffect(() => {
        setTabValue(params.tab ? params.tab : ProfileTabs.myAds)
    }, [params])

    const { adsList } = useTypedSelector((store) => store.ads)

    const handleClick = () => {
        dispatch(fetchAds())
    }

    const handleNavChange = (newValue: IProfileTabsValue) => {
        setTabValue(newValue)
    }

    const handleAdsClick = (id: string) => {
        navigate(`/ads/${id}`)
    }

    const showMyAds = () => {
        const emptyPage = <div>Not found</div>
        if (!adsList.length) {
            return emptyPage
        }

        return adsList.map((item) =>
            item.userId === 'dsdfsf' ? (
                <AdsCard
                    onClick={() => handleAdsClick(item.id)}
                    key={uuidv4()}
                    data={item}
                />
            ) : (
                emptyPage
            )
        )
    }

    const showTab = (value: IProfileTabsValue) => {
        switch (value) {
            case ProfileTabs.myAds:
                return <Item>{showMyAds()}</Item>
            case ProfileTabs.settings:
                return (
                    <Item>
                        <SettingsBlock />
                    </Item>
                )
            case ProfileTabs.chat:
                return <Item>Chat</Item>
            case ProfileTabs.notifications:
                return <Item>Notifications</Item>
            case ProfileTabs.favorite:
                return <Item>Favorite</Item>
            default:
                return <Item>CARDS Nun</Item>
        }
    }

    return (
        <MainAppLayout>
            {/*<Button onClick={handleClick}>Fetch</Button>*/}
            <ProfileLayout
                bio={<BioBlock />}
                tips={<TipsBlock />}
                nav={
                    <ButtonsBlock
                        navValue={tabValue}
                        handleChange={handleNavChange}
                    />
                }
                cards={showTab(tabValue)}
            />
        </MainAppLayout>
    )
}
