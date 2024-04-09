// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper/modules'
import { Slide } from './Slide'
import { Data_SLIDER } from '../../data/data'

export default function Slider() {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="md:h-[967px] h-[600px] "
            >
                {Data_SLIDER.map((data, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Slide
                                src={data.src}
                                headline={data.headline}
                                body={data.body}
                                cta={data.cta}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}
