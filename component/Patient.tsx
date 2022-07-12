import React from 'react';
import styles from '../styles/Patient.module.scss'

type Patient = {
    name: string;
    pathImg: string;
    children: React.ReactNode
}

export default function Patient({name, pathImg, children}:Patient) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{name}</h2>
            <img src={pathImg}/>
            <div className={styles.wrap}>
                <div className={styles.child}>
                    {children}
                </div>
            </div>
        </div>
    );
}

