<?php

return [
    'preset_on_upload' => true,
    'preset_disk' =>'presets',
    'presets' => [
        'xs' => ['w' => 200, 'h' => 200, 'q' => 90, 'fit' => 'max'],
        'sm' => ['w' => 400, 'h' => 400, 'q' => 90, 'fit' => 'max'],
        'base' => ['w' => 800, 'h' => 800, 'q' => 90, 'fit' => 'max'],
        'lg' => ['w' => 1200, 'h' => 1200, 'q' => 90, 'fit' => 'max'],
        'xl' => ['w' => 1600, 'h' => 1600, 'q' => 90, 'fit' => 'max'],
    ],
];
