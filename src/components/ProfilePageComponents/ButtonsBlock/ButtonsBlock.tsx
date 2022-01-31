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
                <S.CustomTab
                    label="Settings"
                    {...a11yProps(ProfileTabs.settings)}
                />
                <S.CustomTab
                    label="Manage"
                    {...a11yProps(ProfileTabs.manage)}
                />
                <S.CustomTab label="Some" {...a11yProps(ProfileTabs.some)} />
            </S.CustomTabs>
        </S.Container>
    )
}
