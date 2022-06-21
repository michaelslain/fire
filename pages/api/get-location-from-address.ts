import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    lat: number
    lng: number
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const resData = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${req.query.address}&key=${process.env.GOOGLE_MAPS_API_KEY}`
    )
    const data = await resData.json()

    console.log(data)

    res.status(200).json({
        lat: data.results[0].geometry.location.lat ?? 36.778259,
        lng: data.results[0].geometry.location.lng ?? -119.417931,
    })
}
