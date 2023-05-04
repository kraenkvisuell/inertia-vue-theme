<!DOCTYPE html>
<html class="h-full bg-light">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

        @vite(['resources/css/app.css', 'resources/js/app.js'])

        @inertiaHead
    </head>

    <body class="min-h-full font-main">
        <div class="">
            @inertia
        </div>

        <div
            id="modals"
            class="fixed top-0 left-0 w-full z-30"
        >
        </div>
    </body>
</html>
