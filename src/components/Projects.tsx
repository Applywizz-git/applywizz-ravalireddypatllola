import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import degreeWorksImg from "@/assets/project-degree-works.jpg";
import transitDbImg from "@/assets/project-transit-db.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Degree Works Prototype",
      description:
        "A comprehensive degree tracking system built with Java Spring Boot and React.js, featuring real-time progress monitoring and responsive design.",
      tech: ["Java Spring Boot", "MySQL", "React.js", "TailwindCSS"],
      features: [
        "Real-time degree tracking",
        "Responsive design",
        "Role-based access control (RBAC)",
        "UX feedback integration",
      ],
      image: degreeWorksImg,
    },
    {
      title: "Public Transit Database",
      description:
        "Centralized SQL database system for transit operations management, optimizing employee scheduling, route management, and revenue tracking.",
      tech: ["Java", "SQL", "HTML5", "CSS3"],
      features: [
        "Centralized DB for transit operations",
        "Optimized SQL queries for scheduling/reporting",
        "Admin interface for data management",
        "Employee, routes, and revenue tracking",
      ],
      image: transitDbImg,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden"
      ref={ref}
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
            className="pb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide
                key={index}
                className="max-w-2xl"
                style={{ width: "auto" }}
              >
                <div className="glass-card p-8 hover:glow-violet transition-all h-full">
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>

                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 text-lg">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="text-primary mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
