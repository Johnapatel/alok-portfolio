import Head from 'next/head'
import Image from 'next/image';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import profilePic from '../../public/profile_about.jpeg';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div 
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

const Details = ({ position, company, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div className="absolute left-0 mt-2">
        <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
          <circle cx="75" cy="50" r="20" className="stroke-primary stroke-1 fill-none dark:stroke-primaryDark" />
          <motion.circle 
            cx="75" cy="50" r="20" 
            className="stroke-[5px] fill-light dark:fill-dark stroke-dark dark:stroke-light"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark" />
        </svg>
      </div>
      <motion.div 
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
        className="pl-16 w-full"
      >
        <h3 className="capitalize font-bold text-2xl">{position}&nbsp;<span className="text-primary dark:text-primaryDark">@{company}</span></h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full mt-2">
          {work}
        </p>
      </motion.div>
    </li>
  )
}

const EduDetails = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div className="absolute left-0 mt-2">
        <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
          <circle cx="75" cy="50" r="20" className="stroke-primary stroke-1 fill-none dark:stroke-primaryDark" />
          <motion.circle 
            cx="75" cy="50" r="20" 
            className="stroke-[5px] fill-light dark:fill-dark stroke-dark dark:stroke-light"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark" />
        </svg>
      </div>
      <motion.div 
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
        className="pl-16 w-full"
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full mt-2">
          {info}
        </p>
      </motion.div>
    </li>
  )
}

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

  const eduRef = useRef(null);
  const { scrollYProgress: scrollYProgressEdu } = useScroll({
    target: eduRef,
    offset: ["start end", "center start"]
  });

  const actRef = useRef(null);
  const { scrollYProgress: scrollYProgressAct } = useScroll({
    target: actRef,
    offset: ["start end", "center start"]
  });

  return (
    <>
      <Head>
        <title>Alok Patel | About Page</title>
        <meta name="description" content="About Alok Patel" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <div className="w-full pt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-16 text-6xl font-bold uppercase text-center w-full"
          >
            Passion Fuels Purpose!
          </motion.h1>
          
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
              <p className="font-medium text-lg">
                Computer Science graduate (B.E., 2026) specializing in LLM evaluation and multimodal data annotation, with hands-on experience across text, image, video, and audio annotation pipelines for training and benchmarking AI models.
              </p>
              <p className="my-4 font-medium text-lg">
                I back this with a strong technical foundation in Python and full-stack development, built through independent projects including an AI-powered conversational platform and a machine learning diet recommendation system.
              </p>
              <p className="font-medium text-lg">
                Seeking AI/ML roles in model training, evaluation, and data quality.
              </p>
            </div>
            
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <div className="w-full h-auto aspect-square rounded-2xl relative overflow-hidden">
                <Image src={profilePic} alt="Alok Patel" className="w-full h-full object-cover object-center" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between text-right">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">1+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">years of experience</h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">10+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">projects completed</h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">4+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">certifications</h2>
              </div>
            </div>
          </div>

          <div className="mt-32 w-full">
            <h2 className="font-bold text-5xl mb-16 w-full text-center">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
              <motion.div 
                className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark"
                whileHover={{ scale: 1.05 }}
              >
                AI/ML
              </motion.div>
              <Skill name="Python" x="-20vw" y="2vw" />
              <Skill name="Next.js" x="-5vw" y="-10vw" />
              <Skill name="React" x="20vw" y="6vw" />
              <Skill name="Prompt Engineering" x="0vw" y="12vw" />
              <Skill name="AWS S3" x="-20vw" y="-15vw" />
              <Skill name="Pandas" x="15vw" y="-12vw" />
              <Skill name="LLM Evaluation" x="32vw" y="-5vw" />
              <Skill name="C++" x="0vw" y="-20vw" />
              <Skill name="SQL" x="-25vw" y="18vw" />
            </div>
          </div>

          <div className="mt-16 w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-16">
              <div>
                <h3 className="font-bold text-2xl mb-6 text-primary dark:text-primaryDark">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-dark text-light dark:bg-light dark:text-dark py-2 px-4 rounded-lg font-medium shadow-md">Adobe Premiere Pro</span>
                  <span className="bg-dark text-light dark:bg-light dark:text-dark py-2 px-4 rounded-lg font-medium shadow-md">Adobe After Effects</span>
                  <span className="bg-dark text-light dark:bg-light dark:text-dark py-2 px-4 rounded-lg font-medium shadow-md">Blender</span>
                  <span className="bg-dark text-light dark:bg-light dark:text-dark py-2 px-4 rounded-lg font-medium shadow-md">Unity</span>
                  <span className="bg-dark text-light dark:bg-light dark:text-dark py-2 px-4 rounded-lg font-medium shadow-md">Git & GitHub</span>
                  <span className="bg-dark text-light dark:bg-light dark:text-dark py-2 px-4 rounded-lg font-medium shadow-md">Postman</span>
                  <span className="bg-dark text-light dark:bg-light dark:text-dark py-2 px-4 rounded-lg font-medium shadow-md">Jupyter Notebook</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-2xl mb-6 text-primary dark:text-primaryDark">Soft Skills</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-dark text-light dark:bg-light dark:text-dark py-2 px-4 rounded-lg font-medium shadow-md">Event Planning</span>
                  <span className="bg-dark text-light dark:bg-light dark:text-dark py-2 px-4 rounded-lg font-medium shadow-md">Project Management</span>
                  <span className="bg-dark text-light dark:bg-light dark:text-dark py-2 px-4 rounded-lg font-medium shadow-md">Budgeting</span>
                  <span className="bg-dark text-light dark:bg-light dark:text-dark py-2 px-4 rounded-lg font-medium shadow-md">Risk Assessment</span>
                  <span className="bg-dark text-light dark:bg-light dark:text-dark py-2 px-4 rounded-lg font-medium shadow-md">Leadership</span>
                  <span className="bg-dark text-light dark:bg-light dark:text-dark py-2 px-4 rounded-lg font-medium shadow-md">Communication</span>
                  <span className="bg-dark text-light dark:bg-light dark:text-dark py-2 px-4 rounded-lg font-medium shadow-md">Collaboration</span>
                  <span className="bg-dark text-light dark:bg-light dark:text-dark py-2 px-4 rounded-lg font-medium shadow-md">Decision-Making</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto my-16">
            <hr className="border-t-[4px] border-dark dark:border-light rounded-full" />
          </div>

          <div className="my-32 w-full">
            <h2 className="font-bold text-5xl mb-16 w-full text-center">Experience</h2>
            <div ref={ref} className="w-[75%] mx-auto relative">
              <motion.div 
                style={{ scaleY: scrollYProgress }} 
                className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light" 
              />
              <ul className="w-full flex flex-col items-start justify-between ml-4">
                <Details 
                  position="LLM Evaluation & Training Data Specialist" 
                  company="Appen"
                  time="May 2026 - Present" 
                  address="Remote" 
                  work={
                    <ul className="list-disc pl-5 mt-2">
                      <li>Evaluated and curated search engine result datasets through relevance scoring, categorization, and sentiment analysis, contributing to search quality benchmarking pipelines.</li>
                      <li>Engineered realistic workplace prompts and structured evaluation rubrics for multilingual video-generation AI agents.</li>
                      <li>Extended annotation work across 4 concurrent projects spanning image captioning and audio transcription.</li>
                    </ul>
                  } 
                />
                <Details 
                  position="LLM Evaluation & Training Data Specialist" 
                  company="Outlier AI"
                  time="Oct 2025 - May 2026" 
                  address="Remote" 
                  work={
                    <ul className="list-disc pl-5 mt-2">
                      <li>Contributed to 8+ AI training and evaluation projects, performing structured data annotation and quality assessment.</li>
                      <li>Executed prompt evaluation and rubric-based quality assessments to support LLM fine-tuning and training pipelines.</li>
                      <li>Benchmarked leading LLMs across multi-turn conversational tasks using a structured issue taxonomy.</li>
                    </ul>
                  } 
                />
              </ul>
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto my-16">
            <hr className="border-t-[4px] border-dark dark:border-light rounded-full" />
          </div>

          <div className="my-32 w-full">
            <h2 className="font-bold text-5xl mb-16 w-full text-center">Education</h2>
            <div ref={eduRef} className="w-[75%] mx-auto relative">
              <motion.div 
                style={{ scaleY: scrollYProgressEdu }} 
                className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light" 
              />
              <ul className="w-full flex flex-col items-start justify-between ml-4">
                <EduDetails 
                  type="Bachelor of Engineering in Computer Science and Engineering" 
                  time="Sept 2022 - May 2026" 
                  place="Thapar Institute of Engineering and Technology, Patiala, Punjab, India" 
                  info="Current Grade: 7.27/10." 
                />
                <EduDetails 
                  type="Class XII, RBSE" 
                  time="Mar 2020 - Jul 2021" 
                  place="L B S Academy Senior Secondary School, Mahavir Nagar Ext., Kota" 
                  info="Grade: 98.80%." 
                />
                <EduDetails 
                  type="Class 10th — Science" 
                  time="June 2019" 
                  place="Jawahar Navodaya Vidyalaya, Banda UP" 
                  info="Completed with 94.40%." 
                />
              </ul>
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto my-16">
            <hr className="border-t-[4px] border-dark dark:border-light rounded-full" />
          </div>

          <div className="my-32 w-full">
            <h2 className="font-bold text-5xl mb-16 w-full text-center">Activities</h2>
            <div ref={actRef} className="w-[75%] mx-auto relative">
              <motion.div 
                style={{ scaleY: scrollYProgressAct }} 
                className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light" 
              />
              <ul className="w-full flex flex-col items-start justify-between ml-4">
                <Details 
                  position="Core Member" 
                  company="Mudra"
                  time="Aug 2022 - Oct 2024" 
                  address="Patiala, Punjab, India" 
                  work={
                    <ul className="list-disc pl-5 mt-2">
                      <li>Orchestrated 5 large-scale cultural events, managing budgets, vendor negotiations, and logistics to ensure smooth operations and vibrant participant experiences.</li>
                      <li>Promoted cultural diversity and enhanced campus participation through strategic planning and collaborative execution.</li>
                    </ul>
                  } 
                />
                <Details 
                  position="Core Member" 
                  company="Saturnalia"
                  time="Aug 2022 - Jul 2024" 
                  address="Patiala, Punjab, India" 
                  work={
                    <ul className="list-disc pl-5 mt-2">
                      <li>Managed logistics for TIET Patiala&apos;s flagship techno-cultural festival with 10,000+ attendees and 50+ event segments, ensuring on-time, high-quality execution.</li>
                      <li>Improved team efficiency through structured cross-functional coordination and faster issue resolution.</li>
                    </ul>
                  } 
                />
                <Details 
                  position="Member" 
                  company="Thapar Adventure Club"
                  time="Sept 2022 - May 2024" 
                  address="Patiala, Punjab, India" 
                  work={
                    <ul className="list-disc pl-5 mt-2">
                      <li>Coordinated and supervised college treks and trips, conducting risk assessments and implementing safety measures that resulted in overall good experience.</li>
                      <li>Organized 5+ adventure treks and outdoor events with 40+ participants, and improving group decision-making.</li>
                    </ul>
                  } 
                />
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
