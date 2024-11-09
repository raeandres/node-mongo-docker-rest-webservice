const routes = (app) => {


    const testCredential = {
        username: "test",
        password: "password"
    }

    app.route('/login')
        .post((req,res, next) => {
            if(req.body.username == testCredential.username) {
                // this is mock. return success to client
                res.status(200).send("Success!");
            } else {
                res.send("Invalid credentials");
            }
        }, (req, res) => {
            res.send('Post request from login endpoint!');
        });
}

export default routes;