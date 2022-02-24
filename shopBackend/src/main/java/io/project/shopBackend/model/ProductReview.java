package io.project.shopBackend.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="product_reviews")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductReview {
	@Id
	@GeneratedValue
	private Long id;

	private int rating;

	private String comment;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	private Product product;

	private String name;
}
