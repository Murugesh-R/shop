package io.project.shopBackend.Exception;

public class SpringBootException extends RuntimeException {
    public SpringBootException(String message) {
        super(message);
    }

    public SpringBootException(String message, Exception e) {
        super(message, e);
    }
}
