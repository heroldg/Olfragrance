<?php

namespace App\Repository;

use App\Entity\User;
use App\Entity\Articles;
use Doctrine\ORM\ORMException;
use App\Repository\UserRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method Articles|null find($id, $lockMode = null, $lockVersion = null)
 * @method Articles|null findOneBy(array $criteria, array $orderBy = null)
 * @method Articles[]    findAll()
 * @method Articles[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ArticlesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Articles::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(Articles $entity, bool $flush = true): void
    {
        $this->_em->persist($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function remove(Articles $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    // /**
    //  * @return Articles[] Returns an array of Articles objects
    //  */

    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult();
    }

    public function distinctBrand(): array
    
    {
        return $this->createQueryBuilder('a')
            ->select('a.author')
            ->distinct()
            ->getQuery('')
            ->getResult();
    }
    public function FindByUserReservedBy(User $user): array
    {
        return $this->createQueryBuilder('a')
            ->select('a')
            ->join('a.reservedBy', 'b')
            ->where('b.id = :id')
            ->setParameter('id', $user->getId())
            ->getQuery()
            ->getResult();
    }

    

    // public function findMyArticles()
    // {
    //      return $this->createQueryBuilder('au')
    //          ->()
    //          ->leftJoin("au.user_id", "u")
    //          ->leftJoin("au.articles_id", "a")
    //          ->where('u.id = :user')
    //          ->andWhere('a.id = :articles')
    //          ->setParameter('user', $user)
    //          ->setParameter('articles', $article)
    //          ->getQuery()
    //          ->getREsult();
    // }
    
    //     $category = $catrep->createQueryBuilder('cc')
    //         ->select('cc.categoryid')
    //         ->where('cc.contenttype = :type')
    //         ->setParameter('type', 'blogarticle')
    //         ->distinct()
    //         ->getQuery();

    // $categories = $category->getResult();

    // public function findOneBySomeField($value): ?Articles
    // {
    //     return $this->createQueryBuilder('a')
    //         ->andWhere('a.author = :val')
    //         ->setParameter('Louis Vuitton', $value)
    //         ->getQuery()
    //         ->getOneOrNullResult();
    // }
}
