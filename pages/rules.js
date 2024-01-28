import Link from 'next/link';

export default function Rules() {
    return (
        <main className='text-5xl flex flex-col items-center justify-center w-screen h-screen'>
            <h1>Regole</h1>
            <Link
                className='mt-10' 
                href={{ pathname: '/intro'}}>
                    {"--->"}
            </Link>
        </main>
    )
}