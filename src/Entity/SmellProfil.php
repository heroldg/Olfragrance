<?php

namespace App\Entity;

use App\Repository\SmellProfilRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SmellProfilRepository::class)
 */
class SmellProfil
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $emailProfil;

    /**
     * @ORM\Column(type="integer")
     */
    private $agrumes;

    /**
     * @ORM\Column(type="integer")
     */
    private $boisees;

    /**
     * @ORM\Column(type="integer")
     */
    private $animales;

    /**
     * @ORM\Column(type="integer")
     */
    private $epicees;

    /**
     * @ORM\Column(type="integer")
     */
    private $florales;

    /**
     * @ORM\Column(type="integer")
     */
    private $fruitees;

    /**
     * @ORM\Column(type="integer")
     */
    private $sucrees;

    /**
     * @ORM\Column(type="integer")
     */
    private $vertes;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmailProfil(): ?string
    {
        return $this->emailProfil;
    }

    public function setEmailProfil(?string $emailProfil): self
    {
        $this->emailProfil = $emailProfil;

        return $this;
    }

    public function getAgrumes(): ?int
    {
        return $this->agrumes;
    }

    public function setAgrumes(int $agrumes): self
    {
        $this->agrumes = $agrumes;

        return $this;
    }

    public function getBoisees(): ?int
    {
        return $this->boisees;
    }

    public function setBoisees(int $boisees): self
    {
        $this->boisees = $boisees;

        return $this;
    }

    public function getAnimales(): ?int
    {
        return $this->animales;
    }

    public function setAnimales(int $animales): self
    {
        $this->animales = $animales;

        return $this;
    }

    public function getEpicees(): ?int
    {
        return $this->epicees;
    }

    public function setEpicees(int $epicees): self
    {
        $this->epicees = $epicees;

        return $this;
    }

    public function getFlorales(): ?int
    {
        return $this->florales;
    }

    public function setFlorales(int $florales): self
    {
        $this->florales = $florales;

        return $this;
    }

    public function getFruitees(): ?int
    {
        return $this->fruitees;
    }

    public function setFruitees(int $fruitees): self
    {
        $this->fruitees = $fruitees;

        return $this;
    }

    public function getSucrees(): ?int
    {
        return $this->sucrees;
    }

    public function setSucrees(int $sucrees): self
    {
        $this->sucrees = $sucrees;

        return $this;
    }

    public function getVertes(): ?int
    {
        return $this->vertes;
    }

    public function setVertes(int $vertes): self
    {
        $this->vertes = $vertes;

        return $this;
    }
}
