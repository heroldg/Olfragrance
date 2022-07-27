<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class InformationController extends AbstractController
{
    /**
     * @Route("/information/ou-se-parfumer", name="app_information")
     */
    public function index(): Response
    {
        return $this->render('information/index.html.twig', [
        ]);
    }

    /**
     * @Route("/information/Eau-de-Toilette-ou-Eau-de-Parfum", name="app_information1")
     */
    public function info1(): Response
    {
        return $this->render('information/info.html.twig', [
        ]);
    }

    /**
     * @Route("/information/une-note-de-tête-de-cœur-de-fond", name="app_information2")
     */
    public function info2(): Response
    {
        return $this->render('information/info2.html.twig', [
        ]);
    }

    /**
     * @Route("/information/contact", name="app_contact")
     */
    public function contact(): Response
    {
        return $this->render('information/webcontact.html.twig', [
        ]);
    }
}
