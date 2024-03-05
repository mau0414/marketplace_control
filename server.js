import app from './app.js';

const port = 3001;
app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}\n`);
  console.log(`http://localhost:${port}`);
});
