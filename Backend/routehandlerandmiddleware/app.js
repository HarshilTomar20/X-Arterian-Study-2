import express from 'express';
import { loggingMiddleware, validateMessageMiddleware } from './middleware.js'; // Import middleware
import discordRouter from './routes/discordRouter.js';
import mailingRouter from './routes/mailingRouter.js';
import textMessageRouter from './routes/textMessageRouter.js';

const app = express();
const port = 3000;

app.use(express.json()); 

// Use logging middleware for all routes
app.use(loggingMiddleware);

// Use the validation middleware for specific routes
app.use('/mailing/send-discordmessage', validateMessageMiddleware);
app.use('/text-message/send-textmessage', validateMessageMiddleware);
app.use('/discord/send-discordmessage', validateMessageMiddleware);

app.use('/discord', discordRouter);
app.use('/mailing', mailingRouter);
app.use('/text-message', textMessageRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});