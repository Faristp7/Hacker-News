import { useSelector } from 'react-redux'
import '../../App.css'
import { useEffect, useState } from 'react'
import { fetchComments } from '../../services/hackerNewsApi'
import Banner from '../InfoBannerComment/Banner'

export default function Comment() {
  document.title = 'Comments'

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [comments, setComments] = useState<any[]>([])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const commentIds = useSelector((state: any) => state.data.kids)


  useEffect(() => {
    (async () => {
      if (commentIds && commentIds.length > 0) {
        const fetchedComments = await fetchComments(commentIds.kids);
        setComments(fetchedComments)
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comments])
  console.log(commentIds)

  return (
    <div className="h-screen overflow-y-auto">
      {!commentIds ? (
        <div className="flex items-center justify-center">
          <p className="text-3xl text-gray-400 dark:text-gray-700 mt-[30%]">No Story Selected</p>
        </div>
      ) : (
        <div>
          <Banner bannerInfo={commentIds}/>
          {comments.map((comment) => (
            <div key={comment.id}>
              <p dangerouslySetInnerHTML={{ __html: comment.text }} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
