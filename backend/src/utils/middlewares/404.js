export const error404 = (req, res, next) => {
    res.status(404).send("OOPS! Route Not Found");
}