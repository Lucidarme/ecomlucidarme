/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lucidarme.api.service;

import com.lucidarme.api.entities.Evenements;
import com.lucidarme.api.entities.User;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.annotation.Resource;
import javax.ejb.Stateless;
import javax.sql.DataSource;

/**
 *
 * @author lucidarme
 */
@Stateless
public class GestionBD implements InterfaceGestionBD{
    //String url = "jdbc:mysql://46.101.136.85:3306/ecom";
    String url = "jdbc:mysql://46.101.207.95:3306/ecom";
    String driver = "com.mysql.jdbc.Driver";

    String userName = "lucidarme";
    String password = "bikravedushit";
    /*@Resource(lookup = "java:/ecomlucidarme/ecomDB")
    private DataSource dataSource;*/

    private Evenements setEvenement(ResultSet rs) throws SQLException{
        Evenements evenement = new Evenements();
        evenement.setId(rs.getShort(1));                 
        evenement.setName(rs.getString(2));
        evenement.setPrice(rs.getString(3));
        evenement.setType(rs.getString(4));
       	evenement.setImageLink(rs.getString(5));
       	evenement.setDescription(rs.getString(6));
       	evenement.setDate(rs.getDate(7));
        evenement.setOwner(rs.getInt(8));
        evenement.setIsvalid(rs.getBoolean(9));
        
        return evenement;
    }
    
    private User setUser(ResultSet rs) throws SQLException{
        User user = new User();
        user.setId(rs.getShort(1));                 
       	user.setName(rs.getString(2));
       	user.setPassword(rs.getString(3));
        user.setRole(rs.getString(4));
        user.setEmail(rs.getString(5));
        user.setAdress(rs.getString(6));
        
        return user;
    }
    
    @Override
    public List<Evenements> getEvenements() {
        Connection con = null;

        List<Evenements> evenements = new ArrayList<Evenements>();
        try {

            
            con = getConnection();

            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery("select * from evenements");

            while (rs.next()) {
                evenements.add(setEvenement(rs));
            }
        } catch (SQLException ex) {
        }finally {
    	    if ( con != null ) {
    	        try {
    	            con.close();
    	        } catch ( SQLException ignore ) {
    	        }
    	    }
        }
    return evenements;
    }

    @Override
    public Evenements getEvenementById(int id) {
        Connection con = null;

        Evenements evenement = new Evenements();
        try {

        
            con = getConnection();

            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery("select * from evenements where id = " + id);

            rs.next();
            evenement = setEvenement(rs);

         
        } catch (SQLException ex) {
        }finally {
    	    if ( con != null ) {
    	        try {
    	            con.close();
    	        } catch ( SQLException ignore ) {
    	        }
    	    }
        }
    return evenement;
    }

    @Override
    public List<Evenements> getEvenementsByType(String type) {
        Connection con = null;

        List<Evenements> evenements = new ArrayList<Evenements>();
        try {

            con = getConnection();


            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery("select * from evenements where type = \"" + type + "\"");
            while(rs.next()){
                evenements.add(setEvenement(rs));
            }


         
        } catch (SQLException ex) {
        }finally {
    	    if ( con != null ) {
    	        try {
    	            con.close();
    	        } catch ( SQLException ignore ) {
    	        }
    	    }
        }
    return evenements;
    }
    
    
    @Override
    public List<Evenements> getEvenementsByOwner(int owner) {
        Connection con = null;

        List<Evenements> evenements = new ArrayList<Evenements>();
        try {

            con = getConnection();


            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery("select * from evenements where owner = " + owner);
            while(rs.next()){
                evenements.add(setEvenement(rs));
            }


         
        } catch (SQLException ex) {
        }finally {
    	    if ( con != null ) {
    	        try {
    	            con.close();
    	        } catch ( SQLException ignore ) {
    	        }
    	    }
        }
    return evenements;
    }
    
    
        @Override
    public List<Evenements> getEvenementsByIsvalid(boolean isvalid) {
 Connection con = null;

        List<Evenements> evenements = new ArrayList<Evenements>();
        try {

            con = getConnection();


            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery("select * from evenements where isvalid = " + isvalid);
            while(rs.next()){
                evenements.add(setEvenement(rs));
            }


         
        } catch (SQLException ex) {
        }finally {
    	    if ( con != null ) {
    	        try {
    	            con.close();
    	        } catch ( SQLException ignore ) {
    	        }
    	    }
        }
    return evenements;
}
    
    
    @Override
    public void createEvenement(Evenements evenement){
        Connection con = null;

        try {

            con = getConnection();


            PreparedStatement st = con.prepareStatement("insert into evenements(name,price,type,imageLink,description,date,owner,isvalid) values(?,?,?,?,?,?,?,?)");
            st.setString(1,evenement.getName());
            st.setString(2,evenement.getPrice());
            st.setString(3,evenement.getType());
            st.setString(4,evenement.getImageLink());
            st.setString(5,evenement.getDescription());
            st.setDate(6,new java.sql.Date(evenement.getDate().getTime()));
            st.setInt(7,evenement.getOwner());
            st.setBoolean(8,evenement.getIsvalid());

            st.executeUpdate();                

        } catch (SQLException ex) {
        } 
    }
    
    @Override
    public void modifyEvenementById(int eventid, Evenements evenement) {
        Connection con = null;

        try {

            con = getConnection();


            PreparedStatement st = con.prepareStatement("update evenements "
                    + "set name=?,price=?,type=?,imageLink=?,description=?,date=?,owner=?,isvalid=? "
                    + " where id=" + eventid);
            st.setString(1,evenement.getName());
            st.setString(2,evenement.getPrice());
            st.setString(3,evenement.getType());
            st.setString(4,evenement.getImageLink());
            st.setString(5,evenement.getDescription());
            st.setDate(6,new java.sql.Date(evenement.getDate().getTime()));
            st.setInt(7,evenement.getOwner());
            st.setBoolean(8,evenement.getIsvalid());

            st.executeUpdate();

        } catch (SQLException ex) {
            ex.printStackTrace();
        } 
    }
    
    @Override
    public List<User> getUsers() {
        Connection con = null;

        List<User> users = new ArrayList<User>();
        try {

            con = getConnection();


            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery("select * from user");

            while (rs.next()) {

                users.add(setUser(rs));
            }
        } catch (SQLException ex) {
        }finally {
    	    if ( con != null ) {
    	        try {
    	            con.close();
    	        } catch ( SQLException ignore ) {
    	        }
    	    }
        }
    return users;
    }

    @Override
    public User getUserById(int id) {
        Connection con = null;

        User user = new User();
        try {

            con = getConnection();


            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery("select * from user where id = " + id);

            rs.next();
            user = setUser(rs);
   
        } catch (SQLException ex) {
        }finally {
    	    if ( con != null ) {
    	        try {
    	            con.close();
    	        } catch ( SQLException ignore ) {
    	        }
    	    }
        }
    return user;
    }

    @Override
    public User getUserByName(String name){
        Connection con = null;

        User user = new User();
        try {

            con = getConnection();


            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery("select * from user where name = \"" + name + "\"");

            rs.next();
            user = setUser(rs);
   
        } catch (SQLException ex) {
        }finally {
    	    if ( con != null ) {
    	        try {
    	            con.close();
    	        } catch ( SQLException ignore ) {
    	        }
    	    }
        }
    return user;
    }
    
    @Override
    public void createUser(User user) {
        Connection con = null;

        try {

            con = getConnection();


            PreparedStatement st = con.prepareStatement("insert into user(name,password,role,email,adress) values(?,?,?,?,?)");
            st.setString(1,user.getName());
            st.setString(2,user.getPassword());
            st.setString(3,user.getRole());
            st.setString(4,user.getEmail());
            st.setString(5,user.getAdress());
            
            st.executeUpdate();                

        } catch (SQLException ex) {
        } 
    }

    @Override
    public User getUserByNameAndPassword(String name, String pass) {
        Connection con = null;

        User user = new User();
        try {

            con = getConnection();


            Statement st = con.createStatement();
            ResultSet rs = 
                    st.executeQuery("select * from user where name = \"" + name + "\" and password = \"" + pass + "\"");
            rs.next();
            user = setUser(rs);
   
        } catch (SQLException ex) {
        }finally {
    	    if ( con != null ) {
    	        try {
    	            con.close();
    	        } catch ( SQLException ignore ) {
    	        }
    	    }
        }
    return user;
    }





private Connection getConnection(){
        Connection con = null;

        try {
            
            
            Class.forName(driver).newInstance();
            con = DriverManager.getConnection(url, userName, password);
            
            
            
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(GestionBD.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(GestionBD.class.getName()).log(Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            Logger.getLogger(GestionBD.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            Logger.getLogger(GestionBD.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        return con;

}



    
}
