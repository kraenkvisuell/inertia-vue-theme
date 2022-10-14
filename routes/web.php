<?php

use App\Http\Controllers\PagesController;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;

if (! Request::is(config('statamic.cp.route'))) {
    Route::get('/{slug?}', [PagesController::class, 'show'])->name('pages.show');
}
