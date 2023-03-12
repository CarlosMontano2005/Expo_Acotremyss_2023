/*
*   Controlador de uso general en las páginas web del sitio privado.
*   Sirve para manejar las plantillas del encabezado y pie del documento.
*/

// Constante para completar la ruta de la API.
//const USER_API = 'business/dashboard/usuario.php';
// Constantes para establecer las etiquetas de encabezado y pie de la página web.
const HEADER = document.querySelector('header');
const FOOTER = document.querySelector('footer');
const NAV = document.querySelector('nav');
// Método manejador de eventos para cuando el documento ha cargado.
//document.addEventListener('DOMContentLoaded', async () => {
    // Petición para obtener en nombre del usuario que ha iniciado sesión.
    //const JSON = await dataFetch(USER_API, 'getUser');
    // Se verifica si el usuario está autenticado, de lo contrario se envía a iniciar sesión.
    //if (JSON.session) {
        // Se comprueba si existe un alias definido para el usuario, de lo contrario se muestra un mensaje con la excepción.
       // if (JSON.status) {
            HEADER.innerHTML = `<div >
            <div class="logo-details">
              <!--<i class='bx bxl-c-plus-plus icon'></i>-->
              <div class="logo_name">SAC</div>
              <!--<i class='bx bx-menu' id="btn"></i>-->
            </div>
            <div class="profile-details">
              <div class="profile-btn">
                <div class="btn-user">
                  <a href="#"><i class="bx bxs-user"></i></a>
                </div>
                <div class="btn_three_points">
                  <a href="#">
                    <i class="bx bxs-grid" ></i>
                  </a>
                </div>
              </div>
              <div class="profile-content">
                <img
                  src="/image/private/people/charlie.jpg"
                  alt="profileImg"
                  id="img-perfil"
                />
              </div>
              <div class="name-gmail">
                <div class="profile_name">Hola Charlie</div>
                <div class="gmail">montanoroberto@gmail.com</div>
              </div>
            </div>
            <ul class="nav-list">
              <li>
                <a href="#">
                  <i class="bx bx-home-alt"></i>
                  <span class="links_name">Dashboard</span>
                </a>
                <span class="tooltip">Dashboard</span>
              </li>
              <li>
                <a href="#">
                  <i class="bx bx-folder"></i>
                  <span class="links_name">Solicitudes</span>
                </a>
                <span class="tooltip">Solicitudes</span>
              </li>
              <li>
                <a href="#">
                  <i class="bx bx-group"></i>
                  <span class="links_name">Asociados</span>
                </a>
                <span class="tooltip">Asociados</span>
              </li>
              <li>
                <a href="#">
                  <i class="bx bx-trending-up"></i>
                  <span class="links_name">Beneficios</span>
                </a>
                <span class="tooltip">Beneficios</span>
              </li>
              <li>
                <a href="#">
                  <i class="bx bx-edit"></i>
                  <span class="links_name">Control</span>
                </a>
                <span class="tooltip">Control</span>
              </li>
              <li>
                <a href="#">
                  <i class="bx bx-sitemap"></i>
                  <span class="links_name">Sistema</span>
                </a>
                <span class="tooltip">Sistema</span>
              </li>
              <li>
                <a href="#">
                  <i class="bx bx-log-out"></i>
                  <span class="links_name">Cerrar sistema</span>
                </a>
                <span class="tooltip">Cerrar sistema</span>
              </li>
              <li>
                <a href="#">
                  <i class="bx bx-cog"></i>
                  <span class="links_name">Ajustes</span>
                </a>
                <span class="tooltip">Ajustes</span>
              </li>
    
              <!-- <li class="profile">
                            
                            <a href="#"><i class='bx bx-door-open'></i></a>
                        </li>-->
            </ul>
          </div>`;
         /* NAV.innerHTML = ` <div class="text" >
          <i class="bx bx-menu" id="btn"></i>
          <div class="input-group buscar">
            <button class="input-group-text rounded-start-pill">
              <i class="bx bx-search-alt-2"></i>
            </button>
            <input
              type="text"
              class="form-control rounded-end-pill"
              id="inlineFormInputGroupUsername"
              placeholder="Buscar"
            />
          </div>
        </div>
        <div class="perfil">
            <p id="name-user" class="">carlos montano</p>
            <img id="foto-user" class="img-user" src="/image/private/people/charlie.jpg" alt="foto-perfil">
        </div>`;*/
          /*  FOOTER.innerHTML = `
                <div class="container">
                    <div class="row">
                        <div class="col s12 m6">
                            <h6 class="white-text">Dashboard</h6>
                            <a class="white-text" href="mailto:dacasoft@outlook.com">
                                <i class="material-icons left">email</i>Ayuda
                            </a>
                        </div>
                        <div class="col s12 m6">
                            <h6 class="white-text">Enlaces</h6>
                            <a class="white-text" href="../public/" target="_blank">
                                <i class="material-icons left">store</i>Sitio público
                            </a>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        <span>© 2018-2023 Copyright CoffeeShop. Todos los derechos reservados.</span>
                        <span class="right">Diseñado con
                            <a href="http://materializecss.com/" target="_blank">
                                <img src="../../resources/img/materialize.png" height="20" style="vertical-align:middle" alt="Materialize">
                            </a>
                        </span>
                    </div>
                </div>
            `;
            // Se inicializa el componente Dropdown para que funcione la lista desplegable en los menús.
            M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
            // Se inicializa el componente Sidenav para que funcione la navegación lateral.
            M.Sidenav.init(document.querySelectorAll('.sidenav'));
        } else {
            sweetAlert(3, JSON.exception, false, 'index.html');
        }
    } else {
        // Se comprueba si la página web es la principal, de lo contrario se direcciona a iniciar sesión.
        if (location.pathname == '/coffeeshop/views/dashboard/index.html') {
            HEADER.innerHTML = `
                <div class="navbar-fixed">
                    <nav>
                        <div class="nav-wrapper center-align">
                            <a href="index.html" class="brand-logo"><i class="material-icons">dashboard</i></a>
                        </div>
                    </nav>
                </div>
            `;
            FOOTER.innerHTML = `
                <div class="container">
                    <div class="row">
                        <b>Dashboard de CoffeeShop</b>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        <span>© 2018-2023 Copyright CoffeeShop. Todos los derechos reservados.</span>
                        <span class="right">Diseñado con
                            <a href="http://materializecss.com/" target="_blank">
                                <img src="../../resources/img/materialize.png" height="20" style="vertical-align:middle" alt="Materialize">
                            </a>
                        </span>
                    </div>
                </div>
            `;
            // Se inicializa el componente Tooltip para que funcionen las sugerencias textuales.
            M.Tooltip.init(document.querySelectorAll('.tooltipped'));
        } else {
            location.href = 'index.html';
        }
    }
});*/