import React from 'react'
import styles from './ModalVideo.module.css'
function ModalVideo({ movieDetails }) {
    return (
        <div className={styles.content}>
            <h1>{movieDetails.title}</h1>
            <p>{movieDetails.overview}</p>
            <button>More Details</button>
        </div>
    )
}

export default ModalVideo