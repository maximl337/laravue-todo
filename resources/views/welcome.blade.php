<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content={{ csrf_token() }}>
        <title>Laravel</title>
        <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    </head>
    <body>
        <div id="app" class="d-flex justify-content-center align-items-center">
            <todo-app></todo-app>
        </div>

        <!-- Scripts -->
        <script src="{{ secure_asset('js/app.js') }}"></script>
    </body>
</html>
