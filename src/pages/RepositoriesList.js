import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RepositoryCard from '../components/RepositoryCard';
import { daysFromCreatedDate } from '../lib/utils';
import { fetchRepositories } from '../redux/actions/actions';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
`;

export default function RepositoriesList() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const repositories = useSelector((state) => state.service.search);

  useEffect(() => {
    dispatch(fetchRepositories());
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <>
      <Navbar />
      <Main>
        {repositories?.map((repository, key) => {
          return (
            <RepositoryCard
              repositoryName={repository.name}
              repositoryDescription={repository.description}
              repositoryIssues={repository.open_issues_count}
              repositoryStars={repository.stargazers_count}
              repositoryUserName={repository.owner.login}
              repositoryAvatar={repository.owner.avatar_url}
              createdAt={daysFromCreatedDate(repository.created_at)}
              key={key}
            />
          );
        })}
      </Main>
      <Footer />
    </>
  );
}
