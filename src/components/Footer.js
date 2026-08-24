import Link from 'next/link';
import { useContactModal } from '@/context/ContactContext';

export default function Footer() {
  const { openContactModal } = useContactModal();
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg dark:text-light">
      <div className="py-8 flex flex-col lg:flex-row items-center justify-between px-4 lg:px-32 gap-4">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Built by&nbsp;<Link href="https://www.instagram.com/johnalokpatel?utm_source=qr&igsi=MTh2cHFnMTd1dXNhYg==" target="_blank" className="underline underline-offset-2">Alok Patel</Link>
        </div>
        <button onClick={openContactModal} className="underline underline-offset-2 cursor-pointer">Say Hello</button>
      </div>
    </footer>
  );
}
