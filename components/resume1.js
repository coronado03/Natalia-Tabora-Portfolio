export default function Resume1() {
  return (
    <>

      <div className="bg-[#000001] w-full h-screen relative">

          <div className="absolute max-w-[6%] top-[5%] left-[40%]">
            <img className="object-contain" src="natalia/star2.png"/>
          </div>

          <div className="absolute max-w-[10%] top-[15%] left-[30%]">
            <img className="object-contain" src="natalia/star3.png"/>
          </div>

        <div className="absolute text-white left-[7%] top-[5%]">


          <div className="max-w-[9%]">
            <img className="object-contain" src="resume/p1/LOGO OUTLINE.png" />
          </div>

          <h1 className="romenaBold leading-[10rem] text-[8rem]">HI,</h1>
          <h2 className="romenaBold  leading-10 text-[4rem]">WELCOME</h2>
          <h2 className="romenaBold leading- text-[6rem]">ABOARD</h2>
          <p className="romenaMedium leading- tracking-wide text-[1rem]">I will be your pilot for today.
            <br/>
            you may now enjoy the ride.
          </p>

          <div className="max-w-[20%] depixelKlein">
            <img className="object-contain" src="resume/p1/BAR CODE.png" />
            <p className="text-white leading-[0.1rem]">1998 28 02</p>

          </div>

        </div>

          <div className="absolute top-[0%] right-[50%]">
            <img
              className="max-h-screen max-w-[100%]"
              src="resume/p1/DASHED LINES.png"
            />
          </div>

          <div className="absolute max-w-[35%] right-[5%] top-[8%]">

            <img className="object-contain" src="resume/p1/CV INFO TRAVEL OUTLINE.png"/>

            <div className="absolute top-[0%]">
              <img className="object-contain" src="resume/p1/CV INFO TRAVEL.png"/>

              <div>

                <div className="absolute top-[22%] left-[15%] max-w-[20%]">
                  <img className="object-contain" src="resume/p1/RESUME.png"/>
                </div>

                <div className="absolute top-[12%] right-[13%] max-w-[28%]">
                  <img className="object-contain" src="natalia/star3.png"/>
                </div>

                <div className="absolute top-[30%] left-[15%]">
                  <h1 className="romenaBlack text-[3.3rem] leading-[2.9rem] text-black">MY <br/> RESUME</h1>
                  <p className="romenaLight text-[1.1rem] text-black leading-3">FROM</p>
                </div>

                <div className="absolute bottom-[45%] right-[15%] max-w-[20%]">
                  <img className="object-contain" src="resume/p1/LUGGAGE.png"/>
                </div>

                <div className="absolute bottom-[37%] right-[15%] max-w-[20%]">
                  <img className="object-contain" src="resume/p1/WORK TOGETHER.png"/>
                </div>

                <div className="absolute bottom-[19%] right-[15%]">
                  <h1 className="romenaBlack text-[3.3rem] leading-[2.9rem] text-black">WORKING <br/> TOGETHER</h1>
                  <p className="romenaLight text-[1.1rem] text-black leading-3">DESTINATION</p>
                </div>

                <div className="rotate-[270deg] absolute bottom-[28%] left-[2%] text-[#104FFF]">
                  <h3 className="tinyRegular text-[1.8rem]">
                    FIRST CLASS
                  </h3>
                </div>

                <div className="absolute bottom-[44%] left-[30%]">
                  <p className="romenaLight text-[3.3rem] romenaBold text-black leading-3">TO</p>
                </div>

              </div>


            </div>



          </div>


      </div>

    </>
  );
}
