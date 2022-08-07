import Image from 'next/image'

export default function Landing() {
    return (
        <>
            <div 
            className="grid w-full h-screen bg-no-repeat bg-center bg-cover landing-background"
            >

                <img
                className='max-h-96 place-self-center visible'
                src="/landing/landingcontent.png"
                alt="Picture of the author"
                />

                <img
                className='max-h-56 absolute bottom-[26%] left-[14%] invisible md:visible'
                src='/landing/landingstar1.png'
                alt="star1"
                />
                <img
                className='max-h-56 absolute top-[14%] right-[26%] invisible md:visible'
                src='/landing/landingstar2.png'
                alt="star2"
                />

                <img
                className='max-h-24 absolute top-[29%] right-[73%] invisible md:visible'
                src='/landing/landingstar3.png'
                alt="star3"
                />

                


            </div>
        </>
    )
  }
  