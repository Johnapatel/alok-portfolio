import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import HireMe from '@/components/HireMe';
import profilePic from '../../public/mypic.jpeg';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import { useContactModal } from '@/context/ContactContext';

export default function Home() {
  const { openContactModal } = useContactModal();
  return (
    <>
      <Head>
        <title>Alok Patel — AI/ML Engineer</title>
        <meta name="description" content="Alok Patel, AI/ML Engineer and LLM Evaluation Specialist." />
      </Head>
      
      <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-0">
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="w-[80%] h-auto aspect-square rounded-2xl shadow-2xl relative overflow-hidden">
              <Image src={profilePic} alt="Alok Patel" className="w-full h-full object-cover object-center" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center self-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold w-full capitalize text-dark dark:text-light text-center lg:text-left">
                Turning Vision Into Reality With AI and Code.
              </h1>
              <p className="my-4 text-base font-medium text-dark dark:text-light text-justify">
                Computer Science graduate (B.E., 2026) specializing in LLM evaluation and multimodal data annotation, with hands-on experience across text, image, video, and audio annotation pipelines for training and benchmarking AI models. I back this with a strong technical foundation in Python and full-stack development, built through independent projects including an AI-powered conversational platform and a machine learning diet recommendation system. Seeking AI/ML roles in model training, evaluation, and data quality.
              </p>
            <div className="flex items-center justify-center lg:justify-start w-full lg:w-auto mt-2">
              <Link href="/resume.pdf" target="_blank" className="flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light transition-all duration-300">
                Resume <svg className="w-6 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </Link>
              <button onClick={openContactModal} className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline cursor-pointer">
                Contact
              </button>
            </div>
          </div>
        </div>
        
        <HireMe />

        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBulb} alt="Light Bulb" className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}
