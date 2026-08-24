import { motion } from 'framer-motion';
import styles from '@/styles/Skills.module.css';

export default function Skills() {
  const skillCats = [
    {
      label: "LANGUAGES",
      icon: <svg className="icon" viewBox="0 0 24 24"><path d="M9 6 3 12l6 6M15 6l6 6-6 6"/></svg>,
      skills: ["C", "C++", "Python", "JavaScript"]
    },
    {
      label: "WEB & FRAMEWORKS",
      icon: <svg className="icon" viewBox="0 0 24 24"><path d="M12 3 2 8l10 5 10-5-10-5z"/><path d="M2 13l10 5 10-5M2 18l10 5 10-5"/></svg>,
      skills: ["Next.js", "React", "Node.js", "Express.js", "HTML"]
    },
    {
      label: "AI / ML",
      icon: <svg className="icon" viewBox="0 0 24 24"><path d="M9 4a3 3 0 0 0-3 3v.3A3 3 0 0 0 4 10v1a3 3 0 0 0 1.2 2.4A3 3 0 0 0 5 15a3 3 0 0 0 3 3h1v2M15 4a3 3 0 0 1 3 3v.3a3 3 0 0 1 2 2.7v1a3 3 0 0 1-1.2 2.4A3 3 0 0 1 19 15a3 3 0 0 1-3 3h-1v2M9 4h6M9 20h6M9 8h1M14 8h1M9 12h6M9 16h1M14 16h1"/></svg>,
      skills: ["Scikit-learn", "Pandas", "Prompt Engineering", "LLM Evaluation", "RAG Concepts"]
    },
    {
      label: "TOOLS",
      icon: <svg className="icon" viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M9 7V3M15 7V3M9 21v-4M15 21v-4M7 9H3M7 15H3M21 9h-4M21 15h-4"/></svg>,
      skills: ["Git", "GitHub", "Firebase Auth", "API Integration"]
    }
  ];

  const marqueeItems = ["Python", "React", "Next.js", "LLM Evaluation", "Prompt Engineering", "Scikit-learn", "Node.js", "RAG", "C++", "JavaScript", "Git", "Pandas"];

  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <svg className="icon sec-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>
          <span className="section-num">04</span>
          <h2>Skills</h2>
          <div className="rule"></div>
        </div>
        
        <div className={styles.skillsGrid}>
          {skillCats.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={styles.skillCatLabel}>
                {cat.icon} {cat.label}
              </div>
              <div className={styles.skillChips}>
                {cat.skills.map(s => (
                  <span key={s} className={styles.skillChip}>{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className={styles.marquee}>
        <motion.div 
          className={styles.marqueeTrack}
          animate={{ x: [0, -1000] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {Array(4).fill(marqueeItems).flat().map((item, i) => (
            <div key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span>{item}</span>
              <span className={styles.dotSep}>·</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
