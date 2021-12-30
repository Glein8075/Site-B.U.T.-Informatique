<!DOCTYPE html>
 <html>
    <head>
         <title>Contactez-nous</title>
         <meta charset="utf-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <link rel="stylesheet" href="../css_site_iut/script_all.css">
    </head>
   <body>
   <!-- debut de la page -->
   <!-- connexion à la base de données-->
   <?php include "connexion.php"; ?>
   <?php // vérification de tous les champs
         $condition=true;
         if (empty($_POST['nom']) || empty($_POST['prenom']) || empty($_POST['mail']) || empty($_POST['mdp']) || empty($_POST['login']))
         {
            echo "ERREUR : Tous les champs n'ont pas été renseignés.";
            $condition=false;
         }
         else
         {
            //echo 'formulaire valide<br/>';
            $nom=$_POST['nom'];
            $prenom=$_POST['prenom'];
            $mail=$_POST['mail'];
            $mdp=$_POST['mdp'];
            $login=$_POST['login'];
            //echo $nom.'   '.$prenom.'   '.$mail.'   '.$mdp.'   '.$login.'<br/>' ;
            
         }  
?>
      <form action="contact.php" method="post">
         <fieldset>
         <input type="text" name="nom" />
         <input type="text" name="prenom" />
         <input type="text" name="message" />
         <input type="submit" value="Envoyer"/>
         
      </form>
   </body>
</html>