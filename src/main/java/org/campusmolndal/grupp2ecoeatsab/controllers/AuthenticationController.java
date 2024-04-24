// LoginController.java
package org.campusmolndal.grupp2ecoeatsab.controllers;

import org.campusmolndal.grupp2ecoeatsab.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    private final AuthenticationService loginService;

    @Autowired
    public AuthenticationController(AuthenticationService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> logIn(@RequestBody LoginRequest loginRequest) {
        boolean isAuthenticated = loginRequest.authenticateUser(loginService);
        if (isAuthenticated) {
            return ResponseEntity.ok("Användaren är inloggad.");
        } else {
            return ResponseEntity.badRequest().body("Felaktiga inloggningsuppgifter.");
        }
    }

    // metod för att registrera sig
}
