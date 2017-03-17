/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lucidarme.api.entities;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author lucidarme
 */
@Entity
@XmlRootElement(name = "evenements")

public class Evenements implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    private Short id;
    
    private String name;
    
    private String price;

    private String type;

    private String imageLink;

    private String description;

    private Date date;
    
    private int owner;
    
    private boolean isvalid;

    public Evenements() {
    }

    public Evenements(Short id) {
        this.id = id;
    }

    public Evenements(String name, String price, String type, String imageLink, String description, Date date, int owner, Boolean isvalid) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.imageLink = imageLink;
        this.description = description;
        this.date = date;
        this.owner = owner;
        this.isvalid = isvalid;
    }

    public Short getId() {
        return id;
    }

    public void setId(Short id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getOwner(){
        return owner;
    }
    
    public void setOwner(int owner){
        this.owner = owner;
    }
    
    public boolean getIsvalid(){
        return isvalid;
    }
    
    public void setIsvalid(boolean isvalid){
        this.isvalid = isvalid;
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
        if (!(object instanceof Evenements)) {
            return false;
        }
        Evenements other = (Evenements) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entities.Evenements[ id=" + id + " ]";
    }
    
}
