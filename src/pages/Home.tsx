import HomeNews from "../components/HomeNews/HomeNews"
import Navbar from "../components/navbar/Navbar"

export default function Home() {
  document.title = 'Home'
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <HomeNews />
      </div>
    </>
  )
}
