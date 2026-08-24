import { motion } from 'framer-motion';
import styles from '@/styles/Projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: "EchoMind",
      tag: "Conversational AI",
      desc: "An AI conversational platform exploring natural, context-aware dialogue, built end-to-end on the Gemini API.",
      stack: ["Next.js", "TypeScript", "React", "Gemini API"],
      thumbClass: styles.pThumb1,
      icon: <svg className="icon" viewBox="0 0 24 24"><path d="M9 4a3 3 0 0 0-3 3v.3A3 3 0 0 0 4 10v1a3 3 0 0 0 1.2 2.4A3 3 0 0 0 5 15a3 3 0 0 0 3 3h1v2M15 4a3 3 0 0 1 3 3v.3a3 3 0 0 1 2 2.7v1a3 3 0 0 1-1.2 2.4A3 3 0 0 1 19 15a3 3 0 0 1-3 3h-1v2M9 4h6M9 20h6M9 8h1M14 8h1M9 12h6M9 16h1M14 16h1"/></svg>
    },
    {
      title: "WellNest",
      tag: "Healthtech",
      desc: "An eldercare support platform connecting families with care tools, reminders, and resources in one place.",
      stack: ["React", "Node.js", "PostgreSQL", "Firebase", "Gemini API"],
      thumbClass: styles.pThumb2,
      icon: <svg className="icon" viewBox="0 0 24 24"><path d="M20.8 8.6c0 5-8.8 10.4-8.8 10.4S3.2 13.6 3.2 8.6a4.6 4.6 0 0 1 8.8-1.9 4.6 4.6 0 0 1 8.8 1.9z"/><path d="M4 12h3l1.5-3L11 15l1.5-4.5L14 12h6"/></svg>
    },
    {
      title: "ML Nutritionist",
      tag: "Applied ML",
      desc: "A machine learning model recommending nutrition plans, comparing Random Forest, SVM, and KNN approaches.",
      metric: "R² 0.94 (regression) · 88% accuracy (classification)",
      stack: ["Python", "Scikit-learn", "Pandas"],
      thumbClass: styles.pThumb3,
      icon: <svg className="icon" viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>
    },
    {
      title: "Assistive Vision Model",
      tag: "Accessibility",
      desc: "An ML project that identifies surroundings and warns of nearby hazards, built to assist visually impaired users.",
      stack: ["Python", "Machine Learning"],
      thumbClass: styles.pThumb4,
      icon: <svg className="icon" viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
    }
  ];

  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <svg className="icon sec-icon" viewBox="0 0 24 24"><path d="M9 6 3 12l6 6M15 6l6 6-6 6"/></svg>
          <span className="section-num">03</span>
          <h2>Projects</h2>
          <div className="rule"></div>
        </div>
        
        <div className="grid-2">
          {projects.map((p, i) => (
            <motion.div 
              className={styles.projectCard}
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={`${styles.projectThumb} ${p.thumbClass}`}>
                {p.icon}
              </div>
              <div className={styles.projectBody}>
                <div className={styles.projectTop}>
                  <h3>{p.title}</h3>
                  <span className={styles.evalTag}>{p.tag}</span>
                </div>
                <p className={styles.desc}>{p.desc}</p>
                {p.metric && <div className={styles.projectMetric}>{p.metric}</div>}
                <div className={styles.stackRow}>
                  {p.stack.map(s => <span key={s} className={styles.stackChip}>{s}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
