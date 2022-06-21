import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    setTimeout(() => {
        const score: number = Math.floor(Math.random() * 100) + 1
        const vegitationAmount: number = Math.floor(Math.random() * 50)
        let averageVegitationHeight: 'short' | 'medium' | 'tall'
        switch (Math.floor(Math.random() * 3) + 1) {
            case 1:
                averageVegitationHeight = 'short'
                break
            case 2:
                averageVegitationHeight = 'medium'
                break
            case 3:
            default:
                averageVegitationHeight = 'tall'
                break
        }
        let dangerZone: boolean = Math.random() < 0.5

        return res.json({
            score,
            vegitationAmount,
            averageVegitationHeight,
            dangerZone,
        })
    }, 1000)
}
