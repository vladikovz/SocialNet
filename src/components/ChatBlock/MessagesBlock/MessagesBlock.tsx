import React, { useState } from 'react'
import * as S from './styles'
import { AdsInfo } from './AdsInfo/AdsInfo'
import { IconButton } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { ParamsMenu } from '../ParamsMenu/ParamsMenu'
import { ProfileTabs } from '../../../constants/profileTabs'
import { useNavigate } from 'react-router-dom'

const PRIMARY_BTN_COLOR = '#7e7e7e'
const SECONDARY_BTN_COLOR = 'black'

interface IMessagesBlockProps {
    onBtnBackClick: () => void
}

export const MessagesBlock = (props: IMessagesBlockProps) => {
    const [isOpenParamsMenu, setIsOpenParamsMenu] = useState(false)
    const [paramsMenuAnchorEl, setParamsMenuAnchorEl] = React.useState(null)
    const [btnColor, setBtnColor] = useState(PRIMARY_BTN_COLOR)
    const navigate = useNavigate()

    const handleParamsMenuItemClick = (path: ProfileTabs) => {
        handleCloseParamsMenu()
        navigate(`/profile/${path}`)
    }

    const handleClickParamsBtn = (event: any) => {
        setParamsMenuAnchorEl(event.currentTarget)
        setIsOpenParamsMenu(true)
        event.stopPropagation()
    }

    const handleCloseParamsMenu = (e?: any) => {
        setIsOpenParamsMenu(false)
        if (e) {
            e.stopPropagation()
        }
    }

    const handleClickBackBtn = () => {
        props.onBtnBackClick()
    }

    return (
        <S.Container>
            <S.HeaderField>
                <S.HeaderField__BackBtn
                    onClick={handleClickBackBtn}
                    onMouseOver={() => setBtnColor(SECONDARY_BTN_COLOR)}
                    onMouseOut={() => setBtnColor(PRIMARY_BTN_COLOR)}
                >
                    <IconButton aria-label="BackBtn">
                        <FontAwesomeIcon color={btnColor} icon={faAngleLeft} />
                    </IconButton>
                </S.HeaderField__BackBtn>
                <S.HeaderField__AdsInfo>
                    <AdsInfo
                        onCardClick={() => null}
                        onAvatarClick={() => null}
                    />
                </S.HeaderField__AdsInfo>
                <S.HeaderField__Params
                    onClick={(e) => handleClickParamsBtn(e)}
                    onMouseOver={() => setBtnColor(SECONDARY_BTN_COLOR)}
                    onMouseOut={() => setBtnColor(PRIMARY_BTN_COLOR)}
                >
                    <IconButton aria-label="Params">
                        <FontAwesomeIcon color={btnColor} icon={faEllipsisV} />
                    </IconButton>
                    <ParamsMenu
                        isOpen={isOpenParamsMenu}
                        onClose={handleCloseParamsMenu}
                        anchorEl={paramsMenuAnchorEl}
                    />
                </S.HeaderField__Params>
            </S.HeaderField>
            <S.MainField></S.MainField>
            <S.InputField></S.InputField>
        </S.Container>
    )
}
