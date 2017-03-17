/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lucidarme.api.service;

import com.lucidarme.api.entities.Evenements;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author lucidarme
 */
@Path("/evenements")
@Produces("application/xml")
public class EvenementsFacadeREST {

    @GET
    public List<Evenements> getEvenements() {
        return new GestionBD().getEvenements();
    
    }
    
    @GET
    @Path("/{id}")
    public Evenements getEvenementById(@PathParam("id") int ID){
        return new GestionBD().getEvenementById(ID);
    }
    
    @GET
    @Path("/type/{type}")
    public List<Evenements> getEvenementsByType(@PathParam("type") String type){
        return new GestionBD().getEvenementsByType(type);
    }
    
    @GET
    @Path("/owner={owner}")
    public List<Evenements> getEvenementsByOwner(@PathParam("owner") int owner){
        return new GestionBD().getEvenementsByOwner(owner);
    }
    
    @GET
    @Path("/isvalid={isvalid}")
    public List<Evenements> getEvenementsByIsValid(@PathParam("isvalid") boolean isvalid){
        return new GestionBD().getEvenementsByIsvalid(isvalid);
    }
    
    @POST
    @Produces(MediaType.TEXT_HTML)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void createEvenement(@FormParam("name") String name, @FormParam("price") String price, 
                            @FormParam("type") String type, @FormParam("imageLink") String imageLink,
                            @FormParam("description") String description, @FormParam("date") String date,
                            @FormParam("owner") int owner, @FormParam("isvalid") Boolean isvalid){
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
        Date date_finale = new Date();
            try {
                date_finale = (Date)formatter.parse(date);
            }catch(Exception e){e.printStackTrace();}
        Evenements evenement = new Evenements(name, price, type, imageLink, description,date_finale,owner,isvalid);
        new GestionBD().createEvenement(evenement);
    }
    
    @PUT
    @Path("/modify/eventid={eventid}")
    @Produces(MediaType.TEXT_HTML)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void modifyEvenement(@PathParam("eventid") int eventid,
                            @FormParam("name") String name, @FormParam("price") String price, 
                            @FormParam("type") String type, @FormParam("imageLink") String imageLink,
                            @FormParam("description") String description, @FormParam("date") String date,
                            @FormParam("owner") int owner, @FormParam("isvalid") Boolean isvalid){
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
        Date date_finale = new Date();
            try {
                date_finale = (Date)formatter.parse(date);
            }catch(Exception e){e.printStackTrace();}
        Evenements evenement = new Evenements(name, price, type, imageLink, description,date_finale,owner,isvalid);
        new GestionBD().modifyEvenementById(eventid, evenement);
    }
    
}
