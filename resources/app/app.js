/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


/*import DashboardTesoreria from "./components/pagina-principal/DashboardTesoreria";*/

//import CuentasXCobrarImportacionDatos from "./components/importacion_datos/CuentasXCobrarImportacionDatos" ;

require('./bootstrap');

import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
Vue.use(Vuex);

Vue.prototype.$user = window.User;

//import VueQrcodeReader from "vue-qrcode-reader";
//Vue.use(VueQrcodeReader);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Components
const Layout = () => import(/* webpackChunkName: "principal" */ './components/layout/Layout');
const Dashboard = () => import(/* webpackChunkName: "principal" */'./components/pagina-principal/Dashboard');
const DashboardNuevo = () => import(/* webpackChunkName: "principal-nueva" */'./components/pagina-principal/DashboardNueva');
import './assets/filters'

//global registration


const Login = () => import(/* webpackChunkName: "basico" */'./components/login/Login');
const SelectCompany = () => import(/* webpackChunkName: "basico" */'./components/login/SelectCompany');
const Error404Template = () => import(/* webpackChunkName: "basico" */'./components/errores/Error404');
const Error500Template = () => import(/* webpackChunkName: "basico" */'./components/errores/Error500');
const ErrorPermiso = () => import(/* webpackChunkName: "basico" */'./components/errores/ErrorPermiso');

const Roles = () => import(/* webpackChunkName: "roles" */ './components/roles/Listado');
const RolRegistrar = () => import(/* webpackChunkName: "roles" */ './components/roles/Registrar');
const RolActualizar = () => import(/* webpackChunkName: "roles" */ './components/roles/Actualizar');
const Permisos = () => import(/* webpackChunkName: "roles" */ './components/permisos/Permisos');

const Menus = () => import(/* webpackChunkName: "menus" */ './components/menus/Listado');
const MenuRegistrar = () => import(/* webpackChunkName: "menus" */ './components/menus/Registrar');
const MenuActualizar = () => import(/* webpackChunkName: "menus" */ './components/menus/Actualizar');
const MenusOrden = () => import(/* webpackChunkName: "menus" */ './components/menus/Ordenar');
const ModulosOrden = () => import(/* webpackChunkName: "menus" */ './components/menus/OrdenarModulos');

const Accesos = () => import(/* webpackChunkName: "accesos" */ './components/accesos/Listado');

const twoFactorSettings = () => import(/* webpackChunkName: "two-factor-auth" */ './components/auth/2fa_settings');
const twoFactorVerify = () => import(/* webpackChunkName: "two-factor-auth" */ './components/auth/2fa_verify');



//const Empleados = () => import(/* webpackChunkName: "empleados" */ './components/empleados/Listado');
//const EmpleadoRegistrar = () => import(/* webpackChunkName: "empleados" */ './components/empleados/Registrar');
//const EmpleadoActualizar = () => import(/* webpackChunkName: "empleados" */ './components/empleados/Actualizar');

const TrabajadoresListado = () => import(/* webpackChunkName: "trabajadores" */ './components/trabajadores/Listado');
const TrabajadorRegistrar = () => import(/* webpackChunkName: "trabajadores" */ './components/trabajadores/Registrar');
const TrabajadorActualizar = () => import(/* webpackChunkName: "trabajadores" */ './components/trabajadores/Actualizar');

const Proveedores = () => import(/* webpackChunkName: "proveedores" */ './components/proveedores/Listado');
const ProveedorRegistrar = () => import(/* webpackChunkName: "proveedores" */ './components/proveedores/Registrar');
const ProveedorActualizar = () => import(/* webpackChunkName: "proveedores" */ './components/proveedores/Actualizar');

const Bodegas = () => import(/* webpackChunkName: "bodegas" */ './components/bodegas/Listado');
const BodegaRegistrar = () => import(/* webpackChunkName: "bodegas" */ './components/bodegas/Registrar');
const BodegaActualizar = () => import(/* webpackChunkName: "bodegas" */ './components/bodegas/Actualizar');

const Productos = () => import(/* webpackChunkName: "productos" */ './components/productos/Listado');
const ProductoRegistrar = () => import(/* webpackChunkName: "productos" */ './components/productos/Registrar');
const ProductoActualizar = () => import(/* webpackChunkName: "productos" */ './components/productos/Actualizar');

const MovimientosProducto = () => import(/* webpackChunkName: "movimientos-producto" */ './components/movimientos_productos/Listado');
const MovimientosProductoContable = () => import(/* webpackChunkName: "movimientos-producto-contable" */ './components/movimientos_productos/ListadoContable');

const MovimientosBaterias = () => import(/* webpackChunkName: "movimientos-producto" */ './components/productos/MovimientosBateria');
/*
const Baterias = () => import(/!* webpackChunkName: "baterias" *!/ './components/productos/ListadoBaterias');
const BateriaRegistrar = () => import(/!* webpackChunkName: "baterias" *!/ './components/productos/RegistrarBateria');
const BateriaActualizar = () => import(/!* webpackChunkName: "baterias" *!/ './components/productos/ActualizarBateria');
const BateriaExternaRegistrar = () => import(/!* webpackChunkName: "baterias" *!/ './components/entradas/RegistrarBateriaExterna');*/

const Categorias = () => import(/* webpackChunkName: "categorias" */ './components/categorias/Listado');
const CategoriaRegistrar = () => import(/* webpackChunkName: "categorias" */ './components/categorias/Registrar');
const CategoriaActualizar = () => import(/* webpackChunkName: "categorias" */ './components/categorias/Actualizar');

const TiposEntrada = () => import(/* webpackChunkName: "tipos_entrada" */ './components/tipos_entrada/Listado');
const TipoEntradaRegistrar = () => import(/* webpackChunkName: "tipos_entrada" */ './components/tipos_entrada/Registrar');
const TipoEntradaActualizar = () => import(/* webpackChunkName: "tipos_entrada" */ './components/tipos_entrada/Actualizar');

const Entradas = () => import(/* webpackChunkName: "entradas" */ './components/entradas/Listado');
const EntradaRegistrar = () => import(/* webpackChunkName: "entradas" */ './components/entradas/Registrar');
const EntradaRegistrarInvInicial = () => import(/* webpackChunkName: "entradas-inicial" */ './components/entradas/RegistrarInventarioInicial');
const EntradasInvInicial = () => import(/* webpackChunkName: "entradas-inicial" */ './components/entradas/ListadoInventarioInicial');
const EntradaActualizarInvInicial = () => import(/* webpackChunkName: "entradas-inicial" */ './components/entradas/ActualizarventarioInicial');
const EntradaRegistrarInvInicialManual = () => import(/* webpackChunkName: "entradas-inicial" */ './components/entradas/RegistrarInventarioInicialManual');
const EntradaActualizarInvInicialManual = () => import(/* webpackChunkName: "entradas-inicial" */ './components/entradas/ActualizarInventarioInicialManual');

const EntradaInvInicialMostrar = () => import(/* webpackChunkName: "entradas-inicial" */ './components/entradas/MostrarEntradaInicial');

const EntradaActualizar = () => import(/* webpackChunkName: "entradas" */ './components/entradas/Actualizar');
const EntradaRecibir = () => import(/* webpackChunkName: "entradas" */ './components/entradas/Recibir');
const EntradaRecibirCompra = () => import(/* webpackChunkName: "entradas" */ './components/entradas/RecibirCompra');
const EntradaRecibirTraslado = () => import(/* webpackChunkName: "entradas" */ './components/entradas/RecibirTraslado');

const EntradaMostrar = () => import(/* webpackChunkName: "entradas" */ './components/entradas/Mostrar');
const EntradaRegistrarDev = () => import(/* webpackChunkName: "entradas" */ './components/entradas/RegistrarDevolucion');


const UnidadMedida = () => import(/* webpackChunkName: "unidad_medida" */ './components/unidad_medida/Listado');
const UnidadMedidaRegistrar = () => import(/* webpackChunkName: "unidad_medida" */ './components/unidad_medida/Registrar');
const UnidadMedidaActualizar = () => import(/* webpackChunkName: "unidad_medida" */ './components/unidad_medida/Actualizar');

/*const ProductoPresentacion = () => import(/!* webpackChunkName: "producto_presentacion" *!/ './components/producto_presentacion/Listado');
const ProductoPresentacionRegistrar = () => import(/!* webpackChunkName: "producto_presentacion" *!/ './components/producto_presentacion/Registrar');
const ProductoPresentacionActualizar = () => import(/!* webpackChunkName: "producto_presentacion" *!/ './components/producto_presentacion/Actualizar');*/


const Transformacion = () => import(/* webpackChunkName: "transformaciones" */ './components/transformaciones/Listado');
const TransformacionRegistrar = () => import(/* webpackChunkName: "transformaciones" */ './components/transformaciones/Registrar');
const TransformacionActualizar = () => import(/* webpackChunkName: "transformaciones" */ './components/transformaciones/Actualizar');

const UnidadMedidaEstandar = () => import(/* webpackChunkName: "unidad_medidad_estandar" */ './components/unidad_medida_estandar/Listado');
const UnidadMedidaEstandarRegistrar = () => import(/* webpackChunkName: "unidad_medidad_estandar" */ './components/unidad_medida_estandar/Registrar');
const UnidadMedidaEstandarActualizar = () => import(/* webpackChunkName: "unidad_medidad_estandar" */ './components/unidad_medida_estandar/Actualizar');

const Presentacion = () => import(/* webpackChunkName: "presentacion" */ './components/presentacion/Listado');
const PresentacionRegistrar = ()=> import(/* webpackChunkName: "presentacion" */ './components/presentacion/Registrar');
const PresentacionActualizar = ()=> import(/* webpackChunkName: "presentacion" */  './components/presentacion/Actualizar');

const Grado = () => import(/* webpackChunkName: "grado" */ './components/grado/Listado');
const GradoRegistrar = ()=> import(/* webpackChunkName: "grado" */ './components/grado/Registrar');
const GradoActualizar = ()=> import(/* webpackChunkName: "grado" */  './components/grado/Actualizar');


const Origen = () => import(/* webpackChunkName: "origen" */ './components/origen/Listado');
const OrigenRegistrar = ()=> import(/* webpackChunkName: "origen" */ './components/origen/Registrar');
const OrigenActualizar = ()=> import(/* webpackChunkName: "origen" */  './components/origen/Actualizar');

const Salidas = () => import(/* webpackChunkName: "salidas" */ './components/salidas/Listado');
const SalidaRegistrar = () => import(/* webpackChunkName: "salidas" */ './components/salidas/Registrar');
const SalidaRegistrarTraslado = () => import(/* webpackChunkName: "salidas" */ './components/salidas/RegistrarTraslado');
const SalidaRegistrarTrasladoConsignacion = () => import(/* webpackChunkName: "salidas" */ './components/salidas/RegistrarTrasladoConsignacion');
const SalidaRegistrarDevolucionConsignacion = () => import(/* webpackChunkName: "salidas" */ './components/salidas/RegistrarDevolucionConsignacion');
const SalidaRegistrarTrasladoRecuperado = () => import(/* webpackChunkName: "salidas" */ './components/salidas/RegistrarTrasladoRecuperados');



//const SalidaActualizar = () => import(/* webpackChunkName: "salidas" */ './components/salidas/Actualizar');
const SalidaDespachar = () => import(/* webpackChunkName: "salidas" */ './components/salidas/DespacharV2');
const SalidaMostrar = () => import(/* webpackChunkName: "salidas" */ './components/salidas/Mostrar');
const SalidaRegistrarDev = () => import(/* webpackChunkName: "salidas" */ './components/salidas/RegistrarDevolucion2');
const SalidaManualRegistrar = () => import(/* webpackChunkName: "salidas" */ './components/salidas/DespacharManual');

const TiposSalida = () => import(/* webpackChunkName: "tipos-salida" */ './components/tipos_salida/Listado');
const TipoSalidaRegistrar = () => import(/* webpackChunkName: "tipos-salida" */ './components/tipos_salida/Registrar');
const TipoSalidaActualizar = () => import(/* webpackChunkName: "tipos-salida" */ './components/tipos_salida/Actualizar');

//import ReporteKardex from './components/reportes/Kardex';
const ReporteKardex = () => import(/* webpackChunkName: "reporte-kardex" */ './components/reportes/Kardex');

const AjustesActualizar = () => import(/* webpackChunkName: "ajustes" */ './components/ajustes/Actualizar');
/*
const AjustesContabilidadActualizar = () => import(/!* webpackChunkName: "ajustes-contabilidad" *!/ './components/ajustes/AjustesContabilidad');
const AjustesImportacion = () => import(/!* webpackChunkName: "ajustes-importacion" *!/ './components/ajustes/AjustesImportacion');
const AjustesFacturaComprobante = () => import(/!* webpackChunkName: "ajustes-importacion" *!/ './components/ajustes/AjustesFactura');
const AjustesPlanillaComprobante = () => import(/!* webpackChunkName: "ajustes-planilla" *!/ './components/ajustes/AjustesPlanilla');*/

/*
const TasasCambio = () => import(/!* webpackChunkName: "tasas_cambio" *!/ './components/tasas-cambio/Listado');
const TasasCambioLubnica = () => import(/!* webpackChunkName: "tasas_cambio" *!/ './components/tasas-cambio/ListadoEditable');

const Anexos = () => import(/!* webpackChunkName: "anexos" *!/ './components/anexos/Listado');
const AnexoRegistrar = () => import(/!* webpackChunkName: "anexos" *!/ './components/anexos/Registrar');
const AnexoActualizar = () => import(/!* webpackChunkName: "anexos" *!/ './components/anexos/Actualizar');
const AnexosOrden = () => import(/!* webpackChunkName: "anexos" *!/ './components/anexos/Ordenar');

const TiposCuentas = () => import(/!* webpackChunkName: "tipos-cuentas" *!/ './components/tipos-cuentas/Listado');
const TipoCuentaActualizar = () => import(/!* webpackChunkName: "tipos-cuentas" *!/ './components/tipos-cuentas/Actualizar');

const NivelesCuentas = () => import(/!* webpackChunkName: "tipos-cuentas" *!/ './components/niveles-cuentas/Listado');
const NivelCuentaActualizar = () => import(/!* webpackChunkName: "tipos-cuentas" *!/ './components/niveles-cuentas/Actualizar');

const CuentasContables = () => import(/!* webpackChunkName: "cuentas-contables" *!/ './components/cuentas-contables/Listado');
const RegistrarCuentaContable = () => import(/!* webpackChunkName: "cuentas-contables" *!/ './components/cuentas-contables/Registrar');
const ActualizarCuentaContable = () => import(/!* webpackChunkName: "cuentas-contables" *!/ './components/cuentas-contables/Actualizar');
const RegistrarSubCuentaContable = () => import(/!* webpackChunkName: "cuentas-contables" *!/ './components/cuentas-contables/RegistrarSubCuenta');

const BancosListado = () => import(/!* webpackChunkName: "bancos" *!/ './components/bancos/Listado');
const BancoRegistrar = () => import(/!* webpackChunkName: "bancos" *!/ './components/bancos/Registrar');
const BancoActualizar = () => import(/!* webpackChunkName: "bancos" *!/ './components/bancos/Actualizar');

const CuentasBancarias = () => import(/!* webpackChunkName: "cuentas-bancarias" *!/ './components/cuentas-bancarias/Listado');
const CuentaBancariaRegistrar = () => import(/!* webpackChunkName: "cuentas-bancarias" *!/ './components/cuentas-bancarias/Registrar');
const CuentaBancariaActualizar = () => import(/!* webpackChunkName: "cuentas-bancarias" *!/ './components/cuentas-bancarias/Actualizar');

const Periodos = () => import(/!* webpackChunkName: "periodos" *!/ './components/periodos/Listado');
const PeriodoRegistrar = () => import(/!* webpackChunkName: "periodos" *!/ './components/periodos/Registrar');
const PeriodoActualizar = () => import(/!* webpackChunkName: "periodos" *!/ './components/periodos/Actualizar');

const DocumentosContables = () => import(/!* webpackChunkName: "documentos-contables" *!/ './components/documentos-contables/Listado');
const DocumentoContableRegistrar = () => import(/!* webpackChunkName: "documentos-contables" *!/ './components/documentos-contables/Registrar');

const TiposDocumentos = () => import(/!* webpackChunkName: "tipos_documentos" *!/ './components/tipos-documentos/Listado');
const TipoDocumentoActualizar = () => import(/!* webpackChunkName: "tipos_documentos" *!/ './components/tipos-documentos/Actualizar');
const TipoDocumentoRegistrar = () => import(/!* webpackChunkName: "tipos_documentos" *!/ './components/tipos-documentos/Registrar');*/

const DireccionesListado = () => import(/* webpackChunkName: "direcciones" */ './components/direcciones/Listado');
const DireccionRegistrar = () => import(/* webpackChunkName: "direcciones" */ './components/direcciones/Registrar');
const DireccionActualizar = () => import(/* webpackChunkName: "direcciones" */ './components/direcciones/Actualizar');

const CargosListado = () => import(/* webpackChunkName: "cargos" */ './components/cargos/Listado');
const CargoRegistrar = () => import(/* webpackChunkName: "cargos" */ './components/cargos/Registrar');
const CargoActualizar = () => import(/* webpackChunkName: "cargos" */ './components/cargos/Actualizar');

const AreasListado = () => import(/* webpackChunkName: "areas" */ './components/areas/Listado');
const AreaRegistrar = () => import(/* webpackChunkName: "areas" */ './components/areas/Registrar');
const AreaActualizar = () => import(/* webpackChunkName: "areas" */ './components/areas/Actualizar');

const PaisesListado = () => import(/* webpackChunkName: "paises" */ './components/paises/Listado');
const PaisRegistrar = () => import(/* webpackChunkName: "paises" */ './components/paises/Registrar');
const PaisActualizar = () => import(/* webpackChunkName: "paises" */ './components/paises/Actualizar');

const DepartamentosListado = () => import(/* webpackChunkName: "departamento" */ './components/departamentos/Listado');
const DepartamentoRegistrar = () => import(/* webpackChunkName: "departamento" */ './components/departamentos/Registrar');
const DepartamentoActualizar = () => import(/* webpackChunkName: "departamento" */ './components/departamentos/Actualizar');

const MunicipiosListado = () => import(/* webpackChunkName: "municipio" */ './components/municipios/Listado');
const MunicipioRegistrar = () => import(/* webpackChunkName: "municipio" */ './components/municipios/Registrar');
const MunicipioActualizar = () => import(/* webpackChunkName: "municipio" */ './components/municipios/Actualizar');

/*const SucursalesListado = () => import(/!* webpackChunkName: "sucursales" *!/ './components/sucursales/Listado');
const SucursalRegistrar = () => import(/!* webpackChunkName: "sucursales" *!/ './components/sucursales/Registrar');
const SucursalActualizar = () => import(/!* webpackChunkName: "sucursales" *!/ './components/sucursales/Actualizar');

const SolicitudesPagosListado = () => import(/!* webpackChunkName: "solicitud-pago" *!/ './components/solicitudes-pagos/Listado');
const SolicitudPagoRegistrar = () => import(/!* webpackChunkName: "solicitud-pago" *!/ './components/solicitudes-pagos/RegistrarSP');
const SolicitudPagoRevisar = () => import(/!* webpackChunkName: "solicitud-pago" *!/ './components/solicitudes-pagos/Revisar');
const SolicitudPagoAprobar = () => import(/!* webpackChunkName: "solicitud-pago" *!/ './components/solicitudes-pagos/Aprobar');
const SolicitudPagoAutorizar = () => import(/!* webpackChunkName: "solicitud-pago" *!/ './components/solicitudes-pagos/ListadoAprobacion');
const SolicitudPagoContabilizar = () => import(/!* webpackChunkName: "solicitud-pago" *!/ './components/solicitudes-pagos/ContabilizarSolicitud');
const SolicitudPagoEmitir = () => import(/!* webpackChunkName: "solicitud-pago" *!/ './components/solicitudes-pagos/EmitirSolicitud');
const SolicitudPagoEntregar = () => import(/!* webpackChunkName: "solicitud-pago" *!/ './components/solicitudes-pagos/EntregarSolicitud');
const SolicitudPagoMostrar = () => import(/!* webpackChunkName: "solicitud-pago" *!/ './components/solicitudes-pagos/Mostrar');


const MinutasListado = () => import(/!* webpackChunkName: "minutas" *!/ './components/minutas-deposito/Listado');
const MinutaRegistrar = () => import(/!* webpackChunkName: "minutas" *!/ './components/minutas-deposito/Registrar');
const MinutaActualizar = () => import(/!* webpackChunkName: "minutas" *!/ './components/minutas-deposito/Actualizar');*/

const ForgotPassword = () => import(/* webpackChunkName: "basico" */ './components/contrasenas/ForgotPassword');
const ResetPasswordForm = () => import(/* webpackChunkName: "basico" */ './components/contrasenas/ResetPasswordForm');

/*const MarcasListado = () => import(/!* webpackChunkName: "marcas" *!/ './components/baterias_marcas/Listado');
const MarcaRegistrar = () => import(/!* webpackChunkName: "marcas" *!/ './components/baterias_marcas/Registrar');
const MarcaActualizar = () => import(/!* webpackChunkName: "marcas" *!/ './components/baterias_marcas/Actualizar');

const SubMarcasListado = () => import(/!* webpackChunkName: "marcas" *!/ './components/baterias_submarcas/Listado');
const SubMarcaRegistrar = () => import(/!* webpackChunkName: "marcas" *!/ './components/baterias_submarcas/Registrar');
const SubMarcaActualizar = () => import(/!* webpackChunkName: "marcas" *!/ './components/baterias_submarcas/Actualizar');

const AplicacionesListado = () => import(/!* webpackChunkName: "aplicaciones" *!/ './components/baterias_aplicaciones/Listado');
const AplicacionRegistrar = () => import(/!* webpackChunkName: "aplicaciones" *!/ './components/baterias_aplicaciones/Registrar');
const AplicacionActualizar = () => import(/!* webpackChunkName: "aplicaciones" *!/ './components/baterias_aplicaciones/Actualizar');

const SubAplicacionesListado = () => import(/!* webpackChunkName: "aplicaciones" *!/ './components/baterias_subaplicaciones/Listado');
const SubAplicacionRegistrar = () => import(/!* webpackChunkName: "aplicaciones" *!/ './components/baterias_subaplicaciones/Registrar');
const SubAplicacionActualizar = () => import(/!* webpackChunkName: "aplicaciones" *!/ './components/baterias_subaplicaciones/Actualizar');

const LineasListado = () => import(/!* webpackChunkName: "lineas" *!/ './components/baterias_lineas/Listado');
const LineaRegistrar = () => import(/!* webpackChunkName: "lineas" *!/ './components/baterias_lineas/Registrar');
const LineaActualizar = () => import(/!* webpackChunkName: "lineas" *!/ './components/baterias_lineas/Actualizar');

const MaterialesListado = () => import(/!* webpackChunkName: "materiales" *!/ './components/baterias_materiales/Listado');
const MaterialRegistrar = () => import(/!* webpackChunkName: "materiales" *!/ './components/baterias_materiales/Registrar');
const MaterialActualizar = () => import(/!* webpackChunkName: "materiales" *!/ './components/baterias_materiales/Actualizar');*/

const UsuariosListado = () => import(/* webpackChunkName: "usuarios" */ './components/usuarios/Listado');
const UsuarioRegistrar = () => import(/* webpackChunkName: "usuarios" */ './components/usuarios/Registrar');
const UsuarioActualizar = () => import(/* webpackChunkName: "usuarios" */ './components/usuarios/Actualizar');
const UsuarioCambiarContrasena = () => import(/* webpackChunkName: "usuarios" */ './components/usuarios/CambiarContraseña');

/*const Importaciones = () => import(/!* webpackChunkName: "importaciones" *!/ './components/importaciones/Listado');
const ImportacionRegistrar = () => import(/!* webpackChunkName: "importaciones" *!/ './components/importaciones/Registrar');
const ImportacionActualizar = () => import(/!* webpackChunkName: "importaciones" *!/ './components/importaciones/Actualizar');

const GruposActivoListado = () => import(/!* webpackChunkName: "grupos-activos" *!/ './components/activos-grupos/Listado');
const GrupoActivoRegistrar = () => import(/!* webpackChunkName: "grupos-activos" *!/ './components/activos-grupos/Registrar');
const GrupoActivoActualizar = () => import(/!* webpackChunkName: "grupos-activos" *!/ './components/activos-grupos/Actualizar');

const PropietariosActivoListado = () => import(/!* webpackChunkName: "propietarios-activos" *!/ './components/activos-propietarios/Listado');
const PropietarioActivoRegistrar = () => import(/!* webpackChunkName: "propietarios-activos" *!/ './components/activos-propietarios/Registrar');
const PropietarioActivoActualizar = () => import(/!* webpackChunkName: "propietarios-activos" *!/ './components/activos-propietarios/Actualizar');

const TiposActivoListado = () => import(/!* webpackChunkName: "tipos-activos" *!/ './components/activos-tipos/Listado');
const TipoActivoRegistrar = () => import(/!* webpackChunkName: "tipos-activos" *!/ './components/activos-tipos/Registrar');
const TipoActivoActualizar = () => import(/!* webpackChunkName: "tipos-activos" *!/ './components/activos-tipos/Actualizar');

const ColoresActivoListado = () => import(/!* webpackChunkName: "colores-activos" *!/ './components/activos-colores/Listado');
const ColorActivoRegistrar = () => import(/!* webpackChunkName: "colores-activos" *!/ './components/activos-colores/Registrar');
const ColorActivoActualizar = () => import(/!* webpackChunkName: "tipos-activos" *!/ './components/activos-colores/Actualizar');

const ActivosFijosListado = () => import(/!* webpackChunkName: "activo-fijo" *!/ './components/activos_fijos/Listado');
const ActivosFijosRegistrar = () => import(/!* webpackChunkName: "activo-fijo" *!/ './components/activos_fijos/Registrar');
const ActivosFijosActualizar = () => import(/!* webpackChunkName: "activo-fijo" *!/ './components/activos_fijos/Actualizar');
const ActivosFijosRevaluacion = () => import(/!* webpackChunkName: "activo-fijo" *!/ './components/activos_fijos/Revaluacion');
const ActivosFijosReasignar = () => import(/!* webpackChunkName: "activo-fijo" *!/ './components/activos_fijos/Reasignar');
const ActivosFijosDarBaja = () => import(/!* webpackChunkName: "activo-fijo" *!/ './components/activos_fijos/AutorizacionBajaActivo');
const ActivosFijosReasignarLote = () => import(/!* webpackChunkName: "activo-fijo" *!/ './components/activos_fijos/ReasignarLote');
const ActivosFijosGenerarActa = () => import(/!* webpackChunkName: "activo-fijo" *!/ './components/activos_fijos/GenerarActaEntrega');
const ActivosFijosCierre = () => import(/!* webpackChunkName: "activo-fijo" *!/ './components/activos_fijos/GenerarCierre');
const ActivosFijosUbicacion = () => import(/!* webpackChunkName: "activo-fijo" *!/ './components/activos_fijos/LocalizarActivo');


const ActivosFijosTrasladosListado = () => import(/!* webpackChunkName: "activo-fijo" *!/ './components/activos_fijos/ListadoTraslados');
const ActivosFijosCierresListado = () => import(/!* webpackChunkName: "activo-fijo" *!/ './components/activos_fijos/ListadoCierres');


const BalanzaComprobacion = () => import(/!* webpackChunkName: "balanza-comprobacion" *!/ './components/reportes_financieros/BalanzaComprobacion');
const BalanzaComprobacionRta91 = () => import(/!* webpackChunkName: "balanza-comprobacion" *!/ './components/reportes_financieros/BalanzaComprobacionRta91');
const BalanceGeneral = () => import(/!* webpackChunkName: "balance-general" *!/ './components/reportes_financieros/BalanceGeneral');
const EstadoResultados = () => import(/!* webpackChunkName: "estado-resultados" *!/ './components/reportes_financieros/EstadoResultados');*/

const Zonas = () => import(/* webpackChunkName: "zonas" */ './components/zonas/Listado');
const ZonaRegistrar = () => import(/* webpackChunkName: "zonas" */ './components/zonas/Registrar');
const ZonaActualizar = () => import(/* webpackChunkName: "zonas" */ './components/zonas/Actualizar');

/*const ContratoInterno = () => import(/!* webpackChunkName: "contrato-interno" *!/ './components/contratos_generales_internos/Listado');
const ContratoInternoRegistrar = () => import(/!* webpackChunkName: "contrato-interno" *!/ './components/contratos_generales_internos/Registrar');
const ContratoInternoActualizar = () => import(/!* webpackChunkName: "contrato-interno" *!/ './components/contratos_generales_internos/Actualizar');

const ContratoInternoMerecedor = () => import(/!* webpackChunkName: "contrato-merecedores" *!/ './components/contratos_generales_merecedores/Listado');
const ContratoInternoMerecedorRegistrar = () => import(/!* webpackChunkName: "contrato-merecedores" *!/ './components/contratos_generales_merecedores/Registrar');
const ContratoInternoMerecedorActualizar = () => import(/!* webpackChunkName: "contrato-merecedores" *!/ './components/contratos_generales_merecedores/Actualizar');

const ContratoSolicitudes = () => import(/!* webpackChunkName: "contrato-solicitudes" *!/ './components/contratos_solicitudes/Listado');
const ContratoSolicitudesRegistrar = () => import(/!* webpackChunkName: "contrato-solicitudes" *!/ './components/contratos_solicitudes/Registrar');
const ContratoSolicitudesActualizar = () => import(/!* webpackChunkName: "contrato-solicitudes" *!/ './components/contratos_solicitudes/Actualizar');

const IngresoDeducciones = () => import(/!* webpackChunkName: "ingreso-deducciones" *!/ './components/ingresos_deducciones/Listado');
const Ingresos = () => import(/!* webpackChunkName: "ingreso-deducciones" *!/ './components/ingresos_deducciones/Listado');
const Deducciones = () => import(/!* webpackChunkName: "ingreso-deducciones" *!/ './components/ingresos_deducciones/ListadoDeducciones');
const IngresoDeduccionesRegistrar = () => import(/!* webpackChunkName: "ingreso-deducciones" *!/ './components/ingresos_deducciones/Registrar');
const IngresoDeduccionesActualizar = () => import(/!* webpackChunkName: "ingreso-deducciones" *!/ './components/ingresos_deducciones/Actualizar');

const PlanillaControles = () => import(/!* webpackChunkName: "planilla-controles" *!/ './components/planillas_controles/Listado');
const PlanillaControlesRegistrar = () => import(/!* webpackChunkName: "planilla-controles" *!/ './components/planillas_controles/Registrar');
const PlanillaControlesActualizar = () => import(/!* webpackChunkName: "planilla-controles" *!/ './components/planillas_controles/Actualizar');

const ConfiguracionIR = () => import(/!* webpackChunkName: "configuracion-ir" *!/ './components/configuracion_ir/Listado');
const ConfiguracionIRRegistrar = () => import(/!* webpackChunkName: "configuracion-ir" *!/ './components/configuracion_ir/Registrar');
const ConfiguracionIRActualizar = () => import(/!* webpackChunkName: "configuracion-ir" *!/ './components/configuracion_ir/Actualizar');*/

const NivelAcademico = () => import(/* webpackChunkName: "niveles-academicos" */ './components/niveles-academicos/Listado');
const NivelAcademicoRegistrar = () => import(/* webpackChunkName: "niveles-academicos" */ './components/niveles-academicos/Registrar');
const NivelAcademicoActualizar = () => import(/* webpackChunkName: "niveles-academicos" */ './components/niveles-academicos/Actualizar');

const NivelEstudio = () => import(/* webpackChunkName: "niveles-estudios" */ './components/niveles-estudios/Listado');
const NivelEstudioRegistrar = () => import(/* webpackChunkName: "niveles-estudios" */ './components/niveles-estudios/Registrar');
const NivelEstudioActualizar = () => import(/* webpackChunkName: "niveles-estudios" */ './components/niveles-estudios/Actualizar');

/*const Feriado = () => import(/!* webpackChunkName: "feriado" *!/ './components/feriados/Listado');
const FeriadoRegistrar = () => import(/!* webpackChunkName: "feriado" *!/ './components/feriados/Registrar');
const FeriadoActualizar = () => import(/!* webpackChunkName: "feriado" *!/ './components/feriados/Actualizar');

const Vacaciones = () => import(/!* webpackChunkName: "solicitud-vacaciones" *!/ './components/solicitudes_vacaciones/Listado');
const VacacionesRegistrar = () => import(/!* webpackChunkName: "solicitud-vacaciones" *!/ './components/solicitudes_vacaciones/Registrar');
const VacacionesActualizar = () => import(/!* webpackChunkName: "solicitud-vacaciones" *!/ './components/solicitudes_vacaciones/Actualizar');

const AsignacionIngreso = () => import(/!* webpackChunkName: "asignacion-ingreso-deduccion" *!/ './components/asignacion_ingreso_deduccion/Listado');
const AsignacionIngresoRegistrar = () => import(/!* webpackChunkName: "asignacion-ingreso-deduccion" *!/ './components/asignacion_ingreso_deduccion/Registrar');
const AsignacionIngresoActualizar = () => import(/!* webpackChunkName: "asignacion-ingreso-deduccion" *!/ './components/asignacion_ingreso_deduccion/Actualizar');

const Marcadas = () => import(/!* webpackChunkName: "marcadas" *!/ './components/marcadas/Listado');
const MarcadasRegistrar = () => import(/!* webpackChunkName: "marcadas" *!/ './components/marcadas/Registrar');
const MarcadasActualizar = () => import(/!* webpackChunkName: "marcadas" *!/ './components/marcadas/Actualizar');

const GenerarPlanilla = () => import(/!* webpackChunkName: "generar-planilla" *!/ './components/generar_planilla/Generar');
const ProcesarPlanilla = () => import(/!* webpackChunkName: "generar-planilla" *!/ './components/generar_planilla/Procesar');

const Normativas = () => import(/!* webpackChunkName: "normativas" *!/ './components/normativas/Listado');
const NormativasRegistrar = () => import(/!* webpackChunkName: "normativas" *!/ './components/normativas/Registrar');
const NormativasActualizar = () => import(/!* webpackChunkName: "normativas" *!/ './components/normativas/Actualizar');

const Viaticos = () => import(/!* webpackChunkName: "viaticos" *!/ './components/viaticos/Listado');
const ViaticosRegistrar = () => import(/!* webpackChunkName: "viaticos" *!/ './components/viaticos/Registrar');
const ViaticosActualizar = () => import(/!* webpackChunkName: "viaticos" *!/ './components/viaticos/Actualizar');

const CajaChica = () => import(/!* webpackChunkName: "caja" *!/ './components/caja-chica/Listado');
const CajaChicaRegistrar = () => import(/!* webpackChunkName: "caja" *!/ './components/caja-chica/Registrar');
const CajaChicaActualizar = () => import(/!* webpackChunkName: "caja" *!/ './components/caja-chica/Actualizar');

const SolicitudViatico = () => import(/!* webpackChunkName: "solicitud-viatico" *!/ './components/solicitud-viatico/Listado');
const SolicitudViaticoRegistrar = () => import(/!* webpackChunkName: "solicitud-viatico" *!/ './components/solicitud-viatico/Registrar');
const SolicitudViaticoActualizar = () => import(/!* webpackChunkName: "solicitud-viatico" *!/ './components/solicitud-viatico/Actualizar');

const ComprobanteCajaChica = () => import(/!* webpackChunkName: "comprobante-caja-chica" *!/ './components/comprobante-caja-chica/Listado');
const ValeCajachica = () => import(/!* webpackChunkName: "comprobante-caja-chica" *!/ './components/comprobante-caja-chica/ListadoVale');
const ComprobanteCajaChicaRegistrar = () => import(/!* webpackChunkName: "comprobante-caja-chica" *!/ './components/comprobante-caja-chica/Registrar');
const ComprobanteCajaChicaRegistrarSolicitud = () => import(/!* webpackChunkName: "comprobante-caja-chica" *!/ './components/comprobante-caja-chica/RegistrarSV');
const ComprobanteCajaChicaRegistrarVales = () => import(/!* webpackChunkName: "comprobante-caja-chica" *!/ './components/comprobante-caja-chica/RegistrarV');
const ComprobanteCajaChicaRegistrarVale = () => import(/!* webpackChunkName: "comprobante-caja-chica" *!/ './components/comprobante-caja-chica/RegistrarVale');
const ComprobanteCajaChicaActualizar = () => import(/!* webpackChunkName: "comprobante-caja-chica" *!/ './components/comprobante-caja-chica/Actualizar');
const ComprobanteCajaChicaActualizarVale = () => import(/!* webpackChunkName: "comprobante-caja-chica" *!/ './components/comprobante-caja-chica/ActualizarVale');

const SolicitudReembolso = () => import(/!* webpackChunkName: "solicitud-reembolso-caja-chica" *!/ './components/solicitud-reembolso/Listado');
const SolicitudReembolsoRegistrar = () => import(/!* webpackChunkName: "solicitud-reembolso-caja-chica" *!/ './components/solicitud-reembolso/Registrar');*/

const Clientes = () => import(/* webpackChunkName: "clientes" */ './components/clientes/Listado');
const ClienteRegistrar = () => import(/* webpackChunkName: "clientes" */ './components/clientes/Registrar');
const ClienteActualizar = () => import(/* webpackChunkName: "clientes" */ './components/clientes/Actualizar');
const ClientesSolicitudConsignacion = () => import(/* webpackChunkName: "clientes" */ './components/clientes/ListadoAprobacionConsignacion');

/*const ClasificacionCompra = () => import(/!* webpackChunkName: "clasificacion" *!/ './components/clasificacion_compra/Listado');
const ClasificacionCompraRegistrar = () => import(/!* webpackChunkName: "clasificacion" *!/ './components/clasificacion_compra/Registrar');
const ClasificacionCompraActualizar = () => import(/!* webpackChunkName: "clasificacion" *!/ './components/clasificacion_compra/Actualizar');

const SolicitudesCompra = () => import(/!* webpackChunkName: "solicitudes-compras" *!/ './components/compras/ListadoSolicitudesCompra');
const SolicitudesCompraRegistrar = () => import(/!* webpackChunkName: "solicitudes-compras" *!/ './components/compras/RegistrarSolicitud');
const SolicitudesCompraMostrar = () => import(/!* webpackChunkName: "solicitudes-compras" *!/ './components/compras/MostrarSolicitud');
const SolicitudesCompraActualizar = () => import(/!* webpackChunkName: "solicitudes-compras" *!/ './components/compras/ActualizarSolicitudCompra');
const SolicitudesCompraRevisar = () => import(/!* webpackChunkName: "solicitudes-compras" *!/ './components/compras/RevisarSolicitudCompra');



const OrdenesCompra = () => import(/!* webpackChunkName: "ordenes-compras" *!/ './components/compras/Listado');
const OrdenesCompraRegistrar = () => import(/!* webpackChunkName: "ordenes-compras" *!/ './components/compras/Registrar');
const OrdenesCompraMostrar = () => import(/!* webpackChunkName: "ordenes-compras" *!/ './components/compras/Mostrar');
const OrdenesCompraActualizar = () => import(/!* webpackChunkName: "ordenes-compras" *!/ './components/compras/Actualizar');
const OrdenesCompraRegistrarPorSolicitud = () => import(/!* webpackChunkName: "ordenes-compras" *!/ './components/compras/RegistrarOCSolicitud');
const OrdenesCompraRevisar = () => import(/!* webpackChunkName: "ordenes-compras" *!/ './components/compras/RevisarOrdenCompra');

const OrdenesCompraPS = () => import(/!* webpackChunkName: "ordenes-compras-ps" *!/ './components/compras/ListadoPS');
const OrdenesCompraPSRegistrar = () => import(/!* webpackChunkName: "ordenes-compras-ps" *!/ './components/compras/RegistrarPS');
const OrdenesCompraPSMostrar = () => import(/!* webpackChunkName: "ordenes-compras-ps" *!/ './components/compras/MostrarPS');
const OrdenesCompraPSActualizar = () => import(/!* webpackChunkName: "ordenes-compras-ps" *!/ './components/compras/ActualizarPS');
const OrdenesCompraRevisarPS = () => import(/!* webpackChunkName: "ordenes-compras-ps" *!/ './components/compras/RevisarOrdenCompraPS');

const Requisas = () => import(/!* webpackChunkName: "requisas" *!/ './components/requisas/Listado');
const RequisaRegistrar = () => import(/!* webpackChunkName: "requisas" *!/ './components/requisas/Registrar');
//const RequisaActualizar = () => import(/!* webpackChunkName: "requisas" *!/ './components/requisas/Actualizar');
const RequisaAutorizar = () => import(/!* webpackChunkName: "requisas" *!/ './components/requisas/Autorizar');
const RequisaMostrar = () => import(/!* webpackChunkName: "requisas" *!/ './components/requisas/Mostrar');*/


const InventarioReportes = () => import(/* webpackChunkName: "inventario-reportes" */ './components/reportes/ReportesGeneralesInventario');
/*const CuentasxCobrarReportes = () => import(/!* webpackChunkName: "cuentas-cobrar-reportes" *!/ './components/reportes/ReportesGeneralesCuentasXCobrar');
const CuentasxPagarReportes = () => import(/!* webpackChunkName: "cuentas-pagar-reportes" *!/ './components/reportes/ReportesGeneralesCuentasXPagar');
const ActivoReportes = () => import(/!* webpackChunkName: "activo-reportes" *!/ './components/reportes/ReportesGeneralesActivos');
const CajaBancoReportes = () => import(/!* webpackChunkName: "caja-banco-reportes" *!/ './components/reportes/ReportesGeneralesCajaBanco');
const TesoreriaReportes = () => import(/!* webpackChunkName: "tesoreria-reportes" *!/ './components/reportes/ReportesGeneralesTesoreria');
const NominaReportes = () => import(/!* webpackChunkName: "nomina-reportes" *!/ './components/reportes/ReportesGeneralesNomina');
const ContabilidadReportes = () => import(/!* webpackChunkName: "contabilidad-reportes" *!/ './components/reportes/ReportesGeneralesContabilidad');

const FacturacionReportes = () => import(/!* webpackChunkName: "facturacion-reportes" *!/ './components/reportes/ReportesGeneralesFacturacion');*/

/*const DashboardContabilidad = () => import(/!* webpackChunkName: "principal-contabilidad" *!/'./components/pagina-principal/DashboardContabilidad');
const DashboardActivos = () => import(/!* webpackChunkName: "principal-activos" *!/'./components/pagina-principal/DashboardActivos');*/
const DashboardAdministracion = () => import(/* webpackChunkName: "principal-administracion" */'./components/pagina-principal/DashboardAdministracion');
/*const DashboardCajaBancos = () => import(/!* webpackChunkName: "principal-caja" *!/'./components/pagina-principal/DashboardCajaBancos');
const DashboardCompras = () => import(/!* webpackChunkName: "principal-compras" *!/'./components/pagina-principal/DashboardCompras');
const DashboardCuentasPorCobrar = () => import(/!* webpackChunkName: "principal-cuentas-cobrar" *!/'./components/pagina-principal/DashboardCuentasPorCobrar');
const DashboardCuentasPorPagar = () => import(/!* webpackChunkName: "principal-cuentas-pagar" *!/'./components/pagina-principal/DashboardCuentasPorPagar');*/
const DashboardInventario = () => import(/* webpackChunkName: "principal-inventario" */'./components/pagina-principal/DashboardInventario');
/*const DashboardNomina = () => import(/!* webpackChunkName: "principal-nomina" *!/'./components/pagina-principal/DashboardNomina');
const DashboardTesoreria =() => import(/!*webpackChunkName: "principal-tesoreria"*!/'./components/pagina-principal/DashboardTesoreria');*/
const DashboardVentas =() => import(/*webpackChunkName: "principal-ventas"*/'./components/pagina-principal/DashboardVentas');
/*const DashboardImportacionDatos =() => import(/!*webpackChunkName: "principal-importacion-datos"*!/'./components/pagina-principal/DashboardImportacionDatos');*/



/*const Facturas = () => import(/!* webpackChunkName: "facturas" *!/ './components/facturas/Listado');
const FacturaRegistrar = () => import(/!* webpackChunkName: "facturas" *!/ './components/facturas/Registrar');
const FacturaMostrar = () => import(/!* webpackChunkName: "facturas" *!/ './components/facturas/Mostrar');
const FacturaConsignacionRegistrar = () => import(/!* webpackChunkName: "facturas" *!/ './components/facturas/RegistrarConsignacion');

const FacturaVentasRegistrar = () => import(/!* webpackChunkName: "facturas-ventas" *!/ './components/facturas/RegistrarVentas');


const ArqueoDiarioListado = () => import(/!* webpackChunkName: "arqueos-diarios" *!/ './components/facturas/ListadoArqueos');
const ArqueoDiarioRegistrar = () => import(/!* webpackChunkName: "arqueos-diarios" *!/ './components/facturas/ArqueoDiario');


const FacturaExportacionListado = () => import(/!* webpackChunkName: "facturas" *!/ './components/facturas/ListadoFacturasExportacion');
const FacturaExportacionRegistrar = () => import(/!* webpackChunkName: "facturas" *!/ './components/facturas/RegistrarFacturaExportacion');

const FacturaAjusteRegistrar = () => import(/!* webpackChunkName: "facturas" *!/ './components/facturas/RegistrarFacturaAjuste');
const FacturaSinGarantiaRegistrar = () => import(/!* webpackChunkName: "facturas" *!/ './components/facturas/RegistrarRecuperadosObsoletos');*/

const LayoutFullWidth = () => import(/* webpackChunkName: "principal" */ './components/layout/LayoutFullWidth');

/*const ImportacionRegistrarPorOC = () => import(/!* webpackChunkName: "importaciones" *!/ './components/importaciones/RegistrarOC');


const ViaPagos = () => import(/!* webpackChunkName: "vias" *!/'./components/via-pago/Listado');
const ViaPagosRegistrar = () => import(/!* webpackChunkName: "vias" *!/'./components/via-pago/Registrar');
const ViaPagosActualizar = () => import(/!* webpackChunkName: "vias" *!/'./components/via-pago/Actualizar');*/

const CentroCostos = () => import(/*webpackChunkName: "centros" */'./components/centro_costo_ingreso/Listado');
const CentroCostosRegistrar = () => import(/*webpackChunkName: "centros" */'./components/centro_costo_ingreso/Registrar');
const CentroCostosActualizar = () => import(/*webpackChunkName: "centros" */'./components/centro_costo_ingreso/Actualizar');
/*
const Impuesto = () => import(/!* webpackChunkName: "vias" *!/'./components/impuestos/Listado');
const ImpuestoRegistrar = () => import(/!* webpackChunkName: "vias" *!/'./components/impuestos/Registrar');
const ImpuestoActualizar = () => import(/!* webpackChunkName: "vias" *!/'./components/impuestos/Actualizar');*/

const TipoProveedor = () => import(/* webpackChunkName: "tipos-proveedores" */'./components/tipo-proveedor/Listado');
const TipoProveedorRegistrar = () => import(/* webpackChunkName: "tipos-proveedores" */'./components/tipo-proveedor/Registrar');
const TipoProveedorActualizar = () => import(/* webpackChunkName: "tipos-proveedores" */'./components/tipo-proveedor/Actualizar');

/*const AfectacionesFactura = () => import(/!* webpackChunkName: "afectaciones-facturas" *!/ './components/facturas/ListadoAfectaciones');
const AfectacionesFacturaActualizar = () => import(/!* webpackChunkName: "afectaciones-facturas" *!/ './components/facturas/ActualizarAfectacion');
const AfectacionesFacturaRegistrar = () => import(/!* webpackChunkName: "afectaciones-facturas" *!/ './components/facturas/RegistrarAfectacion');*/

/*const CuentasPorCobrar = () => import(/!* webpackChunkName: "cuentas-por-cobrar" *!/ './components/cuentas_por_cobrar/Listado');
const CuentasPorCobrarEmpleados = () => import(/!* webpackChunkName: "cuentas-por-cobrar-trabajadores" *!/ './components/cuentas_por_cobrar/ListadoCxCTrabajadores');
const CuentasPorCobrarOtras = () => import(/!* webpackChunkName: "cuentas-por-cobrar" *!/ './components/cuentas_por_cobrar/ListadoOtras');


const RecibosOficiales = () => import(/!* webpackChunkName: "recibos-oficiales" *!/ './components/recibos_oficiales/Listado');
const RecibosOficialesRegistrar = () => import(/!* webpackChunkName: "recibos-oficiales" *!/ './components/recibos_oficiales/Registrar');
const RecibosOficialesMostrar = () => import(/!* webpackChunkName: "recibos-oficiales" *!/ './components/recibos_oficiales/Mostrar');

const RecibosOficialesEmpleados = () => import(/!* webpackChunkName: "recibos-oficiales" *!/ './components/recibos_oficiales_empleados/Listado');
const RecibosOficialesEmpleadoRegistrar = () => import(/!* webpackChunkName: "recibos-oficiales" *!/ './components/recibos_oficiales_empleados/Registrar');
const RecibosOficialesEmpleadoMostrar = () => import(/!* webpackChunkName: "recibos-oficiales" *!/ './components/recibos_oficiales_empleados/Mostrar');

const NotasCredito = () => import(/!* webpackChunkName: "notas-credito" *!/ './components/notas_credito/Listado');
const NotasCreditoRegistrar = () => import(/!* webpackChunkName: "notas-credito" *!/ './components/notas_credito/Registrar');
const NotasCreditoMostrar = () => import(/!* webpackChunkName: "notas-credito" *!/ './components/notas_credito/Mostrar');

const NotasDebito = () => import(/!* webpackChunkName: "notas-debito" *!/ './components/notas_debito/Listado');
const NotasDebitoRegistrar = () => import(/!* webpackChunkName: "notas-debito" *!/ './components/notas_debito/Registrar');
const NotasDebitoMostrar = () => import(/!* webpackChunkName: "notas-debito" *!/ './components/notas_debito/Mostrar');

const NotasCreditoCP = () => import(/!* webpackChunkName: "notas-credito-cp" *!/ './components/notas_credito/ListadoCP');
const NotasCreditoRegistrarCP = () => import(/!* webpackChunkName: "notas-credito-cp" *!/ './components/notas_credito/RegistrarCP');
const NotasCreditoMostrarCP = () => import(/!* webpackChunkName: "notas-credito-cp" *!/ './components/notas_credito/MostrarCP');

const NotasDebitoCP = () => import(/!* webpackChunkName: "notas-debito-cp" *!/ './components/notas_debito/ListadoCP');
const NotasDebitoRegistrarCP = () => import(/!* webpackChunkName: "notas-debito-cp" *!/ './components/notas_debito/RegistrarCP');
const NotasDebitoMostrarCP = () => import(/!* webpackChunkName: "notas-debito-cp" *!/ './components/notas_debito/MostrarCP');


const CargosAbonosTrabajador = () => import(/!* webpackChunkName: "cargo-abono-trabajador" *!/ './components/cargo_abono_trabajador/Listado');
const CargoAbonoTrabajadorRegistrar = () => import(/!* webpackChunkName: "cargo-abono-trabajador" *!/ './components/cargo_abono_trabajador/Registrar');
const CargoAbonoTrabajadorMostrar = () => import(/!* webpackChunkName: "cargo-abono-trabajador" *!/ './components/cargo_abono_trabajador/Mostrar');


const TiposNotasCredito = () => import(/!* webpackChunkName: "tipo-notas-credito" *!/ './components/tipos-notas-credito/Listado');
const TipoNotaCreditoRegistrar = () => import(/!* webpackChunkName: "tipo-notas-credito" *!/ './components/tipos-notas-credito/Registrar');
const TipoNotaCreditoActualizar = () => import(/!* webpackChunkName: "tipo-notas-credito" *!/ './components/tipos-notas-credito/Actualizar');

const TiposNotasDebito = () => import(/!* webpackChunkName: "tipo-notas-debito" *!/ './components/tipos-notas-debito/Listado');
const TipoNotasDebitoRegistrar = () => import(/!* webpackChunkName: "tipo-notas-debito" *!/ './components/tipos-notas-debito/Registrar');
const TipoNotasDebitoActualizar = () => import(/!* webpackChunkName: "tipo-notas-debito" *!/ './components/tipos-notas-debito/Actualizar');


const TiposNotasCreditoCP = () => import(/!* webpackChunkName: "tipo-notas-credito-cp" *!/ './components/tipos-notas-credito/ListadoCP');
const TipoNotaCreditoRegistrarCP = () => import(/!* webpackChunkName: "tipo-notas-credito-cp" *!/ './components/tipos-notas-credito/RegistrarCP');
const TipoNotaCreditoActualizarCP = () => import(/!* webpackChunkName: "tipo-notas-credito-cp" *!/ './components/tipos-notas-credito/ActualizarCP');

const TiposNotasDebitoCP = () => import(/!* webpackChunkName: "tipo-notas-debito-cp" *!/ './components/tipos-notas-debito/ListadoCP');
const TipoNotasDebitoRegistrarCP = () => import(/!* webpackChunkName: "tipo-notas-debito-cp" *!/ './components/tipos-notas-debito/RegistrarCP');
const TipoNotasDebitoActualizarCP = () => import(/!* webpackChunkName: "tipo-notas-debito-cp" *!/ './components/tipos-notas-debito/ActualizarCP');*/



const TiposBodega = () => import(/* webpackChunkName: "tipo-bodega" */ './components/tipo-bodegas/Listado');
const TiposBodegaRegistrar = () => import(/* webpackChunkName: "tipo-bodega" */ './components/tipo-bodegas/Registrar');
const TiposBodegaActualizar = () => import(/* webpackChunkName: "tipo-bodega" */ './components/tipo-bodegas/Actualizar');

/*const CuentasPorPagar = () => import(/!* webpackChunkName: "cuentas-por-pagar" *!/ './components/cuentas_por_pagar/Listado');

const AjustesDepreciacion = () => import(/!* webpackChunkName: "ajustes-depreciacion" *!/ './components/activos-tipos/ListadoCuentas');

const InventarioFisico = () => import(/!* webpackChunkName: "inventario-fisico" *!/ './components/inventario_conteos/Listado');
const InventarioFisicoRegistrar = () => import(/!* webpackChunkName: "inventario-fisico" *!/ './components/inventario_conteos/Registrar');
const InventarioFisicoMostrar = () => import(/!* webpackChunkName: "inventario-fisico" *!/ './components/inventario_conteos/Mostrar');
const InventarioFisicoActualizar = () => import(/!* webpackChunkName: "inventario-fisico" *!/ './components/inventario_conteos/Actualizar');


const Cotizaciones = () => import(/!* webpackChunkName: "cotizaciones" *!/ './components/facturas/ListadoCotizaciones');
const CotizacionRegistrar = () => import(/!* webpackChunkName: "cotizaciones" *!/ './components/facturas/RegistrarCotizacion');
const CotizacionMostrar = () => import(/!* webpackChunkName: "cotizaciones" *!/ './components/facturas/MostrarCotizacion');
const CotizacionRegistrarSeguimiento = () => import(/!* webpackChunkName: "cotizaciones" *!/ './components/facturas/RegistrarSeguimiento');*/

const Diseno = () => import(/* webpackChunkName: "diseno" */ './components/template/FormButtons');

/*const ConsignacionCliente = () => import(/!* webpackChunkName: "consignacion-producto" *!/ './components/consignacion_productos/ListadoPorCliente');
const ConsignacionGeneral = () => import(/!* webpackChunkName: "consignacion-producto" *!/ './components/consignacion_productos/Listado');

const ComisionAsignar = () => import(/!* webpackChunkName: "venta-comisiones" *!/ './components/asignacion_comisiones/Registrar');
const ComisionListado = () => import(/!* webpackChunkName: "venta-comisiones" *!/ './components/asignacion_comisiones/Listado');
const ComisionActualizar = () => import(/!* webpackChunkName: "venta-comisiones" *!/ './components/asignacion_comisiones/Actualizar');

const CatalogoLista = () => import(/!* webpackChunkName: "precio-lista-catalogo" *!/ './components/precio-lista-catalogo/Listado');
const CatalogoListaRegistrar = () => import(/!* webpackChunkName: "precio-lista-catalogo" *!/ './components/precio-lista-catalogo/Registrar');
const CatalogoListaActualizar = () => import(/!* webpackChunkName: "precio-lista-catalogo" *!/ './components/precio-lista-catalogo/Actualizar');

const GrupoListaPrecio = () => import(/!* webpackChunkName: "precio-lista-grupo" *!/ './components/precio-lista-grupo/Listado');
const GrupoListaPrecioRegistrar = () => import(/!* webpackChunkName: "precio-lista-grupo" *!/ './components/precio-lista-grupo/Registrar');
const GrupoListaPrecioActualizar = () => import(/!* webpackChunkName: "precio-lista-grupo" *!/ './components/precio-lista-grupo/Actualizar');

const ListaPrecioBateria = () => import(/!* webpackChunkName: "lista-precio-bateria" *!/ './components/lista-precio-bateria/Listado');
const ListaPrecioBateriaRegistrar = () => import(/!* webpackChunkName: "lista-precio-bateria" *!/ './components/lista-precio-bateria/Registrar');
const ListaPrecioBateriaActualizar = () => import(/!* webpackChunkName: "lista-precio-bateria" *!/ './components/lista-precio-bateria/Actualizar');

const ComisionGerenciasRegistrar = () => import(/!* webpackChunkName: "venta-comisiones" *!/ './components/asignacion_comisiones/RegistrarComisionesGerencia');

const CompraUsadoRegistrar = () => import(/!* webpackChunkName: "compras-usados" *!/ './components/compras/RegistrarCompraUsado');
const CompraUsadoListado = () => import(/!* webpackChunkName: "compras-usados" *!/ './components/compras/ListadoComprasBateriasUsadas');

const AutoCompraUsadoRegistrar = () => import(/!* webpackChunkName: "salidas" *!/ './components/salidas/RegistrarAutoCompraUsado');

const ConciliacionEstadoCuentaBancariaRegistrar = () => import(/!* webpackChunkName: "conciliacion" *!/ './components/cuentas-bancarias/ConciliacionEstadoCuentaBancaria');
const ConciliacionEstadosCuentasBancaria = () => import(/!* webpackChunkName: "conciliacion" *!/ './components/cuentas-bancarias/ListadoEstadosCuenta');
const ConciliacionBancariaRegistrar = () => import(/!* webpackChunkName: "conciliacion" *!/ './components/cuentas-bancarias/ConciliacionRegistrar');
const ConciliacionListado = () => import(/!* webpackChunkName: "conciliacion" *!/ './components/cuentas-bancarias/ListadoConciliaciones');

const Vendedores = () => import(/!* webpackChunkName: "vendedores" *!/ './components/vendedores/Listado');
const VendedoresRegistrar = () => import(/!* webpackChunkName: "vendedores" *!/ './components/vendedores/Registrar');
const VendedoresActualizar = () => import(/!* webpackChunkName: "vendedores" *!/ './components/vendedores/Actualizar');

const ConteoFisicoRegistrar = () => import(/!* webpackChunkName: "conteo-fisico" *!/ './components/conteos-fisicos/RegistrarConteoFisico');
const ConteoFisicoListado = () => import(/!* webpackChunkName: "conteo-fisico" *!/ './components/conteos-fisicos/ListadoConteoFisico');
const ConteoFisicoActualizar = () => import(/!* webpackChunkName: "conteo-fisico" *!/ './components/conteos-fisicos/ActualizarConteoFisico');
const ConteoFisicoMostrar = () => import(/!* webpackChunkName: "conteo-fisico" *!/ './components/conteos-fisicos/MostrarConteoFisico');

//Importación de datos
const CuentasPorCobrarImportacionDatos = () => import(/!* webpackChunkName: "cuentasxcobrar-importacion-datos" *!/ './components/importacion_datos/CuentasXCobrarImportacionDatos');*/



//const BlockUI = () => import(/* webpackChunkName: "vue-blockui" */ 'vue-blockui');
//Vue.component('BlockUI', BlockUI);

const Typeahead = () => import(/* webpackChunkName: "typeahead" */ './components/layout/Typeahead');
Vue.component('typeahead', Typeahead);

const TypeaheadBarCode = () => import(/* webpackChunkName: "typeaheadbarcode" */ './components/layout/TypeaheadBarCode');
Vue.component('typeaheadbarcode', TypeaheadBarCode);

const Pagination = () => import(/* webpackChunkName: "pagination" */ './components/layout/Pagination');
Vue.component('pagination', Pagination);

const draggable = () => import(/* webpackChunkName: "draggable" */ 'vuedraggable');
Vue.component('draggable', draggable);

const Datepicker = () => import(/* webpackChunkName: "datepicker" */ 'vuejs-datepicker');
Vue.component('Datepicker', Datepicker);

import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);

import { VTooltip } from 'v-tooltip'
Vue.directive('tooltip', VTooltip);

const numberasstring = () => import(/* webpackChunkName: "numberasstring" */ './assets/custom-scripts/NumberAsString');
Vue.use(numberasstring);

/*const roundNumber = () => import( webpackChunkName: "roundNumber"  './assets/custom-scripts/Round');
Vue.use(roundNumber);*/

import BlockUI from 'vue-blockui'
Vue.use(BlockUI);

import VueBarcode from 'vue-barcode';
Vue.component('barcode',VueBarcode);

import VuejsDialog from 'vuejs-dialog';
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
Vue.use(VuejsDialog, {
	html: true,
	loader: false,
	okText: 'Aceptar',
	cancelText: 'Cancelar',
	animation: 'bounce',
	message: 'Esta seguro de continuar? Esta accion no se puede deshacer.'
});

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const options = {
	confirmButtonColor: '#41b882',
	cancelButtonColor: '#ff7674'
};
Vue.use(VueSweetalert2, options);


//const VueTimepicker = () => import(/* webpackChunkName: "vue-timepicker" */ 'vue2-timepicker/src/vue-timepicker.vue');
//Vue.component('VueTimepicker', VueTimepicker);

//import 'vue-search-select/dist/VueSearchSelect.css'

//import 'vue-multiselect/dist/vue-multiselect.min.css'

//import { ModelSelect } from 'vue-search-select'
//import Multiselect from 'vue-multiselect'


//const VueApexCharts = () => import(/* webpackChunkName: "charts-vue" */ 'vue-apexcharts');
//Vue.component('apexchart', VueApexCharts);
//Vue.use(VueApexCharts);

const Multiselect = () => import(/* webpackChunkName: "multiselect" */ 'vue-multiselect');
Vue.component('multiselect', Multiselect);
Vue.use(Multiselect);
//Capital1728

const vSelect = () => import(/* webpackChunkName: "vue-select" */ 'vue-select');
Vue.component('v-select', vSelect);
Vue.use(VueRouter);

//global registration
import VueTabs from 'vue-nav-tabs/dist/vue-tabs.js'
import 'vue-nav-tabs/themes/vue-tabs.css'
Vue.use(VueTabs)

const ruta = '/public/';

Vue.use(VueAxios, axios);
//SERVIDOR DESARROLLO
//axios.defaults.baseURL= 'http://ec2-18-191-57-238.us-east-2.compute.amazonaws.com'+ruta;

//SERVIDOR PRUEBAS
//axios.defaults.baseURL= 'http://testserver.sgc-lubnica.com'+ruta;
//axios.defaults.baseURL= 'http://test.sgc-lubnica.com'+ruta;

//LOCAL SERVER
axios.defaults.baseURL = 'http://localhost:81'+ruta;
//axios.defaults.baseURL = '192.168.88.173:8080'+ruta;

//axios.defaults.baseURL = 'http://192.168.35.52'+ruta; //Servidor PROD GTM

//axios.defaults.baseURL= 'http://www.sgc-lubnica.com'+ruta;
//axios.defaults.baseURL = 'http://52.22.205.123'+ruta;

const routes = [
	{
		path: ruta,
		component: Layout,
		children: [
			{
				path: ruta,
				name: 'pagina-principal',
				component: DashboardNuevo,
				meta: {
					auth: true,
					IdMenu:1,
					title:'Página Principal'
				}
			},

			{
				path: ruta+'old',
				name: 'pagina-principal-nueva',
				component: Dashboard,
				meta: {
					auth: true,
					IdMenu:2,
					title:'GTM'
				}
			},

			{
				path: ruta+'administracion/roles',
				name: 'roles',
				component:Roles ,
				meta: {
					auth: true,
					IdMenu:3,
					title:'GTM'
				}
			},
			{
				path:  ruta+'administracion/roles/registrar',
				name: 'registrar-rol',
				component: RolRegistrar,
				meta: {
					auth: true,
					IdMenu:4,
					title:'GTM'
				}
			},
			{
				path: ruta+'administracion/roles/actualizar/:id_rol',
				name: 'actualizar-rol',
				component: RolActualizar,
				meta: {
					auth: true,
					IdMenu:5,
					title:'GTM'
				}
			},

			{
				path: ruta+'administracion/menus',
				name: 'menus',
				component: Menus,
				meta: {
					auth: true,
					IdMenu:6,
					title:'GTM'
				}
			},
			{
				path: ruta+'administracion/menus/registrar',
				name: 'registrar-menu',
				component: MenuRegistrar,
				meta: {
					auth: true,
					IdMenu:7,
					title:'GTM'
				}
			},
			{
				path: ruta+'administracion/menus/actualizar/:id_menu',
				name: 'actualizar-menu',
				component: MenuActualizar,
				meta: {
					auth: true,
					IdMenu:8,
					title:'GTM'
				}
			},

			{
				path: ruta+'administracion/menus/ordenar',
				name: 'menus-ordenar',
				component: MenusOrden,
				meta: {
					auth: true,
					IdMenu:9,
					title:'GTM'
				}
			},

			{
				path: ruta+'administracion/modulos/ordenar',
				name: 'menu-modulos-ordenar',
				component: ModulosOrden,
				meta: {
					auth: true,
					IdMenu:9,
					title:'GTM'
				}
			},

			{
				path: ruta+'administracion/permisos',
				name: 'permisos',
				component: Permisos,
				meta: {
					auth: true,
					IdMenu:10,
					title:'GTM'
				}
			},

			{
				path: ruta+'administracion/accesos',
				name: 'accesos',
				component: Accesos,
				meta: {
					auth: true,
					IdMenu:11,
					title:'GTM'
				}
			},
			/*{
      path: ruta+'administracion/empleados',
      name: 'empleados',
      component: Empleados,
      meta: {
         auth: true,
IdMenu:12,
         title:'GTM'
      }
   },
   {
      path: ruta+'administracion/empleados/registrar',
      name: 'registrar-empleado',
      component: EmpleadoRegistrar,
      meta: {
        auth: true,
IdMenu:13,
      }
   },
   {
      path: ruta+'administracion/empleados/actualizar/:id_empleado',
      name: 'actualizar-empleado',
      component: EmpleadoActualizar,
      meta: {
        auth: true,
IdMenu:14,
      }
   },*/


			{
				path: ruta+'administracion/usuarios',
				name: 'listado-usuarios',
				component: UsuariosListado,
				meta: {
					auth: true,
					IdMenu:15,
					title:'GTM'
				}
			},
			{
				path: ruta+'administracion/usuarios/registrar',
				name: 'registrar-usuario',
				component: UsuarioRegistrar,
				meta: {
					auth: true,
					IdMenu:16,
					title:'GTM'
				}
			},
			{
				path: ruta+'administracion/usuarios/actualizar/:id_usuario',
				name: 'actualizar-usuario',
				component: UsuarioActualizar,
				meta: {
					auth: true,
					IdMenu:17,
					title:'GTM'
				}
			},
			{
				path: ruta+'administracion/usuarios/cambiar-contrasena',
				name: 'change-password-low-privilege',
				component: UsuarioCambiarContrasena,
				meta: {
					auth: true,
					IdMenu:490, //496
					title:'GTM'
				}
			},


			{
				path: ruta+'inventario/proveedores',
				name: 'proveedores',
				component: Proveedores,
				meta: {
					auth: true,
					IdMenu:18,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/proveedores/registrar',
				name: 'registrar-proveedor',
				component: ProveedorRegistrar,
				meta: {
					auth: true,
					IdMenu:19,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/proveedores/actualizar/:id_proveedor',
				name: 'actualizar-proveedor',
				component: ProveedorActualizar,
				meta: {
					auth: true,
					IdMenu:20,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/bodegas',
				name: 'bodegas',
				component: Bodegas,
				meta: {
					auth: true,
					IdMenu:21,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/bodegas/registrar',
				name: 'registrar-bodega',
				component: BodegaRegistrar,
				meta: {
					auth: true,
					IdMenu:22,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/bodegas/actualizar/:id_bodega',
				name: 'actualizar-bodega',
				component: BodegaActualizar,
				meta: {
					auth: true,
					IdMenu:23,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/productos',
				name: 'productos',
				component: Productos,
				meta: {
					auth: true,
					IdMenu:24,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/productos/registrar',
				name: 'registrar-producto',
				component: ProductoRegistrar,
				meta: {
					auth: true,
					IdMenu:25,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/productos/actualizar/:id_producto',
				name: 'actualizar-producto',
				component: ProductoActualizar,
				meta: {
					auth: true,
					IdMenu:26,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/categorias',
				name: 'listado-categorias',
				component: Categorias,
				meta: {
					auth: true,
					IdMenu:27,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/categorias/registrar',
				name: 'registrar-categoria',
				component: CategoriaRegistrar,
				meta: {
					auth: true,
					IdMenu:28,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/categorias/actualizar/:id_categoria',
				name: 'actualizar-categoria',
				component: CategoriaActualizar,
				meta: {
					auth: true,
					IdMenu:29,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/tipos-entrada',
				name: 'tipos-entrada',
				component: TiposEntrada,
				meta: {
					auth: true,
					IdMenu:30,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/tipos-entrada/registrar',
				name: 'registrar-tipo-entrada',
				component: TipoEntradaRegistrar,
				meta: {
					auth: true,
					IdMenu:31,
					title:'GTM'
				}
			},





			{
				path: ruta+'inventario/tipos-entrada/actualizar/:id_tipo_entrada',
				name: 'actualizar-tipo-entrada',
				component: TipoEntradaActualizar,
				meta: {
					auth: true,
					IdMenu:32,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/entradas',
				name: 'entradas',
				component: Entradas,
				meta: {
					auth: true,
					IdMenu:33,
					title:'GTM'
				}
			},

			{
				path: ruta+'inventario/entradas-inicial',
				name: 'entradas-inicial',
				component: EntradasInvInicial,
				meta: {
					auth: true,
					IdMenu:34,
					title:'GTM'
				}
			},

			{
				path: ruta+'inventario/entradas/registrar-inventario-inicial',
				name: 'registrar-inventario-inicial',
				component: EntradaRegistrarInvInicial,
				meta: {
					auth: true,
					IdMenu:35,
					title:'GTM'
				}
			},

			{
				path: ruta+'inventario/entradas/actualizar-inventario-inicial/:id_entrada_inicial',
				name: 'actualizar-entrada-inicial',
				component: EntradaActualizarInvInicial,
				meta: {
					auth: true,
					IdMenu:36,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/entradas/mostrar-inventario-inicial/:id_entrada_inicial',
				name: 'mostrar-entrada-inicial',
				component: EntradaInvInicialMostrar,
				meta: {
					auth: true,
					IdMenu:37,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/entradas/registrar-inventario-inicial-manual',
				name: 'registrar-inventario-inicial-manual',
				component: EntradaRegistrarInvInicialManual,
				meta: {
					auth: true,
					IdMenu:38,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/entradas/actualizar-inventario-inicial-manual/:id_entrada_inicial',
				name: 'actualizar-entrada-inicial-manual',
				component: EntradaActualizarInvInicialManual,
				meta: {
					auth: true,
					IdMenu:39,
					title:'GTM'
				}
			},


			{
				path: ruta+'inventario/entradas/registrar',
				name: 'registrar-entrada',
				component: EntradaRegistrar,
				meta: {
					auth: true,
					IdMenu:40,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/entradas/actualizar/:id_entrada',
				name: 'actualizar-entrada',
				component: EntradaActualizar,
				meta: {
					auth: true,
					IdMenu:41,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/entradas/recibir/:id_entrada',
				name: 'recibir-entrada',
				component: EntradaRecibir,
				meta: {
					auth: true,
					IdMenu:42,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/entradas/recibir-compra/:id_entrada',
				name: 'recibir-entrada-compra',
				component: EntradaRecibirCompra,
				meta: {
					auth: true,
					IdMenu:43,
					title:'GTM'
				}
			},

			{
				path: ruta+'inventario/entradas/recibir-traslado/:id_entrada',
				name: 'recibir-entrada-traslado',
				component: EntradaRecibirTraslado,
				meta: {
					auth: true,
					IdMenu:44,
					title:'GTM'
				}
			},

			{
				path: ruta+'inventario/entradas/mostrar/:id_entrada',
				name: 'mostrar-entrada',
				component: EntradaMostrar,
				meta: {
					auth: true,
					IdMenu:45,
					title:'GTM'
				}
			},

			{
				path: ruta+'inventario/entradas/registrar-devolucion',
				name: 'registrar-devolucion-entrada',
				component: EntradaRegistrarDev,
				meta: {
					auth: true,
					IdMenu:46,
					title:'GTM'
				}
			},


			{
				path: ruta+'inventario/unidad-medida',
				name: 'unidad-medida',
				component: UnidadMedida,
				meta: {
					auth: true,
					IdMenu:47,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/unidad-medida/registrar',
				name: 'registrar-unidad-medida',
				component: UnidadMedidaRegistrar,
				meta: {
					auth: true,
					IdMenu:48,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/unidad-medida/actualizar/:id_unidad_medida',
				name: 'actualizar-unidad-medida',
				component: UnidadMedidaActualizar,
				meta: {
					auth: true,
					IdMenu:49,
					title:'GTM'
				}
			},
			{
				path: ruta+'modulo-inventario/transformaciones',
				name:'transformaciones',
				component: Transformacion,
				meta: {
					auth: true,
					IdMenu: 493,
					title: 'GTM'
				}
			},
			{
				path: ruta+'modulo-inventario/registrar-transformaciones',
				name: 'registrar-transformaciones',
				component: TransformacionRegistrar,
				meta:{
					auth: true,
					IdMenu:494,
					title:'GTM'
				}
			},
			{
				path: ruta+'modulo-inventario/actualizar-transformaciones',
				name: 'actualizar-transformaciones',
				component: TransformacionActualizar,
				meta:{
					auth: true,
					IdMenu:495,
					title:'GTM'
				}
			},
			/*{
				path: ruta+'modulo-inventario/producto-presentacion',
				name: 'producto-presentacion',
				component: ProductoPresentacion,
				meta: {
					auth: true,
					IdMenu:47,
					title:'GTM'
				}
			},
			{
				path: ruta+'modulo-inventario/registrar/producto-presentacion',
				name:'registrar-producto-presentacion' ,
				component: ProductoPresentacionRegistrar,
				meta: {
					auth: true,
					IdMenu:48,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/producto-presentacion/actualizar/:id_producto_presentacion',
				name: 'actualizar-producto-presentacion',
				component: ProductoPresentacionActualizar,
				meta: {
					auth: true,
					IdMenu:49,
					title:'GTM'
				}
			},*/


			{
				path: ruta+'modulo-inventario/unidad-medida-estandar',
				name: 'unidad-medida-estandar',
				component: UnidadMedidaEstandar,
				meta: {
					auth: true,
					IdMenu:47,
					title:'GTM'
				}
			},
			{
				path: ruta+'modulo-inventario/unidad-medida-estandar/registrar',
				name: 'registrar-unidad-medida-estandar',
				component: UnidadMedidaEstandarRegistrar,
				meta: {
					auth: true,
					IdMenu:48,
					title:'GTM'
				}
			},
			{
				path: ruta+'modulo-inventario/unidad-medida-estandar/actualizar/:id_clasificacion_unidad_medida',
				name: 'actualizar-unidad-medida-estandar',
				component: UnidadMedidaEstandarActualizar,
				meta: {
					auth: true,
					IdMenu:49,
					title:'GTM'
				}
			},
			{
				path: ruta +'modulo-inventario/presentacion',
				name:'presentacion',
				component: Presentacion,
				meta: {
					auth: true,
					IdMenu:481,
					title:'GTM'
				}
			},
			{
				path: ruta +'modulo-inventario/presentacion/registrar',
				name:'registrar-presentacion',
				component: PresentacionRegistrar,
				meta: {
					auth: true,
					IdMenu:482,
					title:'GTM'
				}
			},
			{
				path: ruta +'modulo-inventario/presentacion/actualizar/:id_presentacion',
				name: 'actualizar-presentacion',
				component: PresentacionActualizar,
				meta: {
					auth: true,
					IdMenu:483,
					title:'GTM'
				}
			},
			{
				path: ruta +'modulo-inventario/grado',
				name:'grado',
				component: Grado,
				meta: {
					auth: true,
					IdMenu:484,
					title:'GTM'
				}
			},
			{
				path: ruta +'modulo-inventario/grado/registrar',
				name:'registrar-grado',
				component: GradoRegistrar,
				meta: {
					auth: true,
					IdMenu:485,
					title:'GTM'
				}
			},
			{
				path: ruta +'modulo-inventario/grado/actualizar/:id_grado',
				name: 'actualizar-grado',
				component: GradoActualizar,
				meta: {
					auth: true,
					IdMenu:486,
					title:'GTM'
				}
			},
			{
				path: ruta +'modulo-inventario/origen',
				name:'origen',
				component: Origen,
				meta: {
					auth: true,
					IdMenu:484,
					title:'GTM'
				}
			},
			{
				path: ruta +'modulo-inventario/origen/registrar',
				name:'registrar-origen',
				component: OrigenRegistrar,
				meta: {
					auth: true,
					IdMenu:485,
					title:'GTM'
				}
			},
			{
				path: ruta +'modulo-inventario/origen/actualizar/:id_origen',
				name: 'actualizar-origen',
				component: OrigenActualizar,
				meta: {
					auth: true,
					IdMenu:486,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/tipos-salida',
				name: 'tipos-salida',
				component: TiposSalida,
				meta: {
					auth: true,
					IdMenu:50,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/tipos-salida/registrar',
				name: 'registrar-tipo-salida',
				component: TipoSalidaRegistrar,
				meta: {
					auth: true,
					IdMenu:51,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/tipos-salida/actualizar/:id_tipo_salida',
				name: 'actualizar-tipo-salida',
				component: TipoSalidaActualizar,
				meta: {
					auth: true,
					IdMenu:52,
					title:'GTM'
				}
			},

			{
				path: ruta+'inventario/salidas',
				name: 'salidas',
				component: Salidas,
				meta: {
					auth: true,
					IdMenu:53,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/salidas/registrar',
				name: 'registrar-salida',
				component: SalidaRegistrar,
				meta: {
					auth: true,
					IdMenu:54,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/salidas/mostrar/:id_salida',
				name: 'mostrar-salida',
				component: SalidaMostrar,
				meta: {
					auth: true,
					IdMenu:55,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/salidas-manual/registrar',
				name: 'registrar-salida-manual',
				component: SalidaManualRegistrar,
				meta: {
					auth: true,
					IdMenu:56,
					title:'GTM'
				}
			},

			{
				path: ruta+'inventario/salidas/despachar/:id_salida',
				name: 'despachar-salida',
				component: SalidaDespachar,
				meta: {
					auth: true,
					IdMenu:65,
					title:'GTM'
				}
			},

			{
				path: ruta+'inventario/salidas/devolver/:id_salida',
				name: 'registrar-devolucion-salida',
				component: SalidaRegistrarDev,
				meta: {
					auth: true,
					IdMenu:58,
					title:'GTM'
				}
			},

			{
				path: ruta+'inventario/salidas/registrar-traslado',
				name: 'registrar-traslado',
				component: SalidaRegistrarTraslado,
				meta: {
					auth: true,
					IdMenu:60,
					title:'GTM'
				}
			},

			{
				path: ruta+'inventario/salidas/registrar-traslado-consignacion',
				name: 'registrar-traslado-consignacion',
				component: SalidaRegistrarTrasladoConsignacion,
				meta: {
					auth: true,
					IdMenu:61,
					title:'GTM'
				}
			},

			{
				path: ruta+'inventario/salidas/registrar-recuperado',
				name: 'registrar-traslado-recuperado',
				component: SalidaRegistrarTrasladoRecuperado,
				meta: {
					auth: true,
					IdMenu:62,
					title:'GTM'
				}
			},

			{
				path: ruta+'inventario/salidas/registrar-devolucion-consignacion',
				name: 'registrar-devolucion-consignacion',
				component: SalidaRegistrarDevolucionConsignacion,
				meta: {
					auth: true,
					IdMenu:63,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/reporte-kardex',
				name: 'reporte-kardex',
				component: ReporteKardex,
				meta: {
					auth: true,
					IdMenu:66,
					title:'GTM'
				}
			},


			{
				path: ruta+'administracion/ajustes',
				name: 'ajustes',
				component: AjustesActualizar,
				meta: {
					auth: true,
					IdMenu:67,
					title:'GTM'
				}
			},

			/*{
				path: ruta+'contabilidad/cuentas-contables',
				name: 'cuentas-contables',
				component: CuentasContables,
				meta: {
					auth: true,
					IdMenu:68,
					title:'GTM'
				}
			},


			{
				path: ruta+'contabilidad/cuentas-contables/registrar',
				name: 'registrar-cuenta-contable',
				component: RegistrarCuentaContable,
				meta: {
					auth: true,
					IdMenu:69,
					title:'GTM'
				}
			},
			{
				path: ruta+'contabilidad/cuentas-contables/registrar/:id_cuenta_contable_padre',
				name: 'registrar-sub-cuenta-contable',
				component: RegistrarSubCuentaContable,
				meta: {
					auth: true,
					IdMenu:70,
					title:'GTM'
				}
			},

			{
				path: ruta+'contabilidad/cuentas-contables/actualizar/:id_cuenta_contable',
				name: 'actualizar-cuenta-contable',
				component: ActualizarCuentaContable,
				meta: {
					auth: true,
					IdMenu:71,
					title:'GTM'
				}
			},


			{
				path: ruta+'contabilidad/bancos',
				name: 'listado-bancos',
				component: BancosListado,
				meta: {
					auth: true,
					IdMenu:72,
					title:'GTM'
				}
			},
			{
				path: ruta+'contabilidad/bancos/registrar',
				name: 'registrar-banco',
				component: BancoRegistrar,
				meta: {
					auth: true,
					IdMenu:73,
					title:'GTM'
				}
			},
			{
				path: ruta+'contabilidad/bancos/actualizar/:id_banco',
				name: 'actualizar-banco',
				component: BancoActualizar,
				meta: {
					auth: true,
					IdMenu:74,
					title:'GTM'
				}
			},


			{
				path: ruta+'contabilidad/cuentas-bancarias',
				name: 'listado-cuentas-bancarias',
				component: CuentasBancarias,
				meta: {
					auth: true,
					IdMenu:75,
					title:'GTM'
				}
			},
			{
				path: ruta+'contabilidad/cuentas-bancarias/registrar',
				name: 'registrar-cuenta-bancaria',
				component: CuentaBancariaRegistrar,
				meta: {
					auth: true,
					IdMenu:76,
					title:'GTM'
				}
			},
			{
				path: ruta+'contabilidad/cuentas-bancarias/actualizar/:id_cuenta_bancaria',
				name: 'actualizar-cuenta-bancaria',
				component: CuentaBancariaActualizar,
				meta: {
					auth: true,
					IdMenu:77,
					title:'GTM'
				}
			},

			{
				path: ruta+'contabilidad/periodos',
				name: 'listado-periodos',
				component: Periodos,
				meta: {
					auth: true,
					IdMenu:78,
					title:'GTM'
				}
			},
			{
				path: ruta+'contabilidad/periodos/registrar',
				name: 'registrar-periodo',
				component: PeriodoRegistrar,
				meta: {
					auth: true,
					IdMenu:79,
					title:'GTM'
				}
			},
			{
				path: ruta+'contabilidad/periodos/actualizar/:id_periodo_fiscal',
				name: 'actualizar-periodo',
				component: PeriodoActualizar,
				meta: {
					auth: true,
					IdMenu:80,
					title:'GTM'
				}
			},

			{
				path: ruta+'contabilidad/documentos-contables',
				name: 'listado-documentos',
				component: DocumentosContables,
				meta: {
					auth: true,
					IdMenu:81,
					title:'GTM'
				}
			},
			{
				path: ruta+'contabilidad/documentos-contables/registrar',
				name: 'registrar-documento',
				component: DocumentoContableRegistrar,
				meta: {
					auth: true,
					IdMenu:82,
					title:'GTM'
				}
			},
			{
				path: ruta+'contabilidad/anexos',
				name: 'anexos',
				component: Anexos,
				meta: {
					auth: true,
					IdMenu:83,
					title:'GTM'
				}
			},
			{
				path:  ruta+'contabilidad/anexos/registrar',
				name: 'registrar-anexo',
				component: AnexoRegistrar,
				meta: {
					auth: true,
					IdMenu:84,
					title:'GTM'
				}
			},

			{
				path: ruta+'contabilidad/anexos/actualizar/:id_anexo',
				name: 'actualizar-anexo',
				component: AnexoActualizar,
				meta: {
					auth: true,
					IdMenu:85,
					title:'GTM'
				}
			},

			{
				path: ruta+'contabilidad/anexos/ordenar',
				name: 'anexos-ordenar',
				component: AnexosOrden,
				meta: {
					auth: true,
					IdMenu:86,
					title:'GTM'
				}
			},


			{
				path: ruta+'contabilidad/tipos-cuenta',
				name: 'tipos-cuenta',
				component: TiposCuentas,
				meta: {
					auth: true,
					IdMenu:87,
					title:'GTM'
				}
			},
			{
				path: ruta+'contabilidad/tipos-cuenta/actualizar/:id_tipo_cuenta',
				name: 'actualizar-tipo-cuenta',
				component: TipoCuentaActualizar,
				meta: {
					auth: true,
					IdMenu:88,
					title:'GTM'
				}
			},



			{
				path: ruta+'contabilidad/niveles-cuenta',
				name: 'niveles-cuenta',
				component: NivelesCuentas,
				meta: {
					auth: true,
					IdMenu:89,
					title:'GTM'
				}
			},
			{
				path: ruta+'contabilidad/niveles-cuenta/actualizar/:id_nivel_cuenta',
				name: 'actualizar-nivel-cuenta',
				component: NivelCuentaActualizar,
				meta: {
					auth: true,
					IdMenu:90,
					title:'GTM'
				}
			},

			{
				path: ruta+'contabilidad/tasas-cambio',
				name: 'tasas-cambio',
				component: TasasCambio,
				meta: {
					auth: true,
					IdMenu:91,
					title:'GTM'
				}
			},

			{
				path: ruta+'contabilidad/tasas-cambio-lubnica',
				name: 'tasas-cambio-lubnica',
				component: TasasCambioLubnica,
				meta: {
					auth: true,
					IdMenu:92,
					title:'GTM'
				}
			},


			{
				path: ruta+'contabilidad/tipos-documentos',
				name: 'tipos-documentos',
				component: TiposDocumentos,
				meta: {
					auth: true,
					IdMenu:93,
					title:'GTM'
				}
			},
			{
				path: ruta+'contabilidad/tipos-documentos/actualizar/:id_tipo_doc',
				name: 'actualizar-tipo-documento',
				component: TipoDocumentoActualizar,
				meta: {
					auth: true,
					IdMenu:94,
					title:'GTM'
				}
			},
			{
				path: ruta+'contabilidad/tipos-documentos/registrar',
				name: 'registrar-tipo-documento',
				component: TipoDocumentoRegistrar,
				meta: {
					auth: true,
					IdMenu:95,
					title:'GTM'
				}
			},*/

			{
				path: ruta+'direcciones',
				name: 'listado-direcciones',
				component: DireccionesListado,
				meta: {
					auth: true,
					IdMenu:96,
					title:'GTM'
				}
			},
			{
				path: ruta+'direcciones/registrar',
				name: 'registrar-direccion',
				component: DireccionRegistrar,
				meta: {
					auth: true,
					IdMenu:97,
					title:'GTM'
				}
			},
			{
				path: ruta+'direcciones/actualizar/:id_direccion',
				name: 'actualizar-direccion',
				component: DireccionActualizar,
				meta: {
					auth: true,
					IdMenu:98,
					title:'GTM'
				}
			},


			{
				path: ruta+'rrhh/cargos',
				name: 'listado-cargos',
				component: CargosListado,
				meta: {
					auth: true,
					IdMenu:99,
					title:'GTM'
				}
			},
			{
				path: ruta+'rrhh/cargos/registrar',
				name: 'registrar-cargo',
				component: CargoRegistrar,
				meta: {
					auth: true,
					IdMenu:100,
					title:'GTM'
				}
			},
			{
				path: ruta+'rrhh/cargos/actualizar/:id_cargo',
				name: 'actualizar-cargo',
				component: CargoActualizar,
				meta: {
					auth: true,
					IdMenu:101,
					title:'GTM'
				}
			},




			{
				path: ruta+'areas',
				name: 'listado-areas',
				component: AreasListado,
				meta: {
					auth: true,
					IdMenu:102,
					title:'GTM'
				}
			},
			{
				path: ruta+'areas/registrar',
				name: 'registrar-area',
				component: AreaRegistrar,
				meta: {
					auth: true,
					IdMenu:103,
					title:'GTM'
				}
			},
			{
				path: ruta+'areas/actualizar/:id_area',
				name: 'actualizar-area',
				component: AreaActualizar,
				meta: {
					auth: true,
					IdMenu:104,
					title:'GTM'
				}
			},



			{
				path: ruta+'paises',
				name: 'listado-paises',
				component: PaisesListado,
				meta: {
					auth: true,
					IdMenu:105,
					title:'GTM'
				}
			},
			{
				path: ruta+'paises/registrar',
				name: 'registrar-pais',
				component: PaisRegistrar,
				meta: {
					auth: true,
					IdMenu:106,
					title:'GTM'
				}
			},
			{
				path: ruta+'paises/actualizar/:id_pais',
				name: 'actualizar-pais',
				component: PaisActualizar,
				meta: {
					auth: true,
					IdMenu:107,
					title:'GTM'
				}
			},


			{
				path: ruta+'departamentos',
				name: 'listado-departamentos',
				component: DepartamentosListado,
				meta: {
					auth: true,
					IdMenu:108,
					title:'GTM'
				}
			},
			{
				path: ruta+'departamentos/registrar',
				name: 'registrar-departamento',
				component: DepartamentoRegistrar,
				meta: {
					auth: true,
					IdMenu:109,
					title:'GTM'
				}
			},
			{
				path: ruta+'departamentos/actualizar/:id_departamento',
				name: 'actualizar-departamento',
				component: DepartamentoActualizar,
				meta: {
					auth: true,
					IdMenu:110,
					title:'GTM'
				}
			},


			{
				path: ruta+'municipios',
				name: 'listado-municipios',
				component: MunicipiosListado,
				meta: {
					auth: true,
					IdMenu:111,
					title:'GTM'
				}
			},
			{
				path: ruta+'municipios/registrar',
				name: 'registrar-municipio',
				component: MunicipioRegistrar,
				meta: {
					auth: true,
					IdMenu:112,
					title:'GTM'
				}
			},
			{
				path: ruta+'municipios/actualizar/:id_municipio',
				name: 'actualizar-municipio',
				component: MunicipioActualizar,
				meta: {
					auth: true,
					IdMenu:113,
					title:'GTM'
				}
			},


			/*{
				path: ruta+'sucursales',
				name: 'listado-sucursales',
				component: SucursalesListado,
				meta: {
					auth: true,
					IdMenu:114,
					title:'GTM'
				}
			},
			{
				path: ruta+'sucursales/registrar',
				name: 'registrar-sucursal',
				component: SucursalRegistrar,
				meta: {
					auth: true,
					IdMenu:115,
					title:'GTM'
				}
			},
			{
				path: ruta+'sucursales/actualizar/:id_sucursal',
				name: 'actualizar-sucursal',
				component: SucursalActualizar,
				meta: {
					auth: true,
					IdMenu:116,
					title:'GTM'
				}
			},*/



			{
				path: ruta+'trabajadores',
				name: 'listado-trabajadores',
				component: TrabajadoresListado,
				meta: {
					auth: true,
					IdMenu:117,
					title:'GTM'
				}
			},
			{
				path: ruta+'trabajadores/registrar',
				name: 'registrar-trabajador',
				component: TrabajadorRegistrar,
				meta: {
					auth: true,
					IdMenu:118,
					title:'GTM'
				}
			},
			{
				path: ruta+'trabajadores/actualizar/:id_trabajador',
				name: 'actualizar-trabajador',
				component: TrabajadorActualizar,
				meta: {
					auth: true,
					IdMenu:119,
					title:'GTM'
				}
			},


			/*{
				path: ruta+'bancos/cheques',
				name: 'listado-solicitudes-pago',
				component: SolicitudesPagosListado,
				meta: {
					auth: true,
					IdMenu:120,
					title:'GTM'
				}
			},
			{
				path: ruta+'bancos/cheques/registrar',
				name: 'registrar-solicitud-pago',
				component: SolicitudPagoRegistrar,
				meta: {
					auth: true,
					IdMenu:121,
					title:'GTM'
				}
			},
			{
				path: ruta+'bancos/cheques/revisar/:id_solicitud_pago',
				name: 'revisar-solicitud-pago',
				component: SolicitudPagoRevisar,
				meta: {
					auth: true,
					IdMenu:122,
					title:'GTM'
				}
			},

			{
				path: ruta+'bancos/cheques/aprobar/:id_solicitud_pago',
				name: 'aprobar-solicitud-pago',
				component: SolicitudPagoAprobar,
				meta: {
					auth: true,
					IdMenu:123,
					title:'GTM'
				}
			},


			{
				path: ruta+'bancos/cheques/listado/autorizar',
				name: 'autorizar-solicitud-pago',
				component: SolicitudPagoAutorizar,
				meta: {
					auth: true,
					IdMenu:124,
					title:'GTM'
				}
			},


			{
				path: ruta+'bancos/cheques/contabilizar/:id_solicitud_pago',
				name: 'contabilizar-solicitud-pago',
				component: SolicitudPagoContabilizar,
				meta: {
					auth: true,
					IdMenu:125,
					title:'GTM'
				}
			},

			{
				path: ruta+'bancos/cheques/emitir/:id_solicitud_pago',
				name: 'emitir-solicitud-pago',
				component: SolicitudPagoEmitir,
				meta: {
					auth: true,
					IdMenu:126,
					title:'GTM'
				}
			},

			{
				path: ruta+'bancos/cheques/mostrar/:id_solicitud_pago',
				name: 'mostrar-solicitud-pago',
				component: SolicitudPagoMostrar,
				meta: {
					auth: true,
					IdMenu:127,
					title:'GTM'
				}
			},


			{
				path: ruta+'bancos/cheques/cambiar-estado/:id_solicitud_pago',
				name: 'cambiar-solicitud-pago',
				component: SolicitudPagoEntregar,
				meta: {
					auth: true,
					IdMenu:128,
					title:'GTM'
				}
			},



			{
				path: ruta+'bancos/minutas',
				name: 'listado-minutas',
				component: MinutasListado,
				meta: {
					auth: true,
					IdMenu:129,
					title:'GTM'
				}
			},
			{
				path: ruta+'bancos/minutas/registrar',
				name: 'registrar-minuta',
				component: MinutaRegistrar,
				meta: {
					auth: true,
					IdMenu:130,
					title:'GTM'
				}
			},
			{
				path: ruta+'bancos/minutas/actualizar/:id_minuta_deposito',
				name: 'actualizar-minuta',
				component: MinutaActualizar,
				meta: {
					auth: true,
					IdMenu:131,
					title:'GTM'
				}
			},

			{
				path: ruta+'inventario/baterias/marcas',
				name: 'listado-marcas',
				component: MarcasListado,
				meta: {
					auth: true,
					IdMenu:132,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/baterias/marcas/registrar',
				name: 'registrar-marca',
				component: MarcaRegistrar,
				meta: {
					auth: true,
					IdMenu:133,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/baterias/marcas/actualizar/:id_marca',
				name: 'actualizar-marca',
				component: MarcaActualizar,
				meta: {
					auth: true,
					IdMenu:134,
					title:'GTM'
				}
			},


			{
				path: ruta+'inventario/baterias/submarcas/',
				name: 'listado-submarcas',
				component: SubMarcasListado,
				meta: {
					auth: true,
					IdMenu:135,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/baterias/submarcas/registrar',
				name: 'registrar-submarca',
				component: SubMarcaRegistrar,
				meta: {
					auth: true,
					IdMenu:136,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/baterias/submarcas/actualizar/:id_submarca',
				name: 'actualizar-submarca',
				component: SubMarcaActualizar,
				meta: {
					auth: true,
					IdMenu:137,
					title:'GTM'
				}
			},*/

			{
				path: ruta+'inventario/tipo-bodega',
				name: 'listado-tipo-bodega',
				component: TiposBodega,
				meta: {
					auth: true,
					IdMenu:138,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/tipo-bodega/registrar',
				name: 'registrar-tipo-bodega',
				component: TiposBodegaRegistrar,
				meta: {
					auth: true,
					IdMenu:139,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/tipo-bodega/actualizar/:id_tipo_bodega',
				name: 'actualizar-tipo-bodega',
				component: TiposBodegaActualizar,
				meta: {
					auth: true,
					IdMenu:140,
					title:'GTM'
				}
			},
			/*{
				path: ruta+'inventario/baterias/aplicaciones',
				name: 'listado-aplicaciones',
				component: AplicacionesListado,
				meta: {
					auth: true,
					IdMenu:141,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/baterias/aplicaciones/registrar',
				name: 'registrar-aplicacion',
				component: AplicacionRegistrar,
				meta: {
					auth: true,
					IdMenu:142,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/baterias/aplicaciones/actualizar/:id_aplicacion',
				name: 'actualizar-aplicacion',
				component: AplicacionActualizar,
				meta: {
					auth: true,
					IdMenu:143,
					title:'GTM'
				}
			},


			{
				path: ruta+'inventario/baterias/subaplicaciones/',
				name: 'listado-subaplicaciones',
				component: SubAplicacionesListado,
				meta: {
					auth: true,
					IdMenu:144,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/baterias/subaplicaciones/registrar',
				name: 'registrar-subaplicacion',
				component: SubAplicacionRegistrar,
				meta: {
					auth: true,
					IdMenu:145,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/baterias/subaplicaciones/actualizar/:id_subaplicacion',
				name: 'actualizar-subaplicacion',
				component: SubAplicacionActualizar,
				meta: {
					auth: true,
					IdMenu:146,
					title:'GTM'
				}
			},


			{
				path: ruta+'inventario/baterias/lineas',
				name: 'listado-lineas',
				component: LineasListado,
				meta: {
					auth: true,
					IdMenu:147,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/baterias/lineas/registrar',
				name: 'registrar-linea',
				component: LineaRegistrar,
				meta: {
					auth: true,
					IdMenu:148,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/baterias/lineas/actualizar/:id_linea',
				name: 'actualizar-linea',
				component: LineaActualizar,
				meta: {
					auth: true,
					IdMenu:149,
					title:'GTM'
				}
			},


			{
				path: ruta+'inventario/baterias/materiales',
				name: 'listado-materiales',
				component: MaterialesListado,
				meta: {
					auth: true,
					IdMenu:150,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/baterias/materiales/registrar',
				name: 'registrar-material',
				component: MaterialRegistrar,
				meta: {
					auth: true,
					IdMenu:151,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/baterias/materiales/actualizar/:id_material',
				name: 'actualizar-material',
				component: MaterialActualizar,
				meta: {
					auth: true,
					IdMenu:152,
					title:'GTM'
				}
			},


			{
				path: ruta+'inventario/importaciones',
				name: 'listado-importaciones',
				component: Importaciones,
				meta: {
					auth: true,
					IdMenu:153,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/importaciones/registrar',
				name: 'registrar-importacion',
				component: ImportacionRegistrar,
				meta: {
					auth: true,
					IdMenu:154,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/importaciones/actualizar/:id_importacion',
				name: 'actualizar-importacion',
				component: ImportacionActualizar,
				meta: {
					auth: true,
					IdMenu:155,
					title:'GTM'
				}
			},


			{
				path: ruta+'activofijos/grupos',
				name: 'listado-grupos-activos',
				component: GruposActivoListado,
				meta: {
					auth: true,
					IdMenu:156,
					title:'GTM'
				}
			},
			{
				path: ruta+'activofijos/grupos/registrar',
				name: 'registrar-grupo-activo',
				component: GrupoActivoRegistrar,
				meta: {
					auth: true,
					IdMenu:157,
					title:'GTM'
				}
			},
			{
				path: ruta+'activofijos/grupos/actualizar/:id_grupo_activo',
				name: 'actualizar-grupo-activo',
				component: GrupoActivoActualizar,
				meta: {
					auth: true,
					IdMenu:158,
					title:'GTM'
				}
			},



			{
				path: ruta+'activofijos/propietarios',
				name: 'listado-propietarios-activos',
				component: PropietariosActivoListado,
				meta: {
					auth: true,
					IdMenu:159,
					title:'GTM'
				}
			},
			{
				path: ruta+'activofijos/propietarios/registrar',
				name: 'registrar-propietario-activo',
				component: PropietarioActivoRegistrar,
				meta: {
					auth: true,
					IdMenu:160,
					title:'GTM'
				}
			},
			{
				path: ruta+'activofijos/propietarios/actualizar/:id_propietario',
				name: 'actualizar-propietario-activo',
				component: PropietarioActivoActualizar,
				meta: {
					auth: true,
					IdMenu:161,
					title:'GTM'
				}
			},


			{
				path: ruta+'activofijos/tipos',
				name: 'listado-tipos-activos',
				component: TiposActivoListado,
				meta: {
					auth: true,
					IdMenu:162,
					title:'GTM'
				}
			},
			{
				path: ruta+'activofijos/tipos/registrar',
				name: 'registrar-tipo-activo',
				component: TipoActivoRegistrar,
				meta: {
					auth: true,
					IdMenu:163,
					title:'GTM'
				}
			},
			{
				path: ruta+'activofijos/tipos/actualizar/:id_tipo_activo',
				name: 'actualizar-tipo-activo',
				component: TipoActivoActualizar,
				meta: {
					auth: true,
					IdMenu:164,
					title:'GTM'
				}
			},
			{
				path: ruta+'contabilidad/reportes-financieros/balanza',
				name: 'balanza-comprobacion',
				component: BalanzaComprobacion,
				meta: {
					auth: true,
					IdMenu:165,
					title:'GTM'
				}
			},
			{
				path: ruta+'contabilidad/reportes-financieros/balanza-nueva',
				name: 'balanza-comprobacion-nueva',
				component: BalanzaComprobacionRta91,
				meta: {
					auth: true,
					IdMenu:166,
					title:'GTM'
				}
			},
			{
				path: ruta+'contabilidad/reportes-financieros/balance-general',
				name: 'balance-general',
				component: BalanceGeneral,
				meta: {
					auth: true,
					IdMenu:167,
					title:'GTM'
				}
			},

			{
				path: ruta+'contabilidad/reportes-financieros/estado-resultados',
				name: 'estado-resultados',
				component: EstadoResultados,
				meta: {
					auth: true,
					IdMenu:168,
					title:'GTM'
				}
			},

			{
				path: ruta+'contabilidad/ajustes',
				name: 'contabilidad-ajustes',
				component: AjustesContabilidadActualizar,
				meta: {
					auth: true,
					IdMenu:169,
					title:'GTM'
				}
			},

			{
				path: ruta+'inventario/importaciones/ajustes',
				name: 'importacion-ajustes',
				component: AjustesImportacion,
				meta: {
					auth: true,
					IdMenu:170,
					title:'GTM'
				}
			},
			{
				path: ruta+'modulo-nomina/planilla/ajustes',
				name: 'planilla-ajustes',
				component: AjustesPlanillaComprobante,
				meta: {
					auth: true,
					IdMenu:170,
					title:'GTM'
				}
			},


			{
				path: ruta+'inventario/baterias',
				name: 'listado-baterias',
				component: Baterias,
				meta: {
					auth: true,
					IdMenu:171,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/baterias/registrar',
				name: 'registrar-bateria',
				component: BateriaRegistrar,
				meta: {
					auth: true,
					IdMenu:172,
					title:'GTM'
				}
			},

			{
				path: ruta+'inventario/bateria-externa/registrar',
				name: 'registrar-bateria-externa',
				component: BateriaExternaRegistrar,
				meta: {
					auth: true,
					IdMenu:173,
					title:'GTM'
				}
			},

			{
				path: ruta+'inventario/baterias/actualizar/:id_producto',
				name: 'actualizar-bateria',
				component: BateriaActualizar,
				meta: {
					auth: true,
					IdMenu:174,
					title:'GTM'
				}
			},*/
			{
				path: ruta+'inventario/movimientos-baterias',
				name: 'movimientos-baterias',
				component: MovimientosBaterias,
				meta: {
					auth: true,
					IdMenu:175,
					title:'GTM'
				}
			},

			{
				path: ruta+'inventario/movimientos-productos',
				name: 'movimientos-productos',
				component: MovimientosProducto,
				meta: {
					auth: true,
					IdMenu:176,
					title:'GTM'
				}
			},
			{
				path: ruta+'inventario/movimientos-productos-contable',
				name: 'movimientos-productos-contable',
				component: MovimientosProductoContable,
				meta: {
					auth: true,
					IdMenu:177,
					title:'GTM'
				}
			},

			{
				path: ruta+'zonas/',
				name: 'listado-zonas',
				component: Zonas,
				meta: {
					auth: true,
					IdMenu:178,
					title:'GTM'
				}
			},
			{
				path: ruta+'zonas/registrar',
				name: 'registrar-zona',
				component: ZonaRegistrar,
				meta: {
					auth: true,
					IdMenu:179,
					title:'GTM'
				}
			},
			{
				path: ruta+'zonas/actualizar/:id_zona',
				name: 'actualizar-zona',
				component: ZonaActualizar,
				meta: {
					auth: true,
					IdMenu:180,
					title:'GTM'
				}
			},
			/*{
				path: ruta+'rrhh/contrato-interno/',
				name: 'listado-contrato-interno',
				component: ContratoInterno,
				meta:
					{
						auth: true,
						IdMenu:181,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/contrato-interno/registrar',
				name: 'registrar-contrato-interno',
				component: ContratoInternoRegistrar,
				meta:
					{
						auth: true,
						IdMenu:182,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/contrato-interno/actualizar/:id_contrato_dgeneral_interno',
				name: 'actualizar-contrato-interno',
				component: ContratoInternoActualizar,
				meta:
					{
						auth: true,
						IdMenu:183,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/contrato-merecedor/',
				name: 'listado-contrato-merecedor',
				component: ContratoInternoMerecedor,
				meta:
					{
						auth: true,
						IdMenu:184,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/contrato-merecedor/registrar',
				name: 'registrar-contrato-merecedor',
				component: ContratoInternoMerecedorRegistrar,
				meta:
					{
						auth: true,
						IdMenu:185,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/contrato-merecedor/actualizar/:id_contrato_dgeneral_merecedor',
				name: 'actualizar-contrato-merecedor',
				component: ContratoInternoMerecedorActualizar,
				meta:
					{
						auth: true,
						IdMenu:186,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/contrato-solicitud/',
				name: 'listado-contrato-solicitud',
				component: ContratoSolicitudes,
				meta:
					{
						auth: true,
						IdMenu:187,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/contrato-solicitud/registrar',
				name: 'registrar-contrato-solicitud',
				component: ContratoSolicitudesRegistrar,
				meta:
					{
						auth: true,
						IdMenu:188,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/contrato-solicitud/actualizar/:id_contrato_solicitud',
				name: 'actualizar-contrato-solicitud',
				component: ContratoSolicitudesActualizar,
				meta:
					{
						auth: true,
						IdMenu:189,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/ingresos-deducciones/',
				name: 'listado-ingreso-deduccion',
				component: IngresoDeducciones,
				meta:
					{
						auth: true,
						IdMenu:190,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/ingresos/',
				name: 'listado-ingresos',
				component: Ingresos,
				meta:
					{
						auth: true,
						IdMenu:190,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/deducciones/',
				name: 'listado-deducciones',
				component: Deducciones,
				meta:
					{
						auth: true,
						IdMenu:4734,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/ingresos-deducciones/registrar',
				name: 'registrar-ingreso-deduccion',
				component: IngresoDeduccionesRegistrar,
				meta:
					{
						auth: true,
						IdMenu:191,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/ingresos-deducciones/actualizar/:id_cat_ingreso_deduccion',
				name: 'actualizar-ingreso-deduccion',
				component: IngresoDeduccionesActualizar,
				meta:
					{
						auth: true,
						IdMenu:192,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/planillas-controles/',
				name: 'listado-planilla-control',
				component: PlanillaControles,
				meta:
					{
						auth: true,
						IdMenu:193,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/planillas-controles/registrar',
				name: 'registrar-planilla-control',
				component: PlanillaControlesRegistrar,
				meta:
					{
						auth: true,
						IdMenu:194,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/planillas-controles/actualizar/:id_planilla_control',
				name: 'actualizar-planilla-control',
				component: PlanillaControlesActualizar,
				meta:
					{
						auth: true,
						IdMenu:195,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/configuracion-ir/',
				name: 'listado-configuracion-ir',
				component: ConfiguracionIR,
				meta:
					{
						auth: true,
						IdMenu:196,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/configuracion-ir/registrar',
				name: 'registrar-configuracion-ir',
				component: ConfiguracionIRRegistrar,
				meta:
					{
						auth: true,
						IdMenu:197,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/configuracion-ir/actualizar/:id_configuracion_ir',
				name: 'actualizar-configuracion-ir',
				component: ConfiguracionIRActualizar,
				meta:
					{
						auth: true,
						IdMenu:198,
						title:'GTM'
					}
			},*/
			{
				path: ruta+'rrhh/niveles-academicos/',
				name: 'listado-niveles-academicos',
				component: NivelAcademico,
				meta:
					{
						auth: true,
						IdMenu:199,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/niveles-academicos/registrar',
				name: 'registrar-niveles-academicos',
				component: NivelAcademicoRegistrar,
				meta:
					{
						auth: true,
						IdMenu:200,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/niveles-academicos/actualizar/:id_nivel_academico',
				name: 'actualizar-niveles-academicos',
				component: NivelAcademicoActualizar,
				meta:
					{
						auth: true,
						IdMenu:201,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/niveles-estudios/',
				name: 'listado-niveles-estudios',
				component: NivelEstudio,
				meta:
					{
						auth: true,
						IdMenu:202,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/niveles-estudios/registrar',
				name: 'registrar-niveles-estudios',
				component: NivelEstudioRegistrar,
				meta:
					{
						auth: true,
						IdMenu:203,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/niveles-estudios/actualizar/:id_niveles_estudios',
				name: 'actualizar-niveles-estudios',
				component: NivelEstudioActualizar,
				meta:
					{
						auth: true,
						IdMenu:204,
						title:'GTM'
					}
			},
			/*{
				path: ruta+'rrhh/feriado/',
				name: 'listado-feriado',
				component: Feriado,
				meta:
					{
						auth: true,
						IdMenu:205,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/feriados/registrar',
				name: 'registrar-feriado',
				component: FeriadoRegistrar,
				meta:
					{
						auth: true,
						IdMenu:206,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/feriados/actualizar/:id_feriado',
				name: 'actualizar-feriado',
				component: FeriadoActualizar,
				meta:
					{
						auth: true,
						IdMenu:207,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/vacaciones/',
				name: 'listado-vacaciones',
				component: Vacaciones,
				meta:
					{
						auth: true,
						IdMenu:208,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/vacaciones/registrar',
				name: 'registrar-vacaciones',
				component: VacacionesRegistrar,
				meta:
					{
						auth: true,
						IdMenu:209,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/vacaciones/actualizar/:id_vacacion_solicitud',
				name: 'actualizar-vacaciones',
				component: VacacionesActualizar,
				meta:
					{
						auth: true,
						IdMenu:210,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/asignacion-ingreso-deduccion/',
				name: 'listado-asignacion-ingreso',
				component: AsignacionIngreso,
				meta:
					{
						auth: true,
						IdMenu:211,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/asignacion-ingreso-deduccion/registrar/:id_planilla_control',
				name: 'registrar-asignacion-ingreso',
				component: AsignacionIngresoRegistrar,
				meta:
					{
						auth: true,
						IdMenu:212,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/asignacion-ingreso-deduccion/actualizar/:id_cat_ingreso_deduccion_trabajador',
				name: 'actualizar-asignacion-ingreso',
				component: AsignacionIngresoActualizar,
				meta:
					{
						auth: true,
						IdMenu:213,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/marcadas/',
				name: 'listado-marcadas',
				component: Marcadas,
				meta:
					{
						auth: true,
						IdMenu:214,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/marcadas/registrar/:id_trabajador',
				name: 'registrar-marcada',
				component: MarcadasRegistrar,
				meta:
					{
						auth: true,
						IdMenu:215,
						title:'GTM'
					}
			},
			{
				path: ruta+'rrhh/marcadas/actualizar/:id_marcada',
				name: 'actualizar-marcada',
				component: MarcadasActualizar,
				meta:
					{
						auth: true,
						IdMenu:216,
				title:'GTM'
}
},
{
	path: ruta+'modulo-tesoreria/normativas/',
		name: 'listado-normativas',
	component: Normativas,
	meta: {
	auth: true,
		IdMenu:217,
		title:'GTM'
}
},
{
	path: ruta+'modulo-tesoreria/normativas/registrar',
		name: 'registrar-normativas',
	component: NormativasRegistrar,
	meta: {
	auth: true,
		IdMenu:218,
		title:'GTM'
}
},
{
	path: ruta+'modulo-tesoreria/normativas/actualizar/:id_normativa',
		name: 'actualizar-normativas',
	component: NormativasActualizar,
	meta: {
	auth: true,
		IdMenu:219,
		title:'GTM'
}
},

{
	path: ruta+'modulo-tesoreria/viaticos/',
		name: 'listado-viaticos',
	component: Viaticos,
	meta: {
	auth: true,
		IdMenu:220,
		title:'GTM'
}
},
{
	path: ruta+'modulo-tesoreria/viaticos/registrar',
		name: 'registrar-viaticos',
	component: ViaticosRegistrar,
	meta: {
	auth: true,
		IdMenu:221,
		title:'GTM'
}
},
{
	path: ruta+'modulo-tesoreria/viaticos/actualizar/:id_viatico',
		name: 'actualizar-viaticos',
	component: ViaticosActualizar,
	meta: {
	auth: true,
		IdMenu:222,
		title:'GTM'
}
},

{
	path: ruta+'modulo-tesoreria/caja/',
		name: 'listado-caja',
	component: CajaChica,
	meta: {
	auth: true,
		IdMenu:223,
		title:'GTM'
}
},
{
	path: ruta+'modulo-tesoreria/caja/registrar',
		name: 'registrar-caja',
	component: CajaChicaRegistrar,
	meta: {
	auth: true,
		IdMenu:224,
		title:'GTM'
}
},
{
	path: ruta+'modulo-tesoreria/caja/actualizar/:id_caja_chica',
		name: 'actualizar-caja',
	component: CajaChicaActualizar,
	meta: {
	auth: true,
		IdMenu:225,
		title:'GTM'
}
},

{
	path: ruta+'modulo-tesoreria/solicitud-viatico/',
		name: 'listado-solicitud',
	component: SolicitudViatico,
	meta: {
	auth: true,
		IdMenu:226,
		title:'GTM'
}
},
{
	path: ruta+'modulo-tesoreria/solicitud-viatico/registrar',
		name: 'registrar-solicitud',
	component: SolicitudViaticoRegistrar,
	meta: {
	auth: true,
		IdMenu:227,
		title:'GTM'
}
},
{
	path: ruta+'modulo-tesoreria/solicitud-viatico/actualizar/:id_solicitud_viatico',
		name: 'actualizar-solicitud',
	component: SolicitudViaticoActualizar,
	meta: {
	auth: true,
		IdMenu:228,
		title:'GTM'
}
},
{
	path: ruta+'modulo-tesoreria/comprobante/',
		name: 'listado-comprobante',
	component: ComprobanteCajaChica,
	meta:{
	auth: true,
		IdMenu:229,
		title: 'GTM'
}
},
{
	path: ruta+'modulo-tesoreria/vales/',
		name: 'listado-vales',
	component: ValeCajachica,
	meta:{
	auth:true,
		IdMenu:230,
		title:'GTM'
}
},
{
	path: ruta+'modulo-tesoreria/comprobante/registrar',
		name: 'registrar-comprobante',
	component: ComprobanteCajaChicaRegistrar,
	meta:{
	auth: true,
		IdMenu:231,
		title: 'GTM'
}
},
{
	path: ruta+'modulo-tesoreria/comprobante/registrar/solicitud/:id_solicitud_viatico',
		name: 'registrar-comprobante-solicitud',
	component: ComprobanteCajaChicaRegistrarSolicitud,
	meta:{
	auth:true,
		IdMenu:232,
		title: 'GTM'
}
},
{
	path: ruta+'modulo-tesoreria/comprobante/registrar/vale/:id_comprobante',
		name: 'registrar-comprobante-vale',
	component: ComprobanteCajaChicaRegistrarVales,
	meta:{
	auth:true,
		IdMenu:233,
		title: 'GTM'
}
},
{
	path: ruta+'modulo-tesoreria/vales/registrar',
		name: 'registrar-vale',
	component: ComprobanteCajaChicaRegistrarVale,
	meta:{
	auth: true,
		IdMenu:234,
		title: 'GTM'
}
},
{
	path: ruta+'modulo-tesoreria/comprobante/actualizar/:id_comprobante',
		name: 'actualizar-comprobante',
	component: ComprobanteCajaChicaActualizar,
	meta:{
	auth: true,
		IdMenu:235,
		title: 'GTM'
}
},
{
	path: ruta+'modulo-tesoreria/vales/actualizar-vale/:id_comprobante',
		name: 'actualizar-vale',
	component: ComprobanteCajaChicaActualizarVale,
	meta: {
	auth:true,
		IdMenu:236,
		title: 'GTM'
}
},
			{
				path: ruta+'modulo-tesoreria/reembolsos/',
				name: 'listado-reembolso',
				component: SolicitudReembolso,
				meta:{
					auth: true,
					IdMenu:1,
					title: 'GTM'
				}
			},
{
	path: ruta+'modulo-tesoreria/reembolsos/registrar',
		name: 'registrar-reembolso',
	component: SolicitudReembolsoRegistrar,
	meta:{
	auth: true,
		IdMenu:237,
		title: 'GTM'
}
},*/
{
	path: ruta+'ventas/clientes',
		name: 'listado-clientes',
	component: Clientes,
	meta: {
	auth: true,
		IdMenu:238,
		title:'GTM',
		deudores: false
}
},
/*{
	path: ruta+'ventas/comisiones/asignar-comisiones',
		name: 'registrar-comisiones',
	component: ComisionAsignar,
	meta: {
	auth: true,
		IdMenu:239,
		title:'GTM',
		deudores: false
}
},
{
	path: ruta+'ventas/comisiones/comisiones-vendedor',
		name: 'listado-comisiones',
	component: ComisionListado,
	meta: {
	auth: true,
		IdMenu:240,
		title:'GTM',
		deudores: false
}
},

{
	path: ruta+'ventas/comisiones/actualizar/:id_vendedor',
		name: 'actualizar-comisiones',
	component: ComisionActualizar,
	meta: {
	auth: true,
		IdMenu:241,
		title:'GTM'
}
},
{
	path: ruta+'ventas/precio-lista-catalogo/registrar',
		name: 'registrar-lista-catalogo',
	component: CatalogoListaRegistrar,
	meta: {
	auth: true,
		IdMenu:242,
		title:'GTM',
		deudores: false
}
},
{
	path: ruta+'ventas/precio-lista-catalogo/',
		name: 'listado-lista-catalogo',
	component: CatalogoLista,
	meta: {
	auth: true,
		IdMenu:243,
		title:'GTM',
		deudores: false
}
},

{
	path: ruta+'ventas/precio-lista-catalogo/actualizar/:id_precio_lista_catalogo',
		name: 'actualizar-lista-catalogo',
	component: CatalogoListaActualizar,
	meta: {
	auth: true,
		IdMenu:244,
		title:'GTM'
}
},
{
	path: ruta+'ventas/precio-lista-grupo/registrar',
		name: 'registrar-lista-grupo',
	component: GrupoListaPrecioRegistrar,
	meta: {
	auth: true,
		IdMenu:245,
		title:'GTM',
}
},
{
	path: ruta+'ventas/precio-lista-grupo/',
		name: 'listado-lista-grupo',
	component: GrupoListaPrecio,
	meta: {
	auth: true,
		IdMenu:246,
		title:'GTM',
}
},

{
	path: ruta+'ventas/precio-lista-grupo/actualizar/:id_precio_lista_grupos',
		name: 'actualizar-lista-grupo',
	component: GrupoListaPrecioActualizar,
	meta: {
	auth: true,
		IdMenu:247,
		title:'GTM'
}
},
{
	path: ruta+'ventas/lista-precio-bateria/registrar',
		name: 'registrar-lista-bateria',
	component: ListaPrecioBateriaRegistrar,
	meta: {
	auth: true,
		IdMenu:248,
		title:'GTM',
		deudores: false
}
},
{
	path: ruta+'ventas/lista-precio-bateria/',
		name: 'listado-lista-bateria',
	component: ListaPrecioBateria,
	meta: {
	auth: true,
		IdMenu:249,
		title:'GTM',
}
},

{
	path: ruta+'ventas/lista-precio-bateria/actualizar/:id_precio_lista_catalogo',
		name: 'actualizar-lista-bateria',
	component: ListaPrecioBateriaActualizar,
	meta: {
	auth: true,
		IdMenu:250,
		title:'GTM'
}
},

{
	path: ruta+'ventas/comisiones/comisiones-gerencia',
		name: 'registrar-comisiones-gerencia',
	component: ComisionGerenciasRegistrar,
	meta: {
	auth: true,
		IdMenu:251,
		title:'GTM',
		deudores: false
}
},*/

{
	path: ruta+'ventas/solicitudes-consignacion',
		name: 'listado-clientes-solicitud-consignacion',
	component: ClientesSolicitudConsignacion,
	meta: {
	auth: true,
		IdMenu:252,
		title:'GTM',
		deudores: false
}
},

{
	path: ruta+'ventas/deudores',
		name: 'listado-deudores',
	component: Clientes,
	meta: {
	auth: true,
		IdMenu:253,
		title:'GTM',
		deudores: true
}
},

{
	path: ruta+'ventas/cliente/registrar',
		name: 'registrar-cliente',
	component:  ClienteRegistrar,
	meta: {
	auth: true,
		IdMenu:254,
		title:'GTM'
}
},

{
	path: ruta+'ventas/deudores/registrar',
		name: 'registrar-deudor',
	component:  ClienteRegistrar,
	meta: {
	auth: true,
		IdMenu:255,
		title:'GTM'
}
},

{
	path: ruta+'ventas/clientes/actualizar/:id_cliente',
		name: 'actualizar-cliente',
	component:  ClienteActualizar,
	meta: {
	auth: true,
		IdMenu:256,
		title:'GTM'
}
},

{
	path: ruta+'ventas/deudores/actualizar/:id_cliente',
		name: 'actualizar-deudor',
	component:  ClienteActualizar,
	meta: {
	auth: true,
		IdMenu:257,
		title:'GTM'
}
},

{
	path: ruta+'inventario/reportes',
		name: 'inventario-reportes',
	component: InventarioReportes,
	meta: {
	auth: true,
		IdMenu:258,
		title:'GTM'
}
},

/*{
	path: ruta+'ventas/reportes',
		name: 'ventas-reportes',
	component: FacturacionReportes,
	meta: {
	auth: true,
		IdMenu:259,
		title:'GTM'
}
},

{
	path: ruta+'activo/reportes',
		name: 'activo-reportes',
	component: ActivoReportes,
	meta: {
	auth: true,
		IdMenu:260,
		title:'GTM'
}
},
{
	path: ruta+'caja-banco/reportes',
		name: 'caja-banco-reportes',
	component: CajaBancoReportes,
	meta: {
	auth: true,
		IdMenu:261,
		title:'GTM'
}
},
{
	path: ruta+'tesoreria/reportes',
		name: 'tesoreria-reportes',
	component: TesoreriaReportes,
	meta: {
	auth: true,
		IdMenu:262,
		title:'GTM'
}
},
{
	path: ruta+'nomina/reportes',
		name: 'nomina-reportes',
	component: NominaReportes,
	meta: {
	auth: true,
		IdMenu:263,
		title:'GTM'
}
},
{
	path: ruta+'contabilidad/reportes',
		name: 'contabilidad-reportes',
	component: ContabilidadReportes,
	meta: {
	auth: true,
		IdMenu:264,
		title:'GTM'
}
},

{
	path: ruta+'cuentas-cobrar/reportes',
		name: 'cuentas-cobrar-reportes',
	component: CuentasxCobrarReportes,
	meta: {
	auth: true,
		IdMenu:265,
		title:'GTM'
}
},

{
	path: ruta+'cuentas-pagar/reportes',
		name: 'cuentas-pagar-reportes',
	component: CuentasxPagarReportes,
	meta: {
	auth: true,
		IdMenu:266,
		title:'GTM'
}
},


{
	path: ruta+'modulo-contabilidad',
		name: 'pagina-principal-contabilidad',
	component: DashboardContabilidad,
	meta: {
	auth: true,
		IdMenu:267,
		title:'GTM'
}
},
{
	path: ruta+'modulo-tesoreria',
		name: 'pagina-principal-tesoreria',
	component: DashboardTesoreria,
	meta: {
	auth: true,
		IdMenu:268,
		title:'GTM'
}
},
{
	path: ruta+'modulo-activos',
		name: 'pagina-principal-activos',
	component: DashboardActivos,
	meta: {
	auth: true,
		IdMenu:269,
		title:'GTM'
}
},*/
{
	path: ruta+'modulo-administracion',
		name: 'pagina-principal-administracion',
	component: DashboardAdministracion,
	meta: {
	auth: true,
		IdMenu:270,
		title:'GTM'
}
},
/*{
	path: ruta+'modulo-caja-bancos',
		name: 'pagina-principal-caja',
	component: DashboardCajaBancos,
	meta: {
	auth: true,
		IdMenu:271,
		title:'GTM'
}
},
{
	path: ruta+'modulo-compras',
		name: 'pagina-principal-compras',
	component: DashboardCompras,
	meta: {
	auth: true,
		IdMenu:272,
		title:'GTM'
}
},
{
	path: ruta+'modulo-cuentas-por-cobrar',
		name: 'pagina-principal-cuentas-cobrar',
	component: DashboardCuentasPorCobrar,
	meta: {
	auth: true,
		IdMenu:273,
		title:'GTM'
}
},


{
	path: ruta+'modulo-cuentas-por-pagar',
		name: 'pagina-principal-cuentas-pagar',
	component: DashboardCuentasPorPagar,
	meta: {
	auth: true,
		IdMenu:274,
		title:'GTM'
}
},*/
{
	path: ruta+'modulo-inventario',
		name: 'pagina-principal-inventario',
	component: DashboardInventario,
	meta: {
	auth: true,
		IdMenu:275,
		title:'GTM'
}
},

/*{
	path: ruta+'modulo-nomina',
		name: 'pagina-principal-nomina',
	component: DashboardNomina,
	meta: {
	auth: true,
		IdMenu:276,
		title:'GTM'
}
},*/

{
	path: ruta+'modulo-ventas',
		name: 'pagina-principal-ventas',
	component: DashboardVentas,
	meta: {
	auth: true,
		IdMenu:277,
		title:'GTM'
}
},
			/*{
				path: ruta+'modulo-importacion-datos',
				name: 'pagina-principal-importacion-datos',
				component: DashboardImportacionDatos,
				meta: {
					auth: true,
					IdMenu:477, /!*474 local*!/
					title:'GTM'
				}
			},

{
	path: ruta+'compras/solicitudes',
		name: 'listado-solicitudes-compras',
	component: SolicitudesCompra,
	meta: {
	auth: true,
		IdMenu:278,
		title:'GTM'
}
},
{
	path: ruta+'compras/solicitudes/registrar',
		name: 'registrar-solicitud-compra',
	component: SolicitudesCompraRegistrar,
	meta: {
	auth: true,
		IdMenu:279,
		title:'GTM'
}
},
{
	path: ruta+'compras/solicitudes/mostrar/:id_solicitud_compra',
		name: 'mostrar-solicitud-compra',
	component: SolicitudesCompraMostrar,
	meta: {
	auth: true,
		IdMenu:280,
		title:'GTM'
}
},
{
	path: ruta+'compras/solicitudes/actualizar/:id_solicitud_compra',
		name: 'actualizar-solicitud-compra',
	component: SolicitudesCompraActualizar,
	meta: {
	auth: true,
		IdMenu:281,
		title:'GTM'
}
},
{
	path: ruta+'compras/solicitudes/revisar/:id_solicitud_compra',
		name: 'revisar-solicitud-compra',
	component: SolicitudesCompraRevisar,
	meta: {
	auth: true,
		IdMenu:282,
		title:'GTM'
}
},

{
	path: ruta+'compras/ordenes',
		name: 'listado-ordenes-compras',
	component: OrdenesCompra,
	meta: {
	auth: true,
		IdMenu:283,
		title:'GTM'
}
},
{
	path: ruta+'compras/ordenes/registrar',
		name: 'registrar-orden-compra',
	component: OrdenesCompraRegistrar,
	meta: {
	auth: true,
		IdMenu:284,
		title:'GTM'
}
},
{
	path: ruta+'compras/ordenes/mostrar/:id_orden_compra',
		name: 'mostrar-orden-compra',
	component: OrdenesCompraMostrar,
	meta: {
	auth: true,
		IdMenu:285,
		title:'GTM'
}
},
{
	path: ruta+'compras/ordenes/actualizar/:id_orden_compra',
		name: 'actualizar-orden-compra',
	component: OrdenesCompraActualizar,
	meta: {
	auth: true,
		IdMenu:286,
		title:'GTM'
}
},
{
	path: ruta+'compras/ordenes/registrar/solicitud/:id_solicitud_compra',
		name: 'registrar-orden-compra-solicitud',
	component: OrdenesCompraRegistrarPorSolicitud,
	meta: {
	auth: true,
		IdMenu:287,
		title:'GTM'
}
},
{
	path: ruta+'compras/ordenes/revisar/:id_orden_compra',
		name: 'revisar-orden-compra',
	component: OrdenesCompraRevisar,
	meta: {
	auth: true,
		IdMenu:288,
		title:'GTM'
}
},




{
	path: ruta+'compras/ordenes-ps',
		name: 'listado-ordenes-compras-ps',
	component: OrdenesCompraPS,
	meta: {
	auth: true,
		IdMenu:289,
		title:'GTM'
}
},
{
	path: ruta+'compras/ordenes/registrar-ps',
		name: 'registrar-orden-compra-ps',
	component: OrdenesCompraPSRegistrar,
	meta: {
	auth: true,
		IdMenu:290,
		title:'GTM'
}
},
{
	path: ruta+'compras/ordenes/mostrar-ps/:id_orden_servicio',
		name: 'mostrar-orden-compra-ps',
	component: OrdenesCompraPSMostrar,
	meta: {
	auth: true,
		IdMenu:291,
		title:'GTM'
}
},
{
	path: ruta+'compras/ordenes/actualizar-ps/:id_orden_servicio',
		name: 'actualizar-orden-compra-ps',
	component: OrdenesCompraPSActualizar,
	meta: {
	auth: true,
		IdMenu:292,
		title:'GTM'
}
},
{
	path: ruta+'compras/ordenes/revisar-ps/:id_orden_servicio',
		name: 'revisar-orden-compra-ps',
	component: OrdenesCompraRevisarPS,
	meta: {
	auth: true,
		IdMenu:293,
		title:'GTM'
}
},


{
	path: ruta+'inventario/requisas',
		name: 'requisas',
	component: Requisas,
	meta: {
	auth: true,
		IdMenu:295,
		title:'GTM'
}
},
{
	path: ruta+'inventario/requisas/registrar',
		name: 'registrar-requisa',
	component: RequisaRegistrar,
	meta: {
	auth: true,
		IdMenu:296,
		title:'GTM'
}
},
{
	path: ruta+'inventario/requisas/mostrar/:id_requisa',
		name: 'mostrar-requisa',
	component: RequisaMostrar,
	meta: {
	auth: true,
		IdMenu:297,
		title:'GTM'
}
},*/
/*{
      path: ruta+'inventario/requisas/actualizar/:id_requisa',
      name: 'actualizar-requisa',
      component: RequisaActualizar,
      meta: {
         auth: true,
IdMenu:298,
      }
   },*/

/*{
	path: ruta+'inventario/requisas/autorizar/:id_requisa',
		name: 'autorizar-requisa',
	component: RequisaAutorizar,
	meta: {
	auth: true,
		IdMenu:299,
		title:'GTM'
}
},
{
	path: ruta+'ventas/facturas',
		name: 'facturas',
	component: Facturas,
	meta: {
	auth: true,
		IdMenu:300,
		title:'GTM'
}
},

{
	path: ruta+'ventas/facturas/mostrar/:id_factura',
		name: 'mostrar-factura',
	component: FacturaMostrar,
	meta: {
	auth: true,
		IdMenu:301,
		title:'GTM'
}
},

{
	path: ruta+'inventario/importaciones/registrar/orden_compra/:id_orden_compra',
		name: 'registrar-importacion-oc',
	component: ImportacionRegistrarPorOC,
	meta: {
	auth: true,
		IdMenu:302,
		title:'GTM'
}
},

{
	path: ruta+'ventas/facturas/registrar',
		name: 'registrar-factura',
	component: FacturaRegistrar,
	meta: {
	auth: true,
		IdMenu:303,
		title:'GTM'
}
},

{
	path: ruta+'ventas/facturas-ventas/registrar',
		name: 'registrar-factura-venta',
	component: FacturaVentasRegistrar,
	meta: {
	auth: true,
		IdMenu:304,
		title:'GTM'
}
},


{
	path: ruta+'ventas/facturas/consignacion/registrar',
		name: 'registrar-factura-consignacion',
	component: FacturaConsignacionRegistrar,
	meta: {
	auth: true,
		IdMenu:305,
		title:'GTM'
}
},

{
	path: ruta+'ventas/facturas/arqueos',
		name: 'listado-arqueos-caja',
	component: ArqueoDiarioListado,
	meta: {
	auth: true,
		IdMenu:306,
		title:'GTM'
}
},

{
	path: ruta+'ventas/facturas/arqueos/registrar',
		name: 'arqueo-diario',
	component: ArqueoDiarioRegistrar,
	meta: {
	auth: true,
		IdMenu:307,
		title:'GTM'
}
},

{
	path: ruta+'viaPagos/',
		name: 'listado-via-pago',
	component: ViaPagos,
	meta: {
	auth: true,
		IdMenu:308,
		title:'GTM'
}
},
{
	path: ruta+'viaPagos/registrar',
		name: 'registrar-via-pago',
	component: ViaPagosRegistrar,
	meta: {
	auth: true,
		IdMenu:309,
		title:'GTM'
}
},
{
	path: ruta+'viaPagos/actualizar/:id_via_pago',
		name: 'actualizar-via-pago',
	component: ViaPagosActualizar,
	meta: {
	auth: true,
		IdMenu:310,
		title:'GTM'
}
},*/
{
	path: ruta+'administracion/zona-costo/',
		name: 'listado-centro-costo',
	component: CentroCostos,
	meta: {
	auth: true,
		IdMenu:311,
		title:'GTM'
}
},
{
	path: ruta+'administracion/zona-costo/registrar',
		name: 'registrar-centro-costo',
	component: CentroCostosRegistrar,
	meta: {
	auth: true,
		IdMenu:312,
		title:'GTM'
}
},
{
	path: ruta+'administracion/zona-costo/actualizar/:id_centro',
		name: 'actualizar-centro-costo',
	component: CentroCostosActualizar,
	meta: {
	auth: true,
		IdMenu:313,
		title:'GTM'
}
},
			/*{
				path: ruta+'venta/vendedores',
				name: 'listado-vendedores',
				component: Vendedores,
				meta: {
					auth: true,
					IdMenu:1,
					title:'GTM'
				}
			},
			{
				path: ruta+'venta/vendedores/registrar',
				name: 'registrar-vendedores',
				component: VendedoresRegistrar,
				meta: {
					auth: true,
					IdMenu:1,
					title:'GTM'
				}
			},
			{
				path: ruta+'venta/vendedores/actualizar/:id_vendedor',
				name: 'actualizar-vendedores',
				component: VendedoresActualizar,
				meta: {
					auth: true,
					IdMenu:1,
					title:'GTM'
				}
			},
{
	path: ruta+'impuesto/',
		name: 'listado-impuestos',
	component: Impuesto,
	meta: {
	auth: true,
		IdMenu:314,
		title:'GTM'
}
},
{
	path: ruta+'impuesto/registrar',
		name: 'registrar-impuesto',
	component: ImpuestoRegistrar,
	meta: {
	auth: true,
		IdMenu:315,
		title:'GTM'
}
},
{
	path: ruta+'impuesto/actualizar/:id_impuesto',
		name: 'actualizar-impuesto',
	component: ImpuestoActualizar,
	meta: {
	auth: true,
		IdMenu:316,
		title:'GTM'
}
},*/{
	path: ruta+'inventario/tipo-proveedor/',
		name: 'listado-tipo-proveedor',
		component: TipoProveedor,
		meta: {
		auth: true,
			IdMenu:317,
			title:'GTM'
	}
},
{
	path: ruta+'/inventario/tipo-proveedor/registrar',
		name: 'registrar-tipo-proveedor',
	component: TipoProveedorRegistrar,
	meta: {
	auth: true,
		IdMenu:318,
		title:'GTM'
}
},
{
	path: ruta+'inventario/tipo-proveedor/actualizar/:id_tipo_proveedor',
		name: 'actualizar-tipo-proveedor',
	component: TipoProveedorActualizar,
	meta: {
	auth: true,
		IdMenu:319,
		title:'GTM'
}
},
/*{
	path: ruta+'ventas/facturas/afectaciones',
		name: 'listado-afectaciones',
	component: AfectacionesFactura,
	meta: {
	auth: true,
		IdMenu:320,
		title:'GTM'
}
},
{
	path: ruta+'ventas/facturas/afectaciones/actualizar/:id_afectacion',
		name: 'actualizar-afectacion',
	component: AfectacionesFacturaActualizar,
	meta: {
	auth: true,
		IdMenu:321,
		title:'GTM'
}
},
{
	path: ruta+'ventas/facturas/afectaciones/registrar',
		name: 'registrar-afectacion',
	component: AfectacionesFacturaRegistrar,
	meta: {
	auth: true,
		IdMenu:322,
		title:'GTM'
}
},
{
	path: ruta+'compras/clasificacion-compra',
		name: 'listado-clasificacion',
	component: ClasificacionCompra,
	meta: {
	auth: true,
		IdMenu:323,
		title:'GTM'
}
},
{
	path: ruta+'compras/clasificacion-compra/actualizar/:id_clasificacion_servicio',
		name: 'actualizar-clasificacion',
	component: ClasificacionCompraActualizar,
	meta: {
	auth: true,
		IdMenu:324,
		title:'GTM'
}
},
{
	path: ruta+'compras/clasificacion-compra/registrar',
		name: 'registrar-clasificacion',
	component: ClasificacionCompraRegistrar,
	meta: {
	auth: true,
		IdMenu:325,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/clientes/cuentas',
		name: 'cuentas-por-cobrar',
	component: CuentasPorCobrar,
	meta: {
	auth: true,
		IdMenu:326,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/recibos',
		name: 'recibos-oficiales',
	component: RecibosOficiales,
	meta: {
	auth: true,
		IdMenu:327,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/recibos/registrar',
		name: 'registrar-recibo-oficial',
	component: RecibosOficialesRegistrar,
	meta: {
	auth: true,
		IdMenu:328,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/recibos/mostrar/:id_recibo',
		name: 'mostrar-recibo-oficial',
	component: RecibosOficialesMostrar,
	meta: {
	auth: true,
		IdMenu:329,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/trabajadores/cuentas',
		name: 'cuentas-por-cobrar-trabajadores',
	component: CuentasPorCobrarEmpleados,
	meta: {
	auth: true,
		IdMenu:330,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/recibos-empleados',
		name: 'recibos-oficiales-trabajador',
	component: RecibosOficialesEmpleados,
	meta: {
	auth: true,
		IdMenu:331,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/recibos-empleados/registrar',
		name: 'registrar-recibo-oficial-trabajador',
	component: RecibosOficialesEmpleadoRegistrar,
	meta: {
	auth: true,
		IdMenu:332,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/recibos-empleados/mostrar/:id_recibo',
		name: 'mostrar-recibo-oficial-trabajador',
	component: RecibosOficialesEmpleadoMostrar,
	meta: {
	auth: true,
		IdMenu:333,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/notas-credito',
		name: 'notas-credito',
	component: NotasCredito,
	meta: {
	auth: true,
		IdMenu:334,
		title:'GTM',
		deudores: false
}
},
{
	path: ruta+'cuentas-por-cobrar/otras/notas-credito',
		name: 'notas-credito-deudores',
	component: NotasCredito,
	meta: {
	auth: true,
		IdMenu:335,
		title:'GTM',
		deudores: true
}
},
{
	path: ruta+'cuentas-por-cobrar/notas-credito/registrar',
		name: 'registrar-nota-credito',
	component: NotasCreditoRegistrar,
	meta: {
	auth: true,
		IdMenu:336,
		title:'GTM',
		deudores: false
}
},
{
	path: ruta+'cuentas-por-cobrar/otras/notas-credito/registrar',
		name: 'registrar-nota-credito-deudor',
	component: NotasCreditoRegistrar,
	meta: {
	auth: true,
		IdMenu:337,
		title:'GTM',
		deudores: true
}
},
{
	path: ruta+'cuentas-por-cobrar/notas-credito/mostrar/:id_nota_credito',
		name: 'mostrar-nota-credito',
	component: NotasCreditoMostrar,
	meta: {
	auth: true,
		IdMenu:338,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/notas-debito',
		name: 'notas-debito',
	component: NotasDebito,
	meta: {
	auth: true,
		IdMenu:339,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/notas-debito/registrar',
		name: 'registrar-nota-debito',
	component: NotasDebitoRegistrar,
	meta: {
	auth: true,
		IdMenu:340,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/notas-debito/mostrar/:id_nota_debito',
		name: 'mostrar-nota-debito',
	component: NotasDebitoMostrar,
	meta: {
	auth: true,
		IdMenu:341,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-pagar/notas-credito',
		name: 'notas-credito-cp',
	component: NotasCreditoCP,
	meta: {
	auth: true,
		IdMenu:342,
		title:'GTM',
		deudores: false
}
},
{
	path: ruta+'cuentas-por-pagar/notas-credito/registrar',
		name: 'registrar-nota-credito-cp',
	component: NotasCreditoRegistrarCP,
	meta: {
	auth: true,
		IdMenu:343,
		title:'GTM',
		deudores: false
}
},
{
	path: ruta+'cuentas-por-pagar/notas-credito/mostrar/:id_nota_credito',
		name: 'mostrar-nota-credito-cp',
	component: NotasCreditoMostrarCP,
	meta: {
	auth: true,
		IdMenu:344,
		title:'GTM'
}*/

/*{
	path: ruta+'cuentas-por-pagar/notas-debito',
		name: 'notas-debito-cp',
	component: NotasDebitoCP,
	meta: {
	auth: true,
		IdMenu:345,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-pagar/notas-debito/registrar',
		name: 'registrar-nota-debito-cp',
	component: NotasDebitoRegistrarCP,
	meta: {
	auth: true,
		IdMenu:346,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-pagar/notas-debito/mostrar/:id_nota_debito',
		name: 'mostrar-nota-debito-cp',
	component: NotasDebitoMostrarCP,
	meta: {
	auth: true,
		IdMenu:347,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/empleados/cargos-abonos',
		name: 'cargos-abonos-trabajador',
	component: CargosAbonosTrabajador,
	meta: {
	auth: true,
		IdMenu:348,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/empleados/cargos-abonos/registrar',
		name: 'registrar-cargo-abono-trabajador',
	component: CargoAbonoTrabajadorRegistrar,
	meta: {
	auth: true,
		IdMenu:349,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/empleados/cargos-abonos/mostrar/:id_cargo_abono_trabajador',
		name: 'mostrar-cargo-abono-trabajador',
	component: CargoAbonoTrabajadorMostrar,
	meta: {
	auth: true,
		IdMenu:350,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/notas-credito/tipos',
		name: 'tipos-notas-credito',
	component: TiposNotasCredito,
	meta: {
	auth: true,
		IdMenu:351,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/notas-credito/tipos/registrar',
		name: 'registrar-tipo-nota-credito',
	component: TipoNotaCreditoRegistrar,
	meta: {
	auth: true,
		IdMenu:352,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/notas-credito/tipos/actualizar/:id_tipo_nota_credito',
		name: 'actualizar-tipo-nota-credito',
	component: TipoNotaCreditoActualizar,
	meta: {
	auth: true,
		IdMenu:353,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/notas-debito/tipos',
		name: 'tipos-notas-debito',
	component: TiposNotasDebito,
	meta: {
	auth: true,
		IdMenu:354,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/notas-debito/tipos/registrar',
		name: 'registrar-tipo-nota-debito',
	component: TipoNotasDebitoRegistrar,
	meta: {
	auth: true,
		IdMenu:355,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-cobrar/notas-debito/tipos/actualizar/:id_tipo_nota_debito',
		name: 'actualizar-tipo-nota-debito',
	component: TipoNotasDebitoActualizar,
	meta: {
	auth: true,
		IdMenu:356,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-pagar/notas-credito/tipos',
		name: 'tipos-notas-credito-cp',
	component: TiposNotasCreditoCP,
	meta: {
	auth: true,
		IdMenu:357,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-pagar/notas-credito/tipos/registrar',
		name: 'registrar-tipo-nota-credito-cp',
	component: TipoNotaCreditoRegistrarCP,
	meta: {
	auth: true,
		IdMenu:358,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-pagar/notas-credito/tipos/actualizar/:id_tipo_nota_credito',
		name: 'actualizar-tipo-nota-credito-cp',
	component: TipoNotaCreditoActualizarCP,
	meta: {
	auth: true,
		IdMenu:359,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-pagar/notas-debito/tipos',
		name: 'tipos-notas-debito-cp',
	component: TiposNotasDebitoCP,
	meta: {
	auth: true,
		IdMenu:360,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-pagar/notas-debito/tipos/registrar',
		name: 'registrar-tipo-nota-debito-cp',
	component: TipoNotasDebitoRegistrarCP,
	meta: {
	auth: true,
		IdMenu:361,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-pagar/notas-debito/tipos/actualizar/:id_tipo_nota_debito',
		name: 'actualizar-tipo-nota-debito-cp',
	component: TipoNotasDebitoActualizarCP,
	meta: {
	auth: true,
		IdMenu:362,
		title:'GTM'
}
},*/



















/*{
	path: ruta+'cuentas-por-cobrar/otras/cuentas',
		name: 'cuentas-por-cobrar-otras',
	component: CuentasPorCobrarOtras,
	meta: {
	auth: true,
		IdMenu:363,
		title:'GTM'
}
},
{
	path: ruta+'cuentas-por-pagar/',
		name: 'cuentas-por-pagar',
	component: CuentasPorPagar,
	meta: {
	auth: true,
		IdMenu:364,
		title:'GTM'
}
},
{
	path: ruta+'activofijos/colores',
		name: 'listado-colores-activos',
	component: ColoresActivoListado,
	meta: {
	auth: true,
		IdMenu:365,
		title:'GTM'
}
},
{
	path: ruta+'activofijos/colores/registrar',
		name: 'registrar-color-activo',
	component: ColorActivoRegistrar,
	meta: {
	auth: true,
		IdMenu:366,
		title:'GTM'
}
},
{
	path: ruta+'activofijos/colores/actualizar/:id_color',
		name: 'actualizar-color-activo',
	component: ColorActivoActualizar,
	meta: {
	auth: true,
		IdMenu:367,
		title:'GTM'
}
},
{
	path: ruta+'activofijos/activos',
		name: 'listado-activos-fijos',
	component: ActivosFijosListado,
	meta: {
	auth: true,
		IdMenu:368,
		title:'GTM'
}
},
{
	path: ruta+'activofijos/activos/traslados',
		name: 'listado-traslados-activos-fijos',
	component: ActivosFijosTrasladosListado,
	meta: {
	auth: true,
		IdMenu:369,
		title:'GTM'
}
},
{
	path: ruta+'activofijos/activos/registrar',
		name: 'registrar-activo-fijo',
	component: ActivosFijosRegistrar,
	meta: {
	auth: true,
		IdMenu:370,
		title:'GTM'
}
},
{
	path: ruta+'activofijos/activos/actualizar/:id_activo',
		name: 'actualizar-activo-fijo',
	component: ActivosFijosActualizar,
	meta: {
	auth: true,
		IdMenu:371,
		title:'GTM'
}
},
{
	path: ruta+'activofijos/activos/revaluacion/:id_activo',
		name: 'revaluacion-activo-fijo',
	component: ActivosFijosRevaluacion,
	meta: {
	auth: true,
		IdMenu:372,
		title:'GTM'
}
},
{
	path: ruta+'activofijos/activos/reasignar/:id_activo',
		name: 'reasignar-activo-fijo',
	component: ActivosFijosReasignar,
	meta: {
	auth: true,
		IdMenu:373,
		title:'GTM'
}
},
{
	path: ruta+'activofijos/activos/cierre',
		name: 'cierre-activo-fijo',
	component: ActivosFijosCierre,
	meta: {
	auth: true,
		IdMenu:374,
		title:'GTM'
}
},
{
	path: ruta+'activofijos/activos/listado-cierres',
		name: 'listado-cierres-activo-fijo',
	component: ActivosFijosCierresListado,
	meta: {
	auth: true,
		IdMenu:375,
		title:'GTM'
}
},
{
	path: ruta+'activofijos/activos/reasignar-lote',
		name: 'reasignar-activo-fijo-lote',
	component: ActivosFijosReasignarLote,
	meta: {
	auth: true,
		IdMenu:376,
		title:'GTM'
}
},
{
	path: ruta+'activofijos/activos/generar-acta',
		name: 'generar-acta-entrega-activo',
	component: ActivosFijosGenerarActa,
	meta: {
	auth: true,
		IdMenu:377,
		title:'GTM'
}
},
{
	path: ruta+'activofijos/activos/baja',
		name: 'baja-activo-fijo',
	component: ActivosFijosDarBaja,
	meta: {
	auth: true,
		IdMenu:378,
		title:'GTM'
}
},
{
	path: ruta+'activofijos/depreciacion/configuracion',
		name: 'activos-conf-depreciacion',
	component: AjustesDepreciacion,
	meta: {
	auth: true,
		IdMenu:379,
		title:'GTM'
}
},
{
	path: ruta+'inventario/conteo-fisico',
		name: 'listado-conteo-fisico',
	component: InventarioFisico,
	meta: {
	auth: true,
		IdMenu:380,
		title:'GTM'
}
},
{
	path: ruta+'inventario/conteo-fisico/registrar',
		name: 'registrar-conteo-fisico',
	component: InventarioFisicoRegistrar,
	meta: {
	auth: true,
		IdMenu:381,
		title:'GTM'
}
},
{
	path: ruta+'inventario/conteo-fisico/mostrar/:id_inventario_fisico',
		name: 'mostrar-conteo-fisico',
	component: InventarioFisicoMostrar,
	meta: {
	auth: true,
		IdMenu:382,
		title:'GTM'
}
},
{
	path: ruta+'inventario/conteo-fisico/actualizar/:id_inventario_fisico',
		name: 'actualizar-conteo-fisico',
	component: InventarioFisicoActualizar,
	meta: {
	auth: true,
		IdMenu:383,
		title:'GTM'
}
},
{
	path: ruta+'ventas/cotizacion/registrar',
		name: 'registrar-cotizacion',
	component: CotizacionRegistrar,
	meta: {
	auth: true,
		IdMenu:384,
		title:'GTM'
}
},
{
	path: ruta+'ventas/cotizaciones',
		name: 'listado-cotizaciones',
	component: Cotizaciones,
	meta: {
	auth: true,
		IdMenu:385,
		title:'GTM'
}
},
{
	path: ruta+'ventas/cotizaciones/mostrar/:id_proforma',
		name: 'mostrar-cotizacion',
	component: CotizacionMostrar,
	meta: {
	auth: true,
		IdMenu:386,
		title:'GTM'
}
},
{
	path: ruta+'ventas/cotizaciones/registrar/seguimiento/:id_proforma',
		name: 'registrar-cotizacion-seguimiento',
	component: CotizacionRegistrarSeguimiento,
	meta:{
	auth:true,
		IdMenu:387,
		title: 'GTM'
}
},*/
{
	path: ruta+'diseno',
		name: 'diseno',
	component: Diseno,
	meta: {
	auth: true,
		IdMenu:388,
		title:'SGC Diseno',
		deudores: false
}
},
/*{
	path: ruta+'inventario/consignacion/cliente',
		name: 'consignacion-cliente',
	component: ConsignacionCliente,
	meta: {
	auth: true,
		IdMenu:389,
		title:'GTM'
}
},
{
	path: ruta+'inventario/consignacion/general',
		name: 'consignacion-general',
	component: ConsignacionGeneral,
	meta: {
	auth: true,
		IdMenu:390,
		title:'GTM'
}
},
{
	path: ruta+'compras/usados/registrar',
		name: 'registrar-compra-usado',
	component: CompraUsadoRegistrar,
	meta: {
	auth: true,
		IdMenu:391,
		title:'GTM'
}
},
{
	path: ruta+'inventario/productos-garantia/compra-usado',
		name: 'registrar-compra-usado-garantia',
	component: AutoCompraUsadoRegistrar,
	meta: {
	auth: true,
		IdMenu:392,
		title:'GTM'
}
},
{
	path: ruta+'compras/usados/listado',
		name: 'listado-compra-usado',
	component: CompraUsadoListado,
	meta: {
	auth: true,
		IdMenu:393,
		title:'GTM'
}
},
{
	path: ruta+'ventas/facturas-exportacion/registrar',
		name: 'registrar-factura-exportacion',
	component: FacturaExportacionRegistrar,
	meta: {
	auth: true,
		IdMenu:394,
		title:'GTM'
}
},
{
	path: ruta+'ventas/facturas-exportacion',
		name: 'listado-factura-exportacion',
	component: FacturaExportacionListado,
	meta: {
	auth: true,
		IdMenu:395,
		title:'GTM'
}
},
{
	path: ruta+'ventas/facturas-ajustes/registrar',
		name: 'registrar-factura-ajuste',
	component: FacturaAjusteRegistrar,
	meta: {
	auth: true,
		IdMenu:396,
		title:'GTM'
}
},
{
	path: ruta+'ventas/facturas-recuperados/registrar',
		name: 'registrar-factura-sin-garantia',
	component: FacturaSinGarantiaRegistrar,
	meta: {
	auth: true,
		IdMenu:397,
		title:'GTM'
}
},
{
	path: ruta+'bancos/conciliacion/estados-cuenta/registrar',
		name: 'registrar-estado-cuenta',
	component: ConciliacionEstadoCuentaBancariaRegistrar,
	meta: {
	auth: true,
		IdMenu:398,
		title:'GTM'
}
},
{
	path: ruta+'bancos/conciliacion/estados-cuenta',
		name: 'listado-estados-cuentas-bancarias',
	component: ConciliacionEstadosCuentasBancaria,
	meta: {
	auth: true,
		IdMenu:399,
		title:'GTM'
}
},
{
	path: ruta+'bancos/conciliacion/registrar/:id_estado_cuenta_banco',
		name: 'registrar-conciliacion',
	component: ConciliacionBancariaRegistrar,
	meta: {
	auth: true,
		IdMenu:400,
		title:'GTM'
}
},
{
	path: ruta+'bancos/conciliacion',
		name: 'listado-conciliaciones-bancarias',
	component: ConciliacionListado,
	meta: {
	auth: true,
		IdMenu:401,
		title:'GTM'
}
},
{
	path: ruta+'inventario/conteo-fisico-1',
		name: 'listado-conteo-fisico-1',
	component: ConteoFisicoListado,
	meta: {
	auth: true,
		IdMenu:402,
		title:'GTM'
}
},
{
	path: ruta+'inventario/conteo-fisico-1/registrar',
		name: 'registrar-conteo-fisico-1',
	component: ConteoFisicoRegistrar,
	meta: {
	auth: true,
		IdMenu:403,
		title:'GTM'
}
},
{
	path: ruta+'inventario/conteo-fisico-1/actualizar/:id_conteo_fisico',
		name: 'actualizar-conteo-fisico-1',
	component: ConteoFisicoActualizar,
	meta: {
	auth: true,
		IdMenu:404,
		title:'GTM'
}
},
{
	path: ruta+'inventario/conteo-fisico-1/mostrar/:id_conteo_fisico',
		name: 'mostrar-conteo-fisico-1',
	component: ConteoFisicoMostrar,
	meta: {
	auth: true,
		IdMenu:405,
		title:'GTM'
}
},
            {
                path: ruta+'activofijos/activos/localizar-activo',
                name: 'localizar-activo-fijo',
                component: ActivosFijosUbicacion,
                meta: {
                    auth: true,
                    IdMenu:406,
                    title:'Localizar activo'
                }
            },

			{
				path: ruta+'inventario/facturas/ajustes',
				name: 'factura-ajustes',
				component: AjustesFacturaComprobante,
				meta: {
					auth: true,
					IdMenu:1,
					title:'GTM'
				}
			},
			{
				path: ruta+'modulo-nomina/planilla/generar',
				name: 'generar-planilla',
				component: GenerarPlanilla,
				meta: {
					auth: true,
					IdMenu:472,
					title:'GTM'
				}
			},
			{
				path: ruta+'modulo-nomina/planilla/procesar/:id_planilla_control',
				name: 'procesar-planilla',
				component: ProcesarPlanilla,
				meta: {
					auth: true,
					IdMenu:473,
					title:'GTM'
				}
			},
			{
				path: ruta+'importacion-datos/cuentasxcobrar/registrar',
				name: 'registrar-importacion-cuentasxcobrar',
				component: CuentasPorCobrarImportacionDatos,
				meta: {
					auth: true,
					IdMenu:478, /!*398 local*!/
					title:'GTM'
				}
			},*/
			{
				path: ruta+'select-company',
				name: 'select-company',
				component: SelectCompany,
				meta: {
					//auth: false,
					title: 'GTM',
					//IdMenu:477,
				}
			},
            {
                path: ruta+'administracion/two-factor-settings',
                name: 'two-factor-settings',
                component: twoFactorSettings,
                meta: {
                    auth: true,
                    IdMenu:491,
                    title:'2FA'
                }
            },
            {
                path: ruta+'administracion/two-factor-verify',
                name: 'two-factor-verify',
                component: twoFactorVerify,
                meta: {
                    auth: true,
                    IdMenu:492,
                    title:'2FA'
                }
            },


		]
	},

	{
		path: ruta,
		component: LayoutFullWidth,
		children: [


		],
	},

	{
		path: ruta+'reset-password',
		name: 'reset-password',
		component: ForgotPassword,
		meta: {
			auth:false,
			title:'GTM'
		}
	},
	{
		path: ruta+'reset-password/:token',
		name: 'reset-password-form',
		component: ResetPasswordForm,
		meta: {
			auth:false,
			title:'GTM'
		}
	},

	{
		path: ruta+'login',
		name: 'login',
		component: Login,
		meta: {
			auth: false,
			title: 'Inicio de Sesión'
		  }
	},

	{
		path: ruta+'500',
		name: '500',
		component: Error500Template,
		meta: {
			title: 'Error 500'
		}
	},
	{
		path: ruta+'403',
		name: 'error-permiso',
		component: ErrorPermiso,
		meta: {
			title: 'Error 403'
		}
	},
	{
		path: ruta+'404',
		name: '404',
		component: Error404Template,
		meta: {
			title: 'Error 404'
		}
	},
	{ path: "*",
	 component: Error404Template,
		meta: {
			title: 'Error 404'
		}
	}
];

const router = new VueRouter({
	mode: 'history',
	routes: routes,
	linkExactActiveClass: 'router-link-exact-active selected',
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}
	}
});

Vue.router = router
//Vue.use(auth,'vue-auth')
Vue.use(require('@websanova/vue-auth'), {
   auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
   http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
	 router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
	 tokenDefaultName: 'user-token',
	 tokenStore: ['localStorage'],
	 rolesVar: 'id_rol',
	 authRedirect:       {path: ruta+'login'},
	 companyRedirect:     {path: ruta+'select-company'},
	 TwoFactorRedirect:     {path: ruta+'two-factor-settings'},
	 TwoFactorRedirectVerify:     {path: ruta+'two-factor-verify'},
	 forbiddenRedirect:  {path: ruta+'403'},
	 notFoundRedirect:   {path: ruta+'404'},
	 resetPassword:   {path: ruta+'reset-password'},
	 registerData: {url: 'auth/register', method: 'POST', redirect: ruta+'login'},
	 loginData: {url: 'auth/login', method: 'POST', redirect: '', fetchUser: true},
	 logoutData: {url: 'auth/logout', method: 'POST', redirect: ruta+'login', makeRequest: false},
	 fetchData: {url: 'auth/user', method: 'GET', enabled: true},
	 fetchTwoFactor: {url: 'auth/generate-two-factor-code', method: 'GET', enabled: true},
	 refreshData: {url: 'auth/refresh', method: 'GET', enabled: true, interval: 30},
	 parseUserData (data) {
		// console.log(data.data);
		return data.data || {};
  },
});

/*const companyVerify = new Vuex.Store({
	state:{
		multiCompany : false
	},
	mutations:{
		setCompanyValue(state,status){
			state.multiCompany = status;
		},
	},
	actions:{}
});
export default companyVerify*/


router.beforeEach((to, from, next) => {

	// Nanobar
	const nanobar = new Nanobar();
	nanobar.go(30);
	nanobar.go(76);

	setTimeout(() => {
		nanobar.go(100);
	}, 1000);
	const reqSession = to.matched.some(route => route.meta.auth);

	if (!reqSession) {
        if (to.name === 'login') {
            if (Vue.auth.check()) {
                next();
                //next({name:'pagina-principal'});
            } else {
                next();
            }
        }else if(to.name === 'select-company') {
        	if(Vue.auth.check()) {
				next();
			}else{
        	    next({ name: 'login' });
        	}
        }
    }else{
			 if(Vue.auth.check() && to.name !== 'login' && to.name !== 'select-company'){
			axios.post('menu/verificar',
				{
					id_menu: to.meta.IdMenu,
				})
				.then(({data}) => {
					//console.log(data);
					if(data.status==='success'){
						next();
					}else if (data.status === 'error'){
						next({ name: 'error-permiso' });

					}
				}).catch(function (error) {
				console.log(error);
				next({ name: 'error-permiso' });
				//next();
			});
		} else {
			Vue.auth.logout();
			//next({ name: 'login' });

				 next({ name: 'login'});
		}
	}

	document.title = to.meta.title
});

const app = new Vue({
	store,
	router,
}).$mount('#main')
