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
const ImgUrl =
    'https://phonoteka.org/uploads/posts/2021-05/1622467118_16-phonoteka_org-p-vselennaya-kosmos-art-krasivo-18.jpg'

export const ChatCard = () => {
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
    }

    const handleCloseParamsMenu = () => {
        setIsParamsMenuBtnVisible({ visible: 'hidden' })
        setIsOpenParamsMenu(false)
    }

    const handleParamsMenuItemClick = (path: ProfileTabs) => {
        handleCloseParamsMenu()
        navigate(`/profile/${path}`)
    }

    return (
        <S.Container>
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
