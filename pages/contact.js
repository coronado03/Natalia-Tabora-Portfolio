export default function Contact() {
    return (  
      <>
        <div className="grid w-full h-screen bg-no-repeat bg-[center] bg-cover contact-background">
            
            <div className="absolute hidden max-w-[7%] top-[22%] left-[25%] lg:block">
                <img className="object-contain" src="natalia/star3.png"/>
            </div>


            <div className="absolute hidden max-w-[12%] bottom-[20%] left-[15%] lg:block">
                <img className="object-contain" src="natalia/star3.png"/>
            </div>




            <div className="relative max-h-[100%] ml-7 place-self-center lg:left-[18%] lg:max-w-[55%]">
                <img className="object-contain" src="contact/GIT VIÑETA _ OUTLINE.png"/>


                <div>

                <div className="absolute hidden max-w-[7.5%] bottom-[35%] right-[35%] md:block">
                    <img className="object-contain" src="natalia/star3.png"/>
                  </div>

                  <div className="absolute hidden max-w-[16%] bottom-[46%] left-[67%] md:block">
                    <img className="object-contain" src="landing/landingstar2.png"/>
                  </div>

                </div>

                <div className="absolute top-[32%] left-[10%]">
                    <input type='text' className="romenaMedium font-normal uppercase text-[30px] bg-transparent	placeholder:text-[#000] bg-transparent	placeholder:text-[#000]leading-7 focus:outline-none" placeholder="Name"></input>
                    <br/>
                    <input type='text' className="romenaMedium font-normal uppercase text-[30px] bg-transparent	placeholder:text-[#000] bg-transparent	placeholder:text-[#000]leading-7 focus:outline-none" placeholder="Surname"></input>
                    <p className="romenaLight font-light">From</p>
                    <input type='text' className="font-normal uppercase text-[15px] bg-transparent	placeholder:text-[#000] bg-transparent	placeholder:text-[#000]leading-7 focus:outline-none" placeholder="Surname"></input>
                    <br/>
                    <input type='text' className="depixElillegible max-w-[200px] max-h-[100%] outline outline-1 outline-[#104FFF] rounded-lg bg-transparent	placeholder:text-[#000]" placeholder="Enter your message here!"></input>
                    <br></br>
                    <button className="depixElillegible px-3 mt-4 py-0 rounded-lg bg-[#FF00DD] text-[#FFFFFF] text-[30px]">SEND</button>

                </div>

                <div className="absolute bottom-[20%] right-[15%]">
                    
                

                <div className="grid place-items-end"> 
                    <h1 className="text-[#104FFF] romenaBold text-[40px] leading-7">OR</h1>
                    <h1 className="text-[#104FFF] romenaBold text-[29px]">CONTACT ME</h1>
                    <h1 className="text-[#104FFF] romenaBold text-[40px] leading-7">DIRECTLY</h1>
                
                      
                      
                      <div className="grid grid-rows-[200px_minmax(900px,_2/fr)_100px] grid-cols-[200px_minmax(65px,_1fr)_100px] place-items-end">

                        <h2 className="col-span-2 text-[#FF00DD] font-normal	text-xs	md:text-base depixelKlein">NATALIATABORA11</h2>
                        <img className="row-start-1 row-span-2	self-end	max-w-[20%]" src="contact/MAIL ICON.png"/>
                        <h2 className="row-start-2 col-span-2 text-[#FF00DD] font-medium	text-xs md:text-[23px] depixelKlein">@GMAIL.COM</h2>

                      </div>

                </div>


                </div>

            </div>
            
            
        
        </div>
      </>
    )
  }
  