package org.campusmolndal.demoeco.services;

import org.campusmolndal.demoeco.models.Order;
import org.campusmolndal.demoeco.repositories.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService (OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }

    public void deleteAllOrders() {
        orderRepository.deleteAll();
    }

    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }

    public Order updateOrder(Long id, Order updatedOrder) {
        Optional<Order> optionalOrder = orderRepository.findById(id);
        if(optionalOrder.isPresent()) {
            Order existingOrder = optionalOrder.get();
            existingOrder.setOrderItems(updatedOrder.getOrderItems());
            existingOrder.setDeliveryAddress(updatedOrder.getDeliveryAddress());
            // Returnera uppdaterad order
            return orderRepository.save(existingOrder);
        } else {
            return null;
        }
    }
}
