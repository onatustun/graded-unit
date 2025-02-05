import { Header } from "@/components/layouts/header"
import { Home } from "@/components/home"
import { Footer } from "@/components/layouts/footer"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Home  />
      <Footer />
    </div>
  )
}

