/*
 * Angular 2 Doctor Help Chat App
 * @author *******Shubham Sahu*******
 */

'use strict';

const routeHandler = require('./../handlers/route-handler');

class Routes {

    constructor(app) {
        this.app = app;
    }

    /* creating app Routes starts */
    appRoutes() {
        this.app.post('/usernameAvailable', routeHandler.userNameCheckHandler);

        this.app.post('/register', routeHandler.registerRouteHandler);

        this.app.post('/login', routeHandler.loginRouteHandler);

        this.app.post('/userSessionCheck', routeHandler.userSessionCheckRouteHandler);

        this.app.post('/getMessages', routeHandler.getMessagesRouteHandler);

        this.app.post('/sendRequest', routeHandler.sendRequestHandler);


        this.app.get('*', routeHandler.routeNotFoundHandler);
    }

    routesConfig() {
        this.appRoutes();
    }
}
module.exports = Routes;