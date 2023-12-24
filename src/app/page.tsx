import Image from 'next/image';

export default function Home() {
  console.log('mongod', process.env.MONGODB_URI);
  return (
    <main className='flex flex-col justify-center items-center min-h-screen gap-10'>
      <h1>WHATS YOUR MOOD</h1>
      <p>Welcome to Next.js!</p>
      <Image src='/mood_logo.png' alt='logo' width={100} height={100} />
    </main>
  );
}
