const error404 = (err, req, res, next) => {
    console.error(err.stack);
    res.status(404).json({
        error: "Not Found",
        message: err.message
    });
}

module.exports = error404;