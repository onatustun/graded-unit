import { Header } from "../components/layouts/Header"
import { Home } from "../components/Home"
import { Footer } from "../components/layouts/Footer"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Home  />
      <Footer />
    </div>
  )
}

