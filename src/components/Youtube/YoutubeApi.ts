import axios from "axios";

const API_KEY = "AIzaSyCZQ6GWc2_ofROzUQutyJciB1xKV_k_dfM";

export async function fetchLatestVideos(channelId: string): Promise<string[]> {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=date&key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Ошибка при запросе данных");
    }
    const data = await response.json();
    const videoIds = data.items.map((item: any) => item.id.videoId);
    return videoIds;
  } catch (error) {
    console.error("Ошибка при получении видео:", error);
    return [];
  }
}

export async function searchVideos(channelId: string, query: string) {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${query}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`
    );
    return response.data.items;
  } catch (error) {
    console.error("Error searching videos:", error);
    return [];
  }
}
