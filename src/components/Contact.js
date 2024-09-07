import React, { useRef } from 'react'
import axios from 'axios'

export default function Contact() {
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = formRef.current;
        const formData = new FormData(form);

        try {
            await axios.post('https://shreemedia.co/api/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const msg = '<div class="alert alert-success">Thanks for contacting me. I will get in touch with you Shortly!</div>'
            
            const messageBox = document.getElementById("successMessage");
            const submit = document.getElementById("submit");
            form.reset();
            messageBox.innerHTML = msg;
            submit.disabled = true;
        } catch (error) {
            if (error.response) {
                console.error('Server Error:', error.response.data);
            } else if (error.request) {
                console.error('No Response:', error.request);
            } else {
                console.error('Error:', error.message);
            }
        }
    };
    return (
        <section className='contact' id='contact'>
            <div className='container'>
                <h2 className='section-heading-orange'>Contact Us</h2>

                <div className='row pt-3'>
                    <div className='col-md-6 pt-3'>
                        <div className='form-container'>
                            <div id='successMessage'></div>
                            <form onSubmit={handleSubmit} ref={formRef} action='' method='post'>
                                <div className='form-group mb-2'>
                                    <label>Name</label>
                                    <input name='name' className='form-control' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Mobile</label>
                                    <input name='mobile' className='form-control' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Email</label>
                                    <input name='email' className='form-control' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Message</label>
                                    <textarea name='message' className='form-control' ></textarea>
                                </div>
                                <div className='form-group mb-2'>
                                    <input type='submit' id='submit' name='Submit' className='form-control bg-primary text-white' />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-6 pt-3'>
                        <div className='contact-card-container'>
                            <div className='contact-card card mb-3'>
                                <div className='card-body'>
                                    <h2><i className="fa-solid fa-phone"></i> </h2>
                                    <h4>Call Me : <a href='tel:+91 9205329258'>+91 9205329258</a></h4>
                                </div>
                            </div>
                            <div className='contact-card card mb-3'>
                                <div className='card-body'>
                                    <h2><i className="fa-solid fa-envelope"></i></h2>
                                    <h4>Mail Me : <a href="mailto:gs.tem08@gmail.com">gs.tem08@gmail.com</a></h4>
                                </div>
                            </div>
                            <div className='contact-card card mb-3'>
                                <div className='card-body'>
                                    <h2><i className="fa-solid fa-home"></i></h2>
                                    <h4>Address : <span className='text-primary'>Shiv Park Khora Colony, Ghaziabad</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
