package io.project.shopBackend;

import java.util.ArrayList;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import io.project.shopBackend.model.Role;
import io.project.shopBackend.model.User;
import io.project.shopBackend.service.UserServiceImpl;

@SpringBootApplication
public class ShopBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShopBackendApplication.class, args);
	}

	@Bean 
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                // registry.addMapping("/**").allowedOrigins("*").allowedMethods("*");
				registry.addMapping("/**").allowedMethods("*").allowedOriginPatterns("http://localhost:3000");
            }
        };
    }

	// @Bean
	// CommandLineRunner run(UserServiceImpl userService) {
	// 	return args -> {
	// 		userService.saveRole(new Role(null, "ROLE_USER"));
	// 		userService.saveRole(new Role(null, "ROLE_MANAGER"));
	// 		userService.saveRole(new Role(null, "ROLE_ADMIN"));
	// 		userService.saveRole(new Role(null, "ROLE_SUPER_ADMIN"));

	// 		userService.saveUser(new User(null, "John Travolta", "john@email.com", "john@email.com", "1234", new ArrayList<>()));
	// 		userService.saveUser(new User(null, "Will Smith", "will@email.com", "will@email.com", "1234", new ArrayList<>()));
	// 		userService.saveUser(new User(null, "Jim Carry", "jim@email.com", "jim@email.com", "1234", new ArrayList<>()));
	// 		userService.saveUser(new User(null, "Arnold Schwarzenegger", "arnold@email.com", "arnold@email.com", "1234", new ArrayList<>()));

	// 		userService.addRoleToUser("john", "ROLE_USER");
	// 		userService.addRoleToUser("will", "ROLE_MANAGER");
	// 		userService.addRoleToUser("jim", "ROLE_ADMIN");
	// 		userService.addRoleToUser("arnold", "ROLE_SUPER_ADMIN");
	// 		userService.addRoleToUser("arnold", "ROLE_ADMIN");
	// 		userService.addRoleToUser("arnold", "ROLE_USER");
	// 	};
	// }
}
