import axios from 'axios';

import config from '../config';

const http = axios.create({
  baseURL: config.baseUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2VkODFkNmU1OTYxNzUyMDRhZDBiNGU2ZDg4MThhNSIsIm5iZiI6MTczMjE4OTM5NS42MTkyMjQ1LCJzdWIiOiI2NWQ2ZGM1ODk5MmZlNjAxN2NmOGY2NDgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8P_3LG1cWs1wbSSLnKejMHsFL8FyP4tCtN3nQBT5TiM'
  }
});

export default http;
