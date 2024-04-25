package org.campusmolndal.demoeco.repositories;

import org.campusmolndal.demoeco.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long>{
}
