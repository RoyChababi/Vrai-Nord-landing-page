import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { Services } from './sections/Services'
import { WhyVraiNord } from './sections/WhyVraiNord'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyVraiNord />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
