const errorHandler = (err: any, req: any, res: any, next: any) => {
    res.error({
        message: String(err)
    });
};

export default errorHandler;
