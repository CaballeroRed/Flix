import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SectionPrimera = styled.section`
  padding: 20px;
  background-color: ${(props) => props.backgroundColor || "#c2db32"};
`;

const SectionTitulo = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
`;

const VideosWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const VideoWrapper = styled.div`
  flex: 2;
  max-width: 400px;
  position: relative;
  margin-left: 20px;
`;

const VideoImage = styled.img`
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
`;

const VideoTitle = styled.h3`
  font-size: 20px;
  text-align: center;
`;

const Seccion = ({
  title,
  videos,
  onEditClick,
  onDeleteClick,
  backgroundColor,
}) => {
  return (
    <SectionPrimera backgroundColor={backgroundColor}>
      <SectionTitulo>{title}</SectionTitulo>
      <VideosWrapper>
        {videos.map((video, index) => (
          <VideoWrapper key={index}>
            {}
            <Link to={`/video/${video.id}`}>
              <VideoImage src={video.urlImagen} alt={video.nombre} />
            </Link>
            <VideoTitle>{video.nombre}</VideoTitle>
            <button onClick={() => onEditClick(video)}>Editar</button>
            <button onClick={() => onDeleteClick(video)}>Borrar</button>
          </VideoWrapper>
        ))}
      </VideosWrapper>
    </SectionPrimera>
  );
};

export default Seccion;
