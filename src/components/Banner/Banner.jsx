import React from "react";
import { Router, Link } from "react-router-dom";
import styled from "styled-components";

const BannerSection = styled.section`
  background-image: url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fsnipcart.com%2Fblog%2Fwhy-javascript-benefits&psig=AOvVaw0yHD1_uOynHoL6JYtBboJ_&ust=1720073315088000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjY58iaiocDFQAAAAAdAAAAABAR);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px 0;
`;

const BannerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30%;
`;

const BannerVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const BannerImage = styled.img`
  width: 100%;
  max-width: 500px;
  cursor: pointer;
`;

const BannerCategory = styled.div`
  display: inline-block;
  background-color: #6bd1ff;
  color: #f5f5f5;
  font-size: 30px;
  font-weight: 400;
  width: auto;
  padding: 10px 20px;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 30px;
`;

const BannerTitle = styled.h2`
  color: #f5f5f5;
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 20px;
`;

function Banner() {
  return (
    <BannerSection>
      <BannerContent className="container">
        <BannerText>
          <BannerCategory>Front End</BannerCategory>
          <BannerTitle>Challenge React</BannerTitle>
        </BannerText>
        <BannerVideo>
          <Link
            to="https://www.youtube.com/watch?v=R9uaBxgCkyA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BannerImage src="/assets/img/banner.png" alt="Imagen del video" />
          </Link>
        </BannerVideo>
      </BannerContent>
    </BannerSection>
  );
}

export default Banner;
