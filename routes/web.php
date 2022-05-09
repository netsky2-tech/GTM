<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::post('media/upload', 'MediaController@upload');
Route::get('media/get-files', 'MediaController@getFiles');
Route::get('media/get-icon-files', 'MediaController@getIconFiles');


Route::group(['middleware' => 'sesion.abierta'], function(){

// Media Routes
    Route::get('entrada/pdf/{invoice}', 'InventarioEntradasController@pdf');
    Route::get('salida/pdf/{invoice}', 'InventarioSalidasController@pdf');
    Route::get('inventario/reporte/kardex/pdf/{producto}', 'InventarioReportesController@kardex_pdf');
    //Route::get('contabilidad/cuentas-contables/reporte/{ext}', 'ContabilidadCuentasContablesController@generarReporte');
    Route::get('contabilidad/documentos-contables/reporte/{ext}/{id_documento}', 'ContabilidadDocumentosContablesController@generarReporte');
    Route::get('areas/reporte/{tipo}', 'PublicAreasController@reporteAreas');

    // Send reset password mail
    Route::post('/auth/reset-password', 'AuthController@sendPasswordResetLink');
    // handle reset password form process
    Route::post('/reset-password/{token}', 'AuthController@callResetPassword')->name('password.reset');
    Route::post('/auth/reset/password', 'AuthController@callResetPassword');

});

Route::get('ajustes/cargar-basico', 'AdmonAjustesController@obtenerAjustesBasicos');
Route::get('ajustes/cargar-imagenes', 'AdmonAjustesController@obtenerImagenes');

Route::get('/complete-registration', 'Auth\RegisterController@completeRegistration');

//2FA Email Verification
Route::get('auth/store-two-factor-code', 'TwoFactorAuthController@store');

// Auth Routes
Route::post('/auth/login', 'AuthController@login');

Route::group(['middleware' => 'jwt.auth'], function(){
Route::get('auth/user', 'AuthController@user');
Route::get('auth/generate-two-factor-code', 'AuthController@generateTwoFactorCode');
Route::post('auth/logout', 'AuthController@logout');
Route::post('auth/loadCompany', 'SettingsController@loadCompany');
Route::post('auth/StoreCompany', 'SettingsController@__construct');

//2FA QR Code Google
Route::post('auth/enable-2fa', 'LoginSecurityController@store');
Route::delete('auth/disabled-2fa', 'LoginSecurityController@destroy');
Route::get('auth/show-qr', 'LoginSecurityController@show');
Route::get('auth/get-recovery', 'LoginSecurityController@index');
Route::post('auth/set-recovery-code', 'LoginSecurityController@storeRecoveryCode');



    // Rutas Roles
    Route::post('rol/obtener-roles', 'AdmonRolesController@obtenerRoles');
    Route::get('rol/obtener-roles-todos', 'AdmonRolesController@obtenerTodosRoles');
    Route::post('rol/obtener-rol', 'AdmonRolesController@obtenerRolEspecifico');
    Route::post('rol/crear', 'AdmonRolesController@crearRol');
    Route::put('rol/actualizar', 'AdmonRolesController@actualizarRol');
    Route::put('rol/desactivar', 'AdmonRolesController@desactivaRol');
    Route::put('rol/activar', 'AdmonRolesController@activaRol');

    // Rutas Menu
    Route::post('menu/obtener-menus', 'AdmonMenusController@obtenerMenus');
    Route::post('menu/obtener-modulos', 'AdmonMenusController@obtenerModulos');
    Route::post('menu/obtener-lista-reportes', 'AdmonMenusController@obtenerListaReportes');
    Route::post('menu/obtener-submodulos', 'AdmonMenusController@obtenerSubModulos');

    Route::get('menu/obtener-menus-todos', 'AdmonMenusController@obtenerMenusTodos');
    Route::get('menu/obtener-menus-orden', 'AdmonMenusController@obtenerMenusOrdenados');

    Route::post('menu/verificar', 'AdmonMenusController@verificarPermisoVista');


    Route::post('menu/obtener-menu', 'AdmonMenusController@obtenerMenuEspecifico');
    Route::get('menu/obtener-menus-usuario', 'AdmonMenusController@obtenerMenusUsuario');
    Route::get('menu/obtener-secciones', 'AdmonMenusController@obtenerSecciones');
    Route::get('menu/obtener-padres', 'AdmonMenusController@obtenerMenusPadre');

    //Route::post('menu/crear', 'AdmonMenusController@crearMenu');
    Route::put('menu/actualizar', 'AdmonMenusController@actualizarMenu');
    Route::put('menu/actualizar-orden', 'AdmonMenusController@actualizarOrdenMenus');
    //Route::put('menu/desactivar', 'AdmonMenusController@desactivaMenu');
    //Route::put('menu/activar', 'AdmonMenusController@activaMenu');

    // Rutas Permisos
    Route::post('permisos/obtener-permisos', 'AdmonPermisosController@obtenerPermisos');
    Route::post('permisos/guardar', 'AdmonPermisosController@guardarPermiso');

    // Rutas Roles
    Route::post('accesos/obtener-accesos', 'BitacoraAccesosController@obtenerAccesos');
    Route::post('accesos/obtener-accesos-reporte', 'BitacoraAccesosController@obtenerAccesosReporte');
    Route::get('administracion/accesos/reporte', 'BitacoraAccesosController@generarReporte');


    // Rutas Sucursales
    Route::post('sucursales/obtener', 'PublicSucursalesController@obtener');
    Route::get('sucursales/obtener-todas', 'PublicSucursalesController@obtenerTodas');
    Route::post('sucursales/obtener-sucursal', 'PublicSucursalesController@obtenerSucursal');
    Route::post('sucursales/registrar', 'PublicSucursalesController@registrar');
    Route::put('sucursales/actualizar', 'PublicSucursalesController@actualizar');
    Route::put('sucursales/desactivar', 'PublicSucursalesController@desactivar');
    Route::put('sucursales/activar', 'PublicSucursalesController@activar');
    Route::get('sucursales/buscar', 'PublicSucursalesController@buscar');
    Route::get('sucursales/reporte/{ext}', 'PublicSucursalesController@generarReporte');





    // Rutas Empleados
    Route::post('empleados/obtener-empleados', 'RRHHEmpleadosController@obtenerEmpleados');
    Route::post('empleados/obtener-empleado', 'RRHHEmpleadosController@obtenerEmpleado');
    Route::post('empleados/cambiar-contrasena', 'RRHHEmpleadosController@cambiarContrasenaEmpleado');
    Route::post('empleados/crear', 'RRHHEmpleadosController@crearEmpleado');
    Route::put('empleados/actualizar', 'RRHHEmpleadosController@actualizarEmpleado');
    Route::put('empleados/desactivar', 'RRHHEmpleadosController@desactivarEmpleado');
    Route::put('empleados/activar', 'RRHHEmpleadosController@activarEmpleado');

    Route::get('empleados/buscar', 'RRHHEmpleadosController@buscarEmpleados');

    // Rutas Trabajadores
        Route::post('trabajadores/obtener', 'RRHHTrabajadoresController@obtener');
        Route::post('trabajadores/obtener-trabajador', 'RRHHTrabajadoresController@obtenerTrabajador');
        Route::post('trabajadores/registrar', 'RRHHTrabajadoresController@registrar');
        Route::put('trabajadores/actualizar', 'RRHHTrabajadoresController@actualizar');
        Route::put('trabajadores/desactivar', 'RRHHTrabajadoresController@desactivar');
        Route::put('trabajadores/activar', 'RRHHTrabajadoresController@activar');
    Route::get('trabajadores/buscar', 'RRHHTrabajadoresController@buscar');
    Route::get('trabajadores/buscar_trabajador', 'RRHHTrabajadoresController@buscarTrabajador');
    Route::get('trabajadores/reporte/expediente/{id_trabajador}', 'RRHHTrabajadoresController@reporteExpedientePersonal');


    // Rutas Proveedores
    Route::post('proveedores/obtener', 'InventarioProveedoresController@obtener');
    Route::get('proveedores/obtener-proveedores-todos', 'InventarioProveedoresController@obtenerTodos');
    Route::get(' proveedores/obtener-proveedores-baterias', 'InventarioProveedoresController@obtenerProveedoresBaterias');
    Route::post('proveedores/obtener-proveedores-producto', 'InventarioProveedoresController@obtenerProveedoresProducto');
    Route::post('proveedores/obtener-proveedor', 'InventarioProveedoresController@obtenerProveedor');
    Route::post('proveedores/registrar', 'InventarioProveedoresController@registrar');
    Route::put('proveedores/actualizar', 'InventarioProveedoresController@actualizar');
    Route::put('proveedores/desactivar', 'InventarioProveedoresController@desactivar');
    Route::put('proveedores/activar', 'InventarioProveedoresController@activar');
    Route::get('proveedores/buscar', 'InventarioProveedoresController@buscar');
    Route::get('proveedores/reporte/{ext}', 'InventarioProveedoresController@generarReporte');

    // Rutas Bodegas
    Route::post('bodegas/obtener', 'InventarioBodegasController@obtener');
    Route::get('bodegas/obtener-bodegas-todas', 'InventarioBodegasController@obtenerTodas');
    Route::get('bodegas/obtener-bodegas-productos', 'InventarioBodegasController@obtenerBodegaProductos');
    Route::post('bodegas/obtener-bodegas-productos-garantia', 'InventarioBodegasController@obtenerBodegaProductosGarantia');
    Route::post('bodegas/obtener-bodegas-productos-venta', 'InventarioBodegasController@obtenerBodegaProductosVenta');
    Route::post('bodegas/obtener-bodegas-productos-recuperados', 'InventarioBodegasController@obtenerBodegaProductosRecuperados');
    Route::post('bodegas/obtener-bodegas-productos-obsoletos', 'InventarioBodegasController@obtenerBodegaProductosObsoletos');

    Route::post('bodegas/obtener-bodegas-productos-consignacion', 'InventarioBodegasController@productosBodegaConsignacionCliente');
    Route::post('bodegas/obtener-bodega', 'InventarioBodegasController@obtenerBodega');
    Route::post('bodegas/registrar', 'InventarioBodegasController@registrar');
    Route::put('bodegas/actualizar', 'InventarioBodegasController@actualizar');
    Route::put('bodegas/desactivar', 'InventarioBodegasController@desactivar');
    Route::put('bodegas/activar', 'InventarioBodegasController@activar');
    Route::get('bodegas/buscar', 'InventarioBodegasController@buscar');
    Route::get('bodegas/reporte/{ext}', 'InventarioBodegasController@generarReporte');
    Route::post('bodegas/nuevo', 'InventarioBodegasController@nuevo');
    Route::post(' bodegas/obtener-bodegas-consignacion', 'InventarioBodegasController@obtenerBodegasConsignacion');



    // Rutas Categorias
    Route::post('categorias/obtener', 'InventarioCategoriasController@obtener');
    Route::get('categorias/obtener-categorias-todas', 'InventarioCategoriasController@obtenerTodas');
    Route::post('categorias/obtener-categoria', 'InventarioCategoriasController@obtenerCategoria');
    Route::post('categorias/registrar', 'InventarioCategoriasController@registrar');
    Route::put('categorias/actualizar', 'InventarioCategoriasController@actualizar');
    Route::put('categorias/desactivar', 'InventarioCategoriasController@desactivar');
    Route::put('categorias/activar', 'InventarioCategoriasController@activar');
    Route::get('categorias/reporte/{ext}', 'InventarioCategoriasController@generarReporte');

    // Rutas Productos
    Route::post('productos/obtener-productos', 'InventarioProductosController@obtenerProductos');
    Route::post('productos/obtener-producto', 'InventarioProductosController@obtenerProducto');
    Route::post('productos/registrarPS', 'InventarioProductosController@registrarPS');
    Route::put('productos/actualizarPS', 'InventarioProductosController@actualizarPS');
    Route::post('productos/nueva-bateria', 'InventarioProductosController@nueva');
    Route::post('productos/nuevo-producto-servicio', 'InventarioProductosController@nuevoPS');
    Route::get('productos/ps/reporte/{ext}', 'InventarioProductosController@generarReporte');


    Route::get('inventario/productos/buscar', 'InventarioProductosController@buscarProductos');
    Route::get('inventario/productos/buscarPS', 'InventarioProductosController@buscarPS');


    Route::post('productos/obtener-baterias', 'InventarioProductosController@obtenerBaterias');
    Route::post('productos/obtener-bateria', 'InventarioProductosController@obtenerBateria');
    Route::post('productos/registrar-bateria', 'InventarioProductosController@registrarBateria');
    Route::post('productos/registrar-baterias-externas', 'InventarioProductosController@registrarBateriasExternas');
    Route::put('productos/actualizar-bateria', 'InventarioProductosController@actualizarBateria');

    Route::post('productos/obtener-bateria-codigo', 'InventarioProductosController@obtenerBateriaCodigo');
    Route::post('productos/obtener-bateria-cualquiera', 'InventarioProductosController@obtenerBateriaCualquiera');
    Route::post('productos/obtener-bateria-any', 'InventarioProductosController@obtenerBateriaAny');
    Route::post('productos/obtener-ajuste-bateria', 'InventarioProductosController@obtenerAjusteBateria');


    Route::get('productos/baterias/ficha/{id_producto}', 'InventarioProductosController@reporteFichaBateria');

    // Rutas Baterias
    Route::get('productos/baterias/buscar', 'InventarioProductosController@buscarBaterias');
    Route::post('productos/baterias/nueva', 'InventarioProductosController@nuevaBateriaExterna');




    Route::put('producto/desactivar', 'InventarioProductosController@desactivaProducto');
    Route::put('producto/activar', 'InventarioProductosController@activaProducto');
    Route::post('productos/obtener-productos-bodega', 'InventarioProductosController@obtenerProductosBodega');
    Route::get('productos/obtener-productos-validos', 'InventarioProductosController@obtenerProductosValidos');
    Route::post('productos/obtener-codigo-producto', 'InventarioProductosController@obtenerCodigoProducto');
    Route::get('productos/buscar-bodega', 'InventarioProductosController@buscarProductosBodega');
    Route::get('productos/buscar-bodega-venta', 'InventarioProductosController@buscarProductosBodegaVenta');



    // Rutas tipos entrada
    Route::post('tipo-entrada/obtener', 'InventarioTipoEntradaController@obtener');
    Route::get('tipo-entrada/obtener-tipos-entrada-todos', 'InventarioTipoEntradaController@obtenerTodosTiposEntrada');
    Route::post('tipo-entrada/obtener-tipo-entrada', 'InventarioTipoEntradaController@obtenerTipoEntrada');
    Route::post('tipo-entrada/registrar', 'InventarioTipoEntradaController@registrar');
    Route::put('tipo-entrada/actualizar', 'InventarioTipoEntradaController@actualizar');
    Route::put('tipo-entrada/desactivar', 'InventarioTipoEntradaController@desactivar');
    Route::put('tipo-entrada/activar', 'InventarioTipoEntradaController@activar');
    Route::get('tipo-entrada/reporte/{ext}', 'InventarioTipoEntradaController@generarReporte');

    // Rutas Entradas
    Route::post('entradas/obtener', 'InventarioEntradasController@obtener');
    Route::post('entradas/obtener-entrada', 'InventarioEntradasController@obtenerEntrada');
    //Route::get('entradas/obtener-entrada-por-codigo', 'InventarioEntradasController@obtenerEntradaPorCodigo');
    Route::post('entradas/registrar', 'InventarioEntradasController@registrar');
    Route::put('entradas/actualizar', 'InventarioEntradasController@actualizar');
    Route::put('entradas/recibir', 'InventarioEntradasController@recibir');
    Route::put('entradas/recibir-compra', 'InventarioEntradasController@recibirCompra');
    Route::put('entradas/recibir-traslado', 'InventarioEntradasController@recibirTraslado');

    Route::post('entradas/registrar-bateria', 'InventarioInventarioInicialController@registrarBateria');
    Route::post('entradas/nuevo-inventario-inicial', 'InventarioInventarioInicialController@nuevo');
    Route::post('entradas/inventario-inicial/obtener', 'InventarioInventarioInicialController@obtener');
    Route::put('entradas/inventario-inicial/recibir', 'InventarioInventarioInicialController@recibir');
    Route::put('entradas/inventario-inicial/actualizar', 'InventarioInventarioInicialController@actualizar');
    Route::put('entradas/inventario-inicial/registrar', 'InventarioInventarioInicialController@registrar');
    Route::post('entradas/inventario-inicial/reporte', 'InventarioInventarioInicialController@generarReporteInventarioInicial');
    Route::post('entradas/nuevo-inventario-inicial-varios', 'InventarioInventarioInicialController@nuevoManual');
    Route::post('entradas/obtener-presentaciones-producto', 'InventarioInventarioInicialController@cargarPresentacionesProducto');
    Route::post('entradas/inventario-inicial-manual/registrar', 'InventarioInventarioInicialController@registrarInvManual');
    Route::put('entradas/inventario-inicial/actualizar-manual', 'InventarioInventarioInicialController@actualizarManual');

    Route::post('entradas/inventario-inicial/obtener-entrada', 'InventarioInventarioInicialController@obtenerEntradaInvInicial');

    //Route::get('entradas/reporte/{id_entrada}', 'InventarioEntradasController@reporte');

    Route::get('entradas/productos/buscar', 'InventarioEntradasController@buscarProductos');
    //Route::post('entradas/crear-entrada-devolucion', 'InventarioEntradasController@crearEntradaPorDevolucion');
    //Route::get('entradas/obtener-numero-entrada', 'InventarioEntradasController@obtenerNumeroEntrada');

    //Route::put('entradas/cambiar-estado', 'InventarioEntradasController@cambiarEstado');

    //Rutas transformaciones
    Route::post('transformaciones/obtener-transformacion', 'InventarioTransformacionController@obtenerTransformacion');
    Route::post('transformaciones/obtener-transformacion-entrada', 'InventarioTransformacionController@obtenerTransformacionesEntradas');
    Route::post('transformaciones/obtener-transformacion-salida', 'InventarioTransformacionController@obtenerTransformacionesSalidas');
    Route::post('transformaciones/obtener-producto', 'InventarioTransformacionController@obtenerProducto');
    Route::post('transformaciones/registrarPS', 'InventarioTransformacionController@registrarPS');
    Route::put('transformaciones/actualizarPS', 'InventarioTransformacionController@actualizarPS');
    Route::put('transformaciones/emitirTransformacion', 'InventarioTransformacionController@emitirTransformacion');
    Route::post('transformaciones/nueva-bateria', 'InventarioTransformacionController@nueva');
    Route::post('transformaciones/nuevo-producto-servicio', 'InventarioTransformacionController@nuevoPS');
    Route::get('transformaciones/ps/reporte/{ext}', 'InventarioTransformacionController@generarReporte');
    Route::post('transformaciones/obtener-presentaciones-producto', 'InventarioTransformacionController@cargarPresentacionesProducto');
/*    Route::post('transformaciones/obtener-productos-bodega', 'Inventariotransformacion@cargarPS');*/


    Route::get('transformaciones/buscar', 'InventarioTransformacionController@buscarProductos');
    Route::get('transformacionbuscarPS', 'InventarioTransformacionController@buscarPS');
    Route::get('transformaciones/producto-presentacion', 'InventarioTransformacionController@nuevo');


    Route::post('transformaciones/obtener-baterias', 'InventarioTransformacionController@obtenerBaterias');
    Route::post('transformaciones/obtener-bateria', 'InventarioTransformacionController@obtenerBateria');
    Route::post('transformaciones/registrar-bateria', 'InventarioTransformacionController@registrarBateria');
    Route::post('transformaciones/registrar-baterias-externas', 'InventarioTransformacionController@registrarBateriasExternas');
    Route::put('transformaciones/actualizar-bateria', 'InventarioTransformacionController@actualizarBateria');

    Route::post('transformaciones/obtener-bateria-codigo', 'InventarioTransformacionController@obtenerBateriaCodigo');
    Route::post('transformaciones/obtener-bateria-cualquiera', 'InventarioTransformacionController@obtenerBateriaCualquiera');
    Route::post('transformaciones/obtener-bateria-any', 'InventarioTransformacionController@obtenerBateriaAny');
    Route::post('transformaciones/obtener-ajuste-bateria', 'InventarioTransformacionController@obtenerAjusteBateria');


    Route::get('transformaciones/baterias/ficha/{id_producto}', 'InventarioTransformacionController@reporteFichaBateria');

    // Rutas tipos salida
    Route::post('tipo-salida/obtener', 'InventarioTipoSalidaController@obtener');
    Route::get('tipo-salida/obtener-tipos-salida-todos', 'InventarioTipoSalidaController@obtenerTodosTiposSalida');
    Route::post('tipo-salida/obtener-tipo-salida', 'InventarioTipoSalidaController@obtenerTipoSalida');
    Route::post('tipo-salida/registrar', 'InventarioTipoSalidaController@registrar');
    Route::put('tipo-salida/actualizar', 'InventarioTipoSalidaController@actualizar');
    Route::put('tipo-salida/desactivar', 'InventarioTipoSalidaController@desactivar');
    Route::put('tipo-salida/activar', 'InventarioTipoSalidaController@activar');
    Route::get('tipo-salida/reporte/{ext}', 'InventarioTipoSalidaController@generarReporte');


    // Rutas unidad de medida
    Route::post('unidad-medida/obtener', 'InventarioUnidadMedidaController@obtener');
    Route::post('unidad-medida/nuevo', 'InventarioUnidadMedidaController@nuevo');
    Route::get('unidad-medida/obtener-unidad-medidas-todas', 'InventarioUnidadMedidaController@obtenerTodos');
    Route::post('unidad-medida/obtener-unidad-medida', 'InventarioUnidadMedidaController@obtenerUnidadMedida');
    Route::post('unidad-medida/registrar', 'InventarioUnidadMedidaController@registrar');
    Route::put('unidad-medida/actualizar', 'InventarioUnidadMedidaController@actualizar');
    Route::put('unidad-medida/desactivar', 'InventarioUnidadMedidaController@desactivar');
    Route::put('unidad-medida/activar', 'InventarioUnidadMedidaController@activar');
    Route::get('unidad-medida/reporte/{ext}', 'InventarioUnidadMedidaController@generarReporte');

    // Rutas producto_presentacion
    Route::post('producto_presentacion/obtener', 'InventarioProductoPresentacionController@obtener');
    Route::post('producto_presentacion/nuevo', 'InventarioProductoPresentacionController@nuevo');
    Route::get('producto_presentacion/obtener-unidad-medidas-todas', 'InventarioProductoPresentacionController@obtenerTodos');
    Route::post('producto_presentacion/obtener-unidad-medida', 'InventarioProductoPresentacionController@obtenerUnidadMedida');
    Route::post('producto_presentacion/registrar', 'InventarioProductoPresentacionController@registrar');
    Route::put('producto_presentacion/actualizar', 'InventarioProductoPresentacionController@actualizar');
    Route::put('producto_presentacion/desactivar', 'InventarioProductoPresentacionController@desactivar');
    Route::put('producto_presentacion/activar', 'InventarioProductoPresentacionController@activar');
    Route::get('producto_presentacion/reporte/{ext}', 'InventarioProductoPresentacionController@generarReporte');

// Rutas clasifición unidad de medida estandar
    Route::post('unidad-medida-estandar/obtener', 'InventarioUnidadMedidaEstandarController@obtener');
    Route::get('unidad-medida-estandar/obtener-unidad-medidas-todas', 'InventarioUnidadMedidaEstandarController@obtenerTodos');
    Route::post('unidad-medida-estandar/obtener-unidad-medida', 'InventarioUnidadMedidaEstandarController@obtenerUnidadMedidaEstandar');
    Route::post('unidad-medida-estandar/registrar', 'InventarioUnidadMedidaEstandarController@registrar');
    Route::put('unidad-medida-estandar/actualizar', 'InventarioUnidadMedidaEstandarController@actualizar');
    Route::put('unidad-medida-estandar/desactivar', 'InventarioUnidadMedidaEstandarController@desactivar');
    Route::put('unidad-medida-estandar/activar', 'InventarioUnidadMedidaEstandarController@activar');
    Route::get('unidad-medida-estandar/reporte/{ext}', 'InventarioUnidadMedidaEstandarController@generarReporte');

// Rutas Presentacion Producto
   Route::post('presentacion/obtener','InventarioPresentacionController@obtener');
    Route::post('presentacion/buscar', 'InventarioPresentacionController@buscar');
   Route::post('presentacion/nuevo', 'InventarioPresentacionController@nuevo');
   Route::get('presentacion/obtener-presentacion-todos','InventarioPresentacionController@obtenerTodos');
   Route::post('presentacion/obtener-presentacion','InventarioPresentacionController@obtenerPresentacion');
   Route::post('presentacion/registrar','InventarioPresentacionController@registrar');
   Route::put('presentacion/actualizar','InventarioPresentacionController@actualizar');
   Route::put('presentacion/desactivar','InventarioPresentacionController@desactivar');
   Route::put('presentacion/activar','InventarioPresentacionController@activar');
   Route::get('presentacion/reporte/{ext}','InventarioPresentacionController@generarReporte');

   // Rutas Grado Producto
   Route::post('grado/obtener','InventarioGradoController@obtener');
   Route::get('grado/obtener-grado-todas','InventarioGradoController@obtenerTodos');
   Route::post('grado/obtener-grado','InventarioGradoController@obtenerGrado');
   Route::post('grado/registrar','InventarioGradoController@registrar');
   Route::put('grado/actualizar','InventarioGradoController@actualizar');
   Route::put('grado/desactivar','InventarioGradoController@desactivar');
   Route::put('grado/activar','InventarioGradoController@activar');
   Route::get('grado/reporte/{ext}','InventarioGradoController@generarReporte');

   // Rutas Origen Producto
   Route::post('origen/obtener','InventarioOrigenController@obtener');
   Route::get('origen/obtener-origen-todas','InventarioOrigenController@obtenerTodos');
   Route::post('origen/obtener-origen','InventarioOrigenController@obtenerOrigen');
   Route::post('origen/registrar','InventarioOrigenController@registrar');
   Route::put('origen/actualizar','InventarioOrigenController@actualizar');
   Route::put('origen/desactivar','InventarioOrigenController@desactivar');
   Route::put('origen/activar','InventarioOrigenController@activar');
   Route::get('origen/reporte/{ext}','InventarioOrigenController@generarReporte');


    // Rutas Salidas
    Route::post('salidas/obtener', 'InventarioSalidasController@obtener');
    Route::post('salidas/obtener-salida', 'InventarioSalidasController@obtenerSalida');
    Route::post('salidas/nueva', 'InventarioSalidasController@nueva');
    Route::post('salidas/obtener-presentaciones-producto', 'InventarioSalidasController@cargarPresentacionesProducto');
    Route::post('salidas/registrar', 'InventarioSalidasController@registrar');
    Route::post('salidas/guardar', 'InventarioSalidasController@guardarSalida');
    Route::post('salidas/registrar-manual', 'InventarioSalidasController@registrarSalidaManual');
    Route::put('salidas/anular', 'InventarioSalidasController@anular');

    Route::post('salidas/registrar-bateria', 'InventarioSalidasController@registrarBateria');

    Route::post('salidas/registrar-traslado', 'InventarioSalidasController@registrarTraslado');
    Route::post('salidas/registrar-traslado-consignacion', 'InventarioSalidasController@registrarTrasladoConsignacion');
    Route::post('salidas/registrar-devolucion-consignacion', 'InventarioSalidasController@registrarDevolucionConsignacion');
    Route::post('salidas/registrar-devolucion', 'InventarioSalidasController@registrarDevolucion');

    Route::put('salidas/despachar', 'InventarioSalidasController@despachar');

    Route::post('salidas/crear-salida-devolucion', 'InventarioSalidasController@crearSalidaPorDevolucion');
    Route::get('salidas/obtener-numero-salida', 'InventarioSalidasController@obtenerNumeroSalida');
    Route::post('salidas/obtener-salida-por-codigo', 'InventarioSalidasController@obtenerSalidaPorCodigo');

    Route::post('salidas/reporte', 'InventarioSalidasController@reporte');
    Route::post('entradas/reporte', 'InventarioEntradasController@reporte');

    //KARDEX
    Route::post('inventario/reporte-kardex', 'InventarioReportesController@reporteKardex');
    Route::post('inventario/reporte-salida-tipo', 'InventarioReportesController@reporteSalidaPorTipo');
    Route::post('inventario/reporte-entrada-tipo', 'InventarioReportesController@reporteEntradaPorTipo');

    // Ajustes
    Route::get('ajustes/cargar', 'AdmonAjustesController@obtenerAjustes');

    Route::get('ajustes/cargar-contabilidad', 'AdmonAjustesController@obtenerAjustesContabilidad');

    Route::post('ajustes/guardar', 'AdmonAjustesController@registrar');

    // Rutas Anexos
    Route::post('contabilidad/anexos/obtener-anexos', 'ContabilidadAnexosController@obtenerAnexos');
    Route::get('contabilidad/anexos/obtener-anexos-todos', 'ContabilidadAnexosController@obtenerTodosAnexos');
    Route::post('contabilidad/anexos/obtener-anexos-estado-financiero', 'ContabilidadAnexosController@obtenerAnexosPorEstadoFinanciero');
    Route::post('contabilidad/anexos/obtener-anexo', 'ContabilidadAnexosController@obtenerAnexo');
    Route::post('contabilidad/anexo/registrar', 'ContabilidadAnexosController@registrar');/**/
Route::put('contabilidad/anexo/actualizar', 'ContabilidadAnexosController@actualizar');
Route::put('contabilidad/anexo/desactivar', 'ContabilidadAnexosController@desactivar');
Route::put('contabilidad/anexo/activar', 'ContabilidadAnexosController@activar');
Route::put('contabilidad/anexo/actualizar-orden', 'ContabilidadAnexosController@actualizarOrdenAnexos');

//Rutas Tasas de cambio
Route::post('contabilidad/tasas-cambio/descargar', 'CajaBancoTasasCambiosController@descargarTasasCambio');
Route::post('contabilidad/tasas-cambio/dia', 'CajaBancoTasasCambiosController@obtenerTC');
Route::post('contabilidad/tasas-cambio/dia/paralela', 'CajaBancoTasasCambiosController@obtenerTCParalela');
Route::post('contabilidad/tasas-cambio/obtener-tasas', 'CajaBancoTasasCambiosController@obtenerTasasCambio');
Route::post('contabilidad/tasas-cambio/obtener-tasas-reporte', 'CajaBancoTasasCambiosController@obtenerTasasReporte');
Route::get('contabilidad/tasas-cambio/reporte/{ext}/{mes}/{anio}', 'CajaBancoTasasCambiosController@generarReporte');
Route::put('contabilidad/tasas-cambio/paralelas/actualizar', 'CajaBancoTasasCambiosController@actualizarTCParalelas');

// Rutas Cuentas Contables
Route::post('contabilidad/cuentas-contables/obtener-cuentas-contables', 'ContabilidadCuentasContablesController@obtenerCuentasContables');
Route::get('contabilidad/cuentas-contables/obtener-cuentas-contables-todas', 'ContabilidadCuentasContablesController@obtenerTodasCuentasContables');
Route::post('contabilidad/cuentas-contables/obtener-cuenta-contable', 'ContabilidadCuentasContablesController@obtenerCuentaContable');
    Route::post('contabilidad/cuentas-contables/obtener-cuenta-contable-v', 'ContabilidadCuentasContablesController@obtenerCuentaContableV');
Route::post('contabilidad/cuentas-contables/registrar', 'ContabilidadCuentasContablesController@guardarCuentaContable');/**/
Route::put('contabilidad/cuentas-contables/actualizar', 'ContabilidadCuentasContablesController@actualizarCuentaContable');
Route::put('contabilidad/cuentas-contables/desactivar', 'ContabilidadCuentasContablesController@desactivarCuentaContable');
Route::put('contabilidad/cuentas-contables/activar', 'ContabilidadCuentasContablesController@activarCuentaContable');
Route::post('contabilidad/cuentas-contables/obtener-cuentas-nivel', 'ContabilidadCuentasContablesController@obtenerCuentasContablesNivel');

Route::get('contabilidad/cuentas-contables/buscar', 'ContabilidadCuentasContablesController@buscarCuentasContables');
Route::get('contabilidad/cuentas-contables/buscarf', 'ContabilidadCuentasContablesController@buscarCuentasContablesF');
Route::get('contabilidad/cuentas-contables/reporte/{ext}', 'ContabilidadCuentasContablesController@generarReporte');


// Rutas Tipos de cuenta
Route::post('contabilidad/tipos-cuenta/obtener-tipos-cuenta', 'ContabilidadTiposCuentaController@obtenerTiposCuenta');
Route::get('contabilidad/tipos-cuenta/obtener-tipos-cuenta-todas', 'ContabilidadTiposCuentaController@obtenerTodosTiposCuenta');
Route::post('contabilidad/tipos-cuenta/obtener-tipo-cuenta-contable', 'ContabilidadTiposCuentaController@obtenerTipoCuenta');
Route::put('contabilidad/tipos-cuenta/actualizar', 'ContabilidadTiposCuentaController@actualizar');
Route::get('contabilidad/tipos-cuenta/reporte/{ext}', 'ContabilidadTiposCuentaController@generarReporte');


// Rutas Estados financieros
Route::post('contabilidad/estados-financieros/obtener-estados-financieros', 'ContabilidadEstadosFinancierosController@obtenerEstadosFinacieros');
Route::get('contabilidad/estados-financieros/obtener-estados-financieros-todas', 'ContabilidadEstadosFinancierosController@obtenerTodosEstadosFinacieros');
Route::post('contabilidad/estados-financieros/obtener-estado-financiero-contable', 'ContabilidadEstadosFinancierosController@obtenerEstadoFinaciero');
Route::post('contabilidad/estados-financieros/obtener-estados-financieros-lista', 'ContabilidadEstadosFinancierosController@obtenerListaEstadosFinacieros');

// Rutas Niveles Cuenta
Route::post('contabilidad/niveles-cuenta/obtener-niveles-cuenta', 'ContabilidadNivelesCuentaController@obtenerNivelesCuenta');
Route::get('contabilidad/niveles-cuenta/obtener-niveles-cuenta-todos', 'ContabilidadNivelesCuentaController@obtenerTodosNivelesCuenta');
Route::post('contabilidad/niveles-cuenta/obtener-nivel-cuenta', 'ContabilidadNivelesCuentaController@obtenerNivelCuenta');
Route::put('contabilidad/niveles-cuenta/actualizar', 'ContabilidadNivelesCuentaController@actualizar');

// Monedas
Route::get('monedas/obtener-monedas', 'CajaBancoMonedasController@obtenerMonedas');


// Rutas Bancos
Route::post('contabilidad/bancos/obtener-bancos', 'CajaBancoBancosController@obtenerBancos');
Route::get('contabilidad/bancos/obtener-bancos-todos', 'CajaBancoBancosController@obtenerTodosBancos');
Route::post('contabilidad/bancos/obtener-banco', 'CajaBancoBancosController@obtenerBanco');
Route::post('contabilidad/bancos/registrar', 'CajaBancoBancosController@registrar');
Route::put('contabilidad/bancos/actualizar', 'CajaBancoBancosController@actualizar');
Route::put('contabilidad/bancos/desactivar', 'CajaBancoBancosController@desactivar');
Route::put('contabilidad/bancos/activar', 'CajaBancoBancosController@activar');
Route::get('contabilidad/bancos/reporte/{ext}', 'CajaBancoBancosController@generarReporte');


// Rutas Cuentas Bancarias
Route::post('contabilidad/cuentas-bancarias/obtener-cuentas-bancarias', 'ContabilidadCuentasBancariasController@obtenerCuentasBancarias');
Route::get('contabilidad/cuentas-bancarias/obtener-cuentas-bancarias-todas', 'ContabilidadCuentasBancariasController@obtenerTodasCuentasBancarias');
Route::post('contabilidad/cuentas-bancarias/obtener-cuenta-bancaria', 'ContabilidadCuentasBancariasController@obtenerCuentaBancaria');
Route::post('contabilidad/cuentas-bancarias/registrar', 'ContabilidadCuentasBancariasController@registrar');
Route::put('contabilidad/cuentas-bancarias/actualizar', 'ContabilidadCuentasBancariasController@actualizar');
Route::put('contabilidad/cuentas-bancarias/desactivar', 'ContabilidadCuentasBancariasController@desactivar');
Route::put('contabilidad/cuentas-bancarias/activar', 'ContabilidadCuentasBancariasController@activar');
Route::get('contabilidad/cuentas-bancarias/reporte/{ext}', 'ContabilidadCuentasBancariasController@generarReporte');


// Rutas Cuentas Bancarias
Route::post('contabilidad/periodos/obtener', 'ContabilidadPeriodoFiscalController@obtener');
Route::get('contabilidad/periodos/obtener-todos', 'ContabilidadPeriodoFiscalController@obtenerTodos');
Route::post('contabilidad/periodos/obtener-periodo', 'ContabilidadPeriodoFiscalController@obtenerPeriodo');
Route::post('contabilidad/periodos/registrar', 'ContabilidadPeriodoFiscalController@registrar');
Route::put('contabilidad/periodos/actualizar', 'ContabilidadPeriodoFiscalController@actualizar');
Route::put('contabilidad/periodos/cerrar-mes', 'ContabilidadPeriodoFiscalController@cerrarMes');



// Rutas Cuentas Bancarias
Route::post('contabilidad/documentos-contables/obtener', 'ContabilidadDocumentosContablesController@obtener');
Route::get('contabilidad/documentos-contables/obtener-todos', 'ContabilidadDocumentosContablesController@obtenerTodos');
Route::post('contabilidad/documentos-contables/obtener-documento', 'ContabilidadDocumentosContablesController@obtenerPeriodo');
Route::post('contabilidad/documentos-contables/registrar', 'ContabilidadDocumentosContablesController@registrar');
Route::put('contabilidad/documentos-contables/actualizar', 'ContabilidadDocumentosContablesController@actualizar');
Route::post('contabilidad/documentos-contables/obtener-codigo-documento', 'ContabilidadDocumentosContablesController@obtenerCodigoDocumento');
Route::post('contabilidad/documentos-contables/nuevo', 'ContabilidadDocumentosContablesController@nuevo');
Route::post('contabilidad/documentos-contables/anular', 'ContabilidadDocumentosContablesController@anular');


// Rutas Tipos de documentos
Route::post('contabilidad/tipos-documentos/obtener', 'ContabilidadTiposDocumentosController@obtener');
Route::get('contabilidad/tipos-documentos/obtener-todos', 'ContabilidadTiposDocumentosController@obtenerTodos');
Route::post('contabilidad/tipos-documentos/obtener-tipo-documento', 'ContabilidadTiposDocumentosController@obtenerTipoDocumento');
Route::post('contabilidad/tipos-documentos/registrar', 'ContabilidadTiposDocumentosController@registrar');
Route::put('contabilidad/tipos-documentos/actualizar', 'ContabilidadTiposDocumentosController@actualizar');
Route::put('contabilidad/tipos-documentos/desactivar', 'ContabilidadTiposDocumentosController@desactivar');
Route::put('contabilidad/tipos-documentos/activar', 'ContabilidadTiposDocumentosController@activar');
Route::get('contabilidad/tipos-documentos/reporte/{ext}', 'ContabilidadTiposDocumentosController@generarReporte');

//Rutas centro costo/ingreso

Route::post('contabilidad/centro-costo/obtener','ContabilidadCentroCostoIngresoController@obtener');
Route::get('contabilidad/centro-costo/obtener-todos','ContabilidadCentroCostoIngresoController@obtenerTodos');
Route::post('contabilidad/centro-costo/obtener-centro','ContabilidadCentroCostoIngresoController@obtenerCentro');
Route::post('contabilidad/centro-costo/registrar','ContabilidadCentroCostoIngresoController@registrar');
Route::put('contabilidad/centro-costo/actualizar','ContabilidadCentroCostoIngresoController@actualizar');
Route::put('contabilidad/centro-costo/desactivar','ContabilidadCentroCostoIngresoController@desactivar');
Route::put('contabilidad/centro-costo/activar','ContabilidadCentroCostoIngresoController@activar');
Route::get('contabilidad/centro-costo/reporte/{ext}','ContabilidadCentroCostoIngresoController@generarReporte');

// Rutas Direcciones
    Route::post('direcciones/obtener', 'PublicDireccionesController@obtenerDirecciones');
    Route::get('direcciones/obtener-todos', 'PublicDireccionesController@obtenerTodasDirecciones');
    Route::post('direcciones/obtener-direccion', 'PublicDireccionesController@obtenerDireccion');
    Route::post('direcciones/registrar', 'PublicDireccionesController@registrar');
    Route::put('direcciones/actualizar', 'PublicDireccionesController@actualizar');
    Route::put('direcciones/desactivar', 'PublicDireccionesController@desactivar');
    Route::put('direcciones/activar', 'PublicDireccionesController@activar');
    Route::get('direcciones/reporte/{ext}', 'PublicDireccionesController@generarReporte');
    Route::post('direcciones/nuevo', 'PublicDireccionesController@nuevo');


    // Rutas Cargos
    Route::post('rrhh/cargos/obtener', 'RRHHCargosController@obtenerCargos');
    Route::get('rrhh/cargos/obtener-todos', 'RRHHCargosController@obtenerTodosCargos');
    Route::post('rrhh/cargos/obtener-cargo', 'RRHHCargosController@obtenerCargo');
    Route::post('rrhh/cargos/registrar', 'RRHHCargosController@registrar');
    Route::put('rrhh/cargos/actualizar', 'RRHHCargosController@actualizar');
    Route::put('rrhh/cargos/desactivar', 'RRHHCargosController@desactivar');
    Route::put('rrhh/cargos/activar', 'RRHHCargosController@activar');
    Route::get('rrhh/cargos/reporte/{ext}', 'RRHHCargosController@generarReporte');


    // Rutas Cargos
    Route::post('areas/obtener', 'PublicAreasController@obtener');
    Route::get('areas/obtener-todas', 'PublicAreasController@obtenerTodasAreas');
    Route::post('areas/obtener-area', 'PublicAreasController@obtenerArea');
    Route::post('areas/registrar', 'PublicAreasController@registrar');
    Route::put('areas/actualizar', 'PublicAreasController@actualizar');
    Route::put('areas/desactivar', 'PublicAreasController@desactivar');
    Route::put('areas/activar', 'PublicAreasController@activar');
    Route::get('areas/buscar', 'PublicAreasController@buscar');


    // Rutas Paises
    Route::post('paises/obtener', 'PublicPaisesController@obtener');
    Route::get('paises/obtener-todos', 'PublicPaisesController@obtenerTodosPaises');
    Route::post('paises/obtener-pais', 'PublicPaisesController@obtenerPais');
    Route::post('paises/registrar', 'PublicPaisesController@registrar');
    Route::put('paises/actualizar', 'PublicPaisesController@actualizar');
    Route::put('paises/desactivar', 'PublicPaisesController@desactivar');
    Route::put('paises/activar', 'PublicPaisesController@activar');


    // Rutas Departamentos
    Route::post('departamentos/obtener', 'PublicDepartamentosController@obtener');
    Route::get('departamentos/obtener-todos', 'PublicDepartamentosController@obtenerTodosDepartamentos');
    Route::post('departamentos/obtener-departamento', 'PublicDepartamentosController@obtenerDepartamento');
    Route::post('departamentos/registrar', 'PublicDepartamentosController@registrar');
    Route::put('departamentos/actualizar', 'PublicDepartamentosController@actualizar');


    // Rutas Municipios
    Route::post('municipios/obtener', 'PublicMunicipiosController@obtener');
    Route::get('municipios/obtener-todos', 'PublicMunicipiosController@obtenerTodosMunicipios');
    Route::post('municipios/obtener-municipio', 'PublicMunicipiosController@obtenerMunicipio');
    Route::post('municipios/registrar', 'PublicMunicipiosController@registrar');
    Route::put('municipios/actualizar', 'PublicMunicipiosController@actualizar');


    // Rutas Solicitudes pago
    Route::post('bancos/cheques/obtener', 'CajaBancoSolicitudesPagoController@obtener');
    Route::post('bancos/cheques/obtener-aprobacion', 'CajaBancoSolicitudesPagoController@obtenerSolicitudesAprobacion');
    Route::post('bancos/cheques/obtener-solicitud', 'CajaBancoSolicitudesPagoController@obtenerSolicitud');
    Route::post('bancos/cheques/registrar', 'CajaBancoSolicitudesPagoController@registrar');
    Route::put('bancos/cheques/revisar', 'CajaBancoSolicitudesPagoController@revisar');
    Route::put('bancos/cheques/contabilizar', 'CajaBancoSolicitudesPagoController@contabilizarSolicitudPago');
    Route::put('bancos/cheques/aprobar', 'CajaBancoSolicitudesPagoController@aprobar');
    Route::put('bancos/cheques/cambiar-estado', 'CajaBancoSolicitudesPagoController@cambiarEstadoSolicitudPago');
    Route::put('bancos/solicitud-pago/cambiar-estado', 'CajaBancoSolicitudesPagoController@cambiarEstado');
    Route::put('bancos/cheques/entregar', 'CajaBancoSolicitudesPagoController@entregarComprobante');
    Route::post('bancos/solicitud-pago/reporte', 'CajaBancoSolicitudesPagoController@generarReporte');
    Route::post('bancos/solicitud-pago/reporte-cheque', 'CajaBancoSolicitudesPagoController@generarReporteCheque');


    Route::post('bancos/cheques/nueva-contabilizacion', 'CajaBancoSolicitudesPagoController@nuevaContabilizacion');

    Route::put('bancos/cheques/emitir', 'CajaBancoSolicitudesPagoController@emitir');
    Route::put('bancos/cheques/anular', 'CajaBancoSolicitudesPagoController@anular');
    Route::post('bancos/cheques/nueva', 'CajaBancoSolicitudesPagoController@nueva');

    // Rutas Minutas Deposito
    Route::post('bancos/minutas/obtener', 'CajaBancoMinutasDepositoController@obtener');
    Route::post('bancos/minutas/obtener-minuta', 'CajaBancoMinutasDepositoController@obtenerMinuta');
    Route::post('bancos/minutas/registrar', 'CajaBancoMinutasDepositoController@registrar');
    Route::put('bancos/minutas/actualizar', 'CajaBancoMinutasDepositoController@actualizar');
    Route::put('bancos/minutas/anular', 'CajaBancoMinutasDepositoController@anular');


    // Rutas Baterias Marcas
    Route::post('inventario/baterias/marcas/obtener', 'InventarioBateriasMarcasController@obtener');
    Route::get('inventario/baterias/marcas/obtener-todos', 'InventarioBateriasMarcasController@obtenerTodasMarcas');
    Route::post('inventario/baterias/marcas/obtener-marca', 'InventarioBateriasMarcasController@obtenerMarca');
    Route::post('inventario/baterias/marcas/registrar', 'InventarioBateriasMarcasController@registrar');
    Route::put('inventario/baterias/marcas/actualizar', 'InventarioBateriasMarcasController@actualizar');
    Route::get('inventario/baterias/marcas/reporte/{ext}', 'InventarioBateriasMarcasController@generarReporte');


    // Rutas Baterias SubMarcas
    Route::post('inventario/baterias/submarcas/obtener', 'InventarioBateriasSubMarcasController@obtener');
    Route::get('inventario/baterias/submarcas/obtener-todos', 'InventarioBateriasSubMarcasController@obtenerTodosSubMarcas');
    Route::post('inventario/baterias/submarcas/obtener-submarca', 'InventarioBateriasSubMarcasController@obtenerSubMarca');
    Route::post('inventario/baterias/submarcas/registrar', 'InventarioBateriasSubMarcasController@registrar');
    Route::put('inventario/baterias/submarcas/actualizar', 'InventarioBateriasSubMarcasController@actualizar');
    Route::get('inventario/baterias/submarcas/reporte/{ext}', 'InventarioBateriasSubMarcasController@generarReporte');



    // Rutas Baterias Aplicaciones
    Route::post('inventario/baterias/aplicaciones/obtener', 'InventarioBateriasAplicacionesController@obtener');
    Route::get('inventario/baterias/aplicaciones/obtener-todos', 'InventarioBateriasAplicacionesController@obtenerTodasAplicaciones');
    Route::post('inventario/baterias/aplicaciones/obtener-aplicacion', 'InventarioBateriasAplicacionesController@obtenerAplicacion');
    Route::post('inventario/baterias/aplicaciones/registrar', 'InventarioBateriasAplicacionesController@registrar');
    Route::put('inventario/baterias/aplicaciones/actualizar', 'InventarioBateriasAplicacionesController@actualizar');
    Route::get('inventario/baterias/aplicaciones/reporte/{ext}', 'InventarioBateriasAplicacionesController@generarReporte');


    // Rutas Baterias SubAplicaciones
    Route::post('inventario/baterias/subaplicaciones/obtener', 'InventarioBateriasSubAplicacionesController@obtener');
    Route::get('inventario/baterias/subaplicaciones/obtener-todos', 'InventarioBateriasSubAplicacionesController@obtenerTodosSubAplicaciones');
    Route::post('inventario/baterias/subaplicaciones/obtener-subaplicacion', 'InventarioBateriasSubAplicacionesController@obtenerSubAplicacion');
    Route::post('inventario/baterias/subaplicaciones/registrar', 'InventarioBateriasSubAplicacionesController@registrar');
    Route::put('inventario/baterias/subaplicaciones/actualizar', 'InventarioBateriasSubAplicacionesController@actualizar');
    Route::get('inventario/baterias/subaplicaciones/reporte/{ext}', 'InventarioBateriasSubAplicacionesController@generarReporte');


    // Rutas Baterias Lineas
    Route::post('inventario/baterias/lineas/obtener', 'InventarioBateriasLineasController@obtener');
    Route::get('inventario/baterias/lineas/obtener-todas', 'InventarioBateriasLineasController@obtenerTodas');
    Route::post('inventario/baterias/lineas/obtener-linea', 'InventarioBateriasLineasController@obtenerLinea');
    Route::post('inventario/baterias/lineas/registrar', 'InventarioBateriasLineasController@registrar');
    Route::put('inventario/baterias/lineas/actualizar', 'InventarioBateriasLineasController@actualizar');
    Route::get('inventario/baterias/lineas/reporte/{ext}', 'InventarioBateriasLineasController@generarReporte');

    // Rutas Baterias Materiales
    Route::post('inventario/baterias/materiales/obtener', 'InventarioBateriasMaterialesController@obtener');
    Route::get('inventario/baterias/materiales/obtener-todos', 'InventarioBateriasMaterialesController@obtenerTodos');
    Route::post('inventario/baterias/materiales/obtener-material', 'InventarioBateriasMaterialesController@obtenerMaterial');
    Route::post('inventario/baterias/materiales/registrar', 'InventarioBateriasMaterialesController@registrar');
    Route::put('inventario/baterias/materiales/actualizar', 'InventarioBateriasMaterialesController@actualizar');
    Route::get('inventario/baterias/materiales/reporte/{ext}', 'InventarioBateriasMaterialesController@generarReporte');

    // Rutas Usuarios
    Route::post('usuarios/obtener', 'AdmonUsuarioController@obtener');
    Route::post('usuarios/obtener-usuario', 'AdmonUsuarioController@obtenerUsuario');
    Route::post('usuarios/obtener-user-login', 'AdmonUsuarioController@obtenerUserLogin');
    Route::get('usuarios/obtener-activos', 'AdmonUsuarioController@obtenerActivos');
    Route::post('usuarios/registrar', 'AdmonUsuarioController@registrar');
    Route::put('usuarios/cambiar-contrasena', 'AdmonUsuarioController@cambiarContrasena');

    // Rutas Importaciones
    Route::post('inventario/importaciones/obtener', 'InventarioImportacionesController@obtener');
    Route::post('inventario/importaciones/nueva', 'InventarioImportacionesController@nueva');
    Route::post('inventario/importaciones/obtener-importacion', 'InventarioImportacionesController@obtenerImportacion');
    Route::post('inventario/importaciones/registrar', 'InventarioImportacionesController@registrar');
    Route::put('inventario/importaciones/actualizar', 'InventarioImportacionesController@actualizar');
    Route::get('inventario/importaciones/reporte/{ext}/{id_importacion}', 'InventarioImportacionesController@generarReporte');

    Route::post('inventario/importaciones/obtener-configuracion', 'InventarioImportacionConfiguracionController@obtener');
    Route::put('inventario/importaciones/actualizar-configuracion', 'InventarioImportacionConfiguracionController@actualizar');

    //Configuración comprobante contable planilla
    Route::post('modulo-nomina/planilla/obtener-configuracion', 'RRHHConfiguracionPlanillaController@obtener');
    Route::put('modulo-nomina/planilla/actualizar-configuracion', 'RRHHConfiguracionPlanillaController@actualizar');

    //Rutas movimientos
    Route::post('inventario/movimientos/obtener-por-producto', 'InventarioMovimientoProductosController@obtenerMovimientosPorProducto');
    Route::post('inventario/movimientos/obtener-lista-codigos', 'InventarioMovimientoProductosController@obtenerListadoBaterias');
    Route::post('inventario/movimientos/reporte', 'InventarioMovimientoProductosController@reporteMovimiento');
    Route::post('inventario/movimientos/reporte-contable', 'InventarioMovimientoProductosController@reporteMovimientoContable');
    //Route::get('inventario/movimientos-contable/reporte/{id_producto}', 'InventarioMovimientoProductosController@reporteMovimientoContable');

    // Rutas Grupos Activos
    Route::post('activosfijos/grupos/obtener', 'ActivoFijoGruposController@obtener');
    Route::get('activosfijos/grupos/obtener-todos', 'ActivoFijoGruposController@obtenerTodos');
    Route::post('activosfijos/grupos/obtener-grupo', 'ActivoFijoGruposController@obtenerGrupo');
    Route::post('activosfijos/grupos/registrar', 'ActivoFijoGruposController@registrar');
    Route::put('activosfijos/grupos/actualizar', 'ActivoFijoGruposController@actualizar');
    Route::put('activosfijos/grupos/desactivar', 'ActivoFijoGruposController@desactivar');
    Route::put('activosfijos/grupos/activar', 'ActivoFijoGruposController@activar');

    // Rutas Propietario Activos
    Route::post('activosfijos/propietarios/obtener', 'ActivoFijoPropietariosController@obtener');
    Route::get('activosfijos/propietarios/obtener-todos', 'ActivoFijoPropietariosController@obtenerTodos');
    Route::post('activosfijos/propietarios/obtener-propietario', 'ActivoFijoPropietariosController@obtenerPropietario');
    Route::post('activosfijos/propietarios/registrar', 'ActivoFijoPropietariosController@registrar');
    Route::put('activosfijos/propietarios/actualizar', 'ActivoFijoPropietariosController@actualizar');
    Route::put('activosfijos/propietarios/desactivar', 'ActivoFijoPropietariosController@desactivar');
    Route::put('activosfijos/propietarios/activar', 'ActivoFijoPropietariosController@activar');

    // Rutas Tipos Activos
    Route::post('activosfijos/tipos/obtener', 'ActivoFijoTiposController@obtener');
    Route::get('activosfijos/tipos/obtener-todos', 'ActivoFijoTiposController@obtenerTodos');
    Route::post('activosfijos/tipos/obtener-tipo', 'ActivoFijoTiposController@obtenerTipo');
    Route::post('activosfijos/tipos/registrar', 'ActivoFijoTiposController@registrar');
    Route::put('activosfijos/tipos/actualizar', 'ActivoFijoTiposController@actualizar');
    Route::put('activosfijos/tipos/desactivar', 'ActivoFijoTiposController@desactivar');
    Route::put('activosfijos/tipos/activar', 'ActivoFijoTiposController@activar');

    // Rutas Colores Activos
    Route::post('activosfijos/colores/obtener', 'ActivoFijoColoresController@obtener');
    Route::get('activosfijos/colores/obtener-todos', 'ActivoFijoColoresController@obtenerTodos');
    Route::post('activosfijos/colores/obtener-color', 'ActivoFijoColoresController@obtenerColor');
    Route::post('activosfijos/colores/registrar', 'ActivoFijoColoresController@registrar');
    Route::put('activosfijos/colores/actualizar', 'ActivoFijoColoresController@actualizar');
    Route::put('activosfijos/colores/desactivar', 'ActivoFijoColoresController@desactivar');
    Route::put('activosfijos/colores/activar', 'ActivoFijoColoresController@activar');


    // Rutas Activos Fijos
    Route::post('activosfijos/activos/obtener', 'ActivoFijoActivosController@obtener');
    Route::post('activosfijos/activos/obtener-solicitud-autorizacion', 'ActivoFijoActivosController@obtenerSolicitudAutorizacion');
    Route::post('activosfijos/activos/obtener-por-trabajador', 'ActivoFijoActivosController@obtenerActivosTrabajador');
    Route::post('activosfijos/activos/obtener-por-sucursal', 'ActivoFijoActivosController@obtenerActivosSucursal');
    Route::post('activosfijos/activos/nuevo-cierre', 'ActivoFijoActivosController@nuevoCierre');
    Route::post('activosfijos/activos/nuevo', 'ActivoFijoActivosController@nuevo');
    Route::post('activosfijos/activos/obtener-activo-fijo', 'ActivoFijoActivosController@obtenerActivoFijo');
    Route::post('activosfijos/activos/registrar', 'ActivoFijoActivosController@registrar');
    Route::put('activosfijos/activos/actualizar', 'ActivoFijoActivosController@actualizar');
    Route::put('activosfijos/activos/reasignar', 'ActivoFijoActivosController@reasignar');
    Route::put('activosfijos/activos/revaluar', 'ActivoFijoActivosController@revaluar');
    Route::put('activosfijos/activos/reasignar-lote', 'ActivoFijoActivosController@reasignarLote');
    Route::put('activosfijos/activos/generar-cierre', 'ActivoFijoActivosController@generarCierre');
    Route::put('activosfijos/activos/desactivar', 'ActivoFijoActivosController@desactivar');
    Route::put('activosfijos/activos/activar', 'ActivoFijoActivosController@activar');
    Route::post('activosfijos/obtener-ubicacion-activo', 'ActivoFijoActivosController@obtenerUbicacionActivo');
    Route::put('activosfijos/activos/cambiar-estado', 'ActivoFijoActivosController@cambiarEstadoSolicitudBaja');

    Route::post('activosfijos/activos/obtener-cierres', 'ActivoFijoActivosController@obtenerCierres');

    Route::get('activosfijos/activos/reporte/{ext}', 'ActivoFijoActivosController@generarReporte');

    Route::post('activosfijos/activos/obtener-traslados', 'ActivoFijoTrasladosController@obtenerTraslados');

    Route::post('activosfijos/activos/obtener-cuentas-activos', 'ActivoFijoCuentasController@obtenerCuentasActivos');
    Route::put('activosfijos/activos/actualizar-cuentas-activos', 'ActivoFijoCuentasController@actualizar');

    Route::post('activosfijos/altas-activos/reporte', 'ActivoFijoActivosController@generarReporteAltaActivo');
    Route::post('activosfijos/bajas-activos/reporte', 'ActivoFijoActivosController@generarReporteBajaActivo');
    Route::post('activosfijos/activos-depreciandose/reporte', 'ActivoFijoActivosController@generarReporteActivoDepreciandose');
    Route::post('activosfijos/activos-depreciado-uso/reporte', 'ActivoFijoActivosController@generarReporteActivoDepreciadoEnUso');
    Route::post('activosfijos/traslados-activo/reporte', 'ActivoFijoActivosController@generarReporteTrasladosActivo');
    Route::post('activosfijos/bienes-depreciados/reporte', 'ActivoFijoActivosController@generarReporteBienesDepreciados');
    Route::post('activosfijos/valor-adquisicion/reporte', 'ActivoFijoActivosController@generarReporteAdquisicionActivos');
    Route::post('activosfijos/historia-compra/reporte', 'ActivoFijoActivosController@generarReporteAdquisicionActivos');
    Route::post('activosfijos/vida-util/reporte', 'ActivoFijoActivosController@generarReporteVidaUtil');
    Route::post('activosfijos/general-activos-tipo/reporte', 'ActivoFijoActivosController@generarReporteGeneralActivo');
    Route::post('activosfijos/acta-entrega/reporte', 'ActivoFijoActivosController@generarActaEntrega');

    Route::post(' activosfijos/reporte/sticker', 'ActivoFijoActivosController@generarSticker');



    Route::post('contabilidad/estados-financieros/balanza', 'ContabilidadReportesFinancierosController@obtenerBalanzaComprobacion');
    Route::post('contabilidad/estados-financieros/balanza/dependencias', 'ContabilidadReportesFinancierosController@obtenerDependenciasBalanzaComprobacion');
    Route::post('contabilidad/estados-financieros/balanza-nueva', 'ContabilidadReportesFinancierosController@obtenerBalanzaComprobacionRta91');
    Route::post('contabilidad/estados-financieros/balanza-comprobacion/reporte', 'ContabilidadReportesFinancierosController@obtenerReporteBalanzaComprobacion');



    Route::post('contabilidad/estados-financieros/balance-general', 'ContabilidadReportesFinancierosController@obtenerBalanceGeneral');
    Route::post('contabilidad/estados-financieros/estado-resultados', 'ContabilidadReportesFinancierosController@obtenerEstadoResultados');
    Route::post('contabilidad/estados-financieros/balance-general/reporte', 'ContabilidadReportesFinancierosController@obtenerBalanceGeneralReporte');
    Route::post('contabilidad/estados-financieros/estado-resultado/reporte', 'ContabilidadReportesFinancierosController@obtenerEstadoResultadoReporte');
    Route::post('contabilidad/estados-financieros/libro-diario/reporte', 'ContabilidadReportesFinancierosController@obtenerLibroDiarioReporte');
    Route::post('contabilidad/estados-financieros/libro-mayor/reporte', 'ContabilidadReportesFinancierosController@obtenerLibroMayorReporte');
    Route::post('contabilidad/estados-financieros/cambio-patrimonio/reporte', 'ContabilidadReportesFinancierosController@reporteCambioPatrimonio');
    Route::post('contabilidad/estados-financieros/balanza-anual/reporte', 'ContabilidadReportesFinancierosController@reporteBalanzaComprobacionAnual');

    Route::post('contabilidad/estados-financieros/notas/reporte', 'ContabilidadReportesFinancierosController@reporteNotasBGER');
    Route::post('contabilidad/estados-financieros/anexo-flujo/reporte', 'ContabilidadReportesFinancierosController@reporteAnexoFlujo');
    Route::post('contabilidad/estados-financieros/flujo-efectivo/reporte', 'ContabilidadReportesFinancierosController@reporteFlujoEfectivo');
    Route::post('contabilidad/estados-financieros/centro-costos/reporte', 'ContabilidadReportesFinancierosController@reporteMovimientosCentroCosto');
    Route::post('contabilidad/estados-financieros/razones-financieras-comparativo/reporte', 'ContabilidadReportesFinancierosController@reporteRFC');



    // Rutas Impuestos
    Route::post('impuestos/obtener', 'PublicImpuestosController@obtener');
    Route::get('impuestos/obtener-impuestos-todos', 'PublicImpuestosController@obtenerTodos');
    Route::post('impuestos/obtener-impuesto', 'PublicImpuestosController@obtenerImpuesto');
    Route::post('impuestos/registrar', 'PublicImpuestosController@registrar');
    Route::put('impuestos/actualizar', 'PublicImpuestosController@actualizar');
    Route::put('impuestos/desactivar', 'PublicImpuestosController@desactivar');
    Route::put('impuestos/activar', 'PublicImpuestosController@activar');
    Route::get('impuestos/reporte/{ext}', 'PublicImpuestosController@generarReporte');

    // Rutas Rubros
    Route::post('rubros/obtener', 'PublicRubrosController@obtener');
    Route::get('rubros/obtener-rubros-todos-ps', 'PublicRubrosController@obtenerTodosPS');
    Route::post('rubros/obtener-rubro', 'PublicRubrosController@obtenerRubro');
    Route::post('rubros/registrar', 'PublicRubrosController@registrar');
    Route::put('rubros/actualizar', 'PublicRubrosController@actualizar');
    Route::put('rubros/desactivar', 'PublicRubrosController@desactivar');
    Route::put('rubros/activar', 'PublicRubrosController@activar');

    // Rutas Tipos pago
    Route::post('tipos-pagos/obtener', 'PublicTiposPagosController@obtener');
    Route::get('tipos-pagos/obtener-tipos-pagos-todos', 'PublicTiposPagosController@obtenerTodos');
    Route::post('tipos-pagos/obtener-tipo-pago', 'PublicTiposPagosController@obtenerTipoPago');
    Route::post('tipos-pagos/registrar', 'PublicTiposPagosController@registrar');
    Route::put('tipos-pagos/actualizar', 'PublicTiposPagosController@actualizar');
    Route::put('tipos-pagos/desactivar', 'PublicTiposPagosController@desactivar');
    Route::put('tipos-pagos/activar', 'PublicTiposPagosController@activar');

    // Rutas tipos bodega
    Route::post('inventario/tipo-bodega/obtener', 'InventarioTipoBodegaController@obtener');
    Route::get('inventario/tipo-bodega/obtener-todos', 'InventarioTipoBodegaController@obtenerTodos');
    Route::post('inventario/tipo-bodega/obtener-tipo-bodega', 'InventarioTipoBodegaController@obtenerTipoBodega');
    Route::post('inventario/tipo-bodega/registrar', 'InventarioTipoBodegaController@registrar');
    Route::put('inventario/tipo-bodega/actualizar', 'InventarioTipoBodegaController@actualizar');
    Route::put('inventario/tipo-bodega/desactivar', 'InventarioTipoBodegaController@desactivar');
    Route::put('inventario/tipo-bodega/activar', 'InventarioTipoBodegaController@activar');
    Route::get('inventario/tipo-bodega/reporte/{ext}', 'InventarioTipoBodegaController@generarReporte');


    // Rutas tipos proveedores
    Route::post('inventario/tipo-proveedor/obtener', 'InventarioTipoProveedorController@obtener');
    Route::get('inventario/tipo-proveedor/obtener-todos', 'InventarioTipoProveedorController@obtenerTodos');
    Route::post('inventario/tipo-proveedor/obtener-tipo-proveedor', 'InventarioTipoProveedorController@obtenerTipoProveedor');
    Route::post('inventario/tipo-proveedor/registrar', 'InventarioTipoProveedorController@registrar');
    Route::put('inventario/tipo-proveedor/actualizar', 'InventarioTipoProveedorController@actualizar');
    Route::put('inventario/tipo-proveedor/desactivar', 'InventarioTipoProveedorController@desactivar');
    Route::put('inventario/tipo-proveedor/activar', 'InventarioTipoProveedorController@activar');
    Route::get('inventario/tipo-proveedor/reporte/{ext}', 'InventarioTipoProveedorController@generarReporte');

    // Rutas Zonas
    Route::post('zonas/obtener', 'PublicZonasController@obtener');
    Route::get('zonas/nuevo', 'PublicZonasController@nuevo');
    Route::post('zonas/obtener-zona', 'PublicZonasController@obtenerZona');
    Route::post('zonas/registrar', 'PublicZonasController@registrar');
    Route::get('zonas/obtener-todas', 'PublicZonasController@obtenerZonas');
    Route::put('zonas/actualizar', 'PublicZonasController@actualizar');
    Route::put('zonas/desactivar', 'PublicZonasController@desactivar');
    Route::put('zonas/activar', 'PublicZonasController@activar');
    Route::get('zonas/reporte/{ext}', 'PublicZonasController@generarReporte');

    // Rutas contratos internos
    Route::post('rrhh/contrato-interno/obtener', 'RRHHContratoGeneralInternoController@obtener');
    Route::get('rrhh/contrato-interno/obtener-todas', 'RRHHContratoGeneralInternoController@obtenerTodas');
    Route::post('rrhh/contrato-interno/obtener-contrato', 'RRHHContratoGeneralInternoController@obtenerContratoGeneral');
    Route::post('rrhh/contrato-interno/registrar', 'RRHHContratoGeneralInternoController@registrar');
    Route::put('rrhh/contrato-interno/actualizar', 'RRHHContratoGeneralInternoController@actualizar');
    Route::put('rrhh/contrato-interno/desactivar', 'RRHHContratoGeneralInternoController@desactivar');
    Route::put('rrhh/contrato-interno/activar', 'RRHHContratoGeneralInternoController@activar');
    Route::get('rrhh/contrato-interno/reporte/{ext}', 'RRHHContratoGeneralInternoController@generarReporte');

    // Rutas contratos merecedor
    Route::post('rrhh/contrato-merecedor/obtener', 'RRHHContratoGeneralMerecedorController@obtener');
    Route::get('rrhh/contrato-merecedor/obtener-todas', 'RRHHContratoGeneralMerecedorController@obtenerTodas');
    Route::post('rrhh/contrato-merecedor/obtener-contrato', 'RRHHContratoGeneralMerecedorController@obtenerContratoGeneral');
    Route::post('rrhh/contrato-merecedor/registrar', 'RRHHContratoGeneralMerecedorController@registrar');
    Route::put('rrhh/contrato-merecedor/actualizar', 'RRHHContratoGeneralMerecedorController@actualizar');
    Route::put('rrhh/contrato-merecedor/desactivar', 'RRHHContratoGeneralMerecedorController@desactivar');
    Route::put('rrhh/contrato-merecedor/activar', 'RRHHContratoGeneralMerecedorController@activar');
    Route::get('rrhh/contrato-merecedor/reporte/{ext}', 'RRHHContratoGeneralMerecedorController@generarReporte');

    // Rutas contratos solicitud
    Route::post('rrhh/contrato-solicitud/obtener', 'RRHHContratoSolicitudController@obtener');
    Route::get('rrhh/contrato-solicitud/obtener-todas', 'RRHHContratoSolicitudController@obtenerTodas');
    Route::post('rrhh/contrato-solicitud/obtener-contrato', 'RRHHContratoSolicitudController@obtenerContratoSolicitud');
    Route::post('rrhh/contrato-solicitud/registrar', 'RRHHContratoSolicitudController@registrar');
    Route::put('rrhh/contrato-solicitud/actualizar', 'RRHHContratoSolicitudController@actualizar');
    Route::put('rrhh/contrato-solicitud/desactivar', 'RRHHContratoSolicitudController@desactivar');
    Route::put('rrhh/contrato-solicitud/activar', 'RRHHContratoSolicitudController@activar');
    Route::get('rrhh/contrato-solicitud/reporte/{id_contrato_solicitud}', 'RRHHContratoSolicitudController@generarReporte');

    // Rutas ingreso deduccion
    Route::post('rrhh/ingreso_deduccion/obtener-ingresos', 'RRHHIngresosDeduccionesController@obtenerIngresos');
    Route::post('rrhh/ingreso_deduccion/obtener-deducciones', 'RRHHIngresosDeduccionesController@obtenerDeducciones');
    Route::post('rrhh/ingreso_deduccion/obtener-ingresos-deducciones', 'RRHHIngresosDeduccionesController@obtenerIngresosDeducciones');
    Route::get('rrhh/ingreso_deduccion/obtener-todas', 'RRHHIngresosDeduccionesController@obtenerTodas');
    Route::post('rrhh/ingreso_deduccion/obtener-ingreso-deduccion', 'RRHHIngresosDeduccionesController@obtenerIngresoDeduccion');
    Route::post('rrhh/ingreso_deduccion/registrar', 'RRHHIngresosDeduccionesController@registrar');
    Route::post('rrhh/ingreso_deduccion/nueva', 'RRHHIngresosDeduccionesController@nueva');
    Route::put('rrhh/ingreso_deduccion/actualizar', 'RRHHIngresosDeduccionesController@actualizar');
    Route::put('rrhh/ingreso_deduccion/desactivar', 'RRHHIngresosDeduccionesController@desactivar');
    Route::put('rrhh/ingreso_deduccion/activar', 'RRHHIngresosDeduccionesController@activar');
    Route::get('rrhh/ingreso_deduccion/reporte/{ext}', 'RRHHIngresosDeduccionesController@generarReporte');

    // Rutas planillas controles
    Route::post('rrhh/planillas-controles/obtener', 'RRHHPlanillasControlesController@obtener');
    Route::get('rrhh/planillas-controles/obtener-todas', 'RRHHPlanillasControlesController@obtenerTodas');
    Route::post('rrhh/planillas-controles/obtener-planilla-control', 'RRHHPlanillasControlesController@obtenerPlanillaControl');
    Route::post('rrhh/planillas-controles/registrar', 'RRHHPlanillasControlesController@registrar');
    Route::post('rrhh/planillas-controles/nueva', 'RRHHPlanillasControlesController@nueva');
    Route::put('rrhh/planillas-controles/actualizar', 'RRHHPlanillasControlesController@actualizar');
    Route::put('rrhh/planillas-controles/desactivar', 'RRHHPlanillasControlesController@desactivar');
    Route::put('rrhh/planillas-controles/activar', 'RRHHPlanillasControlesController@activar');
    Route::get('rrhh/planillas-controles/reporte/{ext}', 'RRHHPlanillasControlesController@generarReporte');

    // Rutas configuracion ir
    Route::post('rrhh/configuracion-ir/obtener', 'RRHHConfiguracionIRController@obtener');
    Route::get('rrhh/configuracion-ir/obtener-todas', 'RRHHConfiguracionIRController@obtenerTodas');
    Route::post('rrhh/configuracion-ir/obtener-configuracion', 'RRHHConfiguracionIRController@obtenerConfiguracionIR');
    Route::post('rrhh/configuracion-ir/registrar', 'RRHHConfiguracionIRController@registrar');
    Route::post('rrhh/configuracion-ir/nueva', 'RRHHConfiguracionIRController@nueva');
    Route::put('rrhh/configuracion-ir/actualizar', 'RRHHConfiguracionIRController@actualizar');
    Route::put('rrhh/configuracion-ir/desactivar', 'RRHHConfiguracionIRController@desactivar');
    Route::put('rrhh/configuracion-ir/activar', 'RRHHConfiguracionIRController@activar');
    Route::get('rrhh/configuracion-ir/reporte/{ext}', 'RRHHConfiguracionIRController@generarReporte');

    // Rutas nivel academico
    Route::post('nivel-academico/obtener', 'RRHHNivelesAcademicosController@obtener');
    Route::get('nivel-academico/obtener-todas', 'RRHHNivelesAcademicosController@obtenerTodas');
    Route::post('nivel-academico/obtener-nivel', 'RRHHNivelesAcademicosController@obtenerNivelAcademico');
    Route::post('nivel-academico/registrar', 'RRHHNivelesAcademicosController@registrar');
    Route::put('nivel-academico/actualizar', 'RRHHNivelesAcademicosController@actualizar');
    Route::put('nivel-academico/desactivar', 'RRHHNivelesAcademicosController@desactivar');
    Route::put('nivel-academico/activar', 'RRHHNivelesAcademicosController@activar');

    // Rutas nivel estudio
    Route::post('nivel-estudio/obtener', 'RRHHNivelesEstudiosController@obtener');
    Route::get('nivel-estudio/obtener-todas', 'RRHHNivelesEstudiosController@obtenerTodas');
    Route::post('nivel-estudio/obtener-nivel', 'RRHHNivelesEstudiosController@obtenerNivelEstudio');
    Route::post('nivel-estudio/registrar', 'RRHHNivelesEstudiosController@registrar');
    Route::put('nivel-estudio/actualizar', 'RRHHNivelesEstudiosController@actualizar');
    Route::put('nivel-estudio/desactivar', 'RRHHNivelesEstudiosController@desactivar');
    Route::put('nivel-estudio/activar', 'RRHHNivelesEstudiosController@activar');

    // Rutas feriados
    Route::post('feriados/obtener', 'RRHHFeriadosController@obtener');
    Route::get('feriados/obtener-todas', 'RRHHFeriadosController@obtenerTodas');
    Route::post('feriados/obtener-feriado', 'RRHHFeriadosController@obtenerFeriado');
    Route::post('feriados/registrar', 'RRHHFeriadosController@registrar');
    Route::put('feriados/actualizar', 'RRHHFeriadosController@actualizar');
    Route::put('feriados/desactivar', 'RRHHFeriadosController@desactivar');
    Route::put('feriados/activar', 'RRHHFeriadosController@activar');

    // Rutas datos medicos
    Route::post('datos-medicos/obtener', 'RRHHDatosMedicosController@obtener');
    Route::get('datos-medicos/obtener-todas', 'RRHHDatosMedicosController@obtenerTodas');
    Route::post('datos-medicos/obtener-datos', 'RRHHDatosMedicosController@otenerDatoMedico');

    // Rutas parentesco
    Route::post('parentesco/obtener', 'RRHHParentescoController@obtener');
    Route::get('parentesco/obtener-todas', 'RRHHParentescoController@obtenerTodas');
    Route::post('parentesco/obtener-datos', 'RRHHParentescoController@obtenerParentesco');

    // Rutas saldo vacacion
    Route::post('rrhh/saldo-vacacion/obtener', 'RRHHSaldosVacacionesController@obtener');
    Route::get('rrhh/saldo-vacacion/obtener-todas', 'RRHHSaldosVacacionesController@obtenerTodas');
    Route::post('rrhh/saldo-vacacion/obtener-saldos', 'RRHHSaldosVacacionesController@obtenerSaldo');

    // Rutas tipo producto
    Route::post('tipo-producto/obtener', 'InventarioTiposProductosController@obtener');
    Route::get('tipo-producto/obtener-todas', 'InventarioTiposProductosController@obtenerTodas');
    Route::post('tipo-producto/obtener-tipo', 'InventarioTiposProductosController@obtenerTipoProducto');

    // Rutas acto juridico
    Route::post('tipo-acto-juridico/obtener', 'RRHHTipoActoJuridicoController@obtener');
    Route::get('tipo-acto-juridico/obtener-todas', 'RRHHTipoActoJuridicoController@obtenerTodas');
    Route::post('tipo-acto-juridico/obtener-tipo', 'RRHHTipoActoJuridicoController@obtenerActoJuridico');

    // Rutas tipo contrato
    Route::post('contrato-tipos/obtener', 'RRHHContratoTiposController@obtener');
    Route::get('contrato-tipos/obtener-todas', 'RRHHContratoTiposController@obtenerTodas');
    Route::post('contrato-tipos/obtener-datos', 'RRHHContratoTiposController@obtenerContratoTipo');

    // Rutas planilla control
    Route::post('control-planilla/obtener', 'RRHHPlanillaControlController@obtener');
    Route::get('control-planilla/obtener-todas', 'RRHHPlanillaControlController@obtenerTodas');
    Route::post('control-planilla/obtener-datos', 'RRHHPlanillaControlController@obtenerControlPlanilla');

    //Generar planilla
    Route::post('modulo-nomina/planillas/obtener', 'RRHHGenerarPlanillasController@obtenerPlanilla');
    Route::put('modulo-nomina/planillas/obtener-planilla-procesar', 'RRHHGenerarPlanillasController@obtenerPlanillaProcesar');
    Route::post('modulo-nomina/planillas/nuevo', 'RRHHGenerarPlanillasController@nuevo');
    Route::post('modulo-nomina/planillas/registrar', 'RRHHGenerarPlanillasController@registrar');
    Route::post('modulo-nomina/planillas/procesar', 'RRHHGenerarPlanillasController@procesarPlanilla');

    // Rutas Clientes
    Route::post('ventas/clientes/obtener', 'VentaClientesController@obtener');
    Route::post('ventas/clientes/obtener-solicitudes-consignacion', 'VentaClientesController@obtenerSolicitudConsignacion');
    Route::put('ventas/clientes/cambiarEstadoConsignacion', 'VentaClientesController@cambiarEstadoConsignacion');

    Route::get('ventas/clientes/obtener-todos', 'VentaClientesController@obtenerTodos');
    Route::post('ventas/clientes/obtener-cliente', 'VentaClientesController@obtenerCliente');
    Route::post('ventas/clientes/registrar', 'VentaClientesController@registrar');
    Route::post('ventas/clientes/registrar-basico', 'VentaClientesController@registrarBasico');
    Route::post('ventas/clientes/nuevo', 'VentaClientesController@nuevo');
    Route::put('ventas/clientes/actualizar', 'VentaClientesController@actualizar');
    Route::put('ventas/clientes/desactivar', 'VentaClientesController@desactivar');
    Route::put('ventas/clientes/activar', 'VentaClientesController@activar');
    Route::get('ventas/clientes/buscar', 'VentaClientesController@buscar');
    Route::get('ventas/clientes/{ext}', 'VentaClientesController@generarReporte');

    Route::post('ventas/arqueo/obtener-datos', 'VentaArqueoCajaController@obtenerDatosArqueo');
    Route::post('ventas/arqueo/obtener', 'VentaArqueoCajaController@obtener');
    Route::post('ventas/arqueo/nuevo', 'VentaArqueoCajaController@nuevo');
    Route::post('ventas/arqueo/registrar', 'VentaArqueoCajaController@registrar');
    Route::post('ventas/arqueo/anular', 'VentaArqueoCajaController@anular');
    Route::post('ventas/arqueo/reporte', 'VentaArqueoCajaController@generarReporteArqueo');


    // Rutas tipos proveedores
    Route::post('ventas/tipo-cliente/obtener', 'VentaTipoClienteController@obtener');
    Route::get('ventas/tipo-cliente/obtener-todos', 'VentaTipoClienteController@obtenerTodos');
    Route::post('ventas/tipo-cliente/obtener-tipo-cliente', 'VentaTipoClienteController@obtenerTipoCliente');
    Route::post('ventas/tipo-cliente/registrar', 'VentaTipoClienteController@registrar');
    Route::put('ventas/tipo-cliente/actualizar', 'VentaTipoClienteController@actualizar');
    Route::put('ventas/tipo-cliente/desactivar', 'VentaTipoClienteController@desactivar');
    Route::put('ventas/tipo-cliente/activar', 'VentaTipoClienteController@activar');

    // Lista de precios de bateria
    Route::post('ventas/lista-precio-bateria/obtener', 'VentaPrecioListaBateriaController@obtener');
    Route::get('ventas/lista-precio-bateria/obtener-todas', 'VentaPrecioListaBateriaController@obtenerTodas');
    Route::post('ventas/lista-precio-bateria/obtener-lista', 'VentaPrecioListaBateriaController@obtenerLista');
    Route::post('ventas/lista-precio-bateria/registrar', 'VentaPrecioListaBateriaController@registrar');
    Route::post('ventas/lista-precio-bateria/nueva', 'VentaPrecioListaBateriaController@nueva');
    Route::put('ventas/lista-precio-bateria/actualizar', 'VentaPrecioListaBateriaController@actualizar');
    Route::put('ventas/lista-precio-bateria/desactivar', 'VentaPrecioListaBateriaController@desactivar');
    Route::put('ventas/lista-precio-bateria/activar', 'VentaPrecioListaBateriaController@activar');
    Route::get('ventas/lista-precio-bateria/reporte/{id_precio_lista_catalogo}', 'VentaPrecioListaBateriaController@generarReporte');

    // Lista de solicitud vacaciones
    Route::post('rrhh/solicitud-vacaciones/obtener', 'RRHHSolicitudVacacionesController@obtener');
    Route::get('rrhh/solicitud-vacaciones/obtener-todas', 'RRHHSolicitudVacacionesController@obtenerTodas');
    Route::post('rrhh/solicitud-vacaciones/obtener-solicitud', 'RRHHSolicitudVacacionesController@obtenerSolicitud');
    Route::post('rrhh/solicitud-vacaciones/registrar', 'RRHHSolicitudVacacionesController@registrar');
    Route::post('rrhh/solicitud-vacaciones/nuevo', 'RRHHSolicitudVacacionesController@nuevo');
    Route::put('rrhh/solicitud-vacaciones/actualizar', 'RRHHSolicitudVacacionesController@actualizar');
    Route::put('rrhh/solicitud-vacaciones/desactivar', 'RRHHSolicitudVacacionesController@desactivar');
    Route::put('rrhh/solicitud-vacaciones/activar', 'RRHHSolicitudVacacionesController@activar');
    Route::get('rrhh/solicitud-vacaciones/reporte/{id_trabajador}', 'RRHHSolicitudVacacionesController@generarReporte');
    Route::put('rrhh/solicitud-vacaciones/cambiarEstadoSolicitud', 'RRHHSolicitudVacacionesController@cambiarEstadoSolicitud');

    // Lista de asignacion ingresos y deducciones
    Route::post('rrhh/asignacion-ingreso-deduccion/obtener', 'RRHHIngresosDeduccionesTrabajadoresController@obtener');
    Route::get('rrhh/asignacion-ingreso-deduccion/obtener-todas', 'RRHHIngresosDeduccionesTrabajadoresController@obtenerTodas');
    Route::post('rrhh/asignacion-ingreso-deduccion/obtener-solicitud', 'RRHHIngresosDeduccionesTrabajadoresController@obtenerIngresoDeduccionTrabajador');
    Route::post('rrhh/asignacion-ingreso-deduccion/registrar', 'RRHHIngresosDeduccionesTrabajadoresController@registrar');
    Route::post('rrhh/asignacion-ingreso-deduccion/nuevo', 'RRHHIngresosDeduccionesTrabajadoresController@nuevo');
    Route::put('rrhh/asignacion-ingreso-deduccion/actualizar', 'RRHHIngresosDeduccionesTrabajadoresController@actualizar');
    Route::put('rrhh/asignacion-ingreso-deduccion/desactivar', 'RRHHIngresosDeduccionesTrabajadoresController@desactivar');
    Route::put('rrhh/asignacion-ingreso-deduccion/activar', 'RRHHIngresosDeduccionesTrabajadoresController@activar');
    Route::get('rrhh/asignacion-ingreso-deduccion/reporte/{id_trabajador}', 'RRHHIngresosDeduccionesTrabajadoresController@generarReporte');
    Route::post('rrhh/asignacion-ingreso-deduccion/obtener-ingreso', 'RRHHIngresosDeduccionesTrabajadoresController@obtenerPlanilla');

    // Rutas de marcadas
    Route::post('rrhh/marcadas/obtener', 'RRHHMarcadasController@obtener');
    Route::get('rrhh/marcadas/obtener-todas', 'RRHHMarcadasController@obtenerTodas');
    Route::post('rrhh/marcadas/obtener-marcada', 'RRHHMarcadasController@obtenerMarcada');
    Route::post('rrhh/marcadas/registrar', 'RRHHMarcadasController@registrar');
    Route::post('rrhh/marcadas/nuevo', 'RRHHMarcadasController@nuevo');
    Route::put('rrhh/marcadas/actualizar', 'RRHHMarcadasController@actualizar');
    Route::put('rrhh/marcadas/desactivar', 'RRHHMarcadasController@desactivar');
    Route::put('rrhh/marcadas/activar', 'RRHHMarcadasController@activar');
    Route::get('rrhh/marcadas/reporte/{id_trabajador}', 'RRHHMarcadasController@generarReporte');
    Route::post('rrhh/marcadas/obtener-ingreso', 'RRHHMarcadasController@obtenerPlanilla');

    //Rutas tipos justificaciones marcadas
    Route::post('rrhh/marcadas-justificaciones/obtener', 'RRHHTiposJustificacionesMarcadasController@obtener');
    Route::get('rrhh/marcadas-justificaciones/obtener-todas', 'RRHHTiposJustificacionesMarcadasController@obtenerTodas');
    Route::post('rrhh/marcadas-justificaciones/obtener-justificacion', 'RRHHTiposJustificacionesMarcadasController@obtenerJustificacion');

    // Rutas reportes inventario
    Route::post('inventario/reportes/inventario-fisico', 'InventarioReportesController@reporteInventarioFisico');
    Route::post('inventario/reportes/inventario-existencia', 'InventarioReportesController@reporteInventarioExistencias');
    Route::post('inventario/reportes/herramienta-existencia', 'InventarioReportesController@reporteHerramientaExistencias');
    Route::post('inventario/reportes/existencia-por-lote', 'InventarioReportesController@reporteExistenciaLote');
    Route::post('inventario/reportes/salida-producto', 'InventarioReportesController@reporteSalidaProducto');
    Route::post('inventario/reportes/salida-traslado', 'InventarioReportesController@reporteSalidaTraslado');
    Route::post('inventario/reportes/articulo', 'InventarioReportesController@reporteGeneralArticulo');
    Route::post('inventario/reportes/articulo-tipo', 'InventarioReportesController@reporteGeneralArticuloPorTipo');
    Route::post('inventario/reportes/servicios', 'InventarioReportesController@reporteGeneralServicios');
    Route::post('inventario/reportes/servicios-tipo', 'InventarioReportesController@reporteGeneralServiciosTipos');
    Route::post('inventario/reportes/existencia-categoria', 'InventarioReportesController@reporteExistenciaPorCategoria');
    Route::get('inventario/select-categorias', 'InventarioReportesController@selectCategoria');

    //reportes caja banco
    Route::post('caja-banco/reportes/retenciones', 'CajaBancoReportesController@reporteRetenciones');
    Route::post('caja-banco/reportes/cheques', 'CajaBancoReportesController@reporteCheques');
    Route::post('caja-banco/reportes/cheques-estado', 'CajaBancoReportesController@reporteChequesEstados');
    Route::post('caja-banco/reportes/pago-beneficiario', 'CajaBancoReportesController@reportePagoBeneficiario');
    Route::post('caja-banco/reportes/cheques-anulados', 'CajaBancoReportesController@reporteChequesAnulados');

    //Reportes nomina
    Route::post('nomina/reportes/personal-sucursal', 'RRHHReportesController@ReportePersonalSucursal');
    Route::post('nomina/reportes/inss', 'RRHHReportesController@reporteINSS');
    Route::post('nomina/reportes/ir', 'RRHHReportesController@reporteIR');
    Route::post('nomina/reportes/control-entrada', 'RRHHReportesController@reporteEntradaSalidaPersonal');
    Route::post('nomina/reportes/constancia_retencion', 'RRHHReportesController@reporteConstanciaRetencion');
    Route::post('nomina/reportes/colilla-pago', 'RRHHReportesController@reporteColillaPago');
    Route::post('nomina/reportes/antiguedad', 'RRHHReportesController@reporteAntiguedad');
    Route::post('nomina/reportes/antiguedad-proyectada', 'RRHHReportesController@reporteAntiguedadProyectada');
    Route::post('nomina/reportes/aguinaldo-proyectada', 'RRHHReportesController@reporteAguinaldo');

    // Rutas Solicitudes Compra
    Route::post('compras/solicitudes/obtener', 'ComprasSolicitudCompraController@obtener');
    Route::get('compras/solicitudes/nueva', 'ComprasSolicitudCompraController@nueva');
    Route::post('compras/solicitudes/obtener-solicitud-compra', 'ComprasSolicitudCompraController@obtenerSolicitud');
    Route::post('compras/solicitudes/registrar', 'ComprasSolicitudCompraController@registrar');
    Route::put('compras/solicitudes/actualizar', 'ComprasSolicitudCompraController@actualizar');
    Route::put('compras/solicitudes/cambiar-estado', 'ComprasSolicitudCompraController@cambiarEstado');
    Route::get('compras/solicitudes/reporte/{id_solicitud_compra}', 'ComprasSolicitudCompraController@reporte');


    // Rutas Ordenes Compra
    Route::post('compras/ordenes/obtener', 'ComprasOrdenCompraController@obtener');
    Route::post('compras/ordenes/nueva', 'ComprasOrdenCompraController@nueva');
   // Route::post('compras/ordenes/nueva-orden-compra-solicitud', 'ComprasOrdenCompraController@nuevaOrdenSolicitud');
    Route::post('compras/ordenes/obtener-orden-compra', 'ComprasOrdenCompraController@obtenerOrdenCompra');
    Route::post('compras/ordenes/registrar', 'ComprasOrdenCompraController@registrar');
    Route::put('compras/ordenes/actualizar', 'ComprasOrdenCompraController@actualizar');
    Route::put('compras/ordenes/cambiar-estado', 'ComprasOrdenCompraController@cambiarEstado');
    Route::get('compras/ordenes/reporte/{id_orden_compra}', 'ComprasOrdenCompraController@reporte');
    Route::get('compras/ordenes/buscar', 'ComprasOrdenCompraController@buscar');


    // Rutas Ordenes Compra SERVICIOS EXTERNOS
    Route::post('compras-ps/ordenes/obtener', 'ComprasOrdenCompraPSController@obtener');
    Route::post('compras-ps/ordenes/nueva', 'ComprasOrdenCompraPSController@nueva');
    // Route::post('compras/ordenes/nueva-orden-compra-solicitud', 'ComprasOrdenCompraController@nuevaOrdenSolicitud');
    Route::post('compras-ps/ordenes/obtener-orden-compra', 'ComprasOrdenCompraPSController@obtenerOrdenCompra');
    Route::post('compras-ps/ordenes/registrar', 'ComprasOrdenCompraPSController@registrar');
    Route::put('compras-ps/ordenes/actualizar', 'ComprasOrdenCompraPSController@actualizar');
    Route::put('compras-ps/ordenes/cambiar-estado', 'ComprasOrdenCompraPSController@cambiarEstado');
    Route::get('compras-ps/ordenes/reporte/{id_orden_servicio}', 'ComprasOrdenCompraPSController@reporte');

    Route::post('compras/facturas-compra/obtener-facturas-proveedor', 'ComprasOrdenCompraController@obtenerFacturasCompraProveedor');

    // Rutas clasificacion
    Route::post('compras/clasificacion-compra/obtener', 'ComprasClasificacionComprasController@obtener');
    Route::get('compras/clasificacion-compra/obtener-clasificacion-todos', 'ComprasClasificacionComprasController@obtenerTodasClasificacion');
    Route::post('compras/clasificacion-compra/obtener-clasificacion', 'ComprasClasificacionComprasController@obtenerClasificacion');
    Route::post('compras/clasificacion-compra/registrar', 'ComprasClasificacionComprasController@registrar');
    Route::put('compras/clasificacion-compra/actualizar', 'ComprasClasificacionComprasController@actualizar');
    Route::put('compras/clasificacion-compra/desactivar', 'ComprasClasificacionComprasController@desactivar');
    Route::put('compras/clasificacion-compra/activar', 'ComprasClasificacionComprasController@activar');
    Route::post('compras/clasificacion-compra/nuevo', 'ComprasClasificacionComprasController@nuevo');
    //Route::get('contabilidad/bancos/reporte/{ext}', 'ComprasClasificacionComprasController@generarReporte');

    // Rutas Requisas
    Route::post('inventario/requisas/obtener', 'InventarioRequisasController@obtener');
    Route::post('inventario/requisas/obtener-requisa', 'InventarioRequisasController@obtenerRequisa');
    Route::post('inventario/requisas/registrar', 'InventarioRequisasController@registrar');
    Route::put('inventario/requisas/autorizar', 'InventarioRequisasController@autorizar');
    Route::put('inventario/requisas/cancelar', 'InventarioRequisasController@cancelarRequisa');
    //Route::post('inventario/requisas/nueva', 'InventarioSalidasController@nueva');

    // Rutas Facturas
    Route::post('inventario/facturas/obtener', 'CajaBancoFacturasController@obtener');
    Route::post('inventario/facturas/obtener-factura', 'CajaBancoFacturasController@obtenerFactura');
    Route::post('inventario/facturas/obtener-consecutivo', 'CajaBancoFacturasController@obtenerConsecutivo');
    Route::post('inventario/facturas/registrar', 'CajaBancoFacturasController@registrar');
    Route::post('inventario/facturas/consignacion/registrar', 'CajaBancoFacturasController@registrarFacturaConsignacion');
    Route::post('inventario/facturas-recuperado/registrar', 'CajaBancoFacturasController@registrarRecuperado');


    Route::post('inventario/facturas/reporte/clientes', 'CajaBancoReportesController@generarReporteVentasClienteDetallado');
    Route::post('inventario/facturas/reporte/sucursales', 'CajaBancoReportesController@generarReporteVentasSucursalDetallado');

    Route::post('inventario/facturas/reporte/comisiones', 'CajaBancoReportesController@generarReporteComisiones');

    Route::post('inventario/facturas/cancelar', 'CajaBancoFacturasController@anular');
    Route::post('inventario/facturas/nueva', 'CajaBancoFacturasController@nueva');
    Route::post('inventario/facturas/obtener-facturas-cliente', 'CajaBancoFacturasController@obtenerFacturasCliente');
    Route::get('inventario/facturas/reporte/{ext}/{id_factura}', 'CajaBancoFacturasController@reporte');

    Route::post('inventario/facturas/obtener-configuracion', 'CajaBancoFacturasConfiguracionController@obtener');
    Route::put('inventario/facturas/actualizar-configuracion', 'CajaBancoFacturasConfiguracionController@actualizar');

    // Rutas Facturas Exportacion
    Route::post('inventario/facturas-exportacion/obtener', 'CajaBancoFacturasExportacionController@obtener');
    Route::post('inventario/facturas-exportacion/obtener-factura', 'CajaBancoFacturasExportacionController@obtenerFactura');
    Route::post('inventario/facturas-exportacion/registrar', 'CajaBancoFacturasExportacionController@registrar');
    Route::put('inventario/facturas-exportacion/cancelar', 'CajaBancoFacturasExportacionController@cancelarFactura');
    Route::post('inventario/facturas-exportacion/nueva', 'CajaBancoFacturasExportacionController@nueva');
    Route::get('inventario/facturas-exportacion/reporte/{ext}/{id_factura}', 'CajaBancoFacturasExportacionController@reporte');


    // Rutas Facturas Ajustes
     Route::post('inventario/facturas-ajustes/nueva', 'CajaBancoFacturasController@nuevaFacturaAjuste');
    Route::post('inventario/facturas-ajustes/registrar', 'CajaBancoFacturasController@registrarFacturaAjuste');

    // Rutas Afectaciones
    Route::post('inventario/facturas/afectaciones/obtener', 'CajaBancoAfectacionesController@obtener');
    Route::post('inventario/facturas/afectaciones/nueva', 'CajaBancoAfectacionesController@nuevo');
    Route::get('inventario/facturas/afectaciones/obtener-todos', 'CajaBancoAfectacionesController@obtenerTodos');
    Route::post('inventario/facturas/afectaciones/obtener-afectacion', 'CajaBancoAfectacionesController@obtenerAfectacion');
    Route::post('inventario/facturas/afectaciones/registrar', 'CajaBancoAfectacionesController@registrar');
    Route::put('inventario/facturas/afectaciones/actualizar', 'CajaBancoAfectacionesController@actualizar');
    Route::put('inventario/facturas/afectaciones/desactivar', 'CajaBancoAfectacionesController@desactivar');
    Route::put('inventario/facturas/afectaciones/activar', 'CajaBancoAfectacionesController@activar');



    // Rutas via pagos
    Route::post('via-pago/obtener', 'PublicViaPagoController@obtener');
    Route::get('via-pago/obtener-todas', 'PublicViaPagoController@obtenerTodas');
    Route::post('via-pago/obtener-via-pago', 'PublicViaPagoController@obtenerViaPago');
    Route::post('via-pago/registrar', 'PublicViaPagoController@registrar');
    Route::put('via-pago/actualizar', 'PublicViaPagoController@actualizar');
    Route::put('via-pago/desactivar', 'PublicViaPagoController@desactivar');
    Route::put('via-pago/activar', 'PublicViaPagoController@activar');
    Route::get('via-pago/reporte/{ext}', 'PublicViaPagoController@generarReporte');

    // Rutas tipos proveedores
    Route::post('inventario/tipo-proveedor/obtener', 'InventarioTipoProveedorController@obtener');
    Route::get('inventario/tipo-proveedor/obtener-todos', 'InventarioTipoProveedorController@obtenerTodos');
    Route::post('inventario/tipo-proveedor/obtener-tipo-proveedor', 'InventarioTipoProveedorController@obtenerTipoProveedor');
    Route::post('inventario/tipo-proveedor/registrar', 'InventarioTipoProveedorController@registrar');
    Route::put('inventario/tipo-proveedor/actualizar', 'InventarioTipoProveedorController@actualizar');
    Route::put('inventario/tipo-proveedor/desactivar', 'InventarioTipoProveedorController@desactivar');
    Route::put('inventario/tipo-proveedor/activar', 'InventarioTipoProveedorController@activar');

    // Rutas Impuestos
    Route::post('impuestos/obtener', 'PublicImpuestosController@obtener');
    Route::get('impuestos/obtener-todos', 'PublicImpuestosController@obtenerTodos');
    Route::post('impuestos/obtener-impuesto', 'PublicImpuestosController@obtenerImpuesto');
    Route::post('impuestos/registrar', 'PublicImpuestosController@registrar');
    Route::put('impuestos/actualizar', 'PublicImpuestosController@actualizar');
    Route::put('impuestos/desactivar', 'PublicImpuestosController@desactivar');
    Route::put('impuestos/activar', 'PublicImpuestosController@activar');

    // Rutas Cuentas Cobrar
    Route::post('cuentas-cobrar/obtener', 'CuentasXCobrarCuentasXCobrarController@obtener');
    Route::post('cuentas-cobrar/obtener-cc', 'CuentasXCobrarCuentasXCobrarController@obtenerCuentasXCobrar');
    Route::post('cuentas-cobrar/obtener-cuentas-cliente', 'CuentasXCobrarCuentasXCobrarController@obtenerCuentasCliente');
    Route::post('cuentas-cobrar/obtener-cuentas-trabajador', 'CuentasXCobrarCuentasXCobrarController@obtenerCuentasTrabajador');

    Route::post('cuentas-cobrar/reportes/antiguedad', 'CuentasXCobrarCuentasXCobrarController@generarReporteAntiguedad');
    Route::post('cuentas-cobrar/reportes/estado-cuenta-detallado', 'CuentasXCobrarCuentasXCobrarController@generarReporteEstadoCuentadetallado');
    Route::post('cuentas-cobrar/reportes/estado-cuenta-consolidado', 'CuentasXCobrarCuentasXCobrarController@generarReporteEstadoCuentaConsolidado');

    Route::post('cuentas-cobrar/reportes/estado-cuenta-detallado-trabajador', 'CuentasXCobrarCuentasXCobrarController@generarReporteEstadoCuentaDetalladoEmpleado');
    Route::post('cuentas-cobrar/reportes/estado-cuenta-consolidado-trabajador', 'CuentasXCobrarCuentasXCobrarController@generarReporteEstadoCuentaConsolidadoEmpleado');

    Route::post('cuentas-cobrar/reportes/estado-cuenta-detallado-occ', 'CuentasXCobrarCuentasXCobrarController@generarReporteEstadoCuentadetalladoOCC');
    Route::post('cuentas-cobrar/reportes/estado-cuenta-consolidado-occ', 'CuentasXCobrarCuentasXCobrarController@generarReporteEstadoCuentaConsolidadoOCC');

    Route::post('cuentas-pagar/reportes/antiguedad', 'CuentasXPagarCuentasXPagarController@generarReporteAntiguedad');
    Route::post('cuentas-pagar/reportes/estado-cuenta-detallado', 'CuentasXPagarCuentasXPagarController@generarReporteEstadoCuentadetallado');
    Route::post('cuentas-pagar/reportes/estado-cuenta-consolidado', 'CuentasXPagarCuentasXPagarController@generarReporteEstadoCuentaConsolidado');

    Route::post('cuentas-cobrar/reportes/recibos', 'CuentasXCobrarCuentasXCobrarController@reporteRecibos');

    Route::post('cuentas-cobrar/cuentasxcobrar/importar', 'CuentasXCobrarCuentasXCobrarController@importar_datos');
    Route::post('cuentas-cobrar/cuentasxcobrar/registrar-importacion', 'CuentasXCobrarCuentasXCobrarController@registrarImportacioncuentasPorCobrar');


    // Rutas Recibos oficiales caja
    Route::post('cuentas-cobrar/roc/obtener', 'CuentasXCobrarRecibosController@obtener');
    Route::post('cuentas-cobrar/roc/obtener-recibo', 'CuentasXCobrarRecibosController@obtenerRecibo');
    Route::post('cuentas-cobrar/roc/registrar', 'CuentasXCobrarRecibosController@registrar');
    Route::post('cuentas-cobrar/roc/empleado/registrar', 'CuentasXCobrarRecibosController@registrarROCTrabajador');
    Route::post('cuentas-cobrar/roc/nuevo', 'CuentasXCobrarRecibosController@nuevo');

    // Rutas Tipos Notas Credito
    Route::post('cuentas-cobrar/tipos-notas-credito/obtener', 'CuentasXCobrarTiposNotaCreditoController@obtener');
    Route::get('cuentas-cobrar/tipos-notas-credito/obtener-todos', 'CuentasXCobrarTiposNotaCreditoController@obtenerTodos');
    Route::post('cuentas-cobrar/tipos-notas-credito/obtener-tipo-nc', 'CuentasXCobrarTiposNotaCreditoController@obtenerTipoNC');
    Route::post('cuentas-cobrar/tipos-notas-credito/registrar', 'CuentasXCobrarTiposNotaCreditoController@registrar');
    Route::put('cuentas-cobrar/tipos-notas-credito/actualizar', 'CuentasXCobrarTiposNotaCreditoController@actualizar');
    Route::put('cuentas-cobrar/tipos-notas-credito/desactivar', 'CuentasXCobrarTiposNotaCreditoController@desactivar');
    Route::put('cuentas-cobrar/tipos-notas-credito/activar', 'CuentasXCobrarTiposNotaCreditoController@activar');
    Route::post('cuentas-cobrar/tipos-notas-credito/nuevo', 'CuentasXCobrarTiposNotaCreditoController@nuevo');

    // Rutas Notas de Credito
    Route::post('cuentas-cobrar/notas-credito/obtener', 'CuentasXCobrarNotaCreditoController@obtener');
    Route::post('cuentas-cobrar/notas-credito/obtener-nota-credito', 'CuentasXCobrarNotaCreditoController@obtenerNotaCredito');
    Route::post('cuentas-cobrar/notas-credito/registrar', 'CuentasXCobrarNotaCreditoController@registrar');
    Route::post('cuentas-cobrar/notas-credito/nueva', 'CuentasXCobrarNotaCreditoController@nueva');
    Route::post('cuentas-cobrar/notas-credito/reporte', 'CuentasXCobrarNotaCreditoController@generarReporte');


    // Rutas Notas de Debito
    Route::post('cuentas-cobrar/notas-debito/obtener', 'CuentasXCobrarNotaDebitoController@obtener');
    Route::post('cuentas-cobrar/notas-debito/obtener-nota-debito', 'CuentasXCobrarNotaDebitoController@obtenerNotaDebito');
    Route::post('cuentas-cobrar/notas-debito/registrar', 'CuentasXCobrarNotaDebitoController@registrar');
    Route::post('cuentas-cobrar/notas-debito/nueva', 'CuentasXCobrarNotaDebitoController@nueva');
    Route::post('cuentas-cobrar/notas-debito/reporte', 'CuentasXCobrarNotaDebitoController@generarReporte');

    // Rutas Cargo y abonos trabajadores
    Route::post('cuentas-cobrar/cargos-abonos/obtener', 'CuentasXCobrarCargoAbonoTrabajadorController@obtener');
    Route::post('cuentas-cobrar/cargos-abonos/obtener-cargo-abono', 'CuentasXCobrarCargoAbonoTrabajadorController@obtenerCargoAbonoTrabajador');
    Route::post('cuentas-cobrar/cargos-abonos/registrar', 'CuentasXCobrarCargoAbonoTrabajadorController@registrar');
    Route::post('cuentas-cobrar/cargos-abonos/nueva', 'CuentasXCobrarCargoAbonoTrabajadorController@nueva');

    // Rutas Tipos Notas Debito
    Route::post('cuentas-cobrar/tipos-notas-debito/obtener', 'CuentasXCobrarTiposNotaDebitoController@obtener');
    Route::get('cuentas-cobrar/tipos-notas-debito/obtener-todos', 'CuentasXCobrarTiposNotaDebitoController@obtenerTodos');
    Route::post('cuentas-cobrar/tipos-notas-debito/obtener-tipo-nd', 'CuentasXCobrarTiposNotaDebitoController@obtenerTipoND');
    Route::post('cuentas-cobrar/tipos-notas-debito/registrar', 'CuentasXCobrarTiposNotaDebitoController@registrar');
    Route::put('cuentas-cobrar/tipos-notas-debito/actualizar', 'CuentasXCobrarTiposNotaDebitoController@actualizar');
    Route::put('cuentas-cobrar/tipos-notas-debito/desactivar', 'CuentasXCobrarTiposNotaDebitoController@desactivar');
    Route::put('cuentas-cobrar/tipos-notas-debito/activar', 'CuentasXCobrarTiposNotaDebitoController@activar');
    Route::post('cuentas-cobrar/tipos-notas-debito/nuevo', 'CuentasXCobrarTiposNotaDebitoController@nuevo');



    // Rutas Tipos Notas Credito Proveedores
    Route::post('cuentas-pagar/tipos-notas-credito/obtener', 'CuentasXPagarTiposNotaCreditoController@obtener');
    Route::get('cuentas-pagar/tipos-notas-credito/obtener-todos', 'CuentasXPagarTiposNotaCreditoController@obtenerTodos');
    Route::post('cuentas-pagar/tipos-notas-credito/obtener-tipo-nc', 'CuentasXPagarTiposNotaCreditoController@obtenerTipoNC');
    Route::post('cuentas-pagar/tipos-notas-credito/registrar', 'CuentasXPagarTiposNotaCreditoController@registrar');
    Route::put('cuentas-pagar/tipos-notas-credito/actualizar', 'CuentasXPagarTiposNotaCreditoController@actualizar');
    Route::put('cuentas-pagar/tipos-notas-credito/desactivar', 'CuentasXPagarTiposNotaCreditoController@desactivar');
    Route::put('cuentas-pagar/tipos-notas-credito/activar', 'CuentasXPagarTiposNotaCreditoController@activar');
    Route::post('cuentas-pagar/tipos-notas-credito/nuevo', 'CuentasXPagarTiposNotaCreditoController@nuevo');


    // Rutas Tipos Notas Debito Proveedores
    Route::post('cuentas-pagar/tipos-notas-debito/obtener', 'CuentasXPagarTiposNotaDebitoController@obtener');
    Route::get('cuentas-pagar/tipos-notas-debito/obtener-todos', 'CuentasXPagarTiposNotaDebitoController@obtenerTodos');
    Route::post('cuentas-pagar/tipos-notas-debito/obtener-tipo-nd', 'CuentasXPagarTiposNotaDebitoController@obtenerTipoND');
    Route::post('cuentas-pagar/tipos-notas-debito/registrar', 'CuentasXPagarTiposNotaDebitoController@registrar');
    Route::put('cuentas-pagar/tipos-notas-debito/actualizar', 'CuentasXPagarTiposNotaDebitoController@actualizar');
    Route::put('cuentas-pagar/tipos-notas-debito/desactivar', 'CuentasXPagarTiposNotaDebitoController@desactivar');
    Route::put('cuentas-pagar/tipos-notas-debito/activar', 'CuentasXPagarTiposNotaDebitoController@activar');
    Route::post('cuentas-pagar/tipos-notas-debito/nuevo', 'CuentasXPagarTiposNotaDebitoController@nuevo');


    // Rutas Notas de Credito Proveedores
    Route::post('cuentas-pagar/notas-credito/obtener', 'CuentasXPagarNotaCreditoController@obtener');
    Route::post('cuentas-pagar/notas-credito/obtener-nota-credito', 'CuentasXPagarNotaCreditoController@obtenerNotaCredito');
    Route::post('cuentas-pagar/notas-credito/registrar', 'CuentasXPagarNotaCreditoController@registrar');
    Route::post('cuentas-pagar/notas-credito/nueva', 'CuentasXPagarNotaCreditoController@nueva');

    // Rutas Notas de Debito Proveedores
    Route::post('cuentas-pagar/notas-debito/obtener', 'CuentasXPagarNotaDebitoController@obtener');
    Route::post('cuentas-pagar/notas-debito/obtener-nota-debito', 'CuentasXPagarNotaDebitoController@obtenerNotaDebito');
    Route::post('cuentas-pagar/notas-debito/registrar', 'CuentasXPagarNotaDebitoController@registrar');
    Route::post('cuentas-pagar/notas-debito/nueva', 'CuentasXPagarNotaDebitoController@nueva');



    Route::get('ventas/vendedores/buscar', 'VentaVendedoresController@buscar');
    Route::post('ventas/vendedores/nuevo', 'VentaVendedoresController@nuevo');
    Route::post('ventas/vendedores/obtener', 'VentaVendedoresController@obtener');
    Route::post('ventas/vendedores/registrar', 'VentaVendedoresController@registrar');
    Route::put('ventas/vendedores/desactivar', 'VentaVendedoresController@desactivar');
    Route::put('ventas/vendedores/activar', 'VentaVendedoresController@activar');

    // Rutas Cuentas Pagar
    Route::post('cuentas-pagar/obtener', 'CuentasXPagarCuentasXPagarController@obtener');
    Route::post('cuentas-pagar/obtener-cp', 'CuentasXPagarCuentasXPagarController@obtenerCuentasXCobrar');
    Route::post('cuentas-pagar/obtener-cuentas-proveedor', 'CuentasXPagarCuentasXPagarController@obtenerCuentasProveedor');

    Route::get('cuentas-pagar/send/email', 'CuentasXPagarCuentasXPagarController@mail');

    //Rutas cajachica-normativas

    Route::post('normativas/obtener', 'CajaChicaNormativaController@obtener');
    Route::get('normativas/obtener-todas', 'CajaChicaNormativaController@obtenerTodas');
    Route::post('normativas/obtener-normativa', 'CajaChicaNormativaController@obtenerNormativa');
    Route::post('normativas/registrar', 'CajaChicaNormativaController@registrar');
    Route::put('normativas/actualizar', 'CajaChicaNormativaController@actualizar');
    Route::put('normativas/desactivar', 'CajaChicaNormativaController@desactivar');
    Route::put('normativas/activar', 'CajaChicaNormativaController@activar');
    Route::get('normativas/reporte/{ext}', 'CajaChicaNormativaController@generarReporte');

    //Rutas cajachica-viaticos

    Route::post('viaticos/obtener', 'CajaChicaViaticoController@obtener');
    Route::get('viaticos/obtener-todas', 'CajaChicaViaticoController@obtenerTodas');
    Route::post('viaticos/obtener-viatico', 'CajaChicaViaticoController@obtenerViatico');
    Route::post('viaticos/registrar', 'CajaChicaViaticoController@registrar');
    Route::put('viaticos/actualizar', 'CajaChicaViaticoController@actualizar');
    Route::put('viaticos/desactivar', 'CajaChicaViaticoController@desactivar');
    Route::post('viaticos/nuevo', 'CajaChicaViaticoController@nuevo');
    Route::put('viaticos/activar', 'CajaChicaViaticoController@activar');
    Route::get('viaticos/reporte/{ext}', 'CajaChicaViaticoController@generarReporte');

    //Rutas cajachica-cajas

    Route::post('cajas/obtener', 'CajaChicaCajaController@obtener');
    Route::get('cajas/obtener-todas', 'CajaChicaCajaController@obtenerTodas');
    Route::post('cajas/obtener-caja', 'CajaChicaCajaController@obtenerCaja');
    Route::post('cajas/registrar', 'CajaChicaCajaController@registrar');
    Route::put('cajas/actualizar', 'CajaChicaCajaController@actualizar');
    Route::put('cajas/desactivar', 'CajaChicaCajaController@desactivar');
    Route::post('cajas/nuevo', 'CajaChicaCajaController@nuevo');
    Route::put('cajas/activar', 'CajaChicaCajaController@activar');
    Route::post('cajas/reporte', 'CajaChicaCajaController@generarReporteCaja');
    Route::post('tesorería/cheques-emitidos/reporte', 'CajaChicaCajaController@generarReporteChequesEmitidos');
    Route::post('tesorería/minutas-depositos/reporte', 'CajaChicaCajaController@generarReporteMinutasDepositos');




    // Rutas solicitud viatico
    Route::post('solicitud-viatico/obtener', 'CajaChicaSolicitudViaticoController@obtener');
    Route::post('solicitud-viatico/obtener-viatico', 'CajaChicaSolicitudViaticoController@obtenerSolicitud');
    Route::post('solicitud-viatico/registrar', 'CajaChicaSolicitudViaticoController@registrar');
    Route::put('solicitud-viatico/actualizar', 'CajaChicaSolicitudViaticoController@actualizar');
    Route::put('solicitud-viatico/desactivar', 'CajaChicaSolicitudViaticoController@desactivar');
    Route::put('solicitud-viatico/activar', 'CajaChicaSolicitudViaticoController@activar');
    Route::get('solicitud-viatico/buscar', 'CajaChicaSolicitudViaticoController@buscar');
    Route::get('solicitud-viatico/reporte/{ext}/{id_solicitud_viatico}', 'CajaChicaSolicitudViaticoController@generarReporte');
    Route::post('solicitud-viatico/nuevo', 'CajaChicaSolicitudViaticoController@nuevo');

    // Rutas comprobante viaticos
    Route::post('modulo-tesoreria/caja-chica-comprobante/obtener', 'CajaChicaComprobanteController@obtenerComprobantes');
    Route::post('modulo-tesoreria/caja-chica-comprobante/obtener-comprobante', 'CajaChicaComprobanteController@obtenerComprobante');
    Route::post('modulo-tesoreria/caja-chica-comprobante/registrar', 'CajaChicaComprobanteController@registrar');
    Route::post('modulo-tesoreria/vales/registrarVale', 'CajaChicaComprobanteController@registrarVale');
    Route::put('modulo-tesoreria/caja-chica-comprobante/actualizar', 'CajaChicaComprobanteController@actualizar');
    Route::put('modulo-tesoreria/vales/actualizarVale', 'CajaChicaComprobanteController@actualizarVale');
    Route::put('modulo-tesoreria/caja-chica-comprobante/desactivar', 'CajaChicaComprobanteController@desactivar');
    Route::put('modulo-tesoreria/caja-chica-comprobante/activar', 'CajaChicaComprobanteController@activar');
    Route::post('modulo-tesoreria/caja-chica-comprobante/nuevo', 'CajaChicaComprobanteController@nuevo');
    Route::post('modulo-tesoreria/caja-chica-comprobante/reporte/vale', 'CajaChicaComprobanteController@generarReporteVales');
    Route::get('modulo-tesoreria/caja-chica-comprobante/reporte/{id_comprobante}', 'CajaChicaComprobanteController@generarReporteComprobante');

    // Ruta solicitud reembolso
    Route::post('modulo-tesoreria/reembolsos/obtener', 'CajaChicaReembolsoController@obtenerReembolsos');
    Route::post('modulo-tesoreria/reembolsos/registrar', 'CajaChicaReembolsoController@registrar');
    Route::post('modulo-tesoreria/reembolsos/obtener-solicitud-reembolso', 'CajaChicaReembolsoController@obtenerSolicitudReembolso');
    Route::post('modulo-tesoreria/reembolsos/obtener-comprobantes', 'CajaChicaReembolsoController@obtenerComp');
    Route::get('modulo-tesoreria/reembolsos/reporte/{id_solicitud_reembolso}', 'CajaChicaReembolsoController@generarReporteReembolso');

    // Ruta ruta constancia retención
    Route::post('modulo-nomina/constancia/registrar', 'RRHHConstanciaRetencionesController@registrar');
    Route::post('modulo-nomina/constancia/obtener-constancia-retencion', 'RRHHConstanciaRetencionesController@obtenerSolicitudConstancia');
    Route::post('modulo-nomina/constancia/obtener-deducciones', 'RRHHConstanciaRetencionesController@obtenerDeducciones');

    // Rutas Inventario Fisico
    Route::post('inventario/conteo-fisico/obtener', 'InventarioFisicoController@obtener');
    Route::get('inventario/conteo-fisico/nuevo', 'InventarioFisicoController@nuevo');
    Route::post('inventario/conteo-fisico/obtener-conteo', 'InventarioFisicoController@obtenerConteo');
    Route::post('inventario/conteo-fisico/registrar', 'InventarioFisicoController@registrar');
    Route::put('inventario/conteo-fisico/actualizar', 'InventarioFisicoController@actualizar');
    Route::get('inventario/conteo-fisico/reporte/{id_inventario_fisico}', 'InventarioFisicoController@reporte');
    Route::get('inventario/conteo-fisico/reporte-comparativo/{id_inventario_fisico}', 'InventarioFisicoController@reporteComparativo');


    // Rutas Inventario Fisico
    Route::post('inventario/conteo-fisico-1/obtener', 'InventarioConteoFisicoController@obtener');
    Route::post('inventario/conteo-fisico-1/nuevo', 'InventarioConteoFisicoController@nuevo');
    Route::post('inventario/conteo-fisico-1/obtener-conteo', 'InventarioConteoFisicoController@obtenerConteo');
    Route::post('inventario/conteo-fisico-1/registrar', 'InventarioConteoFisicoController@registrar');
    Route::put('inventario/conteo-fisico-1/actualizar', 'InventarioConteoFisicoController@actualizar');
    Route::post('inventario/conteo-fisico-1/reporte', 'InventarioConteoFisicoController@generarReporteConteoBaterias');
    Route::get('inventario/conteo-fisico/reporte-comparativo/{id_inventario_fisico}', 'InventarioFisicoController@reporteComparativo');
    Route::post('inventario/conteo-fisico-1/registrar-bateria', 'InventarioConteoFisicoController@registrarBateria');

    // Rutas Proformas
    Route::post('inventario/proformas/obtener', 'CajaBancoProformasController@obtener');
    Route::post('inventario/proformas/obtener-factura', 'CajaBancoProformasController@obtenerProforma');
    Route::post('inventario/proformas/registrar', 'CajaBancoProformasController@registrar');
    Route::get('inventario/proformas/reporte/{ext}/{id_factura}', 'CajaBancoProformasController@reporte');
    Route::post('inventario/proformas/nueva', 'CajaBancoProformasController@nueva');
    Route::get('inventario/proformas/buscar', 'CajaBancoProformasController@buscar');

    Route::post('inventario/proformas-seguimiento/obtener', 'CajaBancoProformaSeguimientoController@obtener');
    Route::post('inventario/proformas-seguimiento/obtener-seguimiento', 'CajaBancoProformaSeguimientoController@obtenerSeguimiento');
    Route::post('inventario/proformas-seguimiento/registrar', 'CajaBancoProformaSeguimientoController@registrar');
    Route::get('inventario/proformas-seguimiento/reporte/{ext}/{id_factura}', 'CajaBancoProformaSeguimientoController@reporte');
    Route::post('inventario/proformas-seguimiento/nueva', 'CajaBancoProformaSeguimientoController@nueva');




    Route::post('inventario/fechas-activacion/reporte', 'InventarioProductosController@generarReporteFechaActivacion');
    Route::post('inventario/estado-baterias/reporte', 'InventarioProductosController@generarReporteEstadoBateria');
    Route::post('inventario/reportes/existencia-producto', 'InventarioProductosController@generarReporteExistenciaProducto');
    Route::post('inventario/reportes/detalles-productos', 'InventarioReportesController@reporteDetallesProductos');
    Route::post('inventario/reportes/consolidado-fecha-activacion', 'InventarioReportesController@reporteConsolidadoActivacion');



    Route::post('contabilidad/cuentas-bancarias/nueva', 'ContabilidadCuentasBancariasController@nueva');


    Route::post('correos/enviar/prueba', 'EmailController@sendTestEmail');

    Route::post('inventario/consignacion/obtener-por-cliente', 'InventarioConsignacionProductosController@obtenerPorCliente');
    Route::post('inventario/consignacion/obtener', 'InventarioConsignacionProductosController@obtenerTodos');
    Route::post('inventario/consignacion/reporte/cliente', 'InventarioConsignacionProductosController@reporteMovimiento');
    Route::post('inventario/consignacion/reporte/general', 'InventarioConsignacionProductosController@reporteGeneralConsignacion');
    Route::post('inventario/consignacion/reporte/historial', 'InventarioConsignacionProductosController@generarReporteHistorialConsignacion');


    Route::post('ventas/comisiones/nuevo', 'VentaComisionesAsignacionesController@nuevo');
    Route::post('ventas/comisiones/registrar', 'VentaComisionesAsignacionesController@registrar');
    Route::post('ventas/comisiones/actualizar', 'VentaComisionesAsignacionesController@actualizar');

    Route::post('ventas/comisiones/obtener', 'VentaComisionesAsignacionesController@obtener');
    Route::post('ventas/comisiones/obtener-comisiones', 'VentaComisionesAsignacionesController@obtenerComisiones');
    Route::post('ventas/comisiones/reporte', 'VentaComisionesAsignacionesController@generarReporteAsignacionComisiones');
    Route::post('ventas/venta-por-departamento/reporte', 'VentaComisionesAsignacionesController@generarReporteVentaPorDepartamento');

    Route::post('ventas/comisiones/obtener-comisiones-gerencia', 'VentaComisionesGerenciasController@obtenerComisiones');
    Route::post('ventas/comisiones/actualizar-comisiones-gerencia', 'VentaComisionesGerenciasController@actualizar');

    Route::post('ventas/lista-catalogo/obtener', 'VentaPrecioListaCatalogoController@obtener');
    Route::get('ventas/lista-catalogo/obtener-todas', 'VentaPrecioListaCatalogoController@obtenerTodas');
    Route::post('ventas/lista-catalogo/obtener-catalogo', 'VentaPrecioListaCatalogoController@obtenerListaCatalogo');
    Route::post('ventas/lista-catalogo/registrar', 'VentaPrecioListaCatalogoController@registrar');
    Route::put('ventas/lista-catalogo/actualizar', 'VentaPrecioListaCatalogoController@actualizar');
    Route::put('ventas/lista-catalogo/desactivar', 'VentaPrecioListaCatalogoController@desactivar');
    Route::post('ventas/lista-catalogo/nuevo', 'VentaPrecioListaCatalogoController@nuevo');
    Route::put('ventas/lista-catalogo/activar', 'VentaPrecioListaCatalogoController@activar');
    Route::post('ventas/lista-catalogo/reporte', 'VentaPrecioListaCatalogoController@generarReporteCaja');

    Route::post('ventas/lista-grupo/obtener', 'VentaPrecioListaGrupoController@obtener');
    Route::get('ventas/lista-grupo/obtener-todas', 'VentaPrecioListaGrupoController@obtenerTodas');
    Route::post('ventas/lista-grupo/obtener-grupo', 'VentaPrecioListaGrupoController@obtenerListaGrupo');
    Route::post('ventas/lista-grupo/registrar', 'VentaPrecioListaGrupoController@registrar');
    Route::put('ventas/lista-grupo/actualizar', 'VentaPrecioListaGrupoController@actualizar');
    Route::put('ventas/lista-grupo/desactivar', 'VentaPrecioListaGrupoController@desactivar');
    Route::post('ventas/lista-grupo/nuevo', 'VentaPrecioListaGrupoController@nuevo');
    Route::put('ventas/lista-grupo/activar', 'VentaPrecioListaGrupoController@activar');
    Route::post('ventas/lista-grupo/reporte', 'VentaPrecioListaGrupoController@generarReporteCaja');

    Route::post('compras/usados/obtener', 'ComprasBateriasUsadasController@obtener');
    Route::post('compras/usados/nueva', 'ComprasBateriasUsadasController@nueva');
    Route::post('compras/usados/registrar', 'ComprasBateriasUsadasController@registrar');
    Route::post('compras/usados/reporte', 'ComprasBateriasUsadasController@generarReporte');
    Route::post('compras/usados/anular', 'ComprasBateriasUsadasController@anular');

    Route::post('compras/usados/reporte-codigos', 'ComprasBateriasUsadasController@generarReporteCodigos');

    Route::post('compras/usados/registrar-garantia', 'ComprasBateriasUsadasController@registrarReciboGarantia');

    Route::post('salidas/nuevasalida-recuperado', 'InventarioSalidasController@nuevaSalidaRecuperados');
    Route::post('salidas/registrar-traslado-recuperado', 'InventarioSalidasController@registrarTrasladoRecuperado');

    Route::post('bancos/conciliaciones/subir', 'CajaBancoConciliacionController@importar');
    Route::post('bancos/conciliaciones/nueva', 'CajaBancoConciliacionController@nueva');
    Route::post('bancos/conciliaciones/estados-cuenta/registrar', 'CajaBancoConciliacionController@registrarEstadosCuentaBancos');
    Route::post('bancos/conciliaciones/estados-cuenta/obtener', 'CajaBancoConciliacionController@obtenerEstadosCuenta');
    Route::post('bancos/conciliaciones/estados-cuenta/anular', 'CajaBancoConciliacionController@anular');
    Route::post('bancos/conciliaciones/estados-cuenta/obtener-estado-cuenta', 'CajaBancoConciliacionController@obtenerEstadoCuenta');
    Route::post('bancos/conciliaciones/registrar', 'CajaBancoConciliacionController@registrarConciliacion');
    Route::post('bancos/conciliaciones/obtener', 'CajaBancoConciliacionController@obtenerConciliaciones');
    Route::post('bancos/conciliaciones/reporte', 'CajaBancoConciliacionController@generarReporteConciliacion');


    Route::post('contabilidad/documentos-contables/reporte-nuevo', 'ContabilidadDocumentosContablesController@generarReporteNuevo');

});

    Route::group(['middleware' => 'jwt.refresh'], function(){
        Route::get('auth/refresh', 'AuthController@refresh');
      });

// Global View Routes
    Route::get('{path}', function() {
        return view('app');
    })->where('path', '.*');

