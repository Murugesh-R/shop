package io.project.shopBackend.controller;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.project.shopBackend.model.Product;
import io.project.shopBackend.model.ProductReview;
import io.project.shopBackend.service.ProductReviewService;
import io.project.shopBackend.service.ProductService;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
	@Autowired
	private ProductService productService;
	@Autowired
	private ProductReviewService productReviewService;

	@PostMapping("/new")
	public ResponseEntity<?> addNewProduct(@RequestBody Product product) {
		System.out.println(product);
		productService.saveProduct(product);
		return ResponseEntity.ok().build();
	}

	@GetMapping("/all")
	public List<Product> getAllProducts() {
		return productService.getAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Product> getProductDetails(@PathVariable long id) {
		System.out.println("here" + id);
		return ResponseEntity.ok(productService.getProductDetails(id));
	}

	@PostMapping("/addReview")
	public ResponseEntity<?> addProductReview(@RequestBody HashMap<String, String> review) {
		System.out.println("hello world");
		System.out.println(review);
		productReviewService.addReview(review);
		return ResponseEntity.ok().build();
	}
}
