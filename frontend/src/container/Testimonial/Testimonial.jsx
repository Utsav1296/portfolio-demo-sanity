import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

import './Testimonial.scss'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([])
    const [currentIndex, setcurrentIndex] = useState(0)
    const [brands, setBrands] = useState([])

    useEffect(() => {
        const query = '*[_type == "testimonials"]'
        const brandsQuery = '*[_type == "brands"]'

        client.fetch(query)
            .then((data) => setTestimonials(data))

        client.fetch(brandsQuery)
            .then(data => setBrands(data))

    }, [])

    const handleClick = (index) => {
        setCurrentIndex = index
    }

    let test = testimonials[currentIndex]
    return (
        <>
            {testimonials.length && (<>
                <div className="app__testimonial-item app__flex" key={currentIndex}>
                    {/* <img src={urlFor(testimonials[0].imgurl)} alt='testimonial' /> */}
                    <img src={urlFor(test.imgurl)} alt={test.name} />
                    <div className="app__testimonial-content">
                        <p className="p-text">{test.feedback}</p>
                        <div>
                            <h4 className="bold-text">{test.name}</h4>
                            <h5 className="p-text">{test.company}</h5>
                        </div>
                    </div>
                </div>

                <div className="app__testimonial-btns app__flex" >
                    <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? (testimonials.length - 1) : (currentIndex - 1))}>
                        <HiChevronLeft />
                    </div>

                    <div className="app__flex" onClick={() => handleClick(currentIndex === (testimonials.length - 1) ? (0) : (currentIndex + 1))}>
                        <HiChevronRight />
                    </div>
                </div>
            </>
            )}

            <div className="app__testimonial-brands app__flex">
                {brands.map(brand => (
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        key={brand._id}
                    >
                        <img src={urlFor(brand.imgUrl)} alt={brand.name} />
                    </motion.div>
                ))}
            </div>
        </>
    )
}

// export default Testimonial
export default AppWrap(
    MotionWrap(Testimonial, 'app__testimonials app__flex'),
    'testimonial',
    'app__primarybg'
)