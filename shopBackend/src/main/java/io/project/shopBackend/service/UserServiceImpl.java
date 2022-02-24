package io.project.shopBackend.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import io.project.shopBackend.model.Role;
import io.project.shopBackend.model.User;
import io.project.shopBackend.repository.RoleRepository;
import io.project.shopBackend.repository.UserRepository;

@Service @Transactional
public class UserServiceImpl implements UserDetailsService{
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private RoleRepository roleRepository;	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username);
		if (user==null) {
			throw new UsernameNotFoundException("username not found");
		}
		Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
		user.getRoles().forEach(role -> {
			authorities.add(new SimpleGrantedAuthority(role.getName()));
		});

		return new org.springframework.security.core.userdetails.User(
			user.getUsername(), user.getPassword(), authorities
		);
	}

	public void saveUser(User user) {
		user.setUsername(user.getEmail());
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		Role role = roleRepository.findByName("ROLE_USER");
		user.getRoles().add(role);
		userRepository.save(user);
	}

	public Role saveRole(Role role) {
		return roleRepository.save(role);
	}

	public void addRoleToUser(String username, String rolename) {
		User user = userRepository.findByUsername(username);
		Role role = roleRepository.findByName(rolename);
		user.getRoles().add(role);
	}

	public User getUser(String username) {
		return userRepository.findByUsername(username);
	}

	public String getName(String username) {
		System.out.println("here");
		User user = userRepository.findByUsername(username);
		return user.getName();
	}

	public List<User> getUsers() {
		return userRepository.findAll();
	}
	
}
