import { Consultation } from '../Components/Consultation'
import { Offers } from '../Components/Offers'
import { BestSelling } from '../Components/Product/BestSelling'
import { FeatureProduct } from '../Components/Product/FeatureProduct'
import Slider from '../Components/Slides/Slider'
import { Whyme } from '../Components/Whyme'

export const Home = () => {
    return (
        <div className="overflow-hidden overflow-x-hidden">
            <Slider />
            <FeatureProduct />
            <Consultation />
            <BestSelling />
            <Offers />
            <Whyme />
        </div>
    )
}
