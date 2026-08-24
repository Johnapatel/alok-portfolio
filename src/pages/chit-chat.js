import Head from 'next/head'
import Image from 'next/image'
import chitchatBg from '../../public/chitchat.jpg'
import { useContactModal } from '@/context/ContactContext';

export default function ChitChat() {
  const { openContactModal } = useContactModal();
  return (
    <>
      <Head>
        <title>Alok Patel | Chit-Chat</title>
        <meta name="description" content="Chit-Chat with Alok Patel" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light relative min-h-screen">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image src={chitchatBg} alt="Background" fill className="object-cover blur-md opacity-30 dark:opacity-20" />
        </div>
        <div className="w-full pt-16 px-6 md:px-16 lg:px-32 relative z-10">
          <h1 className="mb-12 lg:mb-16 text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-center w-full">Let&apos;s Chit-Chat!</h1>
          
          <div className="w-full flex flex-col items-center justify-center text-center">
            <p className="text-xl font-medium mb-8 max-w-3xl">
              Hi, I&apos;m Alok! I&apos;m a developer who loves turning ideas into working code, especially when AI is involved. Beyond the code, I love discussing AI ethics, new tech trends, and random ideas over a virtual cup of coffee. 
            </p>
            <p className="text-xl font-medium mb-8 max-w-3xl">
              When I&apos;m not building or experimenting, you&apos;ll find me at the gym, out for a run, in the swimming pool, or on the cricket field. Tech keeps my mind sharp, fitness keeps me grounded, and together they drive how I work.
            </p>
            <p className="text-xl font-medium mb-8 max-w-3xl">
              Feel free to reach out if you want to chat about AI models, full-stack development, or just say hello!
            </p>
            <button onClick={openContactModal} className="mt-8 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-4 px-8 text-xl font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:hover:border-light transition-all duration-300 cursor-pointer">
              Drop me an Email
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
