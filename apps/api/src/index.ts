import express from 'express';
import Routes from './entities/routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Routes);

app.listen(3333, () => {
    console.log('🚀 Server started on port 3333!');
});
