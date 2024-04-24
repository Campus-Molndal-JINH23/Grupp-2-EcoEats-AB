package org.campusmolndal.grupp2ecoeatsab.services;

import org.campusmolndal.grupp2ecoeatsab.models.User;
import org.campusmolndal.grupp2ecoeatsab.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Metod for at validere brugeroplysninger
    public boolean validateUser(String username, String password) {
        // Find brugeren baseret på brugernavn i databasen
        User user = userRepository.findByUsername(username);
        // Hvis brugeren ikke blev fundet, eller hvis adgangskoden er forkert, returneres falsk
        return user != null && user.getPassword().equals(password);
    }

    // Metod for at oprette en ny brugerprofil
    public void createUser(User user) {
        // Gem den nye bruger i databasen
        userRepository.save(user);
    }
}
