package com.dockerize.controller;

import com.dockerize.model.User;
import com.dockerize.services.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("http://localhost:4200")
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @GetMapping("")
    public Iterable<User> getUser() {
        return userService.findAll();
    }

    @PostMapping("")
    public User postUser(@RequestBody User user) {
        return userService.save(user);
    }
}
