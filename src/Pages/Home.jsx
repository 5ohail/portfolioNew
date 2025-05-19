import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, redirect } from "react-router-dom";
import { Power4 } from "gsap/gsap-core";
const Home = () => {
  const homeRef = useRef();
  const infoRef = useRef();
  const aboutRef = useRef();
  const [prod1, setProd1] = useState(false);
  const [prod2, setProd2] = useState(false);
  const [prod3, setProd3] = useState(false);
  const [prod4, setProd4] = useState(false);
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);
  const [q4, setQ4] = useState(false);
  const redirectTo = (url) => {
    window.location.href = url;
  };
  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);

      const split = new SplitText(homeRef.current.querySelector(".name"), {
        type: "chars",
      });

      const tl = gsap.timeline();
      tl.from(".img-container", {
        opacity: 0,
        scale: 0.8,
        rotate: "45deg",
        duration: 1.1,
      })
        .from(split.chars, {
          y: "40px",
          opacity: 0,
          stagger: {
            each: 0.04,
          },
          ease: "power4.out",
        })
        .from(".tagline", {
          x: "-100px",
          opacity: 0,
        });
    },
    { scope: homeRef }
  );
  useGSAP(
    () => {
      gsap.registerPlugin(SplitText, ScrollTrigger);

      const tags = aboutRef.current.querySelector(".home-about-resume div");

      const split = new SplitText(aboutRef.current.querySelector("p"), {
        type: "lines",
        linesClass: "line-wrapper",
        mask: "lines",
      });

      gsap.from(split.lines, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          once: true,
        },
      });

      gsap.from(".home-about-item img", {
        opacity: 0,
        scale: 0,
        rotate: "45deg",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          once: true,
        },
      });

      const mouseEnterAnim = () => {
        gsap.to(".home-about-resume h4", {
          yPercent: -190, // use a number, not "2rem"
        });
      };
      const mouseLeaveanim = () => {
        gsap.to(".home-about-resume h4", {
          yPercent: 0, // use a number, not "2rem"
        });
      };

      // ✅ Correct event name and location
      tags.addEventListener("mouseenter", mouseEnterAnim);
      tags.addEventListener("mouseleave", mouseLeaveanim);
      // 🔄 Cleanup
      return () => {
        tags.removeEventListener("mouseenter", mouseEnterAnim);
        tags.removeEventListener("mouseleave", mouseLeaveanim);
      };
    },
    { scope: aboutRef }
  );

  useEffect(() => {
    const img1 = infoRef.current.querySelector("#img1");
    const img2 = infoRef.current.querySelector("#img2");
    const img3 = infoRef.current.querySelector("#img3");
    const img4 = infoRef.current.querySelector("#img4");

    const handleEnter1 = () => setProd1(true);
    const handleLeave1 = () => setProd1(false);
    const handleEnter2 = () => setProd2(true);
    const handleLeave2 = () => setProd2(false);
    const handleEnter3 = () => setProd3(true);
    const handleLeave3 = () => setProd3(false);
    const handleEnter4 = () => setProd4(true);
    const handleLeave4 = () => setProd4(false);

    img1.addEventListener("mouseenter", handleEnter1);
    img1.addEventListener("mouseleave", handleLeave1);
    img2.addEventListener("mouseenter", handleEnter2);
    img2.addEventListener("mouseleave", handleLeave2);
    img3.addEventListener("mouseenter", handleEnter3);
    img3.addEventListener("mouseleave", handleLeave3);
    img4.addEventListener("mouseenter", handleEnter4);
    img4.addEventListener("mouseleave", handleLeave4);

    return () => {
      img1.removeEventListener("mouseenter", handleEnter1);
      img1.removeEventListener("mouseleave", handleLeave1);
      img2.removeEventListener("mouseenter", handleEnter2);
      img2.removeEventListener("mouseleave", handleLeave2);
      img3.removeEventListener("mouseenter", handleEnter3);
      img3.removeEventListener("mouseleave", handleLeave3);
      img4.removeEventListener("mouseenter", handleEnter4);
      img4.removeEventListener("mouseleave", handleLeave4);
    };
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prod1 && document.querySelector(".prod1")) {
        gsap.from(".prod1", { y: "20px", opacity: 0, duration: 0.8 });
      }
      if (prod2 && document.querySelector(".prod2")) {
        gsap.from(".prod2", { y: "20px", opacity: 0, duration: 0.8 });
      }
      if (prod3 && document.querySelector(".prod3")) {
        gsap.from(".prod3", { y: "20px", opacity: 0, duration: 0.8 });
      }
      if (prod4 && document.querySelector(".prod4")) {
        gsap.from(".prod4", { y: "20px", opacity: 0, duration: 0.8 });
      }
    }, infoRef);

    return () => ctx.revert();
  }, [prod1, prod2, prod3, prod4]);

  return (
    <>
      <Navbar />
      <div ref={homeRef} className="home">
        <div className="img-container">
          <img src="/me.jpg" alt="" className="me" />
        </div>
        <h4 className="tagline">
          I'm Specialised in
          <br />
          Creating Website Design
        </h4>
        <h1 className="name">SOHAIL</h1>
      </div>
      <div ref={infoRef} className="home-information">
        <div className="img-card">
          <div className="img-card-child">
            <div className="img" id="img1">
              <img
                src="https://plus.unsplash.com/premium_photo-1675186939926-ea6bf907a370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyYm9ufGVufDB8fDB8fHww"
                alt="carbon"
              />
            </div>
            {prod1 ? (
              <h3 className="prod1">Decentralised Carbon Tracker</h3>
            ) : (
              ""
            )}
          </div>
          <div className="img-card-child">
            <div className="img" id="img2">
              <img
                src="https://images.unsplash.com/photo-1666932521085-447127f3dcff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENsb3RoaW5nJTIwYmxhY2slMjBhZXN0aGV0aWMlMjBmb3IlMjBlY29tbWVyY2V8ZW58MHx8MHx8fDA%3D"
                alt="E-commerce"
              />
            </div>
            {prod2 ? <h3 className="prod2">Luxora - A clothing brand</h3> : ""}
          </div>
        </div>
        <div className="img-card">
          <div className="img-card-child">
            <div className="img" id="img3">
              <img
                src="https://images.unsplash.com/photo-1669461028866-84765a42b26a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjB0b3VyaXN0JTIwYWVzdGhldGljfGVufDB8fDB8fHww"
                alt="tourism"
              />
            </div>
            {prod3 ? (
              <h3 className="prod3">Tourism guide platform</h3>
            ) : (
              <h3></h3>
            )}
          </div>
          <div className="img-card-child">
            <div className="img" id="img4">
              <img
                src="https://images.unsplash.com/photo-1707683460791-bd3e5faeaffd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVzc2lvbiUyMGJsYWNrJTIwYWVzdGhldGljfGVufDB8fDB8fHww"
                alt="confession"
              />
            </div>
            {prod4 ? <h3 className="prod4">Confession Platform</h3> : ""}
          </div>
        </div>
      </div>
      <div className="home-services">
        <h2>My Skills</h2>
        <div className="home-services-item">
          <span>01</span>
          <h3>Website Design</h3>
          <span className="arrow" id="arrow1">
            &#8594;
          </span>
        </div>
        <div className="home-services-item">
          <span>02</span>
          <h3>Fullstack Website</h3>
          <span className="arrow">&#8594;</span>
        </div>
      </div>
      <div ref={aboutRef} className="home-about">
        <div className="home-about-item">
          <div className="home-about-text">
            <h2>About Me</h2>
            <p>
              I’m Sohail Ansari, a Computer Science student at Geetanjali
              Institute Of Technical Studies and a passionate web developer. I
              specialize in building modern, responsive web applications using
              React and Firebase. I take pride in writing clean, efficient code
              and designing user-friendly interfaces that provide seamless and
              engaging experiences. Constantly learning and improving, I enjoy
              tackling new challenges and turning ideas into functional,
              polished websites.
            </p>
            <div className="home-about-resume">
              <a href="/resume.pdf" download>
                <button className="home-about-button">
                  VIEW RESUME &#8594;
                </button>
              </a>
              <div>
                <h4>BTECH</h4>
                <h4>CSE</h4>
              </div>
            </div>
          </div>
          <img src="/me.jpg" alt="me" />
        </div>
      </div>
      <div className="home-services">
        <h2>Let's Connect</h2>
        <div
          className="home-services-item"
          onClick={() => redirectTo("https://instagram.com/sohx1l")}
        >
          <span>01</span>
          <h3>INSTAGRAM</h3>
          <span className="arrow" id="arrow1">
            &#8594;
          </span>
        </div>
        <div
          className="home-services-item"
          onClick={() => redirectTo("https://linkedin.com/in/sohailansari163")}
        >
          <span>02</span>
          <h3>LINKEDIN</h3>
          <span className="arrow" id="arrow2">
            &#8594;
          </span>
        </div>
        <div
          className="home-services-item"
          onClick={() => redirectTo("https://github.com/5ohail")}
        >
          <span>03</span>
          <h3>GITHUB</h3>
          <span className="arrow" id="arrow3">
            &#8594;
          </span>
        </div>
      </div>
      <div className="home-Faqs">
        <h1>
          Common
          <br />
          Questions
        </h1>
        <div className="home-Faqs-questions">
          <div className="home-Faqs-qContainer" onClick={() => setQ1(!q1)}>
            <div className="home-faq-container">
              <h3>What Technologies have you learned so far?</h3>
              <h3 className="sign">{q1 ? "-" : "+"}</h3>
            </div>
            <div className={`faq-answer ${q1 ? "show" : ""}`}>
              <p>
                I've learned HTML, CSS, JavaScript, React, Node.js, Firebase,
                Git, and basics of C, C++ & Java
              </p>
            </div>
          </div>

          <div className="home-Faqs-qContainer" onClick={() => setQ2(!q2)}>
            <div className="home-faq-container">
              <h3>Did you build this Portfolio Website from Scratch?</h3>
              <h3 className="sign">{q2 ? "-" : "+"}</h3>
            </div>
            <div className={`faq-answer ${q2 ? "show" : ""}`}>
              <p>
                Yes, I designed and developed it from scratch using React and
                Vite.
              </p>
            </div>
          </div>

          <div className="home-Faqs-qContainer" onClick={() => setQ3(!q3)}>
            <div className="home-faq-container">
              <h3>What kind of Projects are you currently working on?</h3>
              <h3 className="sign">{q3 ? "-" : "+"}</h3>
            </div>
            <div className={`faq-answer ${q3 ? "show" : ""}`}>
              <p>
                I'm working on a carbon footprint calculator, an IoT data
                dashboard, and some small full-stack apps.
              </p>
            </div>
          </div>

          <div className="home-Faqs-qContainer" onClick={() => setQ4(!q4)}>
            <div className="home-faq-container">
              <h3>How are you planning to grow your Skills in Future?</h3>
              <h3 className="sign">{q4 ? "-" : "+"}</h3>
            </div>
            <div className={`faq-answer ${q4 ? "show" : ""}`}>
              <p>
                By building more projects, exploring AI and backend development,
                and participating in coding contests and open-source.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <div><p>sohailansarisa318@gmail.com</p></div>
        <div><p>&#xA9; 2025 Sohail Ansari. All rights reserved.</p></div>
      </div>
    </>
  );
};

export default Home;
