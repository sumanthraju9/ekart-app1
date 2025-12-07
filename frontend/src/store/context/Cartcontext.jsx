import React from 'react'
import { createContext } from 'react';

import { useState } from "react";
import { useContext } from "react";


const Cartcontext= createContext()



export const CartProvider = ({children}) => {

    const [cartitem,setCartitem]= useState([""]);

    const addtocart=(item)=>{

          setCartitem([...cartitem,item]);
    }
    const removecart=((item)=>{

        setCartitem(cartitem.filter((orange)=> item!==orange))
    })


  return (
    <Cartcontext.Provider    value={{cartitem,addtocart,removecart}}>

        {children}

    </Cartcontext.Provider>
  )
}

export const useCart=()=>{
    return useContext(Cartcontext)
}


