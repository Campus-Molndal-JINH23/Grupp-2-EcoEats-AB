package org.campusmolndal.grupp2ecoeatsab.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.campusmolndal.grupp2ecoeatsab.models.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    // Spring Data JPA vil automatisk generere implementeringen af de nødvendige metoder
}