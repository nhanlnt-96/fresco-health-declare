import Homepage from '../components/homepage';
import SubmitFormSuccess from '../components/submitFormSuccess';

export const routes = [
  {
    path: '/',
    isExact: true,
    module: Homepage
  },
  {
    path: '/success',
    module: SubmitFormSuccess
  },
]