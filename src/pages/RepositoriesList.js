import React, { useEffect, useState } from 'react';
import RepositoryCard from '../components/RepositoryCard';
import service from '../lib/service';

export default function RepositoriesList() {
  const [isLoading, setIsLoading] = useState(true);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    service.fetchRepositories().then((res) => setRepositories(res));
    setIsLoading(false);
    console.log('hello');
  }, []);

  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <div>
      {repositories?.items.map((repository, key) => {
        return (
          <RepositoryCard
            repositoryName={repository.name}
            repositoryDescription={repository.description}
            repositoryIssues={repository.open_issues_count}
            repositoryStars={repository.stargazers_count}
            repositoryUserName={repository.owner.login}
            repositoryAvatar={repository.owner.avatar_url}
            key={key}
          />
        );
      })}
    </div>
  );
}
