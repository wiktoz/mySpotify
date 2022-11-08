import '../styles/globals.css'
import Transition from '../components/Transition'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Transition>
      <Component {...pageProps} />
      <Footer/>
    </Transition>
    </>
  )
}

export default MyApp
