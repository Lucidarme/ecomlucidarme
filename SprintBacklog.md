# Premier sprint 6/03 - 10/03

## 6/03
  * Prise de connaissance du sujet
  * Nouvelle tentative d'installer glassfish sur eclipse
  * Installation de Netbeans afin de trouver une alternative à Eclipse
  * Prise en main de Netbeans et installation des plugins JavaEE et Glassfish - avec succés cette fois ci

## 7/03
  * Création de la base de donnée que l'on utilisera pour ce projet
  * Récupération d'un template pour l'IHM et intégration de ce dernier
  * Connection entre la base de donnée et le projet
  * Premiere classe et premiers Entity Beans ...
  * Création du git du projet et premier commit

## 8/03
  * Création de l'API REST
  * Création de jsf pour une meilleur visualisation du fonctionnement de la base de donnée
  * Recherche sur comment mettre en lien les résultats de l'API REST et le template.

## 9/03
  * Après plusieurs heures de reflexion, première reussite de lien entre un fichier xml généré par l'API REST et le template.
  * Modification de l'IHM pour pouvoir afficher seulement les evenements présents dans la base de donnée.
  * Ajout de script javascript pour afficher seulement les evenements qui interessent l'utilisateur, suivant la catégorie ou la période désiré
  
## 10/03
  * Installation de Swagger
  * Mise en place de l'IHM de swagger
  * Tentative de connection entre swagger et mes session beans mais echec
  * Création d'un droplet sur Digital Ocean
  * Installation de Docker sur ce dernier
  * Installation et configuration de InfluxDB et Grafana, cependant ces derniers ne sont pas encore dans des conteneurs
  * Premiere visualisation de donnée sur Grafana après la création d'une base de donnée test sur influxDB
  * Installation de Telegraf
  * Tentative de mettre Telegraf dans un docker mais echec.

## 11/03
  * Documentation plus poussé sur Docker, Telegraf et InfluxDB afin de comprendre l'echec d'hier
  * Supression de InfluxDB et Grafana dans le but d'invoquer des images docker directement
  * Creation de container dans lesquels tournent les images InfluxDB et Grafana
  * Mise en relation de ces deux images afin d'afficher les données contenue dans InfluxDB dans Grafana
  * Creation de container dans lequel tourne Telegraf
  * Configuration de Telegraf
  * Test de Telegraf avec InfluxDB -> Réussite ! 
  * Affichage des données transmise par Telegraf à InfluxDB dans Grafana
  * Creation d'un container dans lequel tourne l'image Glassfish
  * Configuration des ports pour pouvoir acceder à Glassfish depuis l'exterieur

## 12/03
  * Creation des pages de connection, d'inscription et mise en relation avec la base de donnée
  * Création de l'espace dédié aux annonceurs avec la possibilité de visualiser ses propres evenements
  * Création de l'espace dédié aux administrateur avec la possibilité de visualiser les evenements qui n'ont pas encore été validé
  * Création de la page newEvent.html qui permet à un annonceur de creer un nouvel evenement.
  * Création de la page validEvent.html qui permet à un administrateur de valider, et modifier, un evenement proposé.
  * Modification de l'API Rest et apparition des methodes POST et PUT.

## 14/03
  * Déplacement de ma base de donnée depuis mon localhost jusqu'à mon serveur
  * Tentative de déploiment de l'application sur glassfish mais des grosses difficultées sont rencontrées.

## 15/03
  * Découverte d'un outil de déploiment sur glassfish dans un container: badassfish
  * Déploiment sur cet outil, mais problème de connexion entre mon app et ma base de donnée

## 16/03
  * Recherche de solution au problème d'hier

## 17/03
  * Solution trouvée: transformer mon projet ant en projet maven.
  * L'application semble correctement connectée à la base de donnée à présent, cependant la base de donnée ne veut pas se relancer

## 18/03
  * Recherche de solution pour le problème de lancement de base de donnée.
  * Les logs affichent une erreur de cache, et Grafana indique que la mémoire ram est quasiement à 100% lorsque glassfish est lancé. Il me faut donc un serveur avec plus de ram.
  * Augmentation de la puissance du serveur pour pouvoir lancer la base de donnée.

## 19/03
  * Implementation de la requète DELETE pour les evenements.
  * Ajout des fonctions "modifier" et "supprimer" pour l'administrateur
  * Début d'implementation de la réservation de place pour un evenement
