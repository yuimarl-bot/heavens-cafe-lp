import CallBar from './components/layout/CallBar'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Access from './components/sections/Access'
import Craft from './components/sections/Craft'
import Hero from './components/sections/Hero'
import Menu from './components/sections/Menu'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-base focus:px-4 focus:py-3 focus:text-ink"
      >
        本文へ移動
      </a>
      <div id="top" />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Craft />
        <Menu />
        <Access />
      </main>
      <Footer />
      <CallBar />
    </>
  )
}
