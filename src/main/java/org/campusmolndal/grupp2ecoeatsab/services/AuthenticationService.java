package org.campusmolndal.grupp2ecoeatsab.services;

import org.campusmolndal.grupp2ecoeatsab.models.User;
import org.campusmolndal.grupp2ecoeatsab.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService { // Ret stavefejl her

    private final UserRepository userRepository;

    @Autowired
    public AuthenticationService(UserRepository userRepository) { // Ret stavefejl her
        this.userRepository = userRepository;
    }

    // Metod för att logga in användaren
    public boolean loginUser(String username, String password) {
        // Hitta användaren baserat på användarnamn i databasen
        User user = userRepository.findByUsername(username);
        // Om användaren inte hittades eller lösenordet är felaktigt, returnera false
        if (user == null || !user.getPassword().equals(password)) {
            System.out.println("Felaktigt användarnamn eller lösenord.");
            return false;
        }

        // Om användaren hittades och lösenordet är korrekt, returnera true
        System.out.println("Inloggning lyckades för användare: " + username);
        return true;
    }

    //ska finnas metod för att registrera sig
}
