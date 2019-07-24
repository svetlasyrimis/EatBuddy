import { api } from './auth'

export const createComment = async (commentsData) => {
  const resp = await api.post('/comments', commentsData);
  return resp.data.comment;
};

export const updateComment = async (id, data) => {
  const resp = await api.put(`/comments/${id}`, data);
  return resp.data.product;
};

//created commentRouter - steve