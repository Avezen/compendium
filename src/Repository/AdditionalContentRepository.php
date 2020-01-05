<?php

namespace App\Repository;

use App\Entity\AdditionalContent;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method AdditionalContent|null find($id, $lockMode = null, $lockVersion = null)
 * @method AdditionalContent|null findOneBy(array $criteria, array $orderBy = null)
 * @method AdditionalContent[]    findAll()
 * @method AdditionalContent[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AdditionalContentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AdditionalContent::class);
    }

    // /**
    //  * @return AdditionalContent[] Returns an array of AdditionalContent objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?AdditionalContent
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
