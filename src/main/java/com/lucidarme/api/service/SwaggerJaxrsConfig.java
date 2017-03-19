/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lucidarme.api.service;


import io.swagger.jaxrs.config.BeanConfig;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;

/**
 * @author lucasweble
 */
@WebServlet(name = "SwaggerJaxrsConfig", loadOnStartup = 1)
public class SwaggerJaxrsConfig extends HttpServlet {
	
	private static final long serialVersionUID = 1L;

	@Override
	public void init(ServletConfig config) throws ServletException {
		super.init(config);

		BeanConfig beanConfig = new BeanConfig();
		beanConfig.setVersion("1.0.0");
		beanConfig.setTitle("ecomlucidarme");
		beanConfig.setDescription("Swagger API");
		beanConfig.setSchemes(new String[] { "http" });
		beanConfig.setHost("46.101.207.95:8080");
		beanConfig.setBasePath("/ecomlucidarme/api");
		beanConfig.setResourcePackage("com.lucidarme.api.service");
		beanConfig.setScan(true);
	}
}