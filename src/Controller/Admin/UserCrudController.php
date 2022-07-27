<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class UserCrudController extends AbstractCrudController
/**
* IsGranted("ROLE_ADMIN")
 */
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('email')->setLabel('Email'),
            TextField::new('first_name')->setLabel('first_name'),
            TextField::new('last_name')->setLabel('last_name'),
            BooleanField::new('is_verified')->setLabel('is_verified'),
            ChoiceField::new('roles')->setChoices([
                'Admin' => 'ROLE_ADMIN', 
                'user' => 'ROLE_USER']
                )->allowMultipleChoices(),
        ];
    }
    
}
