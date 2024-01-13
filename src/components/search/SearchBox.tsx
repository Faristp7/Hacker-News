
export default function SearchBox() {
  return (
    <div className="p relative">
      <div className="bg-orange-500 p-1 absolute w-full top-11 z-20">
        <input type="text" className="w-full dark:bg-gray-800 pl-9 py-1.5 rounded" placeholder="Search"/>
        <img className="w-5 h-5 absolute top-3 left-3" src="https://img.icons8.com/ios/50/FF6600/search--v1.png" alt="search--v1"/>
      </div>
    </div>
  )
}
