import { useEffect, useState } from "react";
import classes from "./ContactForm.module.css";
import Notification from "../ui/notification";

const initialFormState = {
  email: "",
  name: "",
  message: "",
};

async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
}

export default function ContactForm() {
  const [formValues, setFormValues] = useState(initialFormState);
  const [reqStatus, setReqStatus] = useState(); // pending success error
  const [reqError, setReqError] = useState();

  useEffect(() => {
    if (reqStatus !== "pending") {
      const timer = setTimeout(() => {
        setReqStatus(null);
        setReqError(null);
      }, 3000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [reqStatus]);

  function handleOnChange(e) {
    setFormValues((v) => ({ ...v, [e.target.id]: e.target.value }));
  }

  async function sendMessageHandler(e) {
    e.preventDefault();
    setReqStatus("pending");

    try {
      await sendContactData(formValues);
      setReqStatus("success");
      setFormValues(initialFormState);
    } catch (error) {
      setReqError(error.message);
      setReqStatus("error");
    }
  }

  let notification;

  if (reqStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message",
      message: "Your message is on its way",
    };
  }

  if (reqStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully",
    };
  }

  if (reqStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: reqError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can i help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={formValues.email}
              onChange={handleOnChange}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={formValues.name}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">You Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formValues.message}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}
