"use client";
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
          <h2>{`I'm a Full Stack Software Developer who has had the privilege of contributing to various projects, 
          always focused on creating positive user experiences. I'm passionate about building thoughtful 
          solutions that make a difference.`}</h2>
        </div>
        <div className="main-contact">
          <h3>
            Feel free to reach out on{" "}
            <Link href="https://uy.linkedin.com/in/regina-borgno-dalla-rizza">
              LinkedIn
            </Link>
          </h3>
        </div>
      </header>
      <section className="second-section">
        <h2 className="second-section-title">
          I have experience working with:
        </h2>
        <SecondSection />
      </section>
    </>
  );
}
