import React from "react";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/prism';


const Example = () => {
    const codeString = 'function createStyleObject(classNames, style) {\n' +
        '  return classNames.reduce((styleObject, className) => {\n' +
        '    return {...styleObject, ...style[className]};\n' +
        '  }, {});\n' +
        '}';

    const phpString = '<?php\n' +
        '/**\n' +
        ' * Created by PhpStorm.\n' +
        ' * User: Pc\n' +
        ' * Date: 2019-03-08\n' +
        ' * Time: 11:49\n' +
        ' */\n' +
        '\n' +
        'namespace App\\Compiler;\n' +
        '\n' +
        '\n' +
        'use App\\Factory\\Example\\ExampleFactory;\n' +
        'use Symfony\\Component\\DependencyInjection\\Compiler\\CompilerPassInterface;\n' +
        'use Symfony\\Component\\DependencyInjection\\ContainerBuilder;\n' +
        'use Symfony\\Component\\DependencyInjection\\Reference;\n' +
        '\n' +
        'class ExamplePass implements CompilerPassInterface\n' +
        '{\n' +
        '\n' +
        '    /**\n' +
        '     * You can modify the container here before it is dumped to PHP code.\n' +
        '     * @param ContainerBuilder $container\n' +
        '     */\n' +
        '    public function process(ContainerBuilder $container)\n' +
        '    {\n' +
        '        if (!$container->has(ExampleFactory::class)) {\n' +
        '            return;\n' +
        '        }\n' +
        '\n' +
        '        $definition = $container->findDefinition(ExampleFactory::class);\n' +
        '\n' +
        '        // find all service IDs with the app.mail_transport tag\n' +
        '        $taggedServices = $container->findTaggedServiceIds(\'app.example\');\n' +
        '\n' +
        '        foreach ($taggedServices as $id => $tags) {\n' +
        '\n' +
        '            // a service could have the same tag twice\n' +
        '            foreach ($tags as $attributes) {\n' +
        '                $definition->addMethodCall(\'addVariant\', [\n' +
        '                    new Reference($id),\n' +
        '                    $attributes["alias"]\n' +
        '                ]);\n' +
        '            }\n' +
        '        }\n' +
        '    }\n' +
        '}';

    return (
        <div>
            <SyntaxHighlighter language="javascript" style={darcula}>
                {codeString}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="php" style={darcula}>
                {phpString}
            </SyntaxHighlighter>
        </div>
    );
};

export default Example