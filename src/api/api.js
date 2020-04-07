import http from '../utils/request';

let base = '';

export const requestLogin = params => { return http.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return http.get(`${base}/user/list`, { params: params }); };

export const queryCity = params => { return http.get(`${base}/city/list`); };

export const addCity = params => { return http.post(`${base}/city/add`, params); };

export const queryPlane = params => { return http.get(`${base}/plane/list`); };

export const addPlane = params => { return http.post(`${base}/plane/add`, params); };