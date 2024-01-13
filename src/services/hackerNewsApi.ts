import axios from "axios"

const BASEURL:string = 'https://hacker-news.firebaseio.com/v0/'

export async function fetchTopStories(){
    try {
        const response = await axios.get(`${BASEURL}/topstories.json`)
        return response.data
    } catch (error) {
        console.log("Error fetching top stories", error);
        throw error;
        
    }
}

export async function fetchStoryDetails(storyId : number){
    try {
        const response = await axios.get(`${BASEURL}/item/${storyId}.json`)
        return response
    } catch (error) {
        console.log(`Error fetching story details for ID ${storyId}`, error);
        throw error
    }
}