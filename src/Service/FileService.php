<?php
/**
 * Created by PhpStorm.
 * User: Maciej Borzymowski
 * Date: 2020-01-04
 * Time: 12:07
 */

namespace App\Service;


use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Finder\Finder;
use ZipArchive;

class FileService
{
    private $filesystem;

    public function __construct(Filesystem $filesystem)
    {
        $this->filesystem = $filesystem;
    }

    function readFilesInDirectory(string $directoryPath) {
        $finder = new Finder();

        if($this->filesystem->exists($directoryPath)){
            $finder->files()->in($directoryPath);

            if ($finder->hasResults()) {
                $files = [];
                foreach ($finder as $file) {
                    $absoluteFilePath = $file->getRealPath();
                    $fileNameWithExtension = $file->getRelativePathname();

                    $files[$fileNameWithExtension] = file_get_contents($absoluteFilePath);
                }

                return $files;
            }
        }

        return false;
    }


    function zipDirectory(string $directoryPath, string $zipName) {
        $finder = new Finder();

        if($this->filesystem->exists($directoryPath)) {
            $finder->files()->in($directoryPath);

            if ($finder->hasResults()) {
                $zip = new ZipArchive();

                $zip->open($zipName, ZipArchive::CREATE | ZipArchive::OVERWRITE);

                foreach ($finder as $file) {
                    $absoluteFilePath = $file->getRealPath();
                    $fileNameWithExtension = $file->getRelativePathname();

                    $zip->addFile($absoluteFilePath, $fileNameWithExtension);
                }
                $zip->close();

                return true;
            }
        }

        return false;
    }
}