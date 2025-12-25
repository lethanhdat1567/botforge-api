const notFound = () => (req: any, res: any, next: any) => {
    res.status(404).json({ message: `Route ${req.originalUrl} not found` });
    next();
};

export default notFound;
