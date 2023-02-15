import { useState } from "react";
import { useSelector } from "react-redux";
import './style/styles.css'

const EventListing = () => {
    const events = useSelector((state) => state.event);
    
    return (
        <div>
        <h1>Event Listing</h1>
        <div className='event-items'>
            {events.map((event) => (
            <div className="event-item">
                <img src={event.imageUrl} className='event-img'/>
                <span>{event.name}</span>
                <div className="date-and-ticket">
                    <span>{event.date}</span>
                    <span>{event.ticketsAvailable}</span>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}

export default EventListing;