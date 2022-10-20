import { Icon } from "@iconify/react";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="h-max py-20 bg-light dark:bg-dark flex flex-col gap-10 relative">
      <div className="text-center font-bold text-2xl text-primary">CONTACT</div>
      <div className="contact-container flex justify-center">
        <a href="mailto:rijalaufa0@gmail.com" target="_blank" className="bg-primary flex items-center justify-center px-2 py-3 hover:scale-105 active:scale-95 transition-transform" rel="noreferrer">
          <span className="text-light font-extrabold">
            <span className="font-normal">Email me at </span> rijalaufa0@gmail.com
          </span>
          <Icon className="cursor-pointer" icon="bx:link-external" width="24" height="24" color="#F4F4F4" />
        </a>
        {/* <form action="" method="post" className="px-4 flex flex-col gap-5">
          <div className="form-item-group">
            <div className="form-item">
              <label className="text-primary" htmlFor="contact-name">
                Name
              </label>
              <input type="text" name="contact_name" id="contact-name" className="form-input" />
            </div>
            <div className="form-item">
              <label className="text-primary" htmlFor="contact-email">
                Email
              </label>
              <input type="email" name="contact_email" id="contact-email" className="form-input" />
            </div>
            <div className="form-item">
              <label className="text-primary" htmlFor="contact-subject">
                Subject
              </label>
              <input type="text" name="contact_subject" id="contact-subject" className="form-input" />
            </div>
          </div>
          <div className="form-item">
            <label className="text-primary" htmlFor="contact-message">
              Message
            </label>
            <textarea name="contact_message" id="contact-message" className="form-input"></textarea>
          </div>
          <div className="flex justify-center">
            <button onClick={handleContactSubmit} type="button" className="cursor-pointer w-max h-max py-2 px-4 gap-2 bg-primary rounded-full flex items-center justify-center shadow-primary/10 shadow-lg text-light">
              Send Message
            </button>
          </div>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
