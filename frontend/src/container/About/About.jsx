import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
// import { images } from '../../constants'
import { urlFor, client } from '../../client'

import './About.scss'

const About = () => {
    const [abouts, setAbouts] = useState([])

    useEffect(() => {
        const query = '*[_type == "abouts"]'

        client.fetch(query)
            .then(data => setAbouts(data))
    }, [])


    // const abouts = [
    //     { title: 'Web Devlopment', description: 'I love working on web technologies', imageUrl: images.about01 },
    //     { title: 'Web Design', description: 'I am willing to learn web design', imageUrl: images.about02 },
    //     { title: 'Backend Design', description: 'I am learning backend', imageUrl: images.about03 },
    //     { title: 'Faculty', description: 'I was a physics faculty at past', imageUrl: images.about04 },
    // ]

    return (
        <>
            <h2 className='head-text'>I know that <span>Good Dev</span><br />means <span>Good Business</span>
            </h2>

            {/* profile */}
            <div className="app__profile">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className='app__profile-item'
                        key={about.title + index}
                    >
                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg')