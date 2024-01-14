import HomeNews from "../components/HomeNews/HomeNews"
import Navbar from "../components/navbar/Navbar"
import SideBar from "../components/sideBar/SideBar"

export default function Home() {
  document.title = 'Home'
  return (
    <>
      <div className="relative">
        <Navbar />
      </div>

      <div >
        <HomeNews />
      </div>

      <div>
        <SideBar/>
      </div>
    </>
  )
}
