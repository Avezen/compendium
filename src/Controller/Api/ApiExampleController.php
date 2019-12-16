<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api")
 */
class ApiExampleController extends AbstractController
{
    /**
     * @Route("/example", name="api_example")
     */
    public function index()
    {
        dump($this->isGranted('ROLE_ADMIN'));
        die;

        return $this->render('api_example/index.html.twig', [
            'controller_name' => 'ApiExampleController',
        ]);
    }
}
