import NextAuth from "next-auth/next"
import SpotifyProvider from "next-auth/providers/spotify"

export default NextAuth({
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
            authorization: "https://accounts.spotify.com/authorize?show_dialog=true&scope="+process.env.SPOTIFY_SCOPE,
        })
    ],
    callbacks: {
        async jwt({token, account}) {
          if (account) {
            token.accessToken = account.refresh_token;
          }
          return token;
        },
        async session(session, user) {
          session.user = user;
          return session;
        },
    }
})