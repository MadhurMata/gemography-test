import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/device';
import PropTypes from 'prop-types';

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

export default function RepositoryCard(props) {
  const {
    repositoryName,
    repositoryDescription,
    repositoryIssues,
    repositoryStars,
    repositoryAvatar
  } = props;
  return (
    <div>
      <GridContainer>
        <PhotoGridContainer>
          <Image src={repositoryAvatar} alt="LogIn button" />
        </PhotoGridContainer>
        <RepositoryInfo>
          <TitleGridContainer>
            <h1>{repositoryName}</h1>
          </TitleGridContainer>
          <DefinitionGridContainer>
            <Description>{repositoryDescription}</Description>
          </DefinitionGridContainer>
          <DetailsGridContainer>
            <Chips>
              <p>{repositoryStars}</p>
            </Chips>
            <Chips>
              <p>{repositoryIssues}</p>
            </Chips>
            <Description>kjsnmxkzl,amxskdcnxmekjsfncxejwdkncmewkdscnml</Description>
          </DetailsGridContainer>
        </RepositoryInfo>
      </GridContainer>
    </div>
  );
}

RepositoryCard.propTypes = {
  repositoryName: PropTypes.string,
  repositoryDescription: PropTypes.string,
  repositoryIssues: PropTypes.number,
  repositoryStars: PropTypes.number,
  repositoryAvatar: PropTypes.string
};
