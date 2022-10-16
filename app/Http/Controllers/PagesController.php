<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Inertia\Inertia;
use Kraenkvisuell\StatamicHelpers\Facades\Helper;

class PagesController extends Controller
{
    public function show($slug = 'home')
    {
        $entry = Helper::entry(slug: $slug);

        if (! $entry) {
            return abort(404);
        }

        $browserTitle = $entry->browser_title ?: 'foobar';

        return Inertia::render(
            Str::studly($entry['blueprint']['handle']),
            compact('entry', 'browserTitle'),
        );
    }
}
