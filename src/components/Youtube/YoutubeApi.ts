import axios from 'axios';

const API_KEY = 'AIzaSyCQcu9nyr2QvPmT0O60C5zhasEaOttbrz4';

export async function fetchVideos(channelId: string) {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=50`
    );
    return response.data.items;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
}

export async function searchVideos(channelId: string, query: string) {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${query}&channelId=${channelId}&part=snippet,id&order=date&maxResults=50`
    );
    return response.data.items;
  } catch (error) {
    console.error('Error searching videos:', error);
    return [];
  }
}