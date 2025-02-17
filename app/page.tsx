import { BookNow } from "@/components/ui/bookNow"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col py-32 px-4 items-center min-h-screen text-center">
      <h1 className="text-9xl max-w-[800px] mb-4">text text <span className="italic text-primary">text</span> text</h1>
      <p className="text-xl max-w-[500px] mb-6">text text text text text text text text text text text text text text text</p>
      <div className="flex flex-col md:flex-row items-center gap-6 mb-36">
        <BookNow className="max-md:px-[100%] max-md:rounded-xl" />
        <Link href="/" className={`${buttonVariants({ variant: "ghost" })} max-md:px-[100%]`}>
         Learn More
        </Link>
      </div>
      <div className="aspect-video w-full max-w-[1400px] rounded-3xl shadow-xl bg-foreground"></div>
    </div>
  )
}

