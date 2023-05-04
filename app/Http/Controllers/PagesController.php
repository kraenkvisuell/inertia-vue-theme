<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Str;
use Facades\Statamic\CP\LivePreview;
use Kraenkvisuell\StatamicHelpers\Facades\Helper;

class PagesController extends Controller
{
    public function show($slug = '')
    {

        if (request()->get('live-preview')) {
            $entry = LivePreview::item(request()->statamicToken());
        } elseif (!$slug) {
            $entry = Helper::entry(isHome: true) ?: Helper::entry(slug: 'home');
        } else {
            $entry = Helper::entry(slug: $slug);
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
