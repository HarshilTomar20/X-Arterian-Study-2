const loggingMiddleware = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next(); 
};

const validateMessageMiddleware = (req, res, next) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({
            message: 'Empty message',
        });
    }
    next();
};

export { loggingMiddleware, validateMessageMiddleware };