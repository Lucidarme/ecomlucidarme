package com.lucidarme.api.entities;


import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.xml.bind.annotation.XmlRootElement;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author lucidarme
 */
@Entity
@XmlRootElement(name = "order")
public class Order implements Serializable{
    
    private static final long serialVersionUID = 1L;
    @Id
    private Short id;
    
    private String firstname;

    private String name;

        
    private String email;
    
    private String bluecard;
    
    private int idevent;
    
    private int nbplace;

    public Order() {
    }

    public Order(String firstname, String name, String email, String bluecard, int idevent, int nbplace){
        this.name = name;
        this.firstname = firstname;
        this.bluecard = bluecard;
        this.email = email;
        this.idevent = idevent;
        this.nbplace = nbplace;
    }
    
    public Order(Short id) {
        this.id = id;
    }

    public Short getId() {
        return id;
    }

    public void setId(Short id) {
        this.id = id;
    }
    
    
    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }



    
    public String getEmail(){
        return email;
    }
    
    public void setEmail(String email){
        this.email = email;
    }
    
    public String getBluecard(){
        return bluecard;
    }
    
    public void setBluecard(String bluecard){
        this.bluecard = bluecard;
    }
    
    public int getIdevent(){
        return idevent;
    }
    
    public void setIdevent(int idevent){
        this.idevent = idevent;
    }
    
    public int getNbplace(){
        return nbplace;
    }
    
    public void setNbplace(int nbplace){
        this.nbplace = nbplace;
    }
    
    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Order)) {
            return false;
        }
        Order other = (Order) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entities.User[ id=" + id + " ]";
    }
    
    
}
