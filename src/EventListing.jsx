import { useState } from "react";
import { useSelector } from "react-redux";

const EventListing = () => {
    const events = useSelector((state) => state.event);
    
    return (
        <div>
        <h1>Event Listing</h1>
        <ul>
            {events.map((event) => (
            <li key={event.id}>{event.name}</li>
            ))}
        </ul>
        </div>
    );
}

export default EventListing;