package org.campusmolndal.demoeco.controllers;

import org.campusmolndal.demoeco.services.AuthenticationService;// LoginRequest.java

public class LoginRequest {
    private String username;
    private String password;

    public LoginRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public boolean authenticateUser(AuthenticationService loginService) {
        return loginService.loginUser(username, password);
    }
}
