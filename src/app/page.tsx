"use client"
import Link from "next/link";
import "./main.css";
import { Scene } from "./components/first-section/scene";
import { SecondSection } from "./components/second-section/second-section";


export default function Home() {
  return (
    <>
      <header className="main">
        <Scene />
        <div className="main-title">
          <h1>
            Regina <br /> Borgno
          </h1>
        </div>
        <div className="main-about">
          <h2>
            I am a Full Stack Software Developer
            <br />
            with experience building
            <br />
            nice things.
          </h2>
        </div>
        <div className="main-contact">
          <h3>
            You can contact me on{" "}
            <Link href="https://uy.linkedin.com/in/regina-borgno-dalla-rizza">
              LinkedIn
            </Link>
          </h3>
        </div>
      </header>
      <section className="second-section">
        <h2 className="second-section-title">I have been working with:</h2>
        <SecondSection />
      </section>
    </>
  );
}
