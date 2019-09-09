/*
 * Angular 2 Doctor Help Chat App
 * @author *******Shubham Sahu*******
 */

class ExpressConfig {

    constructor(app) {
        // Setting .html as the default template extension
        app.set('view engine', 'html');

        //Files 
        app.use(require('express').static(require('path').join('public')));
    }
}
module.exports = ExpressConfig;