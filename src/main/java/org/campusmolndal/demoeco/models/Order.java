package org.campusmolndal.demoeco.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "order")
    private List<OrderItem> orderItems;

    @Column(nullable = false)
    private LocalDateTime orderDate;

    @Column(nullable = false)
    private String deliveryAddress;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user; // Referens till användaren

}
