/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lucidarme.api.service;

import com.lucidarme.api.entities.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.util.List;
import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author lucidarme
 */
@Stateless
@Path("/user")
@Produces("application/xml")
@Api(value="/user")
public class UserFacadeREST  {

   @GET
   @ApiOperation(
            value = "Get all users",
            response = User.class)
   public List<User> getUsers() {
        return new GestionBD().getUsers();
    
    }
   
    @GET
    @Path("/{id}")
    @ApiOperation(
            value = "Get user by his id",
            response = User.class)
    public User getUserById(@PathParam("id") int ID){
        return new GestionBD().getUserById(ID);
    }
    
    @GET
    @Path("/connect/{name}&{password}")
    @ApiOperation(
            value = "Get user by his name and password",
            response = User.class)
    public User getUserByNameAndPassword(@PathParam("name") String name, @PathParam("password") String password){
        return new GestionBD().getUserByNameAndPassword(name, password);
    }
    
    @GET
    @Path("/name={name}")
    @ApiOperation(
            value = "Get user by his name",
            response = User.class)
    public User getUserByName(@PathParam("name") String name){
        return new GestionBD().getUserByName(name);
    }
    
    @POST
    @Produces(MediaType.TEXT_HTML)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @ApiOperation(
            value = "Post user",
            response = User.class)
    public void createUser(@FormParam("name") String name, @FormParam("password") String password, 
                            @FormParam("role") String role, @FormParam("email") String email,
                            @FormParam("adress") String adress){
        User user = new User(name, password, role, email, adress);
        new GestionBD().createUser(user);
    }
}
