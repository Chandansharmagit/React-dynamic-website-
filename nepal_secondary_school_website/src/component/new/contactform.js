import React, { useState } from 'react';
import axios from 'axios';
import '../new/contacts.css';
import { toast } from 'react-toastify';
export default function Contactform() {
    const [sendmail, setSendmail] = useState('');
    const [formData, setFormData] = useState({
        fname: '',
        ContactNumber: '',
        fmessage: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/send-contact-form', formData);
            toast.success('Form submitted successfully!');
            // Optionally, reset the form after successful submission
            setFormData({
                fname: '',
                ContactNumber: '',
                fmessage: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Error submitting form. Please try again later.');
        }
    };

    return (
        <div>
            <div className="what-for-us">
                <h1 className="for-uss">Get in Touch with us..</h1>
            </div>
            <div className="form">
                <div className="col-preginations">
                    <div className="row-preginations">
                        <div className="detailss">
                            <div>
                                <div className="contact-form-wrapper d-flex justify-content-center">
                                    <form onSubmit={handlesubmit} className="contact-form" method='POST'>
                                        <h5 className="title">Contact us</h5>
                                        <p className="description">Feel free to contact us if you need any assistance, any help or another question.</p>
                                        <label>
                                            Name:
                                            <input type="text" name="fname" value={formData.fname} onChange={handleInputChange} required />
                                        </label>

                                        <label>
                                            Contact Number:
                                            <input type="text" name="ContactNumber" value={formData.ContactNumber} onChange={handleInputChange} required />
                                        </label>

                                        <label>
                                            Message:
                                            <textarea name="fmessage" value={formData.fmessage} onChange={handleInputChange} />
                                        </label>
                                        <div className="submit-button-wrapper">
                                            <input type="submit" value="Send"></input>
                                        </div>
                                        <h3>{sendmail}</h3>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-preginations">
                        <img src="https://cdn.dribbble.com/users/732330/screenshots/4025801/media/3746d11c6718009a812be61c48f14111.gif" alt="" className='admins' />
                    </div>
                </div>
            </div>
        </div>
    );
};

