import useSWR from 'swr'
import { useRouter } from 'next/router'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Tracks() {
    const router = useRouter()
    const { data, error } = useSWR(`/api/spotify/getTopTracks?period=${router.query.period}`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <div>
            {
            data.response.map((track, i) =>{
                return (
                    <div className="py-2" key={i}>
                        <div className="flex flex-row justify-left items-center">
                            <img 
                            className="w-20 md:w-30 lg:w-36"
                            src={track.image}
                            />
                            <div className="flex flex-col px-5">
                                <p className="text-stone-300 font-semibold md:text-2xl">
                                    <span className="pr-2">{i+1}. {track.artist} - {track.title}</span>
                                    {track.explicit &&
                                        <span className="text-stone-400 text-sm">Explicit</span>
                                    }
                                </p>
                                <p className="text-stone-400">
                                    <a target="_blank" href={track.songUrl}>Listen</a>
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}