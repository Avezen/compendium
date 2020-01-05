<?php

namespace App\Controller\Api;

use App\Entity\Topic;
use App\Service\FileService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\HeaderUtils;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api")
 */
class PageController extends AbstractController
{

    /**
     * @Route("/page/{type}", name="page_sym")
     * @return JsonResponse
     */
    public function symfonyPage()
    {
        return new JsonResponse([
            'title' => 'Hello Symfony Users',
            'description' => 'There you can find useful code examples for Symfony',
        ]);
    }

    /**
     * @Route("/page/{type}/{category}/{topic}", name="page")
     * @param $type
     * @param $category
     * @param $topic
     * @param FileService $fileService
     * @return JsonResponse
     */
    public function page($type, $category, $topic, FileService $fileService)
    {
        $em = $this->getDoctrine()->getManager();

        $directoryPath = "../upload/{$type}/{$category}/{$topic}";

        $files = $fileService->readFilesInDirectory($directoryPath);

        $topicData = $em->getRepository(Topic::class)->findOneBy(
            [
                'name' => $topic
            ]
        );

        if(!$topicData){
            return new JsonResponse(null);
        }

        return new JsonResponse([
            'title' => $topicData->getName(),
            'description' => $topicData->getDescription(),
            'additionalContent' => $topicData->getAdditionalContent()->toArray(),
            'files' => $files
        ]);


//        [
//            [
//                'description' => 'set config services.yaml',
//                'code' => ' App\Factory\Example\Example:
//    class: App\Factory\Example\Example
//    public: true
//    tags:
//    - { name: \'app.example\', alias: \'example\' }',
//            ],[
//            'description' => 'set Kernel.php',
//            'code' => ' protected function build(ContainerBuilder $container)
// {
//     $container->addCompilerPass(new ExampleFactoryPass());
// }',
//        ]
//        ],
    }

    /**
     * @Route("/download/{type}/{category}/{topic}", name="download")
     * @param $type
     * @param $category
     * @param $topic
     * @param FileService $fileService
     * @return BinaryFileResponse|null
     */
    public function download($type, $category, $topic, FileService $fileService)
    {
        $directoryPath = "../upload/{$type}/{$category}/{$topic}";
        $zipName = "{$topic}-boilerplate.zip";

        if($fileService->zipDirectory($directoryPath, $zipName)){
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
