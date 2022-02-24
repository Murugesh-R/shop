package io.project.shopBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.project.shopBackend.model.Role;
import io.project.shopBackend.model.User;
import io.project.shopBackend.service.UserServiceImpl;
import lombok.Data;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserServiceImpl userServiceImpl;

	@GetMapping("/")
	public ResponseEntity<List<User>> getAllUsers() {
		return ResponseEntity.ok().body(userServiceImpl.getUsers()); 
	}

	@GetMapping("/info")
	public ResponseEntity<String> getName() {
		System.out.println("come here");
		String username = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		System.out.println(username);
		return ResponseEntity.ok().body(userServiceImpl.getName(username));
	}

	@PostMapping("/signup")
	public ResponseEntity<String> saveUser(@RequestBody User user) {
		System.out.println(user);
		userServiceImpl.saveUser(user); 
		return ResponseEntity.ok().body("user created successfully");
	}

	@PostMapping("/saverole")
	public ResponseEntity<Role> saveRole(@RequestBody Role role) {
		return ResponseEntity.ok().body(userServiceImpl.saveRole(role)); 
	}

	@PostMapping("/addroletouser")
	public ResponseEntity<?> roletoUser(@RequestBody AddRoleDto dto) {
		userServiceImpl.addRoleToUser(dto.getUsername(), dto.getRolename()); 
		return ResponseEntity.ok().build();
	}

}

@Data
class AddRoleDto {
	String username;
	String rolename;
}