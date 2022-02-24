package io.project.shopBackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.project.shopBackend.model.Product;
import io.project.shopBackend.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	private ProductRepository productRepo;

	@Autowired
	private ProductReviewService productReviewService;
	
	public void saveProduct(Product product) {
		productRepo.save(product);
	}

	public List<Product> getAll() {
		return productRepo.findAll();
	}

	public Product getProductDetails(long id) {
		return productRepo.findById(id).get();
	}
}
