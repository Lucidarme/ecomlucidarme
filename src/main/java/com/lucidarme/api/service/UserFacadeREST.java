/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lucidarme.api.service;

import com.lucidarme.api.entities.User;
import java.util.List;
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
@Path("/user")
public class UserFacadeREST  {

   @GET
   public List<User> getUsers() {
        return new GestionBD().getUsers();
    
    }
   
    @GET
    @Path("/{id}")
    public User getUserById(@PathParam("id") int ID){
        return new GestionBD().getUserById(ID);
    }
    
    @GET
    @Path("/connect/{name}&{password}")
    public User getUserByNameAndPassword(@PathParam("name") String name, @PathParam("password") String password){
        return new GestionBD().getUserByNameAndPassword(name, password);
    }
    
    @GET
    @Path("/name={name}")
    public User getUserByName(@PathParam("name") String name){
        return new GestionBD().getUserByName(name);
    }
    
    @POST
    @Produces(MediaType.TEXT_HTML)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void createUser(@FormParam("name") String name, @FormParam("password") String password, 
                            @FormParam("role") String role, @FormParam("email") String email,
                            @FormParam("adress") String adress){
        User user = new User(name, password, role, email, adress);
        new GestionBD().createUser(user);
    }
}
