<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Request;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\SessionController;

Route::get('/', [PagesController::class, 'show'])->name('pages.show');

Route::post('/api/confirm-external-content', [SessionController::class, 'confirmExternalContent']);

if (Request::segment(1) != config('statamic.cp.route')) {
    Route::get('/{locale}/{slug?}', [PagesController::class, 'show'])->name('pages.show');
}
