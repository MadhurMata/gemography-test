import axios from 'axios';
import { getDateFromAMonthAgo } from './utils';

class Service {
  fetchRepositories(page) {
    return axios
      .get(
        `https://api.github.com/search/repositories?q=created:>${getDateFromAMonthAgo()}&sort=stars&order=desc&page=${page}`
      )
      .then(({ data }) => data)
      .catch((error) => {
        console.log("The repositories couldn't be fetched", error);
      });
  }
}

const service = new Service();

export default service;
