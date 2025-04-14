<?php

class PageModel {
    public function getPage($page) {
        $validPages = ['home', 'about', 'contact'];
        if (in_array($page, $validPages)) {
            return "views/{$page}.php";
        } else {
            return "views/home.php";
        }
    }
}
?>
