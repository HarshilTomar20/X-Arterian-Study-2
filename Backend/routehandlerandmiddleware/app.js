const app = express();
const port = 3000;

app.use(express.json()); 

app.use('/discord', discordRouter);
app.use('/mailing', mailingRouter);
app.use('/text-message', textMessageRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});