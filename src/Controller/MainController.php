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
     * @Route("/symfony", name="symfony")
     */
    public function symfony()
    {
        return $this->render('main/index.html.twig');
    }

    /**
     * @Route("/symfony/{topic}", name="symfony_topic")
     */
    public function symfonyTopic()
    {
        return $this->render('main/index.html.twig');
    }

    /**
     * @Route("/symfony/{topic}/{example}", name="symfony_topic_example")
     */
    public function symfonyTopicExample()
    {
        return $this->render('main/index.html.twig');
    }

    /**
     * @Route("/react", name="react")
     */
    public function react()
    {
        return $this->render('main/index.html.twig');
    }

    /**
     * @Route("/react/{topic}", name="react_topic")
     */
    public function reactTopic()
    {
        return $this->render('main/index.html.twig');
    }

    /**
     * @Route("/react/{topic}/{example}", name="react_topic_example")
     */
    public function reactTopicExample()
    {
        return $this->render('main/index.html.twig');
    }

    /**
     * @Route("/css", name="css")
     */
    public function css()
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
