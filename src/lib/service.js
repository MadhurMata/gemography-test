import axios from 'axios';

class Service {
  fetchRepositories() {
    return axios
      .get(
        `https://api.github.com/search/repositories?q=created:>${'2020-10-22'}&sort=stars&order=desc&page=${'1'}`
      )
      .then(({ data }) => console.log('data from rest api', data))
      .catch((error) => {
        console.log("The Repositories couldn't be found", error);
      });
  }
}

const service = new Service();

export default service;
