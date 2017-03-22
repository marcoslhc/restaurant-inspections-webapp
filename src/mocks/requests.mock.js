import request from './api/request';
import mockAdapter from 'axios-mock-adapter'

const mock = mockAdapter(request);

export default {
    request,
    mock
};
