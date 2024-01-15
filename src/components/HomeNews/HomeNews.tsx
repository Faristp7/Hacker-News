import { tailspin } from 'ldrs'
import React, { useState } from 'react'
import { convertTimestampToTimeAgo, fetchStoryDetails, fetchTopStories } from '../../services/hackerNewsApi'
import '../../App.css'
import { useDispatch } from 'react-redux'
import { setKids } from '../../Redux/dataSlice'
import { useNavigate } from 'react-router-dom'

tailspin.register()

export default function HomeNews() {
    document.title = 'Home'
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [topStories, setTopStories] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [page, setpages] = useState<number>(25)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDataChange = (values: any) => {
        const w = window.innerWidth

        dispatch(setKids(values))

        if (w < 640) {
            navigate('/comment')
        }
    }

    React.useEffect(() => {
        (async () => {
            const storyIds = await fetchTopStories()

            const topStories = await Promise.all(storyIds.slice(0, page).map(async (storyId: number) => {
                const storyDetails = await fetchStoryDetails(storyId)
                return storyDetails.data
            }))
            setTopStories(topStories)
            setLoading(false)
        })()
    }, [page])

    return (
        <div className="py-3 px-1 mt-10 dark:bg-black h-screen overflow-y-scroll">
            {loading ? (
                <div className='flex h-screen items-center justify-center align-middle'>
                    <l-tailspin
                        size="30"
                        stroke="5"
                        speed="0.9"
                        color="white"
                    ></l-tailspin>
                </div>
            ) : (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                topStories.map((story: any, index: number) => (
                    <React.Fragment key={index}>
                        <div className='flex gap-8 justify-between mb-0.5 border-orange-600 active:border-l-2' key={index}>
                            <a className='cursor-pointer overflow-hidden' href={story.url} target='_blank'>
                                <h2>{story.title}</h2>
                                <p className='font-thin text-sm dark:text-gray-500'>
                                    {story.by} <span>{convertTimestampToTimeAgo(story.time)}</span>
                                </p>
                                <p className='truncate font-thin text-sm dark:text-gray-500'>{story.url}</p>
                            </a>
                            <div className='dark:bg-gray-900 p-2 px-5 w-10 flex cursor-pointer flex-col justify-between items-center relative'>
                                <div className='flex justify-center text-orange-500 text-sm' onClick={() => handleDataChange(story)}>
                                    {story.descendants}
                                    <img className='absolute top-2 opacity-30 w-6 h-6' src="https://img.icons8.com/metro/26/b36537/speech-bubble.png" alt="speech-bubble" />
                                </div>
                                <div className='text-sm'>{story.score}</div>
                            </div>
                        </div>
                        <hr className='opacity-45 border-gray-600' />
                    </React.Fragment>
                ))
            )}
            <p className='text-center cursor-pointer mb-9' onClick={() => setpages(page + 15)}>Load More</p>
        </div>
    )
}
