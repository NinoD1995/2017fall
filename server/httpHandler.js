exports.main = function(req, res){
    res.write("Hello World, you requested ");
    res.end();
    next();
};