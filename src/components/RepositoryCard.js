import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/device';

const GridContainer = styled.div`
  max-width: 80vw;
  display: grid;
  grid-template-columns: 90px 1fr;
  grid-template-rows: 1fr;
  gap: 0px 20px;
  grid-template-areas: 'PhotoGridContainer RepositoryInfo';
`;

const RepositoryInfo = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 30px 30px 30px;
  gap: 0px 0px;
  grid-template-areas:
    'TitleGridContainer'
    'DefinitionGridContainer'
    'DetailsGridContainer';
  grid-area: RepositoryInfo;
`;

const PhotoGridContainer = styled.div`
  grid-area: PhotoGridContainer;
`;

const TitleGridContainer = styled.div`
  justify-self: start;
  align-self: center;
  grid-area: TitleGridContainer;
`;

const DefinitionGridContainer = styled.div`
  justify-self: start;
  align-self: center;
  grid-area: DefinitionGridContainer;
`;

const DetailsGridContainer = styled.div`
  justify-self: start;
  align-self: center;
  display: grid;
  grid-auto-flow: column;
  grid-area: DetailsGridContainer;
`;

const Image = styled.img`
  height: 90px;
  width: 90px;
  display: block;
  float: left;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Description = styled.p`
  @media ${device.tablet} {
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.8rem;
    margin: 0;
    background: white;
    resize: horizontal;
  }
`;

const Chips = styled.div`
  padding: 0 1rem;
  margin-right: 1rem;
  background-color: green;
  border-radius: 50px;

  @media ${device.tablet} {
    padding: 0 0.2rem;
    margin-right: 0.5rem;
    p {
      fontsize: 0.8rem;
    }
  }
`;

export default function RepositoryCard() {
  return (
    <div>
      <GridContainer>
        <PhotoGridContainer>
          <Image
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Flogo.com%2F&psig=AOvVaw3Pw2cxCVivWm_SaTHVUQ8J&ust=1609492689732000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNiw09Px9-0CFQAAAAAdAAAAABAD"
            alt="LogIn button"
          />
        </PhotoGridContainer>
        <RepositoryInfo>
          <TitleGridContainer>
            <h1>Title</h1>
          </TitleGridContainer>
          <DefinitionGridContainer>
            <Description>
              Descriptions jhcbxnajkxn kjwencxmkas kjsncxmqwsakld kjnadxmqkwda kjnadxzhDSJ
              JNADXKBDCWND
            </Description>
          </DefinitionGridContainer>
          <DetailsGridContainer>
            <Chips>
              <p>5 STARS</p>
            </Chips>
            <Chips>
              <p>1K Issues</p>
            </Chips>
            <Description>kjsnmxkzl,amxskdcnxmekjsfncxejwdkncmewkdscnml</Description>
          </DetailsGridContainer>
        </RepositoryInfo>
      </GridContainer>
    </div>
  );
}
