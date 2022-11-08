import { getSession } from "next-auth/react"
import fetchAPI from '../../../utils/fetchAPI'
import getSpotifyPeriod from '../../../utils/getSpotifyPeriod'

const getTopTracks = async (accessToken, period) => {
    const p = getSpotifyPeriod(period)
    
    const {items} = await fetchAPI(`/me/top/tracks?limit=50&time_range=${p}`, accessToken)

    const tracks = items.map((track) => ({
        artist: track.artists.map((_artist) => _artist.name).join(', '),
        songUrl: track.external_urls.spotify,
        title: track.name,
        explicit: track.explicit,
        duration_ms: track.duration_ms,
        image: track.album.images[0].url
    }))

    return tracks
}

const handler = async (req, res) => {
    const { period } = req.query
    const session = await getSession({req});
    const accessToken = session.token.accessToken;

    const response = await getTopTracks(accessToken, period);
  
    return res.status(200).json({response});
  };
  
export default handler;
