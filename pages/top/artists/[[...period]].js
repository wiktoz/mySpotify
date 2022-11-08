import Head from 'next/head'
import Artists from "../../../components/Artists"
import { SessionProvider } from 'next-auth/react'
import Link from 'next/link'
import {CgArrowLeft} from 'react-icons/cg'
import PeriodButtons from '../../../components/PeriodButtons'
import { useRouter } from 'next/router'

export default function TopArtists(){
  const router = useRouter()
  const {period} = router.query

    return (
        <SessionProvider>
        <div>
          <Head>
            <title>myspotify</title>
            <meta name="description" content="Your Fav Artists" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <div className="spotify-black flex flex-col justify-center min-h-screen text-white px-5 md:px-20">
                <div className="my-8">
                    <h1 className="font-bold text-5xl my-2">Your top Artists <span className="capitalize">{period}</span></h1>
                    <PeriodButtons type="artists" period={period} />
                    <Link href="/">
                      <p className="text-stone-400 hover:cursor-pointer my-2"><CgArrowLeft className="inline"/> Go Back</p>
                    </Link>
                </div>
                <div>
                    <Artists></Artists>
                </div>
            </div>
          </main>
        </div>
        </SessionProvider>
      )
}

