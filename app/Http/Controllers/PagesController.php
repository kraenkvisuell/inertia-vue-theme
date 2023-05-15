<?php

namespace App\Http\Controllers;

use Facades\Statamic\CP\LivePreview;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Kraenkvisuell\StatamicHelpers\Facades\Helper;

class PagesController extends Controller
{
    public function show($locale = 'de', $slug = 'home')
    {

        if (request()->get('live-preview')) {
            $entry = LivePreview::item(request()->statamicToken());
        } else {
            $site = $locale == 'de' ? 'default' : $locale;
            $entry = Helper::entry(slug: $slug, site: $site);
        }

        if (! $entry) {
            return abort(404);
        }

        return Inertia::render(
            Str::studly($entry['blueprint']['handle']),
            compact('entry'),
        );
    }
}
