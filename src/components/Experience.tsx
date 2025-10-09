import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: "Verizon",
      title: "Software Engineer",
      location: "USA",
      period: "Feb 2025 – Present",
      achievements: [
        "Engineered Spring Boot microservices and REST APIs to integrate Oracle Fusion with external finance systems, reducing reconciliation time by 35%.",
        "Designed AWS-native services (Lambda, RDS, API Gateway, SQS), scaling system throughput by 40%.",
        "Created React.js dashboards and Angular 9 modules, reducing manual reporting delays by 25%.",
        "Established Kafka/RabbitMQ pipelines lowering latency by 40%.",
        "Improved API performance with Redis caching and SQL optimization (30% faster).",
        "Automated test frameworks with JUnit/Mockito/Postman (85% coverage).",
        "Containerized microservices with Docker/Kubernetes (99.9% uptime).",
        "Collaborated in Scrum ceremonies aligning business priorities.",
      ],
    },
    {
      company: "Wipro Limited",
      title: "Backend Developer",
      location: "Chennai, India",
      period: "Oct 2021 – Jan 2023",
      achievements: [
        "Developed Spring Boot microservices integrating Oracle Fusion Financials, reducing manual reconciliation time by 30%.",
        "Automated SQL reports, accelerating month-end close by 25%.",
        "Built dynamic dashboards with React.js and AngularJS, cutting reporting delays by 20%.",
        "Configured AWS CloudWatch monitoring, decreasing financial errors by 35%.",
        "Designed automated test suites with JUnit, Selenium, Jenkins (85% coverage).",
        "Implemented Redis caching improving ERP response times.",
        "Containerized backend microservices with Docker reducing defects by 40%.",
        "Partnered with Agile teams for finance compliance and sprint delivery.",
      ],
    },
    {
      company: "Silicon Matrix",
      title: "Java Developer",
      location: "Hyderabad, India",
      period: "Jul 2019 – Oct 2021",
      achievements: [
        "Developed Java EE backend services for GL, AP, AR, and Asset modules, reducing reconciliation errors by 20%.",
        "Implemented Spring MVC & Hibernate ORM improving data consistency by 25%.",
        "Built RESTful APIs enabling real-time third-party integration (30% improvement).",
        "Designed interactive dashboards with AngularJS/React.js/Bootstrap.",
        "Led SQL/PL-SQL data migration ensuring 100% accuracy.",
        "Automated regression testing with JUnit/Selenium (85% coverage).",
        "Participated in Agile sprint planning and code reviews.",
        "Optimized backend performance improving throughput by 20%.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0
                  ? "md:pr-1/2 md:text-right"
                  : "md:pl-1/2 md:ml-auto"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-0 w-4 h-4 bg-primary rounded-full border-4 border-background
                ${index % 2 === 0 ? "left-6 md:right-[-8px]" : "left-6 md:left-[-8px]"}
                `}
              />

              <div className="ml-16 md:ml-0 md:w-full">
                <div className="glass-card p-6 hover:glow-teal transition-all group">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {exp.company}
                    </h3>
                    <span className="hidden md:inline text-muted-foreground">•</span>
                    <span className="text-lg text-primary font-semibold">
                      {exp.title}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2 text-left">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-primary mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
