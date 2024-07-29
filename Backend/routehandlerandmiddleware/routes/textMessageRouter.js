import { Router } from 'express';

const router = Router();

router.post('/send-textmessage', async (req, res) => {
    const { message } = req.body;

    return res.status(200).json({
        errorMessage: 'SMS sent successfully',
    });
});

export default router;