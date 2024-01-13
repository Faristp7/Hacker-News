import NavBar from "../components/StorieNavbar/NavBar";
import Comment from "../components/commentSection/Comment";

export default function Stories() {
  return (
    <div className='hidden sm:block ' >
      <div className="relative overflow-y-auto">
        <NavBar />
      </div>
      <div className="pt-10 overflow-y-auto">
        <Comment/>
      </div>
    </div>
  )
}
