import { api } from './auth'

export const createCombo = async (combosData) => {
  const resp = await api.post('/combos', combosData);
  return resp.data.combo;
};