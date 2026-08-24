import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import echomindPic from '../../public/echomind.png'
import mlnutriPic from '../../public/mlnutri.png'
import wellnestPic from '../../public/wellnest.png'
import gymPic from '../../public/gym.png'
import smartmartPic from '../../public/smartmart.png'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Alok Patel | Projects Page</title>
        <meta name="description" content="Projects by Alok Patel" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <div className="w-full pt-16">
          <h1 className="mb-16 text-6xl font-bold uppercase text-center w-full">Imagination Trumps Knowledge!</h1>
          <div className="grid grid-cols-12 gap-24 gap-y-32 mt-8">
            <div className="col-span-12">
              <FeaturedProject
                title="EchoMind: AI-Powered Digital Persona Reconstruction Platform"
                img={echomindPic}
                tools="Next.js, TypeScript, React, Gemini API"
                summary={
                  <ul className="list-disc pl-5 mt-2">
                    <li>Architected a full-stack conversational AI platform using Next.js, TypeScript, React, and the Gemini API, validated across 10 real-world persona test samples.</li>
                    <li>Delivered near real-time conversational responses by integrating directly with the Gemini API, leveraging its native multilingual capabilities.</li>
                    <li>Implemented prompt engineering and context management for consistent persona-based responses.</li>
                  </ul>
                }
                link="/"
                type="Full-Stack AI App"
                github="/"
              />
            </div>
            
            <div className="col-span-6">
              <Project
                title="SmartMart: Retail Sales Data Warehouse and ETL Pipeline"
                img={smartmartPic}
                tools="Python, Pandas, PostgreSQL, SQL, Matplotlib"
                summary="Built an end-to-end ETL pipeline in Python to clean, transform, and load 20,000+ retail sales records into a PostgreSQL star-schema data warehouse, optimizing SQL-based analytics."
                link="/"
                type="Data Engineering"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="ML Nutritionist: Personalized Diet Planner"
                img={mlnutriPic}
                tools="Python, Pandas, NumPy, Scikit-learn"
                summary="Built a Python data pipeline handling 1,200+ healthcare records. Trained regression (R² 0.94) and classification (88% acc) models to predict custom diets and recommend diet types."
                link="/"
                type="Applied Machine Learning"
                github="/"
              />
            </div>
            
            <div className="col-span-12">
              <FeaturedProject
                title="WellNest: AI-Powered Eldercare & Hospital Connection"
                img={wellnestPic}
                tools="React, Node.js, Express.js, PostgreSQL, Firebase, Gemini API"
                summary={
                  <ul className="list-disc pl-5 mt-2">
                    <li>Built a full-stack eldercare platform with role-based access for families and doctors.</li>
                    <li>Integrated Google Gemini API for AI-powered features and secure doctor-patient messaging.</li>
                    <li>Designed backend APIs and database schema to support scalable user interactions.</li>
                  </ul>
                }
                link="/"
                type="Full-Stack Web App"
                github="/"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Gym – Fitness Tracker App"
                img={gymPic}
                tools="Java, Android SDK"
                summary="A mobile fitness tracker built with Java and Android SDK for workout planning and progress tracking. Features include a BMI calculator, exercise search/filter, local data storage, and comprehensive analytics to track workout progress and exercise volume."
                link="/"
                type="Mobile App"
                github="/"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

const FeaturedProject = ({ type, title, summary, tools, img, link, github }) => {
  return (
    <article className="w-full flex flex-col lg:flex-row items-center justify-between relative rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-6 lg:p-12">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light" />
      
      <Link href={link} target="_blank" className="w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800 aspect-video flex items-center justify-center text-dark/30 dark:text-light/30">
        {img ? <Image src={img} alt={title} className="w-full h-full object-cover" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" /> : "Project Preview"}
      </Link>
      
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between pl-0 lg:pl-6 pt-6 lg:pt-0">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        {tools && <p className="mb-2 font-semibold text-primary dark:text-primaryDark">Tools: {tools}</p>}
        
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <svg viewBox="0 0 24 24" fill="currentColor" className="text-dark dark:text-light w-full h-auto"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold border border-solid border-transparent hover:border-dark dark:hover:border-light hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light transition-all duration-300">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, img, link, github, summary, tools }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
      
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800 aspect-video flex items-center justify-center text-dark/30 dark:text-light/30">
        {img ? <Image src={img} alt={title} className="w-full h-full object-cover" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" /> : "Project Preview"}
      </Link>
      
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        {tools && <p className="mb-2 font-semibold text-primary dark:text-primaryDark">Tools: {tools}</p>}
        
        <div className="mt-2 flex items-center justify-between w-full">
          <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base">
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
             <svg viewBox="0 0 24 24" fill="currentColor" className="text-dark dark:text-light w-full h-auto"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
