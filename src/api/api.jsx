import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getVideos = async () => {
  try {
    const response = await api.get("/videos");
    return response.data;
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
};

export const updateVideo = async (video) => {
  try {
    const response = await api.put(`/videos/${video.id}`, video);
    return response.data;
  } catch (error) {
    console.error(`Error updating video ${video.id}:`, error);
    throw error;
  }
};

export const deleteVideo = async (videoId) => {
  try {
    const response = await api.delete(`/videos/${videoId}`);
    return response.data;
  } catch (error) {
    console.error(`Error  ${videoId}:`, error);
    throw error;
  }
};

export const addVideo = async (newVideo) => {
  try {
    const response = await api.post("/videos", newVideo);
    return response.data;
  } catch (error) {
    console.error("Error al cagar video:", error);
    throw error;
  }
};
