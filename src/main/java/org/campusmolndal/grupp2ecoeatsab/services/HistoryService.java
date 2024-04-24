package org.campusmolndal.grupp2ecoeatsab.services;

import org.campusmolndal.grupp2ecoeatsab.models.Order;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class HistoryService {

    // Databasen för att lagra historik
    private Map<String, List<Order>> historyDatabase = new HashMap<>();

    // Tom konstruktor för att skapa en ny instans av HistoryService
    public HistoryService() {
    }

    // Metod för att spara historik
    public void saveHistory(Order order) {
        String username = order.getUser().getUsername(); // Antagande: varje användare har ett unikt användarnamn
        List<Order> userOrder = historyDatabase.getOrDefault(username, new ArrayList<>());
        userOrder.add(order);
        historyDatabase.put(username, userOrder);
        System.out.println("Historik sparad i databasen för användare: " + username);
    }

    // Metod för att hitta historik för en specifik användare
    public List<Order> findHistoryByUser(String username) {
        return historyDatabase.getOrDefault(username, new ArrayList<>());
    }
}
