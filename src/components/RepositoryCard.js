import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/styles';
import PropTypes from 'prop-types';
import { numFormatter } from '../lib/utils';
import Chip from './Chip';

const GridContainer = styled.div`
  max-width: 80vw;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 0fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 20px;
  grid-template-areas: 'PhotoGridContainer RepositoryInfo';

  @media ${device.tablet} {
    max-width: 90vw;
    gap: 0px 10px;
  }
`;

const RepositoryInfo = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'TitleGridContainer'
    'DefinitionGridContainer'
    'DetailsGridContainer';
  grid-area: RepositoryInfo;
`;

const PhotoGridContainer = styled.div`
  place-self: center;
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

  @media ${device.smallDevices} {
    height: 60px;
    width: 60px;
  }
`;

const Text = styled.p`
  @media ${device.smallDevices} {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.8rem;
    margin: 0;
    background: white;
    resize: horizontal;
  }
`;

const Desktop = styled.div`
  @media ${device.smallDevices} {
    display: none;
  }
`;

const Mobile = styled.div`
  @media ${device.otherDevices} {
    display: none;
  }
  font-size: 0.8rem;
`;

export default function RepositoryCard(props) {
  const {
    repositoryName,
    repositoryDescription,
    repositoryIssues,
    repositoryStars,
    repositoryAvatar,
    repositoryUserName,
    createdAt
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
            <Text>{repositoryDescription}</Text>
          </DefinitionGridContainer>
          <DetailsGridContainer>
            <Chip color={'#862892'} quantity={numFormatter(repositoryStars)} text={'Stars: '} />
            <Chip color={'#19bb19'} quantity={numFormatter(repositoryIssues)} text={'Issues: '} />
            <Desktop>
              Submited {createdAt} days ago by {repositoryUserName}
            </Desktop>
            <Mobile>
              {createdAt} days ago by {repositoryUserName}
            </Mobile>
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
  repositoryAvatar: PropTypes.string,
  repositoryUserName: PropTypes.string,
  createdAt: PropTypes.number
};
