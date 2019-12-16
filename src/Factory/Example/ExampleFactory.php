<?php
/**
 * Created by PhpStorm.
 * User: Pc
 * Date: 2019-03-08
 * Time: 12:57
 */

namespace App\Factory\Example;


class ExampleFactory
{
    private $variants;

    public function __construct()
    {
        $this->variants = [];
    }

    public function addVariant(ExampleFactoryInterface $variant, $alias)
    {
        $this->variants[$alias] = $variant;
    }

    public function getVariant($alias)
    {
        if (array_key_exists($alias, $this->variants)) {
            return $this->variants[$alias];
        }
    }
}