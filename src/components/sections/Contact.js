import { email } from "config";

const Contact = () => {
    // placeholder text
    return (
        <div>
            <h1>Get in touch</h1>
            <p>
                Although I’m not currently looking for any new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>

            <a className="email-link" href={`mailto:${email}`}>
                Say Hello
            </a>
        </div>
        
    );
};

export default Contact;