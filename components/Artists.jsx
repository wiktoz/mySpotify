import useSWR from 'swr'
import { useRouter } from 'next/router'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Artists() {
    const router = useRouter()
    const { data, error } = useSWR(`/api/spotify/getTopArtists?period=${router.query.period}`, fetcher)

    function splitNumber(number){
        number = number.toString()
        let helper = ''
        for(let i=number.length; i>0; i--){
            if((number.length - i)%3==0) helper = " "+helper
            helper = number[i-1]+helper
        }
        return helper
    }

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <div>
            {
            data.response.map((artist, i) =>{
                return (
                    <div className="py-2" key={i}>
                        <div className="flex flex-row justify-left items-center">
                            <img 
                            className="w-20 md:w-30 lg:w-36"
                            src={artist.image}
                            />
                            <div className="flex flex-col px-5">
                                <p className="text-stone-300 font-semibold md:text-2xl">
                                    <span className="pr-2">{i+1}. {artist.name}</span>
                                </p>
                                <p className="text-stone-400">
                                    {splitNumber(artist.followers)} followers
                                </p>
                                <p className="text-stone-400">
                                    <a target="_blank" href={artist.artistUrl}>See</a>
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