package org.campusmolndal.demoeco.controllers;

import org.campusmolndal.demoeco.models.Order;
import org.campusmolndal.demoeco.services.OrderService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    // Hongzhis kod
    @PostMapping("/orders")
    public Order createOrder(@RequestBody Order order) {
        return orderService.createOrder(order);
    }

    // Metod för att hämta alla ordrar

}
