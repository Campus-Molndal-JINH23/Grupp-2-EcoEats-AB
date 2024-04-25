package org.campusmolndal.demoeco.services;

import org.campusmolndal.demoeco.models.OrderItem;
import org.campusmolndal.demoeco.repositories.OrderItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderItemService {

    private OrderItemRepository orderItemRepository;

    public OrderItemService(OrderItemRepository orderItemRepository) {
        this.orderItemRepository = orderItemRepository;
    }

    public OrderItem getOrderItemById(Long id) {
        return orderItemRepository.findById(id).orElse(null);
    }

    public OrderItem createOrderItem(OrderItem orderItem) {
        return orderItemRepository.save(orderItem);
    }

    public void deleteOrderItem(Long id) {
        orderItemRepository.deleteById(id);
    }

    public List<OrderItem> getAllOrderItems() {
        return orderItemRepository.findAll();
    }

    public OrderItem updateOrderItem(Long id, OrderItem orderItem) {
        OrderItem existingOrderItem = orderItemRepository.findById(id).orElse(null);
        if (existingOrderItem != null) {
            existingOrderItem.setProduct(orderItem.getProduct());
            existingOrderItem.setQuantity(orderItem.getQuantity());
            existingOrderItem.setOrder(orderItem.getOrder());
            return orderItemRepository.save(existingOrderItem);
        }
        return null;
    }
}
