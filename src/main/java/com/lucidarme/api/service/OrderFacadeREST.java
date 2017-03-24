/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lucidarme.api.service;

import com.lucidarme.api.entities.Order;
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
@Path("/order")
@Produces("application/xml")
@Api(value="/order")
public class OrderFacadeREST {
    
    @GET
    @ApiOperation(
            value = "Get all orders",
            response = Order.class)
    public List<Order> getOrders() {
        return new GestionBD().getOrders();
    
    }
    
    @POST
    @Produces(MediaType.TEXT_HTML)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @ApiOperation(
            value = "Post order",
            response = Order.class)
    public void createUser(@FormParam("firstname") String firstname, @FormParam("name") String name, 
                            @FormParam("email") String email, @FormParam("bluecard") String bluecard,
                            @FormParam("idevent") int idevent, @FormParam("nbplace") int nbplace){
        Order order = new Order(firstname, name, email, bluecard, idevent, nbplace);
        new GestionBD().createOrder(order);
    }
    
    @GET
    @Path("/eventid={eventid}")
    @ApiOperation(
            value = "Get orders by event",
            response = Order.class)
    public List<Order> getOrdersByEventId(@PathParam("eventid") int eventid) {
        return new GestionBD().getOrdersByEventId(eventid);
    
    }
    
}
