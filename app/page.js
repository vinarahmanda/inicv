"use client";
import Image from "next/image";
import "./globals.css"; // Pastikan styling masuk ke globals.css

export default function Home() {
  return (
    <section className="home-container">
      <div className="photo-container">
        <div className="rotating-border"></div> {/* Garis putih berputar */}
        <Image src="/v.jpg" alt="Vina Rahmanda Indriyani" width={200} height={200} className="profile-photo" />
      </div>
      <h1 className="home-title">Selamat Datang di Website Saya!</h1>
      <p className="home-subtitle">Saya Vina Rahmanda Indriyani, Mahasiswa Komputerisasi Akuntansi yang memiliki passion di dunia IT.</p>
    </section>
  );
}
