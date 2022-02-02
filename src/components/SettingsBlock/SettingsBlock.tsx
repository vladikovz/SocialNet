import React, { useState } from 'react'
import * as S from './styles'
import { EditDialog } from './EditDialog/EditDialog'
import { useTypedSelector } from '../../redux/hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import {
    SetEmail,
    SetLogin,
    SetPassword,
    SetPhone,
} from '../../redux/actions/userActions'

type settingFields = 'login' | 'password' | 'phone' | 'email' | ''
export const SettingsBlock = () => {
    const { login, password, phone, email } = useTypedSelector(
        (store) => store.user
    )
    const dispatch = useDispatch()
    const [isDialog, setIsDialog] = useState<boolean>(false)

    const [currentParam, setCurrentParam] = useState<settingFields>('')

    const onEditButtonClick = (type: settingFields) => {
        setIsDialog(true)
        setCurrentParam(type)
    }

    const getClickedFieldParams = (type: settingFields) => {
        switch (type) {
            case 'login':
                return { title: 'Login', value: login }
            case 'password':
                return { title: 'Password', value: password, password: true }
            case 'phone':
                return { title: 'Phone', value: phone }
            case 'email':
                return { title: 'Email', value: email }
        }
    }

    const handleCloseDialog = () => {
        setIsDialog(false)
    }

    const saveData = (value: string) => {
        switch (currentParam) {
            case 'login':
                dispatch(SetLogin(value))
                break
            case 'password':
                dispatch(SetPassword(value))
                break
            case 'phone':
                dispatch(SetPhone(value))
                break
            case 'email':
                dispatch(SetEmail(value))
                break
        }
        setIsDialog(false)
    }

    const hidePassword = (password: string) => {
        let dots = ''
        for (let i = 0; i < password.length; i++) {
            dots = dots.concat('•')
        }
        return dots
    }

    return (
        <>
            <S.Container>
                <S.Field>
                    <S.FieldName>Login </S.FieldName>
                    <S.FieldValue>{login}</S.FieldValue>
                    <S.EditButton onClick={() => onEditButtonClick('login')}>
                        Edit
                    </S.EditButton>
                </S.Field>
                <S.Field>
                    <S.FieldName>Password </S.FieldName>
                    <S.FieldValue>{hidePassword(password)}</S.FieldValue>
                    <S.EditButton onClick={() => onEditButtonClick('password')}>
                        Edit
                    </S.EditButton>
                </S.Field>
                <S.Field>
                    <S.FieldName>Phone </S.FieldName>
                    <S.FieldValue>{phone}</S.FieldValue>
                    <S.EditButton onClick={() => onEditButtonClick('phone')}>
                        Edit
                    </S.EditButton>
                </S.Field>
                <S.Field>
                    <S.FieldName>Email </S.FieldName>
                    <S.FieldValue>{email}</S.FieldValue>
                    <S.EditButton onClick={() => onEditButtonClick('email')}>
                        Edit
                    </S.EditButton>
                </S.Field>
            </S.Container>
            <EditDialog
                isOpen={isDialog}
                onClose={handleCloseDialog}
                submit={(newValue) => saveData(newValue)}
                {...getClickedFieldParams(currentParam)}
            />
        </>
    )
}
