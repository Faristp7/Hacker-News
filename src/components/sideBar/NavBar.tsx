import { useNavigate } from "react-router-dom"


export default function NavBar() {
    document.title = 'Options'
    const navigate = useNavigate()

    return (
        <div>
            <div className="bg-orange-800 p-3 fixed w-full">
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/less-than.png"
                    alt="less-than"
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => navigate(-1)} />
            </div>
        </div>
    )
}
