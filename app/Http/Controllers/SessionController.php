<?php

namespace App\Http\Controllers;

class SessionController extends Controller
{
    public function confirmExternalContent()
    {
        session()->put('external_content_confirmed', true);
    }
}
