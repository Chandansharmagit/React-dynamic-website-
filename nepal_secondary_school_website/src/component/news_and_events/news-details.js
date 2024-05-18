import React from 'react'
import './news-event.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Accordian from '../new/footer'
import addmission from '../../component/news_and_events/admission_new.jpg'
import event1 from '../images/event1.JPG'
import frame_kids from '../../gallary/frame.jpg'
import childrens from '../../gallary/chidrens.jpg'
import price_for_childrens from '../../gallary/kids_program.jpg'
import madams from '../../gallary/madams.jpg'
import prinicpal_with_teachers from '../../gallary/teaching_staff.jpg'
export default function Newsdetails({ setProgress }) {


    const [events, setEvents] = useState([]);





    useEffect(() => {
        fetchEvents();
    }, [events]);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('/events_change');
            console.log('Response:', response.data); // Log response data
            setEvents(response.data);


        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    useEffect(() => {
        setProgress(40);
        setTimeout(() => {
            setProgress(100)
        }, 1000);
    }, [])
    return (
        <div>
            {events.length > 0 ? (
                events.map((event, index) => (
                    <div className="image-box" key={index}>
                        <img key={event._id} src={event.imageUrl} alt="" className='image-bx' />
                        <div className="text">
                            <p className="alltext">
                                {event.description}
                            </p>

                        </div>
                    </div>
                ))
            ) : (
                <div>Loading...</div>
            )}





            <br />
            <br />
            <br />
            <Accordian />
        </div>
    )
}
