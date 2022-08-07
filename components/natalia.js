import { useParallax } from "react-scroll-parallax";
import React, { useRef } from "react";

export default function Natalia() {

    return (  
      <>
        <div className="bg-[#000001] grid w-full h-screen">

            <div className="relative place-self-center">
                <img 
                className="max-h-[450px]"
                src="/natalia/card2.png" 
                alt="card"/>

                    <div className="absolute left-[5px] top-[-14px]">
                        <img
                        className="max-h-[450px]"
                        src='/natalia/card.png'
                        alt='me!'/>

                        <div className="absolute right-14 bottom-4">
                            <img
                            className="max-h-[510px] min-h-[50px]"
                            src='/natalia/natalia.png'
                            alt='me!'/>

                        </div>

                        <div className="absolute left-[85px] top-36">
                            <img
                            className="max-h-[130px] min-h-[50px]"
                            src='/natalia/natalianame.png'
                            alt='my name!'/>

                        </div>

                    </div>

            </div>

        </div>
      </>
    )
  }
  