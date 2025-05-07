import React from 'react'
import styles from './tabs.module.css'

export const tabsTitles = [
    { text: 'Авто', id: 'auto' },
    { text: 'Авиа', id: 'avia' },
    { text: 'Ж/Д', id: 'train' },
    { text: 'Мультимодальные', id: 'multi' },
]

export const Tabs = ({ onChange, selectedItem }) => {
    return (
        <div className={styles.container}>
            <div className={styles.buttonsContainer}>
                {tabsTitles.map(({ text, id }) => (
                    <button
                        key={id}
                        className={`${styles.button} ${id === selectedItem ? styles.active : ''}`}
                        onClick={() => onChange(id)}
                    >
                        <span className={styles.buttonText}>{text}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}
