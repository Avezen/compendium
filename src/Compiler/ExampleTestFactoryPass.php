<?php
/**
 * Created by PhpStorm.
 * User: Pc
 * Date: 2019-03-08
 * Time: 11:49
 */

namespace App\Compiler;


use App\Factory\ExampleTest\ExampleTestFactory;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Reference;

class ExampleTestFactoryPass implements CompilerPassInterface
{

    /**
     * You can modify the container here before it is dumped to PHP code.
     * @param ContainerBuilder $container
     */
    public function process(ContainerBuilder $container)
    {
        if (!$container->has(ExampleTestFactory::class)) {
            return;
        }

        $definition = $container->findDefinition(ExampleTestFactory::class);

        // find all service IDs with the app.mail_transport tag
        $taggedServices = $container->findTaggedServiceIds('app.exampleTest');

        foreach ($taggedServices as $id => $tags) {

            // a service could have the same tag twice
            foreach ($tags as $attributes) {
                $definition->addMethodCall('addVariant', [
                    new Reference($id),
                    $attributes["alias"]
                ]);
            }
        }
    }
}