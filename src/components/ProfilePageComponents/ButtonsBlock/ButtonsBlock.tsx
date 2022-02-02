import React from 'react'
import * as S from './styles'
import { IProfileTabsValue } from '../../../Interfaces/IProfileTabsValue'
import { ProfileTabs } from '../../../constants/profileTabs'

interface IButtonsBlockProps {
    navValue: IProfileTabsValue
    handleChange: (value: IProfileTabsValue) => void
}

export const ButtonsBlock = (props: IButtonsBlockProps) => {
    function a11yProps(index: IProfileTabsValue) {
        return {
            value: index,
            id: `profile-tab-${index}`,
            // 'aria-controls': `profile-tabpanel-${index}`,
        }
    }

    return (
        <S.Container>
            <S.CustomTabs
                value={props.navValue}
                onChange={(_, newValue: IProfileTabsValue) =>
                    props.handleChange(newValue)
                }
                aria-label="profile tabs"
            >
                <S.CustomTab label="My ads" {...a11yProps(ProfileTabs.myAds)} />
                <S.CustomTab label="Chat" {...a11yProps(ProfileTabs.chat)} />
                <S.CustomTab
                    label="Notifications"
                    {...a11yProps(ProfileTabs.notifications)}
                />
                <S.CustomTab
                    label="Favorite"
                    {...a11yProps(ProfileTabs.favorite)}
                />
                <S.CustomTab
                    label="Settings"
                    {...a11yProps(ProfileTabs.settings)}
                />
            </S.CustomTabs>
        </S.Container>
    )
}
