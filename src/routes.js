/**
=========================================================
* Ecotrade React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Ecotrade React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import ContactUs2 from "layouts/pages/landing-pages/contactus2/formulariocertificado";
import ContactUs3 from "layouts/pages/landing-pages/contactus3/formularioevidencias";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";
import FormsAdmin from "layouts/pages/landing-pages/formsadmin/formularioempresaadmin";
import FormsAdmintabla from "layouts/pages/landing-pages/formsadmin/solicitudespendientes";
import FormsAdmintablaaprobada from "layouts/pages/landing-pages/formsadmin/solicitudesaprobadas";
import FormsAdmintablanft from "layouts/pages/landing-pages/formsadmin/solicitudespendientesNFT";
import FormsAdmintablaaprobadanft from "layouts/pages/landing-pages/formsadmin/solicitudesaprobadasNFT";
import Evidenciaspendientes from "layouts/pages/landing-pages/formsadmin/evidenciaspendientes";

import FormsAdminNft from "layouts/pages/landing-pages/formsadmin/formularioempresanft";
// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Generador from "layouts/sections/generador";
import mapa from "layouts/sections/mapa";
import Features from "layouts/sections/page-sections/featuers";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";
import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import ProgressBars from "layouts/sections/elements/progress-bars";
import Toggles from "layouts/sections/elements/toggles";
import Typography from "layouts/sections/elements/typography";
import { Home } from "@mui/icons-material";
import Mapa from "layouts/sections/mapa";


const routes = [


  {
    name: "Informaci??n",
    collapse: [
      {
        name: "Acerca de nosotros",
        route: "/pages/landing-pages/about-us",
        component: <AboutUs />,
        visible: true
      },
      {
        name: "Presentaci??n",
        route: "pitch.com/public/9312ed0f-f1d7-4451-8a51-ec9944d1e47f",
        component: <Author />,
        visible: true
      },
    ],
  },
  {
    name: "Formularios solicitantes",
    collapse: [
      {
        name: "Formulario Solicitantes Empresa",
        route: "/pages/landing-pages/registro-empresa",
        component: <ContactUs />,
        visible: true
      },
      // {
      //   name: "Formulario solicitante certificado",
      //   route: "/pages/landing-pages/formulario-certificado",
      //   component: <ContactUs2 />,
      // },
      {
        name: "Solicitudes empresas nft",
        route: "/pages/landing-pages/formularioempresanft",
        component: <FormsAdminNft />,
        visible: localStorage.tipoUsuario == "empresaadmin"
      },
      {
        name: "Formulario evidencias",
        route: "/pages/landing-pages/formulario-evidencias/:id",
        component: <ContactUs3 />,
        visible: localStorage.tipoUsuario == "empresaadmin"
      },

    ],
  },
  {
    name: "Formularios administrador",
    collapse: [
      // {
      //   name: "Formulario inscripci??n empresas admin",
      //   route: "/pages/landing-pages/formularioempresaadmin",
      //   component: <FormsAdmin />,
      // },
      {
        name: "Solicitudes pendientes",
        route: "/pages/landing-pages/solicitudespendientes",
        component: <FormsAdmintabla />,
        visible: localStorage.tipoUsuario == "superadmin"
      },
      {
        name: "Solicitudes aprobadas",
        route: "/pages/landing-pages/solicitudesaprobadas",
        component: <FormsAdmintablaaprobada />,
        visible: localStorage.tipoUsuario == "superadmin"
      },

      {
        name: "Solicitudes pendientesNFT",
        route: "/pages/landing-pages/solicitudespendientesNFT",
        component: <FormsAdmintablanft />,
        visible: localStorage.tipoUsuario == "superadmin"
      },
      {
        name: "Solicitudes aprobadasNFT",
        route: "/pages/landing-pages/solicitudesaprobadasNft",
        component: <FormsAdmintablaaprobadanft />,
        visible: localStorage.tipoUsuario == "empresaadmin" 
      },
      {
        name: "Evidencias", 
        route: "/pages/landing-pages/solicitudesEvidenciasNft",
        component: <Evidenciaspendientes />,
        visible: localStorage.tipoUsuario == "superadmin"
      }
    ],
  },
  //sign in
  {
    name: "account",
    collapse: [
      {
        name: "sign in",
        route: "/pages/authentication/sign-in",
        component: <SignIn />,
        visible: true,
      },
      {
        name: "log out",
        route: "/pages/authentication/log-out",
        component: <SignIn deslogearse={true} />,
        visible: localStorage.tipoUsuario != undefined,
      },
    ],
  },


  {
    name: "generador",
    collapse: [

      {
        name: "Generador",
        route: "/sections/page-sections/generador",
        component: <Generador />,
        visible: localStorage.tipoUsuario == "superadmin"
      },
      {
        name: "Mapa",
        route: "/sections/mapa",
        component: <Mapa />,
        visible: true
      },


    ],
  },



  //   {
  //     // name: "sections",
  //     // icon: <Icon>view_day</Icon>,
  //     collapse: [
  //       {
  //         // name: "page sections",
  //         // description: "See all sections",
  //         // dropdown: true,
  //         collapse: [
  //           {
  //             // name: "page headers",
  //             // route: "/sections/page-sections/page-headers",
  //             // component: <PageHeaders />,
  //           },
  //           {
  //             // name: "features",
  //             // route: "/sections/page-sections/features",
  //             // component: <Features />,
  //           },
  //           {
  //             name: "Generador",
  //             route: "/sections/page-sections/generador",
  //             component: <Generador />,
  //           },
  //         ],
  //       },
  //       {
  //         // name: "navigation",
  //         // description: "See all navigations",
  //         // dropdown: true,
  //         collapse: [
  //           {
  //             // name: "navbars",
  //             // route: "/sections/navigation/navbars",
  //             // component: <Navbars />,
  //           },
  //           {
  //             // name: "nav tabs",
  //             // route: "/sections/navigation/nav-tabs",
  //             // component: <NavTabs />,
  //           },
  //           {
  //             // name: "pagination",
  //             // route: "/sections/navigation/pagination",
  //             // component: <Pagination />,
  //           },
  //         ],
  //       },
  //       {
  //         // name: "input areas",
  //         // description: "See all input areas",
  //         // dropdown: true,
  //         collapse: [
  //           {
  //             // name: "inputs",
  //             // route: "/sections/input-areas/inputs",
  //             // component: <Inputs />,
  //           },
  //           {
  //             // name: "forms",
  //             // route: "/sections/input-areas/forms",
  //             // component: <Forms />,
  //           },
  //         ],
  //       },
  //       {
  //         // name: "attention catchers",
  //         // description: "See all examples",
  //         // dropdown: true,
  //         collapse: [
  //           {
  //             // name: "alerts",
  //             // route: "/sections/attention-catchers/alerts",
  //             // component: <Alerts />,
  //           },
  //           {
  //             // name: "modals",
  //             // route: "/sections/attention-catchers/modals",
  //             // component: <Modals />,
  //           },
  //           {
  //             // name: "tooltips & popovers",
  //             // route: "/sections/attention-catchers/tooltips-popovers",
  //             // component: <TooltipsPopovers />,
  //           },
  //         ],
  //       },

  // // const routes = [
  // //   {
  // //     name: "pages",
  // //     icon: <Icon>dashboard</Icon>,
  // //     columns: 1,
  // //     rowsPerColumn: 2,
  // //     collapse: [
  // //       {
  // //         name: "landing pages",
  // //         collapse: [
  // //           {
  // //             name: "about us",
  // //             route: "/pages/landing-pages/about-us",
  // //             component: <AboutUs />,
  // //           },
  // //           {
  // //             name: "contact us",
  // //             route: "/pages/landing-pages/contact-us",
  // //             component: <ContactUs />,
  // //           },
  // //           {
  // //             name: "author",
  // //             route: "/pages/landing-pages/author",
  // //             component: <Author />,
  // //           },
  // //         ],
  // //       },
  // //       {
  // //         name: "account",
  // //         collapse: [
  // //           {
  // //             name: "sign in",
  // //             route: "/pages/authentication/sign-in",
  // //             component: <SignIn />,
  // //           },
  // //         ],
  // //       },
  // //     ],
  // //   },
  // //   {
  // //     name: "sections",
  // //     icon: <Icon>view_day</Icon>,
  // //     collapse: [
  // //       {
  // //         name: "page sections",
  // //         description: "See all sections",
  // //         dropdown: true,
  // //         collapse: [
  // //           {
  // //             name: "page headers",
  // //             route: "/sections/page-sections/page-headers",
  // //             component: <PageHeaders />,
  // //           },
  // //           {
  // //             name: "features",
  // //             route: "/sections/page-sections/features",
  // //             component: <Features />,
  // //           },
  // //           {
  // //             name: "Generador",
  // //             route: "/sections/page-sections/generador",
  // //             component: <Generador />,
  // //           },
  // //         ],
  // //       },
  // //       {
  // //         name: "navigation",
  // //         description: "See all navigations",
  // //         dropdown: true,
  // //         collapse: [
  // //           {
  // //             name: "navbars",
  // //             route: "/sections/navigation/navbars",
  // //             component: <Navbars />,
  // //           },
  // //           {
  // //             name: "nav tabs",
  // //             route: "/sections/navigation/nav-tabs",
  // //             component: <NavTabs />,
  // //           },
  // //           {
  // //             name: "pagination",
  // //             route: "/sections/navigation/pagination",
  // //             component: <Pagination />,
  // //           },
  // //         ],
  // //       },
  // //       {
  // //         name: "input areas",
  // //         description: "See all input areas",
  // //         dropdown: true,
  // //         collapse: [
  // //           {
  // //             name: "inputs",
  // //             route: "/sections/input-areas/inputs",
  // //             component: <Inputs />,
  // //           },
  // //           {
  // //             name: "forms",
  // //             route: "/sections/input-areas/forms",
  // //             component: <Forms />,
  // //           },
  // //         ],
  // //       },
  // //       {
  // //         name: "attention catchers",
  // //         description: "See all examples",
  // //         dropdown: true,
  // //         collapse: [
  // //           {
  // //             name: "alerts",
  // //             route: "/sections/attention-catchers/alerts",
  // //             component: <Alerts />,
  // //           },
  // //           {
  // //             name: "modals",
  // //             route: "/sections/attention-catchers/modals",
  // //             component: <Modals />,
  // //           },
  // //           {
  // //             name: "tooltips & popovers",
  // //             route: "/sections/attention-catchers/tooltips-popovers",
  // //             component: <TooltipsPopovers />,
  // //           },
  // //         ],
  // //       },
  //       {
  //         // name: "elements",
  //         // description: "See all 32 examples",
  //         // dropdown: true,
  //         collapse: [
  //           {
  //             // name: "avatars",
  //             // route: "/sections/elements/avatars",
  //             // component: <Avatars />,
  //           },
  //           {
  //             // name: "badges",
  //             // route: "/sections/elements/badges",
  //             // component: <Badges />,
  //           },
  //           {
  //             // name: "breadcrumbs",
  //             // route: "/sections/elements/breadcrumbs",
  //             // component: <BreadcrumbsEl />,
  //           },
  //           {
  //             // name: "buttons",
  //             // route: "/sections/elements/buttons",
  //             // component: <Buttons />,
  //           },
  //           {
  //             // name: "dropdowns",
  //             // route: "/sections/elements/dropdowns",
  //             // component: <Dropdowns />,
  //           },
  //           {
  //             // name: "progress bars",
  //             // route: "/sections/elements/progress-bars",
  //             // component: <ProgressBars />,
  //           },
  //           {
  //             // name: "toggles",
  //             // route: "/sections/elements/toggles",
  //             // component: <Toggles />,
  //           },
  //           {
  //             // name: "typography",
  //             // route: "/sections/elements/typography",
  //             // component: <Typography />,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     // name: "docs",
  //     // icon: <Icon>article</Icon>,
  //     // collapse: [
  //       // {
  //         // name: "getting started",
  //         // description: "All about overview, quick start, license and contents",
  //         // href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
  //       },
  //       {
  //         // name: "foundation",
  //         // description: "See our colors, icons and typography",
  //         // href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
  //       },
  //       {
  //         // name: "components",
  //         // description: "Explore our collection of fully designed components",
  //         // href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
  //       },
  //       {
  //         // name: "plugins",
  //         // description: "Check how you can integrate our plugins",
  //         // href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
  //     //   },
  //     // ],
  //   },
  //   {
  //     // name: "github",
  //     // icon: <GitHubIcon />,
  // href: "https://www.github.com/creativetimofficial/material-kit-react",
  //   },
];

const filterRoutes = []
routes.map(x => {
  filterRoutes.push({name: x.name, collapse: x.collapse.filter(y => y.visible)})
})


export default filterRoutes.filter(y => y.collapse.length != 0);
