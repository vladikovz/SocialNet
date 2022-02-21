import * as S from './styles'
import React, { useState } from 'react'
import { IconButton } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons/faEllipsisH'
import { ParamsMenu } from '../ParamsMenu/ParamsMenu'
import { ProfileTabs } from '../../../constants/profileTabs'
import { useNavigate } from 'react-router-dom'
import { IParams__btnProps } from './styles'
import moment from 'moment'
import { UserAvatar } from '../../UserAvatar/UserAvatar'
const ImgUrl =
    'https://cdn.pixabay.com/photo/2016/10/12/02/27/denali-national-park-1733313_1280.jpg'

interface IChatCardProps {
    onCardClick: () => void
    onAvatarClick: () => void
}
export const ChatCard = (props: IChatCardProps) => {
    const [isOpenParamsMenu, setIsOpenParamsMenu] = useState(false)
    const [paramsMenuAnchorEl, setParamsMenuAnchorEl] = React.useState(null)
    const [paramsMenuBtnColor, setParamsMenuBtnColor] = useState('#7e7e7e')
    const [isParamsMenuBtnVisible, setIsParamsMenuBtnVisible] =
        useState<IParams__btnProps>({
            visible: 'hidden',
        })
    const navigate = useNavigate()

    const handleClickParamsBtn = (event: any) => {
        setIsParamsMenuBtnVisible({ visible: 'visible' })
        setParamsMenuAnchorEl(event.currentTarget)
        setIsOpenParamsMenu(true)
        event.stopPropagation()
    }

    const handleCloseParamsMenu = (e?: any) => {
        setIsParamsMenuBtnVisible({ visible: 'hidden' })
        setIsOpenParamsMenu(false)
        if (e) {
            e.stopPropagation()
        }
    }

    const handleParamsMenuItemClick = (path: ProfileTabs) => {
        handleCloseParamsMenu()
        navigate(`/profile/${path}`)
    }

    const handleAvatarClick = (e: any) => {
        e.stopPropagation()
        props.onAvatarClick()
    }

    const handleCardClick = (e: any) => {
        props.onCardClick()
        e.stopPropagation()
    }
    return (
        <S.Container onClick={handleCardClick}>
            <S.Avatar onClick={(e) => handleAvatarClick(e)}>
                <UserAvatar name={'V S'} sizeEm={2} border={2} hover />
            </S.Avatar>
            <S.Photo src={ImgUrl} alt={'Ads picture'} />
            <S.Content>
                <S.Content__name>Ivan</S.Content__name>
                <S.Content__item>Product manager</S.Content__item>
                <S.Content__message>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur corporis debitis deserunt eveniet fugit in modi
                    odit quos reiciendis. Beatae culpa enim explicabo ipsum
                    natus nostrum perspiciatis possimus quaerat sed!
                </S.Content__message>
            </S.Content>
            <S.Params>
                <S.Params__date>
                    {moment(new Date()).format('MMM DD')}
                </S.Params__date>
                <S.Params__Btn
                    visible={isParamsMenuBtnVisible.visible}
                    onClick={(e) => handleClickParamsBtn(e)}
                >
                    <IconButton aria-label="Example">
                        <FontAwesomeIcon
                            onMouseOver={() => setParamsMenuBtnColor('black')}
                            onMouseOut={() => setParamsMenuBtnColor('#7e7e7e')}
                            color={paramsMenuBtnColor}
                            icon={faEllipsisH}
                        />
                    </IconButton>
                </S.Params__Btn>
                <ParamsMenu
                    isOpen={isOpenParamsMenu}
                    onClose={handleCloseParamsMenu}
                    anchorEl={paramsMenuAnchorEl}
                />
            </S.Params>
        </S.Container>
    )
}
