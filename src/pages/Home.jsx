import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Words from "../components/Words";
import Cognition from "../components/Cognition";
import Widget from "../components/Widget";
import Footer from "../components/Footer";
import SponsorForm from "../components/SponsorForm";

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "100";
    canvas.style.pointerEvents = "none";
    document.body.style.cursor = "none";

    let particles = [];
    let isOnFrame = false;

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 6 + 2;
        this.life = 60;
        this.velocityX = (Math.random() - 0.5) * 2;
        this.velocityY = (Math.random() - 0.5) * 2;
        this.color = color;
      }
      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.life -= 1.5;
        this.size *= 0.96;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const checkIfOnFrame = (x, y) => {
      const frames = document.querySelectorAll(".photo-frame");
      return Array.from(frames).some((frame) => {
        const rect = frame.getBoundingClientRect();
        return (
          x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
        );
      });
    };

    const animateParticles = (e) => {
      isOnFrame = checkIfOnFrame(e.clientX, e.clientY);
      particles.push(
        new Particle(
          e.clientX,
          e.clientY,
          isOnFrame ? "black" : "rgba(255, 223, 0, 0.8)"
        )
      );
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, index) => {
        p.update();
        p.draw();
        if (p.life <= 0) particles.splice(index, 1);
      });
      requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", animateParticles);
    render();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener("mousemove", animateParticles);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      <title>Cognition</title>
      <main className="min-h-screen overflow-hidden relative pt-20 bg-black text-white">
        <Navbar />
        <Words />
        <Cognition />
        <Widget />
        <SponsorForm />
        <Footer />
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        />
      </main>
    </>
  );
}
