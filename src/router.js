import { getCompliments, createCompliment } from './controllers/compliment.controller';

export const router = (app) => {
  app.get('/', (req, res) => {
    return res.status(200).json('Hi there')
  })

  app.get('/compliments', getCompliments);

  app.post('/compliments', createCompliment);
};
