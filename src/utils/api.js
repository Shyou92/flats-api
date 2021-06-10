import entities from './entities.json';

export default class Api {
  getData() {
    const newPromise = new Promise((resolve, reject) => {
      if (!entities) {
        reject('fetch has been declined');
      }

      setTimeout(() => resolve(entities), 2000);
    });

    return newPromise.then((res) => {
      return res.response;
    });
  }
}
