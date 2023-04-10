import React, { useEffect } from 'react'
import styles from './Hero.module.css'
export const Hero = () => {
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8af513d0a8mshe16b494f53b94edp1606a8jsne2dcbe52bd92',
                'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
            }
        };

        fetch('https://unogs-unogs-v1.p.rapidapi.com/search/titles?order_by=date&type=movie', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));


        return () => {
        }
    }, [])


    return (
        <section className={styles.hero}>
            Hero
        </section>
    )
}
