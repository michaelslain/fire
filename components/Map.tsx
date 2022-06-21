import { FC, useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import styles from '../styles/Map.module.css'

interface Props {
    query: string
}

type Coords = {
    lat: number
    lng: number
}

const Marker: FC = () => <></>

const Map: FC<Props> = ({ query }: Props) => {
    const [coords, setCoords]: any = useState(null)

    useEffect(() => {
        if (query && query !== '') {
            fetch(
                `http://localhost:3000/api/get-location-from-address?address="${query}"`
            )
                .then(resData => resData.json())
                .then(data => {
                    const newCoords: Coords = { lat: data.lat, lng: data.lng }
                    setCoords(newCoords)
                })
        } else setCoords(36.778259, -119.417931)
    }, [query])

    const zoom = query && query !== '' ? 20 : 7

    return (
        <div className={styles.container}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyCBzA8xcX8n75CwUeAkEPfdBVtj9dMUlH4',
                }}
                center={{
                    lat: coords?.lat ?? 36.778259,
                    lng: coords?.lng ?? -119.417931,
                }}
                zoom={zoom}
            >
                <Marker />
            </GoogleMapReact>
        </div>
    )
}

export default Map
