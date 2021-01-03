import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RepositoryCard from '../components/RepositoryCard';
import { daysFromCreatedDate } from '../lib/utils';
import { fetchRepositories } from '../redux/actions/actions';

export default function RepositoriesList() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const repositories = useSelector((state) => state.service.repositories);

  useEffect(() => {
    dispatch(fetchRepositories());
    setIsLoading(false);
    console.log('hello');
  }, []);

  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <div>
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
    </div>
  );
}
