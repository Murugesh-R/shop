package io.project.shopBackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.project.shopBackend.model.Product;
import io.project.shopBackend.model.ProductReview;

@Repository
public interface ProductReviewRepository extends JpaRepository<ProductReview, Long> {
	public List<ProductReview> findAllByProduct(Product product);
}
