<?php
/**
 * Created by PhpStorm.
 * User: Maciej Borzymowski
 * Date: 2019-12-16
 * Time: 11:33
 */

namespace App\Factory\Example;


class Example implements ExampleFactoryInterface
{

    function exampleFunction($example)
    {
        dump('it works!');
        die;
    }
}