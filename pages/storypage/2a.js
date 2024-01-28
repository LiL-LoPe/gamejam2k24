import Link from 'next/link';

export default function Intro() {
    return (
        <main className='text-5xl flex flex-col items-center justify-center w-screen h-screen'>
            <div className="boxStyle top-60">
                <p className='textStyle'>
                    Nella cucina del castello viveva Almiro, il Mago pasticcione.
                    <br/>Mentre preparava la torta di fagioli del mercoledì, gli cadde un
                    alambicco dentro il calderone.
                    <br/>
                </p>
                <div className='imageStyle'  >
                    
                </div>
                <Link className='sfogliaStyle'  href={{ pathname: '/3a', query: {step : 1}}}> </Link>
            </div>
            
            
        <style jsx>{`
        .boxStyle  {
          background-image: url('../complete/05-Immagine-Pulsanti/IP-ACCO.svg');
          background-size: cover;
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }; 

        .textStyle  {
            text-align: center;
            font-size:20;
        }

        .imageStyle    {

        }

        .sfogliaStyle    {
            
        }
      `}</style>
        </main>
    )
}