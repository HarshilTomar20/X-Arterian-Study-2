import { Router, Request, Response } from 'express';


const router = Router();

router.post('/send-discordmessage', async ( req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      message: 'Empty message',
    });
  }  
  
  return res.status(200).json({
    errorMessage: 'Discord message sent successfully',
  });
});

export default router;