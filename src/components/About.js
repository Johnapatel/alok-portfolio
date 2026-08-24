import { motion } from 'framer-motion';
import styles from '@/styles/About.module.css';

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <svg className="icon sec-icon" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.5 2.9-6 6.5-6s6.5 2.5 6.5 6"/><path d="M16 4.3a3.2 3.2 0 0 1 0 6.2M21.5 20c0-3-2.1-5.4-5-6"/></svg>
          <span className="section-num">01</span>
          <h2>About</h2>
          <div className="rule"></div>
        </div>
        
        <div className={styles.aboutGrid}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.paragraph}>
              I&apos;m a Computer Science graduate from <strong>Thapar Institute of Engineering and Technology</strong>, currently working as a freelance <strong>LLM Evaluation and Training Data Specialist</strong> across Outlier AI, Appen, and CrowdGen.
            </p>
            <p className={styles.paragraph}>
              My work sits at the intersection of rigorous evaluation and hands-on building. I spend my days benchmarking model outputs against structured rubrics, writing prompts, and comparing responses across Gemini, ChatGPT, and Claude, and my evenings building AI-powered products of my own.
            </p>
            <p className={styles.paragraph}>
              I&apos;m now looking for full-time <strong>AI Engineer</strong> and <strong>AI/ML</strong> roles where I can bring both skill sets together, with a secondary interest in software engineering.
            </p>
          </motion.div>
          
          <motion.div 
            className={styles.specSheet}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.specSheetHead}>Profile</div>
            <div className={styles.specRow}>
              <span className={styles.key}><svg className="icon" viewBox="0 0 24 24"><path d="M12 4 2 9l10 5 10-5-10-5z"/><path d="M6 11.5V17c0 1.5 3 3 6 3s6-1.5 6-3v-5.5M22 9v6"/></svg> education</span>
              <span className={styles.val}>B.E. CSE, Thapar (2026)</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.key}><svg className="icon" viewBox="0 0 24 24"><path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg> location</span>
              <span className={styles.val}>Uttar Pradesh, IN</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.key}><svg className="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg> focus</span>
              <span className={styles.val}>AI/ML Engineering</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.key}><svg className="icon" viewBox="0 0 24 24"><path d="M9 6 3 12l6 6M15 6l6 6-6 6"/></svg> secondary</span>
              <span className={styles.val}>Software Engineering</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.key}><svg className="icon" viewBox="0 0 24 24"><path d="M12 3 2 8l10 5 10-5-10-5z"/><path d="M2 13l10 5 10-5M2 18l10 5 10-5"/></svg> languages</span>
              <span className={styles.val}>Python, C++, JS</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.key}><svg className="icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M12 15h5"/></svg> status</span>
              <span className={styles.val}>Open to work</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
