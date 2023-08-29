import React from 'react';
import card1 from './card1'

import './card1.css'
import CustomerList from './CustomerList';

function cardComponent (staff, i){
    return  <card1
    key = {staff.key}
    avatar = {staff.avatar}
    name = {staff.name}
    position = {staff.position}
    />
}


const CardList1 = () => {

    return <div className="row">  
    {CustomerList.map( (staff ) => 
    <card1
    key = {staff.key}
    avatar = {staff.avatar}
    name = {staff.name}
    position = {staff.position}
    rating = {staff.rating}
    />
)}

    </div>

}

export default CardList1