<?php

namespace App\Http\Middleware;

use Inertia\Middleware;
use Statamic\Facades\Site;
use Illuminate\Http\Request;
use Kraenkvisuell\StatamicHelpers\Facades\Helper;

class HandleInertiaRequests extends Middleware
{
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'nav' => Helper::allNavs(),
            'globals' => Helper::allGlobals(),
            'locales' => $this->getLocales(),
            'activeLocale' => Site::current()->locale,
            'session' => [
                'externalContentConfirmed' => session('external_content_confirmed'),
            ],
        ]);
    }

    protected function getLocales()
    {
        return Site::all()->map(fn ($site) => $site->locale)->all();
    }
}
