import React, { useState, useEffect } from "react";
import Cabecera from "../components/Header/index";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState([null]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const fetVideos = await getVideos();
      setVideos(fetVideos);
    } catch (error) {
      console.log("error fetch", error);
    }
  };

  const abrirModal = (video) => {
    setSelectedVideo(video);
    setModalAbierto(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setModalIsOpen(false);
  };

  const handleDelete = async (videoToDelete) => {
    try {
      await deleteVideo(videoToDelete.id);
      setVideos(videos.filter((video) => video.id !== videoToDelete.id));
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  const handleSave = async (updatedVideo) => {
    try {
      const response = await updateVideo(updatedVideo);
      setVideos(
        videos.map((video) => (video.id === updatedVideo.id ? response : video))
      );
      closeModal();
    } catch (error) {
      console.error("Error updating video:", error);
    }
  };

  const addNewVideo = async (newVideo) => {
    try {
      const response = await addVideo(newVideo);
      setVideos([...videos, response]);
    } catch (error) {
      console.error("Error adding new video:", error);
    }
  };

  const organizeVideosByCategory = (videos) => {
    const organizedVideos = {};
    datos.categorias.forEach((cat) => {
      organizedVideos[cat.nombre] = videos.filter(
        (video) => video.categoria === cat.nombre
      );
    });
    return organizedVideos;
  };

  const organizedVideos = organizeVideosByCategory(videos);

  return (
    <div>
      <Header />
      <Banner images={videos.map((video) => video.urlImagen)} />
      {Object.entries(organizedVideos).map(([category, categoryVideos]) => (
        <CategorySection
          key={category}
          title={category}
          videos={categoryVideos}
          onEditClick={openModal}
          onDeleteClick={handleDelete}
        />
      ))}
      <Footer />
      {selectedVideo && (
        <VideoModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          video={selectedVideo}
          onSave={handleSave}
          onAdd={addNewVideo}
        />
      )}
    </div>
  );
};

export default Home;
