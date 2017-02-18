import axios from 'axios';

// Host for restaurant-inspections-api
const host                  = 'http://45.55.191.140/';

// String a, Promise b ~> (a) => b
const createRequestInstance = baseURL  => axios.create({ baseURL });

// Object a ~> (a) => a
const getResponseData       = response => response.data.data;

// Object a, Promise b ~> (a) => b
const handleResponseError   = error    => Promise.reject(error);

// Axios instance for the restaurant-inspections-api
const instance              = createRequestInstance(host);

// Removes the wrapper around the actual data
// It would be handy to allow plug this in or not
instance.interceptors.response.use(getResponseData, handleResponseError);

export default instance;

