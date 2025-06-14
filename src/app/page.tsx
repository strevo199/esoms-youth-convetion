"use client";

import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <>
      <Head>
        <title>Welcome to Night of Praise</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
          integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
          crossOrigin="anonymous"
        />
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
      </Head>

      {/* Navbar */}
      <header>
        <div className="menu2">
          <ul className="menu">
            <li className="menu-item current"><Link href="/">Home</Link></li>
            <li className="menu-item"><Link href="/about">About</Link></li>
            <li className="menu-item"><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <nav className="nav-wrapper">
          <Link  href="/"><Image className=' rounded-full' height={60} width={60} src="/img/church.jpg" alt="Logo" /></Link>
          <div className="menu-btn" onClick={toggleMenu}>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
          </div>

          <ul className={`nav-list ${menuOpen ? 'show' : ''}`}>
            <li className="nav-item current"><Link href="/">Home</Link></li>
            <li className="nav-item"><Link href="/about">About</Link></li>
            <li className="nav-item"><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="showcase">
          <h1 className="two">Welcome To 2025 youth CONVENTION</h1>
        </div>
      </header>

      <section className="singup">
        <h2>Be part of youth CONVENTION. Sign up for FREE now</h2>
        <form className="form1" method="post">
          <div className="input-field">
            <input className="form-control" type="text" name="name" placeholder="Name" required />
          </div>
          <div className="input-field">
            <input className="form-control" type="email" name="email" placeholder="Email" required />
          </div>
          <div className="input-field">
            <input  type="submit" className="btn" value="REGISTER NOW" />
          </div>
        </form>
      </section>

      {/* Briefing Section */}
      <section className="breifing">
        <div className="event event-1">
          <Image src="/img/sds.jpg" width={400} height={300} alt="choir" />
        </div>
        <div className="event event-2">
          <h3>ESOMS</h3>
          <p>A church with numerous parishes both nationally and
              internationally. We are a ministry charged with the responsibility
              of ensuring a sustainable growth and development of youth,
              promoting peace, love, and unity, empowering youth to uncover
              their hidden potentials and as a result benefitting the church and
              the community at large. We have had series of youth programs such
              as World Bible day for the Youth, Conventions that have shaped
              lifes and conferences with over 1,000 participants and we aim to
              continue in building a strong body of christ and a community where
              future leaders are nurtured. Coming up from the 25th of July
              through to the 27th.</p>
        </div>
        <div className="event event-3">
          <h3>Mission</h3>
          <ul>
            <li>✓PROMOTE YOUTH LEADERSHIP AND INNOVATION.</li>
            <li>✓PROVISION OF SOFT LOANS FOR SMALL SCALE BUSINESS ENTREPRENURE.</li>
            <li>✓ TRAINING AT LEAST 200 ATTENDEES ON SKILL ACQUISITION </li>
            <li>Share God’s love with others.</li>
          </ul>
        </div>
        <div className="event event-4">
          <Image src="/img/Creativity-792.jpg" width={400} height={300} alt="choir" />
        </div>
      </section>

      {/* Word Ministers */}
      <section className="ministers">
        <h1>Word Ministers</h1>
        <div className="theminsters">
          {[
            { src: '/img/Apostle-Joshua-Selman-messages--1078x640.jpg', name: 'Apostle Joshua Selman' },
            { src: '/img/REV.-MOTHER-ESTHER-AJAYI.jpg', name: 'Rev. Mother Esther Ajayi' },
            { src: '/img/Bishop-Humphrey-Erumaka.jpeg', name: 'Rev. Humphyrey Erumaka' },
            { src: '/img/vllkytgo0q10df0mk.jpg', name: 'Pst. David Oyedepo' },
            { src: '/img/proph-Israel-O.-Ogundipe.jpg', name: 'Prophet Israel O. Ogundipe' },
            { src: '/img/Rev.-Prof-Yusufu-Turaki.jpg', name: 'Rev. (Prof) Yusufu Turaki' },
          ].map((minister, index) => (
            <div className="word" key={index}>
              <Image src={minister.src} width={300} height={200} alt={minister.name} />
              <p>{minister.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Artistes Section */}
      <section className="artistes">
        <h2>Present Guest Artistes</h2>
        <div className="ourartistes">
          {[
            { src: '/img/SAMMY-OKPOSO.jpg', name: 'Sammy Okposo' },
            { src: '/img/topealabi.jpg', name: 'Tope Alabi' },
            { src: '/img/TIM-GODFREY.jpg', name: 'Tim Godfrey' },
            { src: '/img/GOZIE-OKEKE.jpg', name: 'Gozie Okeke' },
            { src: '/img/cobhams-asuquo.jpg', name: 'Cobhams Asuquo' },
            { src: '/img/CHINYERE-UDOMA.jpg', name: 'Chinyere Udoma' },
            { src: '/img/TOSIN-BEE.jpeg', name: 'Tosin Bee' },
            { src: '/img/JOE-PRAISE.jpg', name: 'Joe Praise' },
            { src: '/img/Eben.jpg', name: 'Eben' },
            { src: '/img/FRANK-EDWARDS.jpg', name: 'Frank Edward' },
            { src: '/img/Efe-Nathan.jpeg', name: 'Efe Nathan' },
            { src: '/img/ada.jpg', name: 'Ada' },
          ].map((artist, index) => (
            <div className={`guest guest-${index + 1}`} key={index}>
              <Image src={artist.src} width={300} height={200} alt={artist.name} />
              <p>{artist.name}</p>
            </div>
          ))}
        </div>
        <div className="guest-13">
          <Image src="/img/CCC-Central-choir.jpg" width={400} height={300} alt="CCC Central choir" />
          <p>CCC Central choir</p>
        </div>
      </section>

      {/* Second Signup Section */}
      <section className="singup">
        <h2>Be part of ESOMS Youth Convention. Sign up for FREE now</h2>
        <form className="form1" method="post">
          <div className="input-field">
            <input className="form-control" type="text" name="name" placeholder="Name" required />
          </div>
          <div className="input-field">
            <input className="form-control" type="email" name="email" placeholder="Email" required />
          </div>
          <div className="input-field">
            <input type="submit" className="btn" value="REGISTER NOW" />
          </div>
        </form>
      </section>

      {/* Social Media Links */}
      <section className="connect">
        <h5>Connect With Us on Social Media</h5>
        <div className="connectmeadia">
          {[
            { icon: 'fa-facebook-square', link: '' },
            { icon: 'fa-instagram', link: '' },
            { icon: 'fa-twitter-square', link: '' },
          ].map((social, index) => (
            <div className="connectmeadia-us" key={index}>
              <a href={social.link}>
                <i className={`fab fa-2x ${social.icon}`} aria-hidden="true"></i> <span>Follow</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-main">
        ESOMS church &copy; 2025
      </footer>
    </>
  )
}
