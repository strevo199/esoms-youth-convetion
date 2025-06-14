"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
            <li className="menu-item current">
              <Link href="/about" className="menu-link">
                About
              </Link>
            </li>
            <li className="menu-item">
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
            <li className="nav-item current">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
      <main className="about">
        <div className="main1">
          <h1>ABOUT NIGHT OF PRAISE</h1>
        </div>
        <div className="main2">
          <div className="mainContent">
            <h2>About youth CONVENTION</h2>
            <p>
              The Lagos Province Youth Fellowship Ministry is the youth forum of
              the Eternal Sacred Order of the Morning Star and Saint Michael
              Star Fountain of Life Mount Zion Church.
            </p>
            <p>
              A church with numerous parishes both nationally and
              internationally. We are a ministry charged with the responsibility
              of ensuring a sustainable growth and development of youth,
              promoting peace, love, and unity, empowering youth to uncover
              their hidden potentials and as a result benefitting the church and
              the community at large. We have had series of youth programs such
              as World Bible day for the Youth, Conventions that have shaped
              lifes and conferences with over 1,000 participants and we aim to
              continue in building a strong body of christ and a community where
              future leaders are nurtured. Coming up from the 25th of July
              through to the 27th. <span>From 9am daily</span>
            </p>

            <h2>Mission</h2>
            <p>
              ✓PROMOTE YOUTH LEADERSHIP AND INNOVATION <br />
              <br />
              ✓PROVISION OF SOFT LOANS FOR SMALL SCALE BUSINESS ENTREPRENURE.
              <br />
              <br />
              ✓ TRAINING AT LEAST 200 ATTENDEES ON SKILL ACQUISITION <br />
              <br />
              Seek hope, peace, justice, and unity of the body of Christ and
              live out our faith in Christ’s service to all.
            </p>
          </div>
        </div>
      </main>

      {/* Social Media Connect */}
      <section className="connect">
        <h5>Connect With Us on Social Media</h5>
        <div className="connectmeadia">
          <div className="connectmeadia-us">
            <a href="#">
              <i
                className="fab fa-2x fa-facebook-square"
                aria-hidden="true"
              ></i>{" "}
              <span>Follow</span>
            </a>
          </div>
          <div className="connectmeadia-us">
            <a href="#">
              <i className="fab fa-2x fa-instagram"></i> <span>Follow</span>
            </a>
          </div>
          <div className="connectmeadia-us">
            <a href="#">
              <i className="fab fa-2x fa-twitter-square" aria-hidden="true"></i>{" "}
              <span>Follow</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-main">EYP &copy; 2020</footer>
    </div>
  );
}
