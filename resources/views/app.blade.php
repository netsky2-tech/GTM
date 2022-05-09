<!DOCTYPE html>
<html lang="es">
    <head>
        <title>{{settings()->get('app_title')}}</title>
        <meta charset="utf-8">
        <meta content="ie=edge" http-equiv="x-ua-compatible">
        <meta content="{{settings()->get('company_name')}}" name="keywords">
        <meta content="{{settings()->get('company_name')}}" name="author">
        <meta content="" name="description">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <link href="{{settings()->getIcon()}}" rel="shortcut icon">
        <link href="{{settings()->getIcon()}}" rel="apple-touch-icon">
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="stylesheet" href="{{url(mix('app/css/assets.css'))}}?v=7"/>
    </head>
    <body>
        <div id="main">
            <router-view></router-view>
        </div>
        <script type="text/javascript" src="{{url(mix('app/js/vendor.js'))}}?v=8"></script>
        <script type="text/javascript" src="{{url(mix('app/js/assets.js'))}}?v=85"></script>
    </body>
</html>
