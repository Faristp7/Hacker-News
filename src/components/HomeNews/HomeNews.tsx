import { tailspin } from 'ldrs'
import React, { useState } from 'react'
import { fetchStoryDetails, fetchTopStories } from '../../services/hackerNewsApi'

tailspin.register()

export default function HomeNews() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [topStories, setTopStories] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)

    React.useEffect(() => {
        (async () => {
            const storyIds = await fetchTopStories()

            const topStories = await Promise.all(storyIds.slice(0, 5).map(async (storyId: number) => {
                const storyDetails = await fetchStoryDetails(storyId)
                return storyDetails.data
            }))
            setTopStories(topStories)
            setLoading(false)
        })()
    }, [])

    console.log(topStories);


    return (
        <div className="p-2 flex justify-between">
            {loading ? (
                <div className=''>
                    <l-tailspin
                        size="30"
                        stroke="5"
                        speed="0.9"
                        color="white"
                    ></l-tailspin>
                </div>
            ) : (
                <>
                    <div className='cursor-pointer'>
                        <h2>{topStories[0].title}</h2>
                        <p>{topStories[0].by} <span>3hrs</span></p>
                        <p className='truncate'>{topStories[0].url}</p>
                    </div>
                    <div className='bg-gray-900 p-1 px-1 flex flex-col justify-between items-center'>
                        <div className='flex justify-center'>
                            16
                            <img className='absolute top-14 mt-0.5 opacity-30 w-6 h-6' src="https://img.icons8.com/metro/26/b36537/speech-bubble.png" alt="speech-bubble" />
                        </div>
                        <div>118</div>
                    </div>
                </>
            )}
        </div>
    )
}
