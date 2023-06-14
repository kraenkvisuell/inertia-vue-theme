<?php

return [

    'super' => 'Super Admin',
    'super_desc' => 'I Super Admin hanno il completo controllo e accesso al pannello di controllo. Consenti questo ruolo con attenzione.',

    'group_cp' => 'Pannello di controllo',
    'access_cp' => 'Accedi al pannello di controllo',
    'access_cp_desc' => 'Consente l\'accesso al pannello di controllo, ma non garantisce che tutto possa essere fatto una volta all\'interno.',
    'configure_fields' => 'Configura campi',
    'configure_fields_desc' => 'Consente la modifica dei progetti, dei fieldset e dei relativi campi.',
    'configure_addons' => 'Configura componenti aggiuntivi',
    'configure_addons_desc' => 'Consente l\'accesso all\'area dei componenti aggiuntivi per installarli e disinstallarli.',
    'manage_preferences' => 'Gestione delle preferenze',
    'manage_preferences_desc' => 'Possibilità di personalizzare le preferenze globali e specifiche del ruolo.',

    'group_collections' => 'Raccolte',
    'configure_collections' => 'Configura raccolte',
    'configure_collections_desc' => 'Consente l\'accesso a tutti i permessi relativi alla raccolta',
    'view_{collection}_entries' => 'Visualizza le voci di :collection',
    'edit_{collection}_entries' => 'Modifica voci',
    'create_{collection}_entries' => 'Crea nuove voci',
    'delete_{collection}_entries' => 'Elimina voci',
    'publish_{collection}_entries' => 'Gestisci pubblicazione',
    'publish_{collection}_entries_desc' => 'Consente di cambiare da bozza a pubblicato e viceversa',
    'reorder_{collection}_entries' => 'Riordina voci',
    'reorder_{collection}_entries_desc' => 'Abilita l\'ordinamento con il trascinamento',
    'edit_other_authors_{collection}_entries' => 'Modificare le voci di altri autori',
    'publish_other_authors_{collection}_entries' => 'Gestire lo stato di pubblicazione delle voci di altri autori',
    'delete_other_authors_{collection}_entries' => 'Cancellare le voci di altri autori',

    'group_taxonomies' => 'Tassonomie',
    'configure_taxonomies' => 'Configura tassonomie',
    'configure_taxonomies_desc' => 'Consente l\'accesso a tutti i permessi relativi alla tassonomia',
    'view_{taxonomy}_terms' => 'Visualizza i termini di :taxonomy',
    'edit_{taxonomy}_terms' => 'Modifica i termini',
    'create_{taxonomy}_terms' => 'Crea nuovi termini',
    'delete_{taxonomy}_terms' => 'Elimina i termini',
    'publish_{taxonomy}_terms' => 'Gestisci pubblicazione',
    'reorder_{taxonomy}_terms' => 'Riordina i termini',

    'group_navigation' => 'Menu',
    'configure_navs' => 'Configura menu',
    'configure_navs_desc' => 'Consente l\'accesso a tutti i permessi relativi ai menu',
    'view_{nav}_nav' => 'Visualizza il menu di :nav',
    'edit_{nav}_nav' => 'Modifica menu',

    'group_globals' => 'Globali',
    'configure_globals' => 'Configura Globali',
    'configure_globals_desc' => 'Consente l\'accesso a tutti i permessi relativi ai Globali',
    'edit_{global}_globals' => 'Modifica globali di :global',

    'group_assets' => 'Media',
    'configure_asset_containers' => 'Configura contenitori',
    'configure_asset_containers_desc' => 'Consente l\'accesso a tutti i permessi relativi ai media',
    'view_{container}_assets' => 'Visualizza media :container',
    'upload_{container}_assets' => 'Carica nuovi media',
    'edit_{container}_assets' => 'Modifica media',
    'move_{container}_assets' => 'Sposta media',
    'rename_{container}_assets' => 'Rinomina media',
    'delete_{container}_assets' => 'Elimina media',

    'group_forms' => 'Form',
    'configure_forms' => 'Configura form',
    'configure_forms_desc' => 'Consente l\'accesso a tutti i permessi relativi alle form',
    'view_{form}_form_submissions' => 'Visualizza invii di :form',
    'delete_{form}_form_submissions' => 'Elimina invii di :form',

    'group_users' => 'Utenti',
    'view_users' => 'Visualizza gli utenti',
    'edit_users' => 'Modifica utenti',
    'create_users' => 'Crea utenti',
    'delete_users' => 'Elimina utenti',
    'change_passwords' => 'Cambia password',
    'edit_user_groups' => 'Modifica gruppi',
    'edit_roles' => 'Modifica ruoli',
    'assign_user_groups' => 'Assegnare gruppi agli utenti',
    'assign_roles' => 'Assegnare ruoli agli utenti',

    'group_updates' => 'Aggiornamenti',
    'view_updates' => 'Visualizza gli aggiornamenti',
    'group_utilities' => 'Utilità',
    'access_utility' => ':title',
    'access_utility_desc' => 'Consente l\'accesso alle utilità di :title',

    'group_misc' => 'Miscellanea',
    'resolve_duplicate_ids' => 'Risolvere gli ID doppi',
    'resolve_duplicate_ids_desc' => 'Garantisce la possibilità di vedere e risolvere gli ID duplicati.',

    'view_graphql' => 'Visualizza GraphQL',
    'view_graphql_desc' => 'Garantisce la possibilità di accedere al visualizzatore GraphQL',
];
