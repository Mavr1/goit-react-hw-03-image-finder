import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const key = '16728948-c39c5dcc25e25d8fd8d200637';

export const pixaGet = (query, pageNumber) =>
  axios.get(
    `?key=${key}&q=${query}&page=${pageNumber}&image_type=photo&orientation=horizontal&per_page=12`
  );
