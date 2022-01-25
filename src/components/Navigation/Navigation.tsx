import { NavLink } from 'react-router-dom'
import * as S from './styles'
import React from 'react'
interface INavigationProps {
    login: boolean
}
export const Navigation = (props: INavigationProps) => {
    return (
        <div style={S.containerStyle}>
            {props.login ? (
                <>
                    <NavLink
                        to="posts"
                        style={({ isActive }) =>
                            isActive ? S.activeStyle : S.inactiveStyle
                        }
                    >
                        Posts
                    </NavLink>
                    <NavLink
                        to="/profile"
                        style={({ isActive }) =>
                            isActive ? S.activeStyle : S.inactiveStyle
                        }
                    >
                        Profile
                    </NavLink>
                    <NavLink
                        to="/photo"
                        style={({ isActive }) =>
                            isActive ? S.activeStyle : S.inactiveStyle
                        }
                    >
                        Photo
                    </NavLink>
                </>
            ) : (
                <></>
            )}
        </div>
    )
}
