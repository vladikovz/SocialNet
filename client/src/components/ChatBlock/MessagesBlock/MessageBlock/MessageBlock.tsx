import React, { useState } from 'react'
import * as S from './styles'
import moment from 'moment'
import { IMessage } from '../../../../redux/reducers/chatReducer'
import { UserAvatar } from '../../../UserAvatar/UserAvatar'
import { ParamsMenu } from '../../ParamsMenu/ParamsMenu'
import { IParamsMenuItem } from '../../../../Interfaces/IParamsMenuItem'
import { useDispatch } from 'react-redux'
import { DelMessage } from '../../../../redux/actions/chatActions'
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector'

interface IMessageBlockProps {
    message: IMessage
}

export const MessageBlock = (props: IMessageBlockProps) => {
    const { login } = useTypedSelector((store) => store.serve)
    const currentPerson: boolean = props.message.sender === login
    const [isOpenParamsMenu, setIsOpenParamsMenu] = useState(false)
    const [paramsMenuAnchorEl, setParamsMenuAnchorEl] = React.useState(null)
    const dispatch = useDispatch()

    const handleCloseParamsMenu = (e?: React.MouseEvent<HTMLDivElement>) => {
        setIsOpenParamsMenu(false)
        if (e) {
            e.stopPropagation()
        }
    }

    const MESSAGE_PARAMS_MENU_ITEMS: IParamsMenuItem[] = [
        {
            name: 'Delete',
            onClick: () => handleDelBtnClick(),
        },
    ]

    const handleDelBtnClick = () => {
        dispatch(DelMessage(props.message.id))
        setIsOpenParamsMenu(false)
    }

    const handleClickMessageBtn = (event: React.MouseEvent<HTMLDivElement>) => {
        setParamsMenuAnchorEl(event.currentTarget)
        setIsOpenParamsMenu(true)
        event.stopPropagation()
    }

    return (
        <>
            {currentPerson ? (
                <S.Container position={'right'}>
                    <S.Text onClick={handleClickMessageBtn}>
                        {props.message.message}{' '}
                        <S.Time>
                            {moment(props.message.time).format('LT')}
                        </S.Time>
                    </S.Text>
                </S.Container>
            ) : (
                <S.Container position={'left'}>
                    <S.Text onClick={handleClickMessageBtn}>
                        {props.message.message}
                        <S.Time>
                            {moment(props.message.time).format('LT')}
                        </S.Time>
                    </S.Text>
                    <UserAvatar
                        name={props.message?.sender ?? ''}
                        size={2}
                        fontSize={12}
                        border={2}
                    />
                </S.Container>
            )}
            <ParamsMenu
                isOpen={isOpenParamsMenu}
                onClose={handleCloseParamsMenu}
                anchorEl={paramsMenuAnchorEl}
                items={MESSAGE_PARAMS_MENU_ITEMS}
            />
        </>
    )
}
