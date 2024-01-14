import { useSelector } from 'react-redux'
import '../../App.css'
import { useEffect, useState } from 'react'
import { convertTimestampToTimeAgo, fetchComments } from '../../services/hackerNewsApi'
import Banner from '../InfoBannerComment/Banner'
import NavigationBar from '../KeyboardNavigationBar/NavigationBar'
import DOMPurify from 'dompurify'

export default function Comment() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [comments, setComments] = useState<any[]>([])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const commentIds = useSelector((state: any) => state.data.kids)


  useEffect(() => {
    (async () => {
      if (commentIds?.kids && commentIds?.kids.length > 0) {
        const fetchedComments = await fetchComments(commentIds?.kids);
        setComments(fetchedComments)
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentIds])
  console.log(comments);

  return (
    <div className="h-screen overflow-y-auto">
      {!commentIds ? (
        <div className="flex items-center justify-center">
          <p className="text-3xl text-gray-400 dark:text-gray-700 mt-[30%]">No Story Selected</p>
        </div>
      ) : (
        <div>
          <Banner bannerInfo={commentIds} />
          {comments.map((comment) => (
            <div key={comment.id} className='pl-2 py-2'>
              <div className='flex gap-5'>
                <div className='flex gap-1.5'>
                  <img className='w-4 h-4 mt-0.5' src="https://img.icons8.com/material-sharp/24/e8671c/user.png" alt="user" />
                  <p className='text-sm text-orange-700'>{comment.by}</p>
                </div>
                <div className='text-sm'>
                  <p className='text-sm text-gray-400'>
                    {convertTimestampToTimeAgo(comment.time)}
                  </p>
                </div>
              </div>
              <div className='p-1 py-2 text-sm'>
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.text) }} />
              </div>
              <hr className='opacity-45 border-gray-600' />
            </div>
          ))}
        </div>
      )}
      {
        commentIds &&
        <NavigationBar />
      }
    </div>
  )
}
