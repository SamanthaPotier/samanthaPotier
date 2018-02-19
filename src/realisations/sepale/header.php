<div id="topHeader" class='clearfix'>
    <div class="content">
        <div class="reseaux-sociaux">
            <p>Suivez-nous :</p>
            <ul>
                <li title="Code: 0xe802"><a href="" title=""><i class="icon-facebook"></i></a></li>
                <li title="Code: 0xe801"><a href="" title=""><i class="icon-twitter"></i></a></li>
                <li title="Code: 0xe803"><a href="" title=""><i class="icon-gplus"></i></a></li>
                <li title="Code: 0xe800"><a href="http://pinterest.com/sepale/" title="Pinterest de Sépale"><i class="icon-pinterest"></i></a></li>
            </ul>
        </div>
        <p>Bienvenue, <a href="#" title="">identifiez-vous</a></p>
    </div>
</div>


<header>
    <div class="content clearfix">
        <h1><a href="index.php" title="Page d'accueil"></a></h1>
        <ul class="infos clearfix">
            <li>
                <p><span class="picto telephone"></span>01 50 59 00 00</p>
                <p>7j/7, de 8h à 20h</p>
            </li>
            <li>
                <p><span class="picto echange"></span>Échange jusqu’à 30 jours</p>
                <p>Pour une réservation sans stress</p>
            </li>
            <li class="margin-right-nul">
                <p><span class="picto transport"></span>Transport offert</p>
                <p>Un chauffeur jusqu’au lieu de rendez-vous</p>
            </li>
        </ul>
        <a href="" class="nav display-mobile"><span class="picto nav-mobile"></span></a>
        <nav>
            <ul>
                <?php if ($page == 'index') { ?><li class="active">Accueil<span class="picto nav"></span></li>
                <?php } else { ?><li><a href="index.php" title="Accueil" >Accueil<span class="picto nav"></span></a></li><?php } ?>

                <?php if ($page == 'presentation') { ?><li class="active">Présentation<span class="picto nav"></span></li>
                <?php } else { ?><li><a href="presentation.php" title="Presentation">Présentation<span class="picto nav"></span></a></li><?php } ?>

                <?php if ($page == 'conseils') { ?><li class="active">Conseils<span class="picto nav"></span></li>
                <?php } else { ?><li><a href="conseils.php" title="Conseils">Conseils<span class="picto nav"></span></a></li><?php } ?>

                <?php if ($page == 'essentiels') { ?><li class="active">Les Essentiels<span class="picto nav"></span></li>
                <?php } else { ?><li><a href="essentiels.php" title="Must-have">Les Essentiels<span class="picto nav"></span></a></li><?php } ?>

                <?php if ($page == 'contact') { ?><li class="active">Contact<span class="picto nav"></span></li>
                <?php } else { ?><li><a href="contact.php" title="Contact">Contact<span class="picto nav"></span></a></li><?php } ?>
            </ul>
        </nav>
    </div>
</header>

<div class="photo">
    <p>L'agence de <span class="black">coaching 360°</span> sur Paris</p>
</div>


