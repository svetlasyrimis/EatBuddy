import { api } from './auth'

export const createCombo = async (combosData) => {
  const resp = await api.post('/combos', combosData);
  return resp.data.combo;
};

export const deleteCombo = async (id) => {
  const resp = await api.delete(`/combos/${id}`);
  return resp.data
}