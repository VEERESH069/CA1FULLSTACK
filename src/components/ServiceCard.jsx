import {React} from 'react';

const ServiceCard = ({title, description})=>{
    return(
        <>
        <h2> Service title :- {title}</h2>,
        <p> <b>Description </b>:- {description}</p>
        </>
    )
}
export default ServiceCard;

