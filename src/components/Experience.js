import { motion } from 'framer-motion';
import styles from '@/styles/Experience.module.css';

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <svg className="icon sec-icon" viewBox="0 0 24 24"><path d="M12 3 2 8l10 5 10-5-10-5z"/><path d="M2 13l10 5 10-5M2 18l10 5 10-5"/></svg>
          <span className="section-num">02</span>
          <h2>Experience</h2>
          <div className="rule"></div>
        </div>
        
        <div className={styles.timeline}>
          {[
            {
              badge: "A",
              time: "MAY 2026 — PRESENT",
              role: "LLM Evaluation & Training Data Specialist",
              company: "Appen",
              desc: "Evaluating and refining LLM outputs against structured rubrics across annotation and data quality projects."
            },
            {
              badge: "O",
              time: "OCT 2025 — PRESENT",
              role: "LLM Evaluation & Training Data Specialist",
              company: "Outlier AI",
              desc: "Writing prompts, running comparative benchmarking across Gemini, ChatGPT, and Claude, and building rubric-based evaluation frameworks for model responses."
            },
            {
              badge: "C",
              time: "ONGOING",
              role: "Freelance Contributor",
              company: "CrowdGen",
              desc: "Supporting data annotation and evaluation workflows across multiple project pipelines."
            }
          ].map((item, index) => (
            <motion.div 
              className={styles.tItem} 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.coBadge}>{item.badge}</div>
              <div>
                <div className={styles.tTime}>{item.time}</div>
                <div className={styles.tRole}>{item.role} <span>· {item.company}</span></div>
                <div className={styles.tDesc}>{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
