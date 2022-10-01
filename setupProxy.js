import React from 'react';
import db from './database/conexion';
import Formulario from './index'


import proxy from("http-proxy-middleware");

module.exports = function(app) {
    app.use(proxy("/visitante", {
        target: "http://localhost:3000",
       
        secure: false
    }));
};