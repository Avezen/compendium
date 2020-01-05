<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RouteRepository")
 */
class Category
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=55)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=56)
     */
    private $path;

    /**
     * @ORM\Column(type="boolean")
     */
    private $category;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Category", inversedBy="nestedCategories")
     */
    private $parentCategory;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Category", mappedBy="parentCategory")
     */
    private $nestedCategories;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Type", inversedBy="categories")
     */
    private $type;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Topic", mappedBy="category", cascade={"persist", "remove"})
     */
    private $topic;


    public function __construct()
    {
        $this->nestedCategories = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function setPath(string $path): self
    {
        $this->path = $path;

        return $this;
    }

    public function getCategory(): ?bool
    {
        return $this->category;
    }

    public function setCategory(bool $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getParentCategory(): ?Category
    {
        return $this->parentCategory;
    }

    public function setParentCategory(Category $parentCategory): self
    {
        $this->parentCategory = $parentCategory;

        return $this;
    }

    /**
     * @return Collection|self[]
     */
    public function getNestedCategories(): Collection
    {
        return $this->nestedCategories;
    }

    public function addNestedCategory(self $nestedCategory): self
    {
        if (!$this->nestedCategories->contains($nestedCategory)) {
            $this->nestedCategories[] = $nestedCategory;
        }

        return $this;
    }

    public function removeNestedCategory(self $nestedCategory): self
    {
        if ($this->nestedCategories->contains($nestedCategory)) {
            $this->nestedCategories->removeElement($nestedCategory);
        }

        return $this;
    }

    public function getType(): ?Type
    {
        return $this->type;
    }

    public function setType(?Type $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getTopic(): ?Topic
    {
        return $this->topic;
    }

    public function setComponent(Topic $topic): self
    {
        $this->topic = $topic;

        // set the owning side of the relation if necessary
        if ($topic->getCategory() !== $this) {
            $topic->setCategory($this);
        }

        return $this;
    }
}
