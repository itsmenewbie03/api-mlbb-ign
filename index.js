import express from 'express';
import { get_ign } from './utils/ign.js';

const app = express();

app.use(express.json());
app.get('/', (_, res) => {
    return res.send('HELLO 👋🏻')
})
app.post('/ign', async (req, res) => {
    if (!req.body.id || !req.body.server) {
        return res.status(400).json({ error: 'Missing parameter(s)' });
    }

    const ign = await get_ign(req.body.id, req.body.server);

    res.json({ ign });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started on port http://localhost:' + PORT);
});
