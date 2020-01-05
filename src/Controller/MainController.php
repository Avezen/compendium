<?php

namespace App\Controller;

use App\Entity\Type;
use App\Factory\ExampleTest\ExampleTestFactory;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
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
     * @Route("/admin", name="admin")
     */
    public function admin()
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
     * @Route("/react/{category}/{subcategory}/{topic}", name="react_subcategory_topic_example")
     */
    public function reactSubcategoryTopicExample()
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
     * @param ExampleTestFactory $exampleTestFactory
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function factory(ExampleTestFactory $exampleTestFactory)
    {
        $example = $exampleTestFactory->getVariant('exampleTest');

        $example->exampleTestFunction(true);
        die;
        return $this->render('main/index.html.twig');
    }

    /**
     * @Route("/route", name="route")
     * @param ExampleTestFactory $exampleTestFactory
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function route(ExampleTestFactory $exampleTestFactory)
    {
        $em = $this->getDoctrine()->getManager();

        $s = $em->getRepository(Type::class)->find(1);

        dump($s);
        dump($s->getRoutePaths()->toArray());
        die;
        return $this->render('main/index.html.twig');
    }

}
