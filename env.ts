export const ENV: 'production' | 'local' = 'production';

const CONFIG = {
  production: {
    BASE_URL: 'https://fakestoreapi.com',
  },
  local: {
    BASE_URL: 'http://localhost:5001',
  },
};

export default CONFIG[ENV];
