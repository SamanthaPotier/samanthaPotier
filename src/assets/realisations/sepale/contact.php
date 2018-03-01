<?php $page = 'contact'; ?>


<?php
// Couleur du texte des champs si erreur saisie utilisateur
$color_font_warn="#FF0000";
// Couleur de fond des champs si erreur saisie utilisateur
$color_form_warn="#FFCC66";
// Ne rien modifier ci-dessous si vous n’êtes pas certain de ce que vous faites !
if(isset($_POST['submit'])){
    $erreur="";
    // Nettoyage des entrées
    while(list($var,$val)=each($_POST)){
    if(!is_array($val)){
        $$var=strip_tags($val);
    }else{
        while(list($arvar,$arval)=each($val)){
                $$var[$arvar]=strip_tags($arval);
            }
        }
    }
    // Formatage des entrées
    $f_1=trim(ucwords(eregi_replace("[^a-zA-Z0-9éèàäö\ -]", "", $f_1)));
    $f_2=strip_tags(trim($f_2));
    $f_3=trim(eregi_replace("[^0-9\ +]", "", $f_3));
    // Verification des champs
    if(strlen($f_1)<2){
        $erreur.="<li><span class='txterror'>Le champ &laquo; Nom &raquo; est vide ou incomplet.</span>";
        $errf_1=1;
    }
    if(strlen($f_2)<2){
        $erreur.="<li><span class='txterror'>Le champ &laquo; Email &raquo; est vide ou incomplet.</span>";
        $errf_2=1;
    }else{
        if(!ereg('^[-!#$%&\'*+\./0-9=?A-Z^_`a-z{|}~]+'.
        '@'.
        '[-!#$%&\'*+\/0-9=?A-Z^_`a-z{|}~]+\.'.
        '[-!#$%&\'*+\./0-9=?A-Z^_`a-z{|}~]+$',
        $f_2)){
            $erreur.="<li><span class='txterror'>La syntaxe de votre adresse e-mail n'est pas correcte.</span>";
            $errf_2=1;
        }
    }
    if(strlen($f_4)<2){
        $erreur.="<li><span class='txterror'>Le champ &laquo; Message &raquo; est vide ou incomplet.</span>";
        $errf_4=1;
    }
    if($erreur==""){
        // Création du message
        $titre="Message de votre site";
        $tete="From:Site@Sepale.fr/construction\n";
        $corps.="Nom : ".$f_1."\n";
        $corps.="Email : ".$f_2."\n";
        $corps.="Téléphone : ".$f_3."\n";
        $corps.="Message : ".$f_4."\n";
        if(mail("samantha.potier@gmail.com", $titre, stripslashes($corps), $tete)){
            $ok_mail="true";
        }else{
            $erreur.="<li><span class='txterror'>Une erreur est survenue lors de l'envoi du message, veuillez refaire une tentative.</span>";
        }
    }
}
?>



<!DOCTYPE html>
<html>
<head>
    <meta charset=UTF-8 />
    <title>Sépale | Contact</title>
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="author" content="The Hive Industry">
    <link rel="icon" href="favicon/favicon.ico"/>
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="css/style.css" type="text/css" />
    <link rel="stylesheet" href="css/fontello.css" type="text/css" />
    <!--[if lte IE 8]>
        <link rel="stylesheet" href="css/ie8.css" type="text/css" media="screen,projection" />
        <script src="js/script-html5.js"></script>
    <![endif]-->
    <!--[if lte IE 7]>
        <link rel="stylesheet" href="css/ie7.css" type="text/css" media="screen,projection" />
    <![endif]-->
    <!-- Balises OG Facebook
    <meta name="og:site_name" property="og:site_name" content="Sépale" />
    <meta name="fb:admins" property="fb:admins" content="ID_FACEBOOK_DU_WEBMASTER" />
    <meta name="fb:page_id" property="fb:page_id" content="ID_PAGE_FACEBOOK" />
    <meta name="og:type" property="og:type" content="website" />
    <meta name="og:image" property="og:image" content="http://sepale.fr/img/sepale-facebook.jpg" />
    <meta name="og:url" property="og:url" content="http://www.sepale.fr" />
    <meta name="og:title" property="og:title" content="Sépale - Agence de coaching 360° sur Paris" />
    <meta name="og:description" property="og:description" content="Sépale est une agence proposant des coachs de vie pour les nouveaux riches. Ceci dans le but de les aider dans leur nouvelle vie." />
    -->
</head>

<body>
<?php include ('ie7.php');?>
<div id="wrapper" class="wrapper-ie7">
    <?php include('header.php');?>
    <div id="container">
        <section class="clearfix">
            <div class="content">
                <div class="title">
                    <div class="border-title"></div>
                    <h2>Contactez-nous</h2>
                </div>
                <section class="col-contact">
                    <img src="img/fontaine.jpg" title="fontaine">
                    <ul>
                        <li><span class="picto contact-enveloppe"></span><span class="contact-infos">contact@sepale.fr</span></li>
                        <li><span class="picto contact-telephone"></span><span class="contact-infos">(+33) 01 50 59 00 00</span></li>
                        <li><span class="picto contact-adresse"></span><span class="contact-infos">5 rue du Louvre - 75002 Paris, FR</span></li>
                    </ul>
                </section>
                <section class="col-contact">
                    <? if($ok_mail=="true"){ ?>
                        <p>Le message ci-dessous nous a bien été transmis, et nous vous en remercions.</p>
                        <p>&nbsp;</p>
                        <p><?echo nl2br(stripslashes($corps));?></p>
                        <p>&nbsp;</p>
                        <p>Nous allons y donner suite dans les meilleurs délais.<br>A bientôt.</p>
                    <? }else{ ?>
                    <form action='<? echo $PHP_SELF ?>' method='post' name='Form'>
                            <? if($erreur){ ?>
                                <p><b>&nbsp;ERREUR, votre message n'a pas été transmis</b></p>
                                <ul><?echo$erreur?></ul>
                            <?}?>

                            <p>Nom <span class="red">*</span><p>
                            <p><input type='text' style='<?if($errf_1==1){print("; background-color: ".$color_form_warn."; color: ".$color_font_warn);}?>;' name='f_1' value='<?echo stripslashes($f_1);?>' size='24' border='0' placeholder="Votre nom"></p>

                            <p>Email <span class="red">*</span></p>
                            <p><input type='text' style='<?if($errf_2==1){print("; background-color: ".$color_form_warn."; color: ".$color_font_warn);}?>;' name='f_2' value='<?echo stripslashes($f_2);?>' size='24' border='0' placeholder="Votre email"></p>

                            <p>Téléphone</p>
                            <p><input type='text' style='<?if($errf_3==1){print("; background-color: ".$color_form_warn."; color: ".$color_font_warn);}?>;' name='f_3' value='<?echo stripslashes($f_3);?>' size='24' border='0' placeholder="Votre telephone"></p>

                            <p>Message <span class="red">*</span></p>
                            <p><textarea style='<?if($errf_4==1){print("; background-color: ".$color_form_warn."; color: ".$color_font_warn);}?>;' name='f_4' rows='6' cols='40' placeholder="Votre message"><?echo$f_4?></textarea></p>

                            <p class="champs-obligatoires">Les champs marqué d'un <span class="red">*</span> sont obligatoires</p>
                            <div class="bouton clearfix">
                                <p><input type='submit' name='submit' value='Envoyer' border='0'></p>
                            </div>
                    </form>
                    <? } ?>
                </section>
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
