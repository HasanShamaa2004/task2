import axios from 'axios'
import { useEffect, useState } from 'react'

type FetchProps = {
    id?: number
    title: string
    description: string
    img: string
    category?: string
    brand: string
    price: number
    rating: string
}

export const FetchData = () => {
    const [GetData, setGetData] = useState<FetchProps[] | null>(null)
    useEffect(() => {
        try {
            async function getData() {
                const res = await axios.get('http://localhost:5173/data.json')
                if (res.status === 200) setGetData(res.data)
            }
            getData()
        } catch (err) {
            console.log(err)
        }
    }, [])
    return GetData
}
