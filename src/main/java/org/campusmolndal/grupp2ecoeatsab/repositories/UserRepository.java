package org.campusmolndal.grupp2ecoeatsab.repositories;

import org.campusmolndal.grupp2ecoeatsab.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// Repository för att interagera med databasen och hantera användar-entiteter
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);

}
