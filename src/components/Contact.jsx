import React, {useEffect, useRef, useState} from 'react';
import Header from "./Header";
import emailjs from "@emailjs/browser";
import '../SliderStyles/Contact.css'
import useAnimateOnMount from "../utils/UseAnimateOnMount";

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
            <div className={`w-full flex justify-start mb-8 ${animate ? 'animate-slide-from-left' : ''}`}>
                <h2 className="text-3xl font-bold uppercase tracking-tight">Let's work together</h2>
            </div>
            
            <form 
                ref={form} 
                onSubmit={sendEmail} 
                className={`flex flex-col p-8 md:p-10 shadow-xl shadow-black/5 w-full bg-theme-card rounded-[32px] border border-gray-100 dark:border-white/5 transition-colors duration-300 ${animate ? 'animate-slide-from-left' : ''}`}
                style={{ '--animation-delay': `${0.1}s` }}
            >
                <div className="mb-6">
                    <label htmlFor="your_name" className="block mb-2 text-sm font-semibold text-theme-text">Your name</label>
                    <input
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        className="bg-black/5 dark:bg-white/5 border-0 text-theme-text text-sm rounded-xl block w-full p-4 outline-none ring-1 ring-inset ring-transparent focus:ring-accent transition-all"
                        placeholder="John Smith"
                    />
                </div>
                
                <div className="mb-6">
                    <label htmlFor="input-group-1" className="block mb-2 text-sm font-semibold text-theme-text">Your Email</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                            <svg className="w-4 h-4 text-theme-muted" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                            </svg>
                        </div>
                        <input
                            type="text"
                            name="user_email"
                            value={formData.user_email}
                            onChange={handleChange}
                            className="bg-black/5 dark:bg-white/5 border-0 text-theme-text text-sm rounded-xl block w-full ps-11 p-4 outline-none ring-1 ring-inset ring-transparent focus:ring-accent transition-all"
                            placeholder="john.smith@gmail.com"
                        />
                    </div>
                </div>
                
                <div className="mb-8">
                    <label htmlFor="message" className="block mb-2 text-sm font-semibold text-theme-text">Your message</label>
                    <textarea
                        id="message"
                        rows="5"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-black/5 dark:bg-white/5 border-0 text-theme-text text-sm rounded-xl block w-full p-4 outline-none ring-1 ring-inset ring-transparent focus:ring-accent transition-all resize-y"
                        placeholder="Write your message here..."
                    ></textarea>
                </div>
                
                <div className="flex w-full justify-start">
                    <button
                        type="submit"
                        className="px-8 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl text-sm text-center inline-flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 ease-in-out shadow-lg shadow-accent/25"
                        disabled={isSubmitting || !isFormValid}
                    >
                        {isSubmitting ?
                            <>
                                <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                </svg>
                                Saving...
                            </>
                            : 'Send Message'
                        }
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;