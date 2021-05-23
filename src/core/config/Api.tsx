import axios from "axios";

const url = process.env.REACT_APP_URL;
export const GET = (endpoint: string) => {
  return axios.get(`${url}${endpoint}`);
};
export const TEST_GET = (endpoint: string) => {
  return axios.get(`${endpoint}`, {});
};
export const POST = (endpoint: string, data: any) => {
  return axios.post(`${url}${endpoint}`, data);
};
export const PUT = (endpoint: string, data: any) => {
  return axios.put(`${url}${endpoint}`, data);
};
export const DELETE = (endpoint: string) => {
  return axios.delete(`${url}${endpoint}`);
};
