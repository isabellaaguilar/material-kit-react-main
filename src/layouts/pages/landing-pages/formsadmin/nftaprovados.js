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
import React, { Fragment, useEffect, useState, useCallback } from "react";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import MaterialTable from "material-table";

import BaseLayout from "layouts/sections/components/BaseLayout";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from '@mui/icons-material/Download';

function downloadPDF(pdf) {
    const linkSource = `data:application/pdf;base64,${pdf}`;
    const downloadLink = document.createElement("a");
    const fileName = "revision.pdf";
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
}

const Formulario = () => {
    const [solicitudes, setSolicitudes] = useState([]);
    const [recargar, setRecargar] = useState(false);

    const [show, setShow] = useState(false);
    const toggleModal = () => setShow(!show);

    const [datos, setDatos] = useState({
        correo: '',
    })

    const [nombre, setNombre] = useState();
    // const [id, setId] = useState();


    const handleInputChange = (event) => {
        // console.log(event.target.value)
        // esto lo que hacia era mostar literalmente todos lo que se escribia en el input letra por letra
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
            // el name es el name que le pusimos a los inputs hace la relacion
        })

    }
    // CON ESTE COMENTADO SE TRABAJA EL GUARDAR LOS DATOS


    const aprobarSolicitud = async (id) => {
        await axios.post(
            `http://localhost:3001/api/NFT/${id}`,
            {
                estaAprobado: true
            }
        );

        setRecargar(!recargar)

    }

    useEffect(async () => {
        var evidencias = await axios.post(
            "http://localhost:3001/api/obtenerSolicitudesEvidencias",
            {
                estaAprobado: false,
            }
        );

        let x = [];

        evidencias.data.evidenciasPendientes.map(nft => x.push({
            pdf: nft.pdf,
            idSolicitudNFT: nft.idSolicitudNFT,
            id: nft.id,
            estaAprobado: nft.estaAprobado
        }))


        setSolicitudes(x);
        
    }, [recargar]);

    const columns = [
        {
            title: "ID",
            field: "id",
            hidden: true
        },
        {
            title: "ID DE LA EMPRESA",
            field: "idSolicitudNFT",
        },
        {
            title: "PDF",
            field: "pdf",
            hidden: true
        },
        {
            title: "Pendiente",
            field: "estaAprobado",
        },
    ];

    return (
        <BaseLayout
            breadcrumb={[
                { label: "Evidencia pendiente", route: "pages/landing-pages/about-us" },
                { label: "Page Headers" },
            ]}
        >
            <MaterialTable
                columns={columns}
                data={solicitudes}
                title="Evidencia pendiente"
                actions={[
                    {
                        icon: 'check',
                        tooltip: 'Save User',
                        onClick: (event, rowData) => {
                            aprobarSolicitud(rowData.id)
                        }
                    },
                    rowData => ({
                        icon: DownloadIcon,
                        tooltip: 'Export PDF',
                        onClick: (event, rowData) => {
                            downloadPDF(rowData.pdf)
                        }
                    })
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
            />
            <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
                <Slide direction="down" in={show} timeout={500}>
                    <MKBox
                        position="relative"
                        width="500px"
                        display="flex"
                        flexDirection="column"
                        borderRadius="xl"
                        bgColor="white"
                        shadow="xl"
                    >
                        <MKBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
                            <MKTypography variant="h5">Inserte el correo electronico del administrador de la empresa</MKTypography>
                            <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
                        </MKBox>
                        <Divider sx={{ my: 0 }} />
                        <MKBox p={2}>
                            <MKInput variant="standard" label="Correo electronico del usuario" onChange={handleInputChange} name="correo" fullWidth
                            />
                        </MKBox>
                        <Divider sx={{ my: 0 }} />
                        <MKBox display="flex" justifyContent="space-between" p={1.5}>
                            <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                                Cerrar
                            </MKButton>
                            <MKButton onClick={aprobarSolicitud} variant="gradient" color="info">
                                Aprobar Solicitud
                            </MKButton>
                        </MKBox>
                    </MKBox>
                </Slide>
            </Modal>
        </BaseLayout>
    );
};

export default Formulario;
