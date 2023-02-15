import React from 'react'
import styles from './style.module.css'

interface IMainAppLayout {
    children: React.ReactNode
}
export const MainAppLayout = (props: IMainAppLayout) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>{props.children}</div>
        </div>
    )
}
