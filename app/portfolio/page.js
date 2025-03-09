import { FaUsers, FaStore, FaFileAlt } from "react-icons/fa";

export default function Portfolio() {
  // Data proyek dengan ikon
  const projects = [
    {
      title: "Web Pengaduan Masyarakat",
      description: "Aplikasi untuk melaporkan pengaduan secara online ",
      icon: <FaUsers className="project-icon" />,
    },
    {
      title: "Sistem Informasi Akuntansi",
      description: "Sistem akuntansi untuk Toko Faiz Fotocopy dengan laporan keuangan ",
      icon: <FaStore className="project-icon" />,
    },
    {
      title: "Web CV Pribadi",
      description: "Website CV interaktif yang menampilkan portofolio dan pengalaman kerja",
      icon: <FaFileAlt className="project-icon" />,
    },
  ];

  return (
    <section className="portfolio-container">
      <h1 className="portfolio-title">Portfolio</h1>
      <p className="portfolio-subtitle">Berikut beberapa proyek yang pernah saya kerjakan:</p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {project.icon}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
