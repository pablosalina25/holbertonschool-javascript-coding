// full_server

import express from 'express';
import routes from './routes';

const app = express();
// eslint-disable-next-line jest/require-hook
app.use('/', routes);

const port = 1245;
// eslint-disable-next-line jest/require-hook
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
