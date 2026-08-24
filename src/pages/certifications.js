import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Articles() {
  return (
    <>
      <Head>
        <title>Alok Patel | Achievements</title>
        <meta name="description" content="Achievements by Alok Patel" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <div className="w-full pt-16">
          <h1 className="mb-16 text-6xl font-bold uppercase text-center w-full">Words Can Change The World!</h1>
          
          <ul className="grid grid-cols-2 gap-16">
            <Article 
              title="AWS Cloud Practitioner Essentials"
              date="2023"
              link="/"
            />
            <Article 
              title="Anthropic Academy: AI Fluency for Builders, Claude Platform 101, Claude Code 101, AI Capabilities & Limitations"
              date="2024"
              link="/"
            />
            <Article 
              title="OutlierEDU Prompt Engineering"
              date="2024"
              link="/"
            />
            <Article 
              title="OutlierEDU Rubrics"
              date="2024"
              link="/"
            />
          </ul>
        </div>
      </main>
    </>
  )
}

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{y:50, opacity: 0}}
      whileInView={{y:0, opacity: 1, transition:{duration:0.5, ease:"easeInOut"}}}
      whileHover={{scale: 1.02, transition:{duration:0.2}}}
      viewport={{once:true}}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4 shadow-lg"
    >
      <a href={link} target="_blank" rel="noreferrer">
        <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2>
      </a>
      <span className="text-primary dark:text-primaryDark font-semibold pl-4">{date}</span>
    </motion.li>
  )
}
