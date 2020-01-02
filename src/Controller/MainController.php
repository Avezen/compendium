<?php

namespace App\Controller;

use App\Factory\ExampleTest\ExampleTestFactory;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Finder\Finder;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\HeaderUtils;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\Json;
use ZipArchive;


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
     * @Route("/test/{id}/{fdf}/{dsds}", name="test")
     */
    public function test()
    {
        $finder = new Finder();

        $finder->files()->in('../upload/symfony/pattern/factory');

        if ($finder->hasResults()) {

            $txt = [];
            foreach ($finder as $file) {
                $absoluteFilePath = $file->getRealPath();
                $fileNameWithExtension = $file->getRelativePathname();

                $txt[$fileNameWithExtension] = file_get_contents($absoluteFilePath);
            }

            return new JsonResponse([
                'files' => $txt
            ]);
        }

        return new JsonResponse([
            'files' => []
        ]);
    }

    /**
     * @Route("/test2", name="test2")
     */
    public function test2()
    {
        $finder = new Finder();

        $finder->files()->in('../upload/symfony/pattern/factory');

        if ($finder->hasResults()) {
            $zip = new ZipArchive();

            $zipName = 'zip.zip';

            $zip->open($zipName, ZipArchive::CREATE | ZipArchive::OVERWRITE);

            foreach ($finder as $file) {
                $absoluteFilePath = $file->getRealPath();
                $fileNameWithExtension = $file->getRelativePathname();

                $zip->addFile($absoluteFilePath, $fileNameWithExtension);
            }
            $zip->close();

            $response = new BinaryFileResponse($zipName);

            $disposition = HeaderUtils::makeDisposition(
                HeaderUtils::DISPOSITION_ATTACHMENT,
                $zipName
            );

            $response->headers->set('Content-Disposition', $disposition);

            return $response;
        }

        return null;
    }
}
