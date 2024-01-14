import axios from "axios";

const BASEURL: string = "https://hacker-news.firebaseio.com/v0/";

export async function fetchTopStories() {
  try {
    const response = await axios.get(`${BASEURL}/topstories.json`);
    return response.data;
  } catch (error) {
    console.log("Error fetching top stories", error);
    throw error;
  }
}

export async function fetchStoryDetails(storyId: number) {
  try {
    const response = await axios.get(`${BASEURL}/item/${storyId}.json`);
    return response;
  } catch (error) {
    console.log(`Error fetching story details for ID ${storyId}`, error);
    throw error;
  }
}

export async function fetchComments(commentIds: number[]) {
  try {
    const commentPromises = commentIds.map(async (commentId) => {
      const response = await axios.get(`${BASEURL}/item/${commentId}.json`);
      return response.data;
    });
    const comments = await Promise.all(commentPromises);
    
    return comments;
  } catch (error) {
    console.error("Error fetching comments", error);
    throw error;
  }
}

export function convertTimestampToTimeAgo(timestamp: number): string {
  const currentTime = Math.floor(Date.now() / 1000);
  const timeDifference = currentTime - timestamp;

  const secondsInMinute = 60;
  const secondsInHour = 60 * secondsInMinute;
  const secondsInDay = 24 * secondsInHour;
  const secondsInMonth = 30 * secondsInDay;
  const secondsInYear = 365 * secondsInDay;

  if (timeDifference < secondsInMinute) {
    return "Just now";
  } else if (timeDifference < secondsInHour) {
    const minutes = Math.floor(timeDifference / secondsInMinute);
    return `${minutes} ${minutes === 1 ? "min" : "mins"}`;
  } else if (timeDifference < secondsInDay) {
    const hours = Math.floor(timeDifference / secondsInHour);
    return `${hours} ${hours === 1 ? "hr" : "hrs"}`;
  } else if (timeDifference < secondsInMonth) {
    const days = Math.floor(timeDifference / secondsInDay);
    return `${days} ${days === 1 ? "day" : "days"}`;
  } else if (timeDifference < secondsInYear) {
    const months = Math.floor(timeDifference / secondsInMonth);
    return `${months} ${months === 1 ? "month" : "months"}`;
  } else {
    const years = Math.floor(timeDifference / secondsInYear);
    return `${years} ${years === 1 ? "year" : "years"}`;
  }
}
