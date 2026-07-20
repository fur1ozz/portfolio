import React, {useEffect, useRef, useState} from 'react';
import Header from "../../layouts/Header";
import emailjs from "@emailjs/browser";
import '../../SliderStyles/Contact.css'
import useAnimateOnMount from "../../utils/UseAnimateOnMount";

const Contact = ({ isEmbedded = false }) => {
    const form = useRef();
    const [formData, setFormData] = useState({
        from_name: '',
        user_email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const animate = useAnimateOnMount();

    useEffect(() => {
        const isValid = formData.from_name.trim() !== '' &&
            formData.user_email.trim() !== '' &&
            formData.message.trim() !== '';
        setIsFormValid(isValid);
    }, [formData]);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.from_name || !formData.user_email || !formData.message) {
            setError('All fields are required');
            return;
        }

        setIsSubmitting(true);

        emailjs
            .sendForm('service_zg3f9ai', 'template_99ysqhf', form.current, {
                publicKey: '_tSf2BybjaZrdsGfh',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setFormData({
                        from_name: '',
                        user_email: '',
                        message: ''
                    });
                    setIsSubmitting(false);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsSubmitting(false);
                },
            );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <div className="w-full">
            <div className={`w-full flex flex-col justify-start mb-8 ${animate ? 'animate-slide-from-left' : ''}`}>
                <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-[0.9]">
                    Let's Work<br/>
                    <span className="text-theme-muted opacity-40">Together</span>
                </h2>
            </div>
            
            <form 
                ref={form} 
                onSubmit={sendEmail} 
                className={`flex flex-col w-full transition-colors duration-300 ${animate ? 'animate-slide-from-left' : ''}`}
                style={{ '--animation-delay': `${0.1}s` }}
            >
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex-1">
                        <label htmlFor="from_name" className="block mb-2 text-sm font-semibold text-theme-text opacity-70">Name</label>
                        <input
                            type="text"
                            id="from_name"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                            className="bg-black/5 dark:bg-white/5 border-0 text-theme-text text-sm rounded-xl block w-full p-3 outline-none ring-1 ring-inset ring-transparent focus:ring-accent transition-all"
                            placeholder="Your Name"
                        />
                    </div>
                    
                    <div className="flex-1">
                        <label htmlFor="user_email" className="block mb-2 text-sm font-semibold text-theme-text opacity-70">Email</label>
                        <input
                            type="email"
                            id="user_email"
                            name="user_email"
                            value={formData.user_email}
                            onChange={handleChange}
                            className="bg-black/5 dark:bg-white/5 border-0 text-theme-text text-sm rounded-xl block w-full p-3 outline-none ring-1 ring-inset ring-transparent focus:ring-accent transition-all"
                            placeholder="Your@email.com"
                        />
                    </div>
                </div>
                
                <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-semibold text-theme-text opacity-70">Message</label>
                    <textarea
                        id="message"
                        rows="6"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-black/5 dark:bg-white/5 border-0 text-theme-text text-sm rounded-xl block w-full p-3 outline-none ring-1 ring-inset ring-transparent focus:ring-accent transition-all resize-y"
                        placeholder="Message"
                    ></textarea>
                </div>
                
                <div className="flex w-full">
                    <button
                        type="submit"
                        className="w-full py-3 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl text-sm text-center inline-flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 ease-in-out"
                        disabled={isSubmitting || !isFormValid}
                    >
                        {isSubmitting ?
                            <>
                                <svg aria-hidden="true" role="status" className="inline w-5 h-5 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                </svg>
                                Saving...
                            </>
                            : 'Submit'
                        }
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;