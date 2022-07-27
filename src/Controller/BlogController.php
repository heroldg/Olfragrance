<?php
/* Un repository est la class crée automatiquement lorsque l'ont crée une entité. Elle permet de faire des selection dans la base de données (une requête SELECT exemple : SELECT * FROM articles)
    Pour faire une sélection à partir de notre class Repository on instancie $repo en paramètre de la méthode. Cet objet va contenir des méhodes qui permettent d'exécuter des requêtes de la méthodes
    - findAll() correespond à un SELECT *
    - findby() correspond à un SELECT avec des méthode
     */

namespace App\Controller;


use App\Entity\Articles;
use App\Repository\ArticlesRepository;

use App\Form\ArticlesFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\HttpCache\ResponseCacheStrategy;

//   /**
//      * @Route("/olf", )
//      */

class BlogController extends AbstractController
{

      /**
     * @Route("/", name="app_blog")
     */
  

    /* Pour selectionner les articles en base de données nous devons absolument avoir accès à la class repository correspondant */
    public function index(ArticlesRepository $repo): Response
    {
        /* Requete pour l'accueil: celle-ci permet de voir l'ensemble des articles dispobles */
        $parfum =  $repo->findby(array(), array('author' => 'ASC'));
        /*  Équivalent SQL : SELECT * FROM articles ORDER BY author DESC + fetchAll*/

        return $this->render('blog/index.html.twig', [
            /* Je transmets dans la variables 'items' les éléments qui se trouvent dans $parfum (les éléments de la base de données) */
            'items' => $parfum,
            'distinctBrand' => $repo->distinctBrand(),

        ]);
    }

    /**
     * @Route("/filter/{author}", name="app_filter")
     * 
     */

    public function filter(ArticlesRepository $repo, $author)
    {
        $parfum =  $repo->findby(array('author' => $author), array('author' => 'DESC'));
        return $this->render('blog/filter.html.twig', [
            'items' => $parfum,
            'distinctBrand' => $repo->distinctBrand(),
        ]);
    }


    /* Ceci est un commentaire // Une annotation prendra "**" au lieu de "*" et sera analyser comme ci-dessous : */
    /**
     * @Route("/show/{id}", name="show")
     */
    public function show(Articles $parfum): Response
    {
        return $this->render('blog/show.html.twig', array(
            'parfum' => $parfum,
        ));
    }

    /**
     * @Route("/new", name="new" )
     * @Route("/blog/edit/{id}", name="edit")
     */



    public function create(Articles $newparfum = null, Request $requete, EntityManagerInterface $manager): Response
    {
        if (!$newparfum) {
            $newparfum = new Articles();
        }
        $form = $this->createForm(ArticlesFormType::class, $newparfum);
        /*  Ici on met en paramètres la classe d'après laquelle on veut créer notre formulaire */
        $form->handleRequest($requete);
        /* On pioche la méthode handleRequest() de la class request du composant HTTPFoundation => ca va permettre de récuperer chaque saisie faite dans le formulaire $_POST('title) ect. et de les lier directement dans $newparfum */
        if ($form->isSubmitted() && $form->isValid()) {
            if (!$newparfum->getId()) {

                $newparfum->setCreateAt(new \DateTime());
            }

            $manager->persist($newparfum); // on met en mémoire les données récupérer dans le formulaire
            $manager->flush(); // envoi des données dans la base de données

            return $this->redirectToRoute('show', [
                'id' => $newparfum->getId(), // on redirige vers la page de l'article crée
            ]);
        }
        return $this->render('blog/new.html.twig', [
            'form' => $form->createView(), // Ici on renvoie le formulaire avec tous les chamsps requis pour l'issertion en BDD  et on renvoi une vue au createView()
            'modeEdit' => $newparfum->getId(),
        ]);
    }

    /**
     * @Route("/profilage", name="app_profilage" )
            
     */
    public function ProfilType(): Response
    {
        return $this->render('blog/profilage.html.twig');
    }

    /**
     * @Route("/quizprofil", name="app_quiz" )       
     */
    public function quiz(): Response
    {
        return $this->render('blog/quizprofil.html.twig');
    }

    /**
     * @Route("/mon-compte", name="app_classement" )    
     */

    public function classement(ArticlesRepository $articlesRepository): Response
    {
        if ($this->getUser()) {
            return $this->render('blog/mon-compte.html.twig', [
                'userFavoris' => $articlesRepository->FindByUserReservedBy($this->getUser()),
            ]);
        }
        else {
            return $this->redirectToRoute('app_login');
        }

    }

    
    

    /**
     * @Route("/favoris/add/{id}", name="app_add_favoris" )    
     */
    public function ajoutfavoris(Articles $parfum): Response
    {
        $parfum -> addReservedBy($this->getUser());


        $em = $this->getDoctrine()->getManager();
        $em->persist($parfum);
        $em->flush();
        return $this->redirectToRoute('app_blog');
    }

    /**
     * @Route("/favoris/retrait/{id}", name="app_delete_favoris" )    
     */
    public function retraitfavoris(Articles $parfum): Response
    {
        $parfum ->  removeReservedBy($this->getUser());


        $em = $this->getDoctrine()->getManager();
        $em->persist($parfum);
        $em->flush();
        return $this->redirectToRoute('app_blog');
    }


    // /**
    //  * 
    //  */
    // public function apiResultToDbs(Request $request, array $result)
    // {

    // } 

}
