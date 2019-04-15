// Create a new 'render' controller method
exports.render = function (req, res) {
    // Set the safe user object
    const user = (!req.user) ? null : {
        _id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName
    };

    if (user) {
        console.log(JSON.stringify(user));
    } else {
        console.log("NULL");
    }

    // Use the 'response' object to render the 'index' view with a 'title' and 'user' properties
    res.render('index', {
        title: 'Patient Monitor',
        user: JSON.stringify(user)
    });
};