/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lucidarme.api.service;

import com.lucidarme.api.entities.Evenements;
import com.lucidarme.api.entities.Order;
import com.lucidarme.api.entities.User;
import java.util.List;
import javax.persistence.EntityManager;

/**
 *
 * @author lucidarme
 */
public interface InterfaceGestionBD {

    public List<Evenements> getEvenements();
    public Evenements getEvenementById(int id);
    public List<Evenements> getEvenementsByType(String type);
    public List<Evenements> getEvenementsByOwner(int owner);
    public List<Evenements> getEvenementsByIsvalid(boolean isvalid);
    public void createEvenement(Evenements evenement);
    public void modifyEvenementById(int eventid, Evenements evenement);
    public void deleteEvenementById(int eventid);
    
    public List<User> getUsers();
    public User getUserById(int id);
    public User getUserByName(String name);
    public User getUserByNameAndPassword(String name, String password);
    public void createUser(User user);
 
    public List<Order> getOrders();
    public void createOrder(Order order);
    public List<Order> getOrdersByEventId(int eventid);
    
}
