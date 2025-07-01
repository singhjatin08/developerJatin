import React, { useRef, useState } from 'react'
import axios from 'axios'

export default function Contact() {
    const formRef = useRef(null);
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = (formData) => {
        const newErrors = {};
        const name = formData.get('name')?.trim();
        const mobile = formData.get('mobile')?.trim();
        const email = formData.get('email')?.trim();
        const message = formData.get('message')?.trim();

        if (!name) newErrors.name = 'Name is required.';
        if (!mobile || !/^\d{10}$/.test(mobile)) newErrors.mobile = 'Enter a valid 10-digit mobile number.';
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Enter a valid email address.';
        if (!message) newErrors.message = 'Message is required.';

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = formRef.current;
        const formData = new FormData(form);
        const validationErrors = validateForm(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccessMessage('');
            return;
        }

        setErrors({});
        setIsSubmitting(true);

        try {
            await axios.post('https://jatin.devtechera.com/admin/api/submit-enquiry', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            form.reset();
            setSuccessMessage("Thanks for contacting me. I will get in touch with you shortly!");
        } catch (error) {
            console.error('Form submission error:', error);
            setSuccessMessage('Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className='contact' id='contact'>
            <div className='container'>
                <h2 className='section-heading-orange'>Contact Us</h2>

                <div className='row pt-3'>
                    <div className='col-md-6 pt-3'>
                        <div className='form-container'>
                            {successMessage && <div className="alert alert-success">{successMessage}</div>}
                            <form onSubmit={handleSubmit} ref={formRef} noValidate>
                                <div className='form-group mb-2'>
                                    <label>Name</label>
                                    <input name='name' className={`form-control ${errors.name ? 'is-invalid' : ''}`} />
                                    {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Mobile</label>
                                    <input name='mobile' className={`form-control ${errors.mobile ? 'is-invalid' : ''}`} />
                                    {errors.mobile && <div className='invalid-feedback'>{errors.mobile}</div>}
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Email</label>
                                    <input name='email' className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                                    {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Message</label>
                                    <textarea name='message' className={`form-control ${errors.message ? 'is-invalid' : ''}`} />
                                    {errors.message && <div className='invalid-feedback'>{errors.message}</div>}
                                </div>
                                <div className='form-group mb-2'>
                                    <input
                                        type='submit'
                                        id='submit'
                                        name='Submit'
                                        className='form-control bg-primary text-white'
                                        disabled={isSubmitting}
                                        value={isSubmitting ? 'Submitting...' : 'Submit'}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right column with contact cards */}
                    <div className='col-md-6 pt-3'>
                        <div className='contact-card-container'>
                            {/* Contact Cards */}
                            <div className='contact-card card mb-3'>
                                <div className='card-body'>
                                    <h2><i className="fa-solid fa-phone text-primary"></i></h2>
                                    <h4>Call Me : <a href='tel:+91 9205329258'>+91 9205329258</a></h4>
                                </div>
                            </div>
                            <div className='contact-card card mb-3'>
                                <div className='card-body'>
                                    <h2><i className="fa-solid fa-envelope text-danger"></i></h2>
                                    <h4>Mail Me : <a href="mailto:gs.tem08@gmail.com">gs.tem08@gmail.com</a></h4>
                                </div>
                            </div>
                            <div className='contact-card card mb-3'>
                                <div className='card-body'>
                                    <h2>
                                        {/* Social icons */}
                                        <a className='px-2 text-warning' rel="noreferrer" target='_blank' href='https://www.about.me/developerjatin'><i className="fa-solid fa-user"></i></a>
                                        <a className='px-2 text-danger' rel="noreferrer" target='_blank' href='https://www.instagram.com/roaming_views_official/'><i className="fa-brands fa-instagram"></i></a>
                                        <a className='px-2' rel="noreferrer" target='_blank' href='https://www.facebook.com/singhjatin08'><i className="fa-brands fa-facebook"></i></a>
                                        <a className='px-2 text-dark' rel="noreferrer" target='_blank' href='https://github.com/singhjatin08/'><i className="fa-brands fa-github"></i></a>
                                        <a className='px-2' rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/jatin-singh-2b5949179'><i className="fa-brands fa-linkedin"></i></a>
                                        <a className='px-2 text-danger' rel="noreferrer" target='_blank' href='https://www.youtube.com/@roaming_views'><i className="fa-brands fa-youtube"></i></a>
                                    </h2>
                                    <h4>Social Platform Presence</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
