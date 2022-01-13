import { NavLink } from 'react-router-dom'
import React from 'react'
interface INavigationProps {
    login: boolean
}
export const Navigation = (props: INavigationProps) => {
    const activeStyle = {
        color: 'red',
        textDecoration: 'none',
    }

    const inactiveStyle = {
        color: 'white',
        textDecoration: 'none',
    }

    const containerStyle = {
        width: '200px',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 10px',
    }

    return (
        <div style={containerStyle}>
            {props.login ? (
                <>
                    <NavLink
                        to="posts"
                        style={({ isActive }) =>
                            isActive ? activeStyle : inactiveStyle
                        }
                    >
                        Posts
                    </NavLink>
                    <NavLink
                        to="/profile"
                        style={({ isActive }) =>
                            isActive ? activeStyle : inactiveStyle
                        }
                    >
                        Profile
                    </NavLink>
                    <NavLink
                        to="/photo"
                        style={({ isActive }) =>
                            isActive ? activeStyle : inactiveStyle
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
