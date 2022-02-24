package io.project.shopBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.project.shopBackend.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	
}
