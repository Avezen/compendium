<?php
/**
 * Created by PhpStorm.
 * User: Maciej Borzymowski
 * Date: 2019-12-16
 * Time: 11:33
 */

namespace App\Factory\ExampleTest;


class ExampleTest implements ExampleTestFactoryInterface
{

    function exampleTestFunction($exampleTest)
    {
        dump('it works!');
        die;
    }
}