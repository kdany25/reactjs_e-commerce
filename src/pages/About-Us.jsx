import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
      <>
       <Announcement />
      <Navbar />
    <section className="contacts">
      <div className="content">
        <h2>Myclikk</h2>
        <p>
        local online store with all Rwanda’s imports, where people can find anything they might want to buy online.
        </p>
      </div>
      <div className="containers">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <span class="material-icons-sharp">home</span>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>
                Post Box 23 <br />
                Kigali,Rwanda
              </p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <span class="material-icons-sharp">mark_email_read</span>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>kabadany99@yahoo.fr</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <span class="material-icons-sharp">tty</span>
            </div>
            <div className="text">
              <h3>Call</h3>
              <p>+250788730199</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form>
            <h2>Send Message</h2>

            <div className="inputBox">
              <input type="text" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" />
              <span>Email</span>
            </div>

            <div className="inputBox">
              <textarea></textarea>
              <span>Type your Message</span>
            </div>

            <div className="inputBox">
              <input type="Submit" value="send" />
            </div>
          </form>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
