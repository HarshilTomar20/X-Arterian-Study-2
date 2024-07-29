import { Router } from 'express';

const router = Router();

router.post('/send-discordmessage', async (req, res) => {
    const { message } = req.body;

    return res.status(200).json({
        errorMessage: 'Discord message sent successfully',
    });
});

export default router;