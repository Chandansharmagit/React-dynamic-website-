import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Accordian from '../new/footer'
import '../news_and_events/event.css'
import event1 from '../images/event1.JPG'
import ocem from '../images/ocem1.JPG'
import program from '../images/program2.JPG'
import program1 from '../images/program1.JPG'
import program4 from '../images/program4.JPG'
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'universal-cookie';

import addmission from '../../component/news_and_events/admission_new.jpg'
export default function Events({ setProgress, content, onChange }) {
    const navigate = useNavigate();
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








    //making the useeffecet to run top loading search
    useEffect(() => {
        setProgress(40);
        setTimeout(() => {
            setProgress(100)
        }, 500);
    }, [])





    //making the code for the content change by the client

    const hanldeonchange = (event) => {
        onChange(event.target.value);
    }




    return (

        <>

            <Helmet>
                <title>News and Events</title>


                <meta name="description" content="check our latest news and events details" />
                <meta property="og:url" content="https://backend.nepalmodelsecondaryschool.com/Component" />
                <link rel='canonical' href='/Component' />
            </Helmet>
            {events.length > 0 ? (
                events.map((event, index) => (
                    <div className="event" key={index}>
                        <div className='top-nav'>

                            <div class="container line">


                                
                                <h1 className='hq'>News and Events</h1>
                            </div>

                            <div className="col-preginations">

                                <div className="row-preginations">

                                    <div className="image">
                                        <img src={event.imageUrl} alt="" className='new-images' />
                                    </div>

                                </div>


                                <div className="row-preginations" key={event._id}>
                                    <h1 className="titles" content={event.title}>{event.title}</h1>
                                    <div className="all-details">
                                        <p>{event.description}</p>
                                    </div>

                                    <Link to='/news-details'><button type="button" className="btn btn-primary">Read More</button></Link>
                                </div>







                            </div>


                            <div className="col-preginations">
                                <div className="row-preginations">
                                    <div className="image">
                                        <img src={`https://backend.nepalmodelsecondaryschool.com/${event.imageUrl1}`} alt="" className='new-images' />
                                    </div>

                                </div>
                                <div className="row-preginations">
                                    <h1 className="titles"> {event.title1}</h1>
                                    <div className="all-details">

                                        <p>{event.description1}

                                        </p>
                                    </div>
                                    <Link to='/news1'> <button type="button" class="btn btn-primary">ReadMore</button></Link>
                                </div>
                            </div>
                            <div className="col-preginations">
                                <div className="row-preginations">
                                    <div className="image">
                                        <img src={`https://backend.nepalmodelsecondaryschool.com/${event.imageUrl2}`} alt="" className='new-images' />
                                    </div>

                                </div>
                                <div className="row-preginations">
                                    <h1 className="titles">{event.title2}</h1>
                                    <div className="all-details">

                                        <p>{event.description2}</p>
                                    </div>
                                    <Link to='/news2'> <button type="button" class="btn btn-primary">Readmore</button></Link>
                                </div>
                            </div>
                            <div className="col-preginations">
                                <div className="row-preginations">
                                    <div className="image">
                                        <img src={`https://backend.nepalmodelsecondaryschool.com/${event.imageUrl3}`} alt="" className='new-images' />
                                    </div>

                                </div>
                                <div className="row-preginations">
                                    <h1 className="titles">{event.title3}</h1>
                                    <div className="all-details">

                                        <p>{event.description3}</p>
                                    </div>
                                    <Link to='/news3'> <button type="button" class="btn btn-primary">Readmore</button></Link>
                                </div>
                            </div>
                            <div className="col-preginations">
                                <div className="row-preginations">
                                    <div className="image">
                                        <img src={`https://backend.nepalmodelsecondaryschool.com/${event.imageUrl4}`} alt="" className='new-images' />
                                    </div>

                                </div>
                                <div className="row-preginations">
                                    <h1 className="titles">{event.title4}</h1>
                                    <div className="all-details">

                                        <p>{event.description4}</p>
                                    </div>
                                    <Link to='/news3'> <button type="button" class="btn btn-primary">Readmore</button></Link>
                                </div>
                            </div>


                            <br />
                            <br />
                            <br />


                        </div >
                    </div>
                ))
            ) : (
                <div>Loading...</div>
            )}
            <Accordian />

        </>
    )
}

