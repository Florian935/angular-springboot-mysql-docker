package com.dockerize.services;

import com.dockerize.model.User;

public interface UserService {

    User save(User user);

    Iterable<User> findAll();
}
