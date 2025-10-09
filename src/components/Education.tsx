import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Master of Science in Information Systems Management",
      institution: "Marist College",
      location: "Poughkeepsie, NY",
      period: "Jan 2023 – Dec 2024",
    },
    {
      degree: "Bachelor of Engineering in ECE",
      institution: "Methodist College of Engineering & Technology",
      location: "Hyderabad",
      period: "Aug 2017 – Jun 2021",
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="gradient-text">Education</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-8 hover:glow-teal transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="p-4 bg-primary/10 rounded-lg self-start group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-12 w-12 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-secondary font-semibold mb-4">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
