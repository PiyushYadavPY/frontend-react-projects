import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { GiVibratingSmartphone } from "react-icons/gi";
import { MdOutlineMail } from "react-icons/md";
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("piyush");
  const [email, setEmail] = useState("piyush@gmail.com");
  const [text, setText] = useState("hi");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
            text="VIA CALL"
            icon={<GiVibratingSmartphone fontSize="24px" />}
          />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdOutlineMail fontSize="24px" />}
        />
        <form action="" onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="name">Email</label>
            <input type="text" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="name">Text</label>
            <textarea name="text" rows="10" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="Submit" icon={<MdMessage fontSize="24px" />} />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./images/contact.svg" alt="" />
      </div>
    </section>
  );
}

export default ContactForm;
