import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "Python", "JavaScript (ES6+)", "TypeScript", "SQL"],
    },
    {
      category: "Backend",
      skills: [
        "Spring Boot",
        "Spring MVC",
        "Spring Security",
        "Hibernate",
        "JPA",
        "REST",
        "GraphQL",
        "Microservices",
      ],
    },
    {
      category: "Frontend",
      skills: [
        "React.js",
        "Angular",
        "Node.js",
        "HTML5",
        "CSS3",
        "TailwindCSS",
        "Bootstrap",
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS EC2",
        "AWS S3",
        "AWS Lambda",
        "AWS RDS",
        "DynamoDB",
        "CloudWatch",
        "API Gateway",
        "SNS/SQS",
        "IAM",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "GitHub Actions",
        "Terraform",
        "CI/CD",
      ],
    },
    {
      category: "Databases",
      skills: ["Oracle", "MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      category: "Messaging",
      skills: ["Kafka", "RabbitMQ", "ActiveMQ"],
    },
    {
      category: "Tools",
      skills: ["Maven", "Gradle", "Git", "GitHub", "GitLab", "Bitbucket"],
    },
    {
      category: "Testing",
      skills: [
        "JUnit",
        "Mockito",
        "Selenium",
        "Cypress",
        "Postman",
        "TestNG",
        "TDD/BDD",
      ],
    },
    {
      category: "Servers",
      skills: ["Apache Tomcat", "JBoss", "Nginx"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 hover:glow-teal transition-all group"
            >
              <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-secondary transition-colors">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-background/50 text-foreground text-sm rounded-md border border-border hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
