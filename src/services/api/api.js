import axios from 'axios'

const axiosinstance =  axios.create({
    // baseURL: 'http://192.168.1.60:8000/',
    baseURL: 'https://dev-bjp-api.schoolerbot.com/',
    //timeout: 9000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Header': 'Origin, Content-Type, X-Requested-With, Accept, Access-Control-Allow-Credentials, Access-Control-Allow-Headers, Access-Control-Allow-Origin',
      'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE',
      'Accept': 'application/json',
      'Content-Type': 'application/json',

    }
})

// Add a request interceptor
axiosinstance.interceptors.request.use(function (config) {
    let localAuthToken = localStorage.auth_token;
    if(localAuthToken){
      config.headers.Authorization = 'Bearer '+ localAuthToken;
    }
    return config;
  }, function (error) {

    return Promise.reject(error);
});


// Add a response interceptor
 axiosinstance.interceptors.response.use(function (response) {

    return response;
  }, function (error) {

    return Promise.reject(error);
});

export default axiosinstance
