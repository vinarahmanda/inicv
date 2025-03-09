"use client";
import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 5000); // Reset pesan setelah 5 detik
  };

  return (
    <section className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <p className="contact-subtitle">Jangan ragu untuk menghubungi saya!</p>

      <div className="contact-content">
        {/* Informasi Kontak */}
        <div className="contact-info">
          <h3>Hubungi Saya</h3>
          <p>
            <FaWhatsapp className="contact-icon" /> <strong>WhatsApp:</strong> 087642575357
          </p>
          <p>
            <FaInstagram className="contact-icon" /> <strong>Instagram:</strong> @vinaricantik
          </p>
          <p>
            <FaEnvelope className="contact-icon" /> <strong>Email:</strong> vivi@gmail.com
          </p>
        </div>

        {/* Sekat Tengah */}
        <div className="divider"></div>

        {/* Formulir Kontak */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Contact Me</h3>
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>

          {messageSent && (
            <p className="success-message">✅ Pesan terkirim! Terima kasih telah meninggalkan pesan.</p>
          )}
        </form>
      </div>
    </section>
  );
}
