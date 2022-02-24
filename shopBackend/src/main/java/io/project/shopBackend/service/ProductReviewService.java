package io.project.shopBackend.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.project.shopBackend.model.Product;
import io.project.shopBackend.model.ProductReview;
import io.project.shopBackend.repository.ProductRepository;
import io.project.shopBackend.repository.ProductReviewRepository;

@Service
public class ProductReviewService {
	@Autowired
	private ProductReviewRepository productReviewRepo;
	@Autowired
	private ProductRepository productRepository;

	public void addReview(HashMap<String, String> review) {
		Long id = Long.parseLong(review.get("productId"));
		Product product = productRepository.getById(id);
		
		ProductReview productReview = new ProductReview();
		productReview.setName(review.get("name"));
		productReview.setComment((review.get("comment")));
		productReview.setRating(Integer.parseInt(review.get("rating")));
		productReview.setProduct(product);	
		productReviewRepo.save(productReview);
	}

	public List<ProductReview> getAllReviews(Product product) {
		return productReviewRepo.findAllByProduct(product);
	}
}
