import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const pixaServices = {
  key: '16728948-c39c5dcc25e25d8fd8d200637',
  get(query, pageNumber) {
    const response = axios.get(
      `?key=${this.key}&q=${query}&page=${pageNumber}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response;
  },
};
