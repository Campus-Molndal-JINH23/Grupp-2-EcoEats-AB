package org.campusmolndal.demoeco.repositories;

import org.campusmolndal.demoeco.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{

    User findByUsername(String username);
}
