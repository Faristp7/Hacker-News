import { tailspin } from 'ldrs'
import React, { useState } from 'react'
import { fetchStoryDetails, fetchTopStories } from '../../services/hackerNewsApi'

tailspin.register()

export default function HomeNews() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [topStories, setTopStories] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [page, setpages] = useState<number>(20)

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
        <div className="py-1 mt-10 dark:bg-black">
            {loading ? (
                <l-tailspin
                    size="30"
                    stroke="5"
                    speed="0.9"
                    color="white"
                ></l-tailspin>
            ) : (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                topStories.map((story: any, index: number) => (
                    <React.Fragment key={index}>
                        <div className='flex gap-8 justify-between mb-0.5  border-orange-600 active:border-l-2' key={index}>
                            <a className='cursor-pointer overflow-hidden' href={story.url} target='_blank'>
                                <h2>{story.title}</h2>
                                <p className='font-thin text-sm dark:text-gray-500'>
                                    {story.by} <span> 30</span>
                                </p>
                                <p className='truncate font-thin text-sm dark:text-gray-500'>{story.url}</p>
                            </a>
                            <div className='dark:bg-gray-900 p-1 px-2 flex flex-col justify-between items-center relative '>
                                <div className='flex justify-center text-orange-500 text-sm'>
                                    16
                                    <img className='absolute top-1 opacity-30 w-6 h-6' src="https://img.icons8.com/metro/26/b36537/speech-bubble.png" alt="speech-bubble" />
                                </div>
                                <div className='text-sm'>118</div>
                            </div>
                        </div>
                        <hr className='opacity-45 border-gray-600' />
                    </React.Fragment>
                ))
            )}
            <p className='text-center cursor-pointer' onClick={() => setpages(page + 15)}>Load More</p>
        </div>
    )
}
