import Link from 'next/link';
import { Button } from '../ui/button';
import { ModeToggle } from '../ui/toggle-button';
import Image from 'next/image';

export const Topbar = () => {
  return (
    <div className='flex flex-row justify-between items-center p-4 max-h-14 border-b-[1px] border-b-zinc-500'>
      <div className='ml-10'>
        <h1 className='topbar-title'>
          <a href='/'>
            <Image width={50} height={50} src='/mood_logo.png' alt='logo' />
          </a>
        </h1>
      </div>
      <div className='mr-10 flex items-center gap-5'>
        <Button className='loginButton'>
          <Link href={'/login'}>Log in</Link>
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
};
