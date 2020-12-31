import React, { useEffect, useState } from 'react';
import RepositoryCard from '../components/RepositoryCard';
import service from '../lib/service';

export default function RepositoriesList() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    service.fetchRepositories();
    setIsLoading(false);
    console.log('hello');
  }, []);

  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <div>
      <RepositoryCard />
    </div>
  );
}
