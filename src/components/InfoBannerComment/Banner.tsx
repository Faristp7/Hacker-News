import { convertTimestampToTimeAgo } from "../../services/hackerNewsApi";

interface BannerInfo {
    title: string
    score: number
    time: number
    descendants: string
    url: string
    by: string
}

const Banner: React.FC<{ bannerInfo: BannerInfo }> = ({ bannerInfo }) => {
  document.title = 'Comments'
    return (
        <div className="bg-orange-900 p-3">
            <div className="text-white">
                <h6>{bannerInfo.title}</h6>
                <div className="flex gap-3 text-sm  text-gray-300 mt-1">
                    <p>{bannerInfo.score}</p>
                    <p>{bannerInfo.by}</p>
                    <p>{convertTimestampToTimeAgo(bannerInfo.time)}</p>
                    <div className="flex gap-1">
                        <img className="w-3.5 h-3.5 mt-1" src="https://img.icons8.com/ios/50/ffffff/speech-bubble--v1.png" alt="speech-bubble--v1" />
                        <p>{bannerInfo.descendants}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1 mt-3 text-gray-300">
                <div className="flex gap-2 text-sm">
                    <img className="w-4 h-4 mt-0.5" src="https://img.icons8.com/glyph-neue/64/ffffff/share-3.png" alt="share-3" />
                    <a href={bannerInfo.url} target="_blank">{bannerInfo.url}</a>
                </div>
                <div className="flex gap-2 text-sm">
                    <img className="w-4 h-4 mt-0.5" src="https://img.icons8.com/glyph-neue/64/ffffff/share-3.png" alt="share-3" />
                    <a href="https://news.ycombinator.com/item?id=38987109" target="_blank">https://news.ycombinator.com/item?id=38987109</a>
                </div>
            </div>
        </div>
    )
}

export default Banner