<?php $page = 'index'; ?>

<!DOCTYPE html>
<html>
<head>
    <meta charset=UTF-8 />
    <title>Sépale</title>
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="author" content="The Hive Industry">
    <link rel="icon" href="favicon/favicon.ico"/>
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="css/style.css" type="text/css" />
    <!--[if lte IE 8]>
        <link rel="stylesheet" href="css/ie8.css" type="text/css" media="screen,projection" />
        <script src="js/script-html5.js"></script>
    <![endif]-->
    <!--[if lte IE 7]>
        <link rel="stylesheet" href="css/ie7.css" type="text/css" media="screen,projection" />
    <![endif]-->
    <!-- Balises OG Facebook
    <meta property="og:site_name" content="Sépale" />
    <meta property="fb:admins" content="ID_FACEBOOK_DU_WEBMASTER" />
    <meta property="fb:page_id" content="ID_PAGE_FACEBOOK" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="http://sepale.fr/img/sepale-facebook.jpg" />
    <meta property="og:url" content="http://www.sepale.fr" />
    <meta property="og:title" content="Sépale - Agence de coaching 360° sur Paris" />
    <meta property="og:description" content="Sépale est une agence proposant des coachs de vie pour les nouveaux riches. Ceci dans le but de les aider dans leur nouvelle vie." />
    -->
</head>

<body>
<?php include ('ie7.php');?>
<div id="wrapper" class="wrapper-ie7">
    <?php include('header.php');?>
    <div id="container">
        <section class="grayBackground clearfix">
            <div class="content">
                <div class="title">
                    <div class="border-title"></div>
                    <h2>à propos de sépale</h2>
                </div>
                <p>Nous développerons pour vous des conseils et programmes sur mesure répondant à vos (nouveaux) besoins.</p>
                <p>Grâce à notre équipe et notre suivi permanent, nous pourrons vous guider pas-à-pas dans votre nouvelle vie.</p>
                <div class="service-sepale">
                    <ul class="clearfix">
                        <li>
                            <p><span class="picto livre"></span></p>
                            <p>Des coachs diplômés dans leurs domaines</p>
                        </li>
                        <li>
                            <p><span class="picto loupe"></span></p>
                            <p>Analyse de votre situation</p>
                        </li>
                        <li>
                            <p><span class="picto agenda"></span></p>
                            <p>Suivi personnalisé <br>et à la carte</p>
                        </li>
                        <li class="margin-right-nul">
                            <p><span class="picto personnes"></span></p>
                            <p>Séance(s) de coaching dans divers domaines</p>
                        </li>
                    </ul>
                    <a href="presentation.php" title="Presentation">
                        <div class="bouton clearfix">
                            <p>> Découvrir l’équipe Sépale</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        <section class="clearfix">
            <div class="content">
                <div class="title">
                    <div class="border-title deuxlignes"></div>
                    <h2 class="deuxlignes">Nos 8 conseils pour devenir un “bon” riche</h2>
                </div>
                <div class="conseils">
                    <figure>
                        <img src="img/yoga.jpg" title="Yoga">
                        <figcaption>Soyez bien dans votre  corps</figcaption>
                    </figure>
                    <figure>
                        <img src="img/placer-argent.jpg" title="Yoga">
                        <figcaption>Savoir placer son argent</figcaption>
                    </figure>
                    <figure>
                        <img src="img/maison.jpg" title="Yoga">
                        <figcaption>Choisissez bien votre maison</figcaption>
                    </figure>
                    <figure class="margin-right-nul">
                        <img src="img/voitures.jpg" title="Yoga">
                        <figcaption>Choisissez bien votre voiture</figcaption>
                    </figure>
                </div>
                <a href="conseils.php" title="Conseils">
                    <div class="bouton clearfix">
                        <p>> Découvrir nos autres conseils</p>
                    </div>
                </a>
            </div>
        </section>

        <?php include ('retourhaut.php');?>
    </div><!-- fermeture div container -->
    <?php include ('footer.php');?>
</div><!--fermeture div wrapper-->

<!-- JavaScript at the bottom for fast page loading -->
<script type="text/javascript" src="js/modernizr-2.5.3.min.js"></script>
<script type="text/javascript" src="js/jquery-1.10.1.min.js"></script>

<!-- Javascript file -->
<script src="js/plugin.js"></script>
<script src="js/script.js"></script>

</body>
</html>
