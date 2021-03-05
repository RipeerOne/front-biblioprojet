<?php

if (isset($_POST['ArtistName']) && !empty($_POST['ArtistName'])) {
    $motRecherche = urlencode(cleanString($_POST['ArtistName']));
    $dir = 'ArtistName';
    $match = '';
    foreach (glob($dir . '/*.json') as $fichier) {
        if (basename($fichier, '.json') == $motRecherche) {
            $match = $fichier;
        }
    }
?>