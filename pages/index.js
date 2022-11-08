import Head from 'next/head'
import SpotifyLoginButton from '../components/SpotifyLoginButton'
import Logged from '../components/Logged'
import { SessionProvider } from 'next-auth/react'

export default function Home() {
  return (
    <SessionProvider>
    <div>
      <Head>
        <title>myspotify</title>
        <meta name="description" content="Spotify Stats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col items-center justify-center h-screen w-screen text-white px-5">
          <div>
            <div className="mb-10">
              <h1 className="font-bold text-5xl mb-2">Welcome to myspotify</h1>
              <p className="text-stone-400">See your Top Listened Artists and Tracks</p>
            </div>
            <Logged></Logged>
            <SpotifyLoginButton></SpotifyLoginButton>
          </div>
        </div>
      </main>
    </div>
    </SessionProvider>
  )
}
