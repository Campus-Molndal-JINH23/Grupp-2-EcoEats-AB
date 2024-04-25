package org.campusmolndal.demoeco.repositories;

import org.campusmolndal.demoeco.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long>{
}
