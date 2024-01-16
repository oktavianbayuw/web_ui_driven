import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 90%;
  margin: 20px;
  margin-left: 3%;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  padding: 10px;
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;

const CardTitle = styled.h2`
  margin: 10px 0;
`;

const CardDescription = styled.p`
  margin: 0 10px 10px 10px;
`;

const Card = ({ news }) => {
  return (
    <CardContainer>
      <CardImage src={news.image} alt={news.title} />
      <CardTitle><strong>{news.title}</strong></CardTitle>
      <CardDescription>{news.description}</CardDescription>
    </CardContainer>
  );
};

export default Card;
