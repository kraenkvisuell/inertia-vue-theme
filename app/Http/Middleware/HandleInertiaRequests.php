<?php

namespace App\Http\Middleware;

use Inertia\Middleware;
use Illuminate\Http\Request;
use Kraenkvisuell\StatamicHelpers\Facades\Helper;

class HandleInertiaRequests extends Middleware
{
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'nav' => Helper::allNavs(),
            'globals' => Helper::allGlobals()
        ]);
    }
}
