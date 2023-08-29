import React from 'react';
import Card from './card1'

import './card1.css'
import FreelancersList from './FreelancersList';

function cardComponent (staff, i){
    return  <Card
    key = {staff.key}
    avatar = {staff.avatar}
    name = {staff.name}
    position = {staff.position}

    />
}


const CardList1 = () => {

    return <div className="row">  
    {FreelancersList.map( (staff ) => 
    <Card
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