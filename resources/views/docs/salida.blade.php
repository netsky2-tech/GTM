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
                <strong>Bodega de salida:</strong>
                @if($model->salidaBodega->nombre)
                <br>
                    <pre>{{$model->salidaBodega->nombre}}</pre>
                    @endif
                    <br>
                    <strong>Tipo de salida:</strong>
                @if($model->salidaTipo->tipo_salida)
                <br>
                        <pre>{{$model->salidaTipo->tipo_salida}}</pre>
                @endif
                </td>

                @if($model->id_tipo_salida==1)
                <td class="summary-address">
                <strong>Bodega de entrada:</strong>
               
                <br>
                    <pre>{{$model->salidaBodegaEntrada->nombre}}</pre>
                  
                </td>
                @else
                <td class="summary-address">
                </td>
                @endif
                
                <td class="summary-info">
                    <table class="info">
                        <tbody>
                            <tr>
                                <td>Estado Actual:</td>

                                @if($model->estado==0)
                                <td><strong>Cancelada</strong></td>
                                @endif

                                @if($model->estado==1)
                                <td><strong>Emitida</strong></td>
                                @endif

                                @if($model->estado==2)
                                <td><strong>Completada</strong></td>
                                @endif
                               
                            </tr>
                            <tr>
                                <td>Código:</td>
                                <td>{{$model->codigo_salida}}</td>
                            </tr>
                            <tr>
                                <td>Fecha:</td>
                                <td>{{$model->fecha_salida}}</td>
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

            <tr>
            <td class="summary-address">
                <strong>Descripción:</strong>
                @if($model->descripcion_salida)
                <br>
                    <pre>{{$model->descripcion_salida}}</pre>
                    @endif
                    <br>         
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
                @foreach($model->salidaProductos as $item)
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
