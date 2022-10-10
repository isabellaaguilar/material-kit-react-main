// import ContactUs2 from "layouts/pages/landing-pages/contactus2/formulariocertificado";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import axios from "axios";
// Ecotrade React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import routes from "routes";
import React, { Fragment, useEffect, useState } from "react";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import MaterialTable from "material-table";

import BaseLayout from "layouts/sections/components/BaseLayout";

const Formulario = () => {
    const [solicitudes, setSolicitudes] = useState([]);

    useEffect(async () => {
        var solicitudesEmpresa = await axios.post(
            "http://localhost:3001/api/obtenerSolicitudesEmpresa",
            {
                estaAprobado: false,
            }
        );
        let x = [];
        solicitudesEmpresa.data.solicitudEmpresaPendientes.map((solicitud) => {
            x.push({
                nombre: solicitud.nombre,
                latitud: solicitud.latitud,
                longitud: solicitud.longitud,
                fechaSolicitud: solicitud.fechaSolicitud,
                numero: solicitud.numeroTelefono,
                estaAprobado: solicitud.estaAprobado,
            });
        });
        setSolicitudes(x);
    }, []);

    const columns = [
        {
            title: "Nombre",
            field: "nombre",
        },
        {
            title: "Latitud",
            field: "latitud",
        },
        {
            title: "Longitud",
            field: "longitud",
        },
        {
            title: "Fecha Solicitud",
            field: "fechaSolicitud",
        },
        {
            title: "Telefono",
            field: "numero",
        },
        {
            title: "Pendiente",
            field: "estaAprobado",
        },
    ];

    const data = [
        {
            artista: "Morgan",
            pais: "Costa Rica",
            genero: "Una mierda",
            ventas: 23,
        },
        {
            artista: "Morgan  2",
            pais: "Costa Rica 2",
            genero: "Una mierda 2",
            ventas: 232,
        },
    ];

    return (
        <BaseLayout
            title="Solicitudes pendientes"
            breadcrumb={
                [
                    { label: "Solicitudes pendientes", route: "pages/landing-pages/about-us" },
                    { label: "Page Headers" },
                ]
            }
        >
            <MaterialTable columns={columns} data={solicitudes} title="Solicitudes Pendientes" />
        </BaseLayout>
    );
};

export default Formulario;
