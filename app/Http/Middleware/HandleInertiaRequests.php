<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Kraenkvisuell\StatamicHelpers\Facades\Helper;

class HandleInertiaRequests extends Middleware
{
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'mainNav' => Helper::nav('main_nav'),
        ]);
    }
}
