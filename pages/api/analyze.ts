import type { NextApiRequest, NextApiResponse } from 'next'
import * as Precisely from 'preciselyapis-client'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const oAuth = new Precisely.OAuth()

        oAuth.oAuthApiKey = process.env.PRECISELY_PUBLIC_KEY ?? ''
        oAuth.oAuthSecret = process.env.PRECISELY_SECRET_KEY ?? ''

        oAuth
            .getOAuthCredentials()
            .then(data => {
                const propertyInfoAPI =
                    new Precisely.PropertyInformationServiceApi(data.body)

                propertyInfoAPI
                    .getParcelBoundaryByAddress(
                        Array.isArray(req.query.address)
                            ? req.query.address[0]
                            : req.query.address
                    )
                    .then(response => {
                        res.json(response.body)
                    })
                    .catch(response => {
                        console.log('Error ' + JSON.stringify(response.body))
                    })
            })
            .catch(error => {
                res.json({ bruh: 'not cool 2' })
            })
    } catch (err) {
        // console.error(err)
        res.json({ bruh: 'not cool 1' })
    }
}
