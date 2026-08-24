import Link from 'next/link';
import { useContactModal } from '@/context/ContactContext';

export default function HireMe() {
  const { openContactModal } = useContactModal();
  return (
    <div className="fixed left-4 bottom-4 items-center justify-center overflow-hidden z-20 hidden md:flex">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <svg viewBox="0 0 200 200" className="animate-[spin_8s_linear_infinite] fill-dark dark:fill-light">
          <path id="curve" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="transparent" />
          <text className="text-[28px] font-bold uppercase tracking-[12px]">
            <textPath href="#curve" startOffset="0">
              AI/ML Engineer • Web Dev •
            </textPath>
          </text>
        </svg>
        <button onClick={openContactModal} className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light dark:bg-light dark:text-dark shadow-md border border-solid border-dark dark:border-light w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light transition-all duration-300 cursor-pointer">
          Hire Me
        </button>
      </div>
    </div>
  );
}
