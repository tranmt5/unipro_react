import request from 'utils/axios';
import { AdvisoryType } from '../pages/type';

const createAdvisory = (data: any) => request.post<AdvisoryType>(`/send`, data);

const contactApi = {
  createAdvisory
};
export default contactApi;
