<?php

use App\Http\Controllers\PagesController;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', [PagesController::class, 'show'])->name('pages.show');

if (Request::segment(1) != config('statamic.cp.route')) {
    Route::get('/{locale}/{slug?}', [PagesController::class, 'show'])->name('pages.show');
}
