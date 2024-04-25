package org.campusmolndal.demoeco.repositories;

import org.campusmolndal.demoeco.models.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long>{
}
