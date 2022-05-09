@extends('docs.master', ['title' => 'Documento '.$identificador, 'options' => $options])
@section('content')
<div class="content">
                  <div class="col col-4">
                   <img src="/public/app/images/logo.png" style="height: auto; width: 150px;">  
                  </div>
                  
      <br>
    <div class="content-title">
        {{$identificador}}
    </div>
    <table class="summary">
        <tbody>
            <tr>
                <td class="summary-address">
                <strong>Nombre:</strong>            
                    <br>
                    <pre>{{$model->entradaProveedor->nombre_proveedor}}</pre>
                    <br>
                    <strong>Detalles Proveedor:</strong>
                    <br>
                    @if($model->entradaProveedor->nombre_proveedor)
                        <strong>Dirección:</strong>
                        <br><pre>{{$model->entradaProveedor->direccion}}</pre>
                        <p>
                            <strong>Contacto Proveedor:</strong>
                            <br>
                            {{$model->entradaProveedor->contacto_proveedor}}
                        </p>
                    @endif
                </td>
                <td class="summary-address">
                <strong>Bodega de entrada:</strong>
                @if($model->entradaBodega->nombre)
                <br>
                    <pre>{{$model->entradaBodega->nombre}}</pre>
                    @endif
                    <br>
                    <strong>Tipo de entrada:</strong>
                @if($model->entradaTipo->tipo_entrada)
                <br>
                        <pre>{{$model->entradaTipo->tipo_entrada}}</pre>
                @endif
                </td>
                <td class="summary-info">
                    <table class="info">
                        <tbody>
                            <tr>
                                <td>Estado Actual:</td>

                                @if($model->estado==0)
                                <td><strong>Cancelada</strong></td>
                                @endif

                                @if($model->estado==1)
                                <td><strong>Borrador</strong></td>
                                @endif

                                @if($model->estado==2)
                                <td><strong>Emitida</strong></td>
                                @endif
                               
                            </tr>
                            <tr>
                                <td>Código:</td>
                                <td>{{$model->codigo_entrada}}</td>
                            </tr>
                            <tr>
                                <td>Fecha:</td>
                                <td>{{$model->fecha_entrada}}</td>
                            </tr>
                            <tr>
                                <td>Moneda:</td>
                                <td>Córdobas</td>
                            </tr>
                            <tr>
                                <td>Total:</td>
                                <td>C$ {{$model->total}}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
        <table class="items">
            <thead>
                <tr>
                    <th width="10%">SKU</th>
                    <th width="35%">Descripción</th>
                    <th width="10%">Unidad medida</th>
                    <th class="ar" width="15%">Precio unitario</th>
                    <th class="ac" width="10%">Cantidad</th>
                    <th class="ar" width="20%">Total</th>
                </tr>
            </thead>
            <tbody>
                @foreach($model->entradasProductos as $item)
                    <tr>
                        <td>{{$item->codigo_producto}}</td>
                        <td>
                            <pre>{{$item->descripcion_producto}}</pre>
                        </td>
                        <td>{{$item->unidad_medida}}</td>
                        <td class="ar">
                            {{$item->precio_unitario}}
                        </td>
                        <td class="ac">{{$item->cantidad}}</td>
                        <td class="ar">
                            {{$item->cantidad * $item->precio_unitario}}
                        </td>
                    </tr>
                @endforeach
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3" class="item-empty"></td>
                    <td colspan="2">Sub Total</td>
                    <td>
                    C$ {{$model->sub_total}}
                    </td>
                </tr>
                <tr>
                    <td colspan="3" class="item-empty"></td>
                    <td colspan="2">
                        <strong>Total:</strong>
                    </td>
                    <td>
                        <strong> C$ {{$model->total}}</strong>
                    </td>
                </tr>
            </tfoot>
    </table>
<table class="terms">
    <tbody>
        <tr>
            <td class="terms-description">
                <div>
                    <strong>Registro de actividades:</strong>
                    <br>
                    @foreach($model->log_registro as $item)
                    <pre>*Fecha {{$item->fecha_log}}</pre>
                    <pre>{{$item->registro}}</pre>
                    <br>
                    @endforeach
                </div>
            </td>
            <td></td>
        </tr>
    </tbody>
</table>
</div>
@endsection
