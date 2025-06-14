"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // You can integrate your backend API here
  };

  return (
    <div>
      {/* Navbar */}
      <header>
        <div className="menu2">
          <ul className="menu">
            <li className="menu-item">
              <Link href="/" className="menu-link">
                Home
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/about" className="menu-link">
                About
              </Link>
            </li>
            <li className="menu-item current">
              <Link href="/contact" className="menu-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <nav className="nav-wrapper">
          <Link href="/">
            <Image
              className=" rounded-full"
              height={60}
              width={60}
              src="/img/church.jpg"
              alt="Logo"
            />
          </Link>

          <div className="menu-btn">
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
          </div>

          <ul className="nav-list">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item current">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Contact Section */}
      <main className="contact">
        <div className="contactMain">
          <h1>
            For Sponsorship: Please make donation to the bank details below:
          </h1>
          <p>Bank Name: Sass Bank PLC</p>
          <p>Account Number: ************</p>
          <p>Account Name: Night of Praise</p>
          <p>For more enquiries, please call Doyin: 07034615893, Daniel: 08068568831, Folarin: 07035641516, Bamisebi: 07054129949, Nike: 08051369962</p>
          <p>You Also Can Use The Form Below to Contact Us</p>
        </div>

        <form onSubmit={handleSubmit} className="donationFrom">
          <div className="input-field">
            <input
              type="text"
              placeholder="Name"
              className=" bg-white w-full h-12 rounded-lg px-10"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <input
              type="email"
              placeholder="Email Address"
              className=" bg-white w-full h-12 rounded-lg px-10"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <textarea
              id="message"
              rows={4}
              className=" bg-white w-full rounded-lg px-10"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <button type="submit" className="btn2">
              Submit <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer className="footer-main">EYP &copy; 2020</footer>
    </div>
  );
}
