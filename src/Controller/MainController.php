<?php

namespace App\Controller;

use App\Factory\Example\ExampleFactory;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        return $this->render('main/index.html.twig');
    }

    /**
     * @Route("/about", name="about")
     */
    public function about()
    {
        return $this->render('main/index.html.twig');
    }

    /**
     * @Route("/factory", name="factory")
     * @param ExampleFactory $exampleFactory
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function factory(ExampleFactory $exampleFactory)
    {
        $example = $exampleFactory->getVariant('example');

        $example->exampleFunction(true);
        die;
        return $this->render('main/index.html.twig');
    }
}
