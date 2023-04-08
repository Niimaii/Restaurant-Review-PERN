import axios from 'axios';

// Change baseURL depending if we are in production or development mode
const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'api/v1/restaurants'
    : 'http://localhost:4000/api/v1/restaurants';

// Here we are setting the base url for axios. The reason we choose /api/v1/restaurants is because all of our routes have /api/v1/restaurants. So my as well add itas default.
export default axios.create({
  baseURL: baseURL,
});
