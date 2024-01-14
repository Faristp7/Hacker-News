import { useNavigate } from "react-router-dom"

export default function MobileNavBar() {
    const navigate = useNavigate()
    return (
        <div className="fixed bg-orange-800 w-full z-30 block sm:hidden">
            <div className="flex justify-between align-middle items-center">
                <div className="ml-3">
                    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/less-than.png"
                        alt="less-than"
                        className="w-5 h-5"
                        onClick={() => navigate(-1)} />
                </div>
                <div className="flex justify-end items-center gap-5 py-3 pr-5">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="share app" className="w-5 h-5" />
                    <img src="https://img.icons8.com/dotty/80/ffffff/news.png" alt="news" className="w-5 h-5" />
                    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/menu-2.png" alt="share app" className="w-5 h-5" />
                </div>
            </div>
        </div>
    )
}
