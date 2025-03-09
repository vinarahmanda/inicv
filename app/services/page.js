import { FaLaptopCode, FaDatabase, FaPenNib, FaFileInvoice } from "react-icons/fa";

export default function Services() {
  return (
    <section className="services-container">
      <h1 className="services-title">Layanan Saya</h1>

      <div className="services-list">
        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h3>Pembuatan Website Sederhana</h3>
          <p>Membantu membuat website portfolio, blog, atau landing page sederhana.</p>
        </div>

        <div className="service-card">
          <FaDatabase className="service-icon" />
          <h3>Belajar Database</h3>
          <p>Membantu memahami dasar-dasar SQL dan pengelolaan database.</p>
        </div>

        <div className="service-card">
          <FaPenNib className="service-icon" />
          <h3>Desain Logo & Poster</h3>
          <p>Membantu membuat desain sederhana untuk tugas atau proyek pribadi.</p>
        </div>

        <div className="service-card">
          <FaFileInvoice className="service-icon" />
          <h3>Pemahaman Akuntansi Dasar</h3>
          <p>Membantu memahami konsep dasar akuntansi untuk pemula.</p>
        </div>
      </div>
    </section>
  );
}
