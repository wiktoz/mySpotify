import { getSession } from "next-auth/react"
import fetchAPI from '../../../utils/fetchAPI'
import getSpotifyPeriod from '../../../utils/getSpotifyPeriod'

const getTopArtists = async (accessToken, period) => {
    const p = getSpotifyPeriod(period)

    const {items} = await fetchAPI(`/me/top/artists?limit=50&time_range=${p}`, accessToken)

    const artists = items.map((artist) => ({
        name: artist.name,
        artistUrl: artist.external_urls.spotify,
        popularity: artist.popularity,
        followers: artist.followers.total,
        image: artist.images[0].url
    }))

    return artists
}

const handler = async (req, res) => {
    const { period } = req.query
    const session = await getSession({req})
    const accessToken = session.token.accessToken

    const response = await getTopArtists(accessToken, period);
  
    return res.status(200).json({response});
};
  
export default handler;
