package io.project.shopBackend.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration @EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	private UserDetailsService userDetailsService;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;



	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
	}
	

	@Override
	protected void configure(HttpSecurity http) throws Exception{
		http.csrf().disable();
		http.cors();
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/user/signup").permitAll();
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/login").permitAll();
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/product/**").permitAll();
		// http.authorizeRequests().antMatchers(HttpMethod.POST, "/user/info").permitAll();
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/product/save").hasAuthority("ROLE_ADMIN");
		// http.authorizeRequests().antMatchers(HttpMethod.GET, "/product/products").hasAuthority("ROLE_ADMIN");
		http.authorizeRequests().anyRequest().authenticated();
		http.addFilter(new AuthFilter(authenticationManagerBean()));
		http.addFilterBefore(new CustomAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
	}

	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers("/product/**");
		super.configure(web);
	}

	//  @Override
    // protected void configure(HttpSecurity http) throws Exception {
    //     CustomAuthenticationFilter customAuthenticationFilter = new CustomAuthenticationFilter(authenticationManagerBean());
    //     customAuthenticationFilter.setFilterProcessesUrl("/api/login");
    //     http.csrf().disable();
    //     http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    //     http.authorizeRequests().antMatchers("/api/login/**", "/api/token/refresh/**").permitAll();
    //     http.authorizeRequests().antMatchers(GET, "/api/user/**").hasAnyAuthority("ROLE_USER");
    //     http.authorizeRequests().antMatchers(POST, "/api/user/save/**").hasAnyAuthority("ROLE_ADMIN");
    //     http.authorizeRequests().anyRequest().authenticated();
    //     http.addFilter(customAuthenticationFilter);
    //     http.addFilterBefore(new CustomAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
    // }
}
