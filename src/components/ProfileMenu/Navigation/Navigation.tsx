import { NavLink } from 'react-router-dom'
import React from 'react'

export const Navigation = () => {
    let activeStyle = {
        color: 'red',
        textDecoration: 'none',
    }

    let inactiveStyle = {
        color: 'white',
        textDecoration: 'none',
    }

    let containerStyle = {
        width: '200px',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 10px',
    }

    return (
        <div style={containerStyle}>
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
        </div>
    )
}
