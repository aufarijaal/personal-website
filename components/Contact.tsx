import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Contact = () => {
  const [showLoading, setshowLoading] = useState(false);
  const handleContactSubmit = () => {
    setshowLoading(true);
    setTimeout(() => setshowLoading(false), 3000);
  };
  return (
    <section id="contact" className="h-max py-20 bg-light flex flex-col gap-10 relative">
      {showLoading && (
        <AnimatePresence>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="loading-overlay absolute bg-black/40 h-full w-full flex justify-center items-center top-0"
          >
            <Icon icon="eos-icons:loading" width={48} height={48} color="#ffffff" />
          </motion.div>
        </AnimatePresence>
      )}
      <div className="text-center font-bold text-2xl text-primary">Contact me</div>
      <div className="contact-container flex justify-center">
        <form action="" method="post" className="px-4 flex flex-col gap-5">
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
            <button onClick={handleContactSubmit} type="button" className="bg-primary w-max px-3 py-2 rounded-md text-light">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
