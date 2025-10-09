import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, Trophy } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Briefcase, value: "10+", label: "Projects" },
    { icon: Calendar, value: "4+", label: "Years" },
    { icon: Trophy, value: "100%", label: "Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="gradient-text">Me</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 mb-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Java Developer with 4+ years of experience in designing and deploying
              scalable web applications, RESTful APIs, and cloud-native
              microservices. Proficient in Java 17/11/8, Spring Boot, Hibernate, JPA,
              Angular, React.js, Node.js, AWS, Docker, Kubernetes, and CI/CD
              pipelines. Experienced in database design (MySQL, PostgreSQL, Oracle,
              MongoDB), event-driven architectures (Kafka, RabbitMQ), and TDD/BDD
              testing. Skilled in optimizing system performance, delivering secure,
              high-performing applications, and achieving Agile sprint goals across
              finance, ERP, and telecom domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 text-center group hover:glow-teal transition-all"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
