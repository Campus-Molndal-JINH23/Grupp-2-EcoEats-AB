package org.campusmolndal.demoeco.repositories;

import org.campusmolndal.demoeco.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long>{
}
