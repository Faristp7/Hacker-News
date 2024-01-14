import { useSelector } from "react-redux"

export default function NavBar() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const commentIds = useSelector((state: any) => state.data.kids)

    return (
        <div className="fixed bg-orange-800 w-2/3 z-30">
            {commentIds ?
                (
                    <div className="flex justify-end items-center gap-5 py-3 pr-5">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="share app" className="w-5 h-5" />
                        <img src="https://img.icons8.com/dotty/80/ffffff/news.png" alt="news" className="w-5 h-5" />
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/menu-2.png" alt="share app" className="w-5 h-5" />
                    </div>
                ) : (
                    <div className="pt-11"></div>
                )
            }
        </div>
    )
}
