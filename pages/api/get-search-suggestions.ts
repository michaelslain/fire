import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const resData = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/input=${req.query.address}&key=${process.env.GOOGLE_MAPS_API_KEY}`
    )

    const data = await resData.json()

    console.log(data)

    res.status(200).json({})
}
