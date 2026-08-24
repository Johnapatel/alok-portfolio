import { motion } from 'framer-motion';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
  const achievements = [
    { label: "AWS Cloud Practitioner", tag: "CERTIFICATION", icon: <svg className="icon" viewBox="0 0 24 24"><circle cx="12" cy="8" r="5"/><path d="M8.5 12.5 7 21l5-2 5 2-1.5-8.5"/></svg> },
    { label: "Anthropic Academy — AI Fluency for Builders, Claude Platform 101, Claude Code 101, AI Capabilities and Limitations", tag: "CERTIFICATION", icon: <svg className="icon" viewBox="0 0 24 24"><circle cx="12" cy="8" r="5"/><path d="M8.5 12.5 7 21l5-2 5 2-1.5-8.5"/></svg> },
    { label: "OutlierEDU — Prompt Engineering & Rubrics", tag: "CERTIFICATION", icon: <svg className="icon" viewBox="0 0 24 24"><circle cx="12" cy="8" r="5"/><path d="M8.5 12.5 7 21l5-2 5 2-1.5-8.5"/></svg> },
    { label: "Full merit scholarship, Class 11–12 (Motion Coaching Institute)", tag: "ACHIEVEMENT", icon: <svg className="icon" viewBox="0 0 24 24"><path d="M8 4h8v4a4 4 0 0 1-8 0V4z"/><path d="M8 4H5a3 3 0 0 0 3 5M16 4h3a3 3 0 0 1-3 5"/><path d="M12 13v3M9 20h6M9 20l.5-3h5l.5 3"/></svg> },
    { label: "NTSE Qualifier", tag: "ACHIEVEMENT", icon: <svg className="icon" viewBox="0 0 24 24"><path d="M8 4h8v4a4 4 0 0 1-8 0V4z"/><path d="M8 4H5a3 3 0 0 0 3 5M16 4h3a3 3 0 0 1-3 5"/><path d="M12 13v3M9 20h6M9 20l.5-3h5l.5 3"/></svg> },
    { label: "3rd Place, College Hackathon", tag: "ACHIEVEMENT", icon: <svg className="icon" viewBox="0 0 24 24"><path d="M8 4h8v4a4 4 0 0 1-8 0V4z"/><path d="M8 4H5a3 3 0 0 0 3 5M16 4h3a3 3 0 0 1-3 5"/><path d="M12 13v3M9 20h6M9 20l.5-3h5l.5 3"/></svg> }
  ];

  return (
    <>
      <section id="achievements">
        <div className="wrap">
          <div className="section-head">
            <svg className="icon sec-icon" viewBox="0 0 24 24"><path d="M8 4h8v4a4 4 0 0 1-8 0V4z"/><path d="M8 4H5a3 3 0 0 0 3 5M16 4h3a3 3 0 0 1-3 5"/><path d="M12 13v3M9 20h6M9 20l.5-3h5l.5 3"/></svg>
            <span className="section-num">05</span>
            <h2>Achievements &amp; Certifications</h2>
            <div className="rule"></div>
          </div>
          
          <div className={styles.achList}>
            {achievements.map((ach, i) => (
              <motion.div 
                key={i} 
                className={styles.achItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className={styles.achIcon}>{ach.icon}</div>
                <span className={styles.label}>{ach.label}</span>
                <span className={styles.tag}>{ach.tag}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className={`wrap ${styles.contactInner}`}>
          <div className="section-head">
            <svg className="icon sec-icon" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
            <span className="section-num">06</span>
            <h2>Contact</h2>
            <div className="rule"></div>
          </div>
          
          <motion.div 
            className={styles.bigLine}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            Open to <span className={styles.accentText}>AI Engineer</span> and AI/ML roles.<br/>Let&apos;s talk.
          </motion.div>
          
          <motion.div 
            className={styles.contactLinks}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="mailto:patelalok1947m@gmail.com" className="btn-solid">
              Email me <svg className="icon" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="btn-outline">
              <svg className="icon" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7.5 10.5v6M7.5 7.5v.01M12 16.5v-3.7c0-1.5 1-2.3 2.2-2.3 1.2 0 1.8.8 1.8 2.3v3.7"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn-outline">
              <svg className="icon" viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.6-.2.6-.43v-1.68c-2.5.55-3.03-1.2-3.03-1.2-.4-1.05-1-1.33-1-1.33-.85-.57.06-.56.06-.56.94.07 1.43.96 1.43.96.83 1.43 2.18 1.02 2.72.78.08-.6.33-1.02.6-1.25-2-.23-4.1-1-4.1-4.45 0-.98.35-1.79.93-2.42-.1-.23-.4-1.15.1-2.4 0 0 .76-.24 2.5.93a8.6 8.6 0 0 1 4.55 0c1.74-1.17 2.5-.93 2.5-.93.5 1.25.2 2.17.1 2.4.58.63.93 1.44.93 2.42 0 3.46-2.1 4.22-4.1 4.44.34.3.63.87.63 1.75v2.6c0 .23.15.51.6.43A9 9 0 0 0 12 3z"/></svg>
              GitHub
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
