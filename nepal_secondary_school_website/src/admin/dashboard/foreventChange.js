


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../dashboard/dashboard.css'
import ResponsiveDrawer from './drawer';
export default function AdminDashboard() {
    const [events, setEvents] = useState([]);
    const [editingEventId, setEditingEventId] = useState(null);


    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null,  // New state for storing image

        title1: '',
        description1: '',
        image1: null,


        title2: '',
        description2: '',
        image2: null,


        title3: '',
        description3: '',
        image3: null,

        title4: '',
        description4: '',
        image4: null,
    });

    useEffect(() => {
        // Fetch events from backend upon component mount
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('/events_change');
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const handleInputChange = (e) => {
        if (e.target.name.startsWith('image')) {
            setFormData({ ...formData, [e.target.name]: e.target.files[0] }); // Use e.target.files[0] to get the first selected file
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataWithImage = new FormData();
            formDataWithImage.append('title', formData.title);
            formDataWithImage.append('description', formData.description);
            formDataWithImage.append('image', formData.image);

            formDataWithImage.append('title1', formData.title1);
            formDataWithImage.append('description1', formData.description1);
            formDataWithImage.append('image1', formData.image1); // Use 'image1' instead of 'image'

            formDataWithImage.append('title2', formData.title2);
            formDataWithImage.append('description2', formData.description2);
            formDataWithImage.append('image2', formData.image2); // Use 'image2' instead of 'image'

            formDataWithImage.append('title3', formData.title3);
            formDataWithImage.append('description3', formData.description3);
            formDataWithImage.append('image3', formData.image3); // Use 'image3' instead of 'image'

            formDataWithImage.append('title4', formData.title4);
            formDataWithImage.append('description4', formData.description4);
            formDataWithImage.append('image4', formData.image4); // Use 'image4' instead of 'image'

            const response = await axios.post('/events_change', formDataWithImage, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setEvents([...events, response.data]);
            // Clear form data after successful submission
            setFormData({ title: '', description: '', image: null });
            setFormData({ title1: '', description1: '', image1: null });
            setFormData({ title2: '', description2: '', image2: null });
            setFormData({ title3: '', description3: '', image3: null });
            setFormData({ title4: '', description4: '', image4: null });
            toast.success('Data change success');
        } catch (error) {
            console.error('Error creating event:', error);
            toast.error('Failed to create event');
        }
    };







    const handleDelete = async (eventId) => {
        try {
            await axios.delete(`/events_change/${eventId}`); // Corrected URL
            setEvents(events.filter(event => event._id !== eventId));
            toast.success('Successfully deleted the event');
        } catch (error) {
            console.error('Error deleting event:', error);
            toast.error('Failed to delete the event');
        }
    };




    //fetching the data from the backend node js to react js frontend

    return (
        <div className='dashboard-event_change '>
            <h2 className='admin-dashboard'>For News and Events change</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Event Title" />
                <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Event Description"></textarea>
                <input type="file" name="image" onChange={handleInputChange} accept="image/*" />


                <input type="text" name="title1" value={formData.title1} onChange={handleInputChange} placeholder="Event Title" />
                <textarea name="description1" value={formData.description1} onChange={handleInputChange} placeholder="Event Description"></textarea>
                <input type="file" name="image1" onChange={handleInputChange} accept="image/*" />


                <input type="text" name="title2" value={formData.title2} onChange={handleInputChange} placeholder="Event Title" />
                <textarea name="description2" value={formData.description2} onChange={handleInputChange} placeholder="Event Description"></textarea>
                <input type="file" name="image2" onChange={handleInputChange} accept="image/*" />


                <input type="text" name="title3" value={formData.title3} onChange={handleInputChange} placeholder="Event Title" />
                <textarea name="description3" value={formData.description3} onChange={handleInputChange} placeholder="Event Description"></textarea>
                <input type="file" name="image3" onChange={handleInputChange} accept="image/*" />

                <input type="text" name="title4" value={formData.title4} onChange={handleInputChange} placeholder="Event Title" />
                <textarea name="description4" value={formData.description4} onChange={handleInputChange} placeholder="Event Description"></textarea>
                <input type="file" name="image4" onChange={handleInputChange} accept="image/*" />
                <button type="sujbmit">Save Changes</button>
            </form>
            <div>
                {events.length > 0 ? (
                    events.map((event, index) => (
                        <div key={event._id}>
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                            <img src={event.imageUrl} alt="Event" width='20%' />
                            <button onClick={() => handleDelete(event._id)}>Delete</button>


                            <h3>{event.title1}</h3>
                            <p>{event.description1}</p>
                            <img src={event.imageUrl1} alt="Event" width='20%' />
                            <button onClick={() => handleDelete(event._id)}>Delete</button>


                            <h3>{event.title2}</h3>
                            <p>{event.description2}</p>
                            <img src={event.imageUrl2} alt="Event" width='20%' />
                            <button onClick={() => handleDelete(event._id)}>Delete</button>


                            <h3>{event.title4}</h3>
                            <p>{event.description4}</p>
                            <img src={event.imageUrl4} alt="Event" width='20%' />
                            <button onClick={() => handleDelete(event._id)}>Delete</button>

                        </div>


                    ))
                ) : (
                    <div>Loading...</div>
                )}

            </div>

            <ResponsiveDrawer />





        </div>
    );
};


