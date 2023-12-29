
"use client"
import { preLoaderAnim } from '@/animations'
import Spinner from '@/components/Spinner'
import React, { useEffect } from 'react'

const Team = () => {

    // useEffect(() => {
    //   preLoaderAnim()
    // }, [])

    const members = [
      {
        id: 1,
        name: 'Harsh Gupta',
        position: 'PhD Student',
        img: '/members/harsh.png',
        bio: 'I love playing Chess , Badminton and guitar. Love to interact with people and fill my empty notebook with their stories. As an engineer open to learn anything except biology.',
        github: '',
        instagram: ''
      },
      {
        id: 2,
        name: 'Sanidhya Gupta',
        position: 'M.S. Student',
        img: '/members/sanidhya.png',
        bio: 'Just a kid passionate about technology, particularly computers. Engineering is what I do. My experiments range from fine-tuning working codes to engaging in academic research and occasionally cooking something-something in the kitchen. He is the currently the recipient of Chanakya UG fellowship funded by i-HUB, IISER Pune',
      },{
        id: 3, 
        name: 'Pranav Maheshwari',
        position: 'M.S. Student',
        img: '/members/pranav.png',
        bio: 'A Quantum Information Researcher who loves talking about life, politics and entrepreneurship. Excited to meet new faces and waiting for you to send a Hi!',
      }
    ]
    
    const alumni = [
      {
        id: 1,
        img: '/members/sid.png',
        name: 'Siddharth Sethi',
        bio: 'Siddharth graduated with an MS from the Department of EECS in May 2023. Hobbies are Photography, Videography and video-editing, Cooking, Playing Badminton.',
      },
      {
        id: 2, 
        img: '/members/rohit.png',
        name: 'Rohit K. Teja',
        bio: 'Rohit graduated with an MS from the Department of EECS in May 2023. “Books, humour, music and coffee. Occasional badminton and basketball player.”',
      },
      {
        id: 3,
        img: '/members/madhav.png',
        name: 'Madhav Sharma',
        bio: 'Madhav graduated with an MS from the Department of Physics in May 2023. He is currently with Capgemini Quantum Lab. In my free time other than reading about emerging technology and there application I like to watch movies, play volleyball and spend quality time with my friends.',
      },
      {
        id: 4, 
        img: '/members/mainak.png',
        name: 'Mainak Bhattacharyya',
        bio: 'Mainak graduated with an MSc from the Department of Physics, NIT Jamshedpur in May 2023. He is the currently the recipient of Chanakya PG fellowship funded by i-HUB, IISER Pune. Well, I am just a guy, who finds it difficult to understand the prescribed theories of natural dynamics. Always ready for a cup of coffee and biriyani from my dear Kolkata. ',
      },{
        id: 5, 
        
        img: '/members/akash.png',
        name: 'Akash Kumar Singh',
        bio: 'Akash graduated with an MS from the Department of Physics, IISERT in May 2023. He is currently pursuing MTech degree from DIAT, Pune. In equal superposition of being at the library and badminton court.',
      },
      {
        id: 6,
        img: '/members/ss.png',
        name: 'Swayangprabha Shaw',
        bio: 'Swayangprabha graduated with an MS from the Department of Physics, IISERB in May 2022. She worked in the QuCIS lab as a research associate  and was the recipient of Chanakya PG fellowship from  i-HUB, Pune between July 2022 and April 2023.  She is currently a PhD student in the Department of ECE, University of Arizona. An eccentric fellow in a heliocentric world who love learning about people, places and physics. :D',
      }

    ]

return(



        <div className="w-full  bg-[url('/figmaStuffs/teambg.png')] bg-cover md:p-24 p-12 ">
            <div className='w-full py-24 md:p-24 flex items-center justify-center'>
              <h1 className=' teamHeading text-[55px] md:text-[96px] drop-shadow-lg'>
                Meet our Team.
              </h1>
            </div>

          <div className='w-full flex flex-col-reverse md:flex-row items-center justify-around gap-12'>
            <div className='md:w-[60%]'>
              <div className='text-white'>
                <h1 className='text-[32px] md:text-[48px]  font-semibold font-bj'>Dr. Ankur Raina</h1>
                <h2 className='text-[16px] md:text-[20px] italic font-bj font-semibold'>Principal Investigator</h2>
                <p className='mt-8 font-source text-[16px] md:text-[20px] font-light tracking-[0.48px]'>
                  This Lab is head by <b>Dr. Ankur Raina,</b> who works as an Assistant Professor in <b>the Department of EECS, IISER Bhopal.</b> He worked as a researcher/scientist at <b>the Department of Electrical and Computer Engineering, University of Arizona</b> with <b>Prof. Bane Vasi.</b> His research interests include classical and quantum information theory and coding, quantum optics, quantum cryptography, quantum algorithms, fault-tolerant quantum computation.
                    <br /><br />
                  He obtained Ph.D. from <b> the PNSIL Group of the Department of Electronic Systems Engineering</b> at <b>the Indian Institute of Science, Bengaluru</b> under the supervision of <b>Prof. Shayan Srinivasa Garani.</b></p>
              </div>

            </div>
            <div>
              <img src='/members/ANKUR.png' className='w-[388px] drop-shadow-lg ' alt="" />
            </div>

          </div>

{

members.map((member) => (
  <div key={member.id} className={`w-full flex-col flex ${member.id % 2 == 0 ? "md:flex-row-reverse" :  "md:flex-row"} items-center justify-around gap-12 mt-[150px]`}>
            
  <div>
    <img src={member.img} className='w-[388px] drop-shadow-lg ' alt="" />
  </div>
  
  <div className='md:w-[50%]'>
    <div className='text-white'>
      <h1 className='text-[32px] md:text-[48px]  font-semibold font-bj'>{member.name}</h1>
      <h2 className='text-[16px] md:text-[20px] italic font-bj font-semibold '>{member.position}</h2>
      <p className='mt-8 font-source text-[16px] md:text-[20px] font-light tracking-[0.48px]'>
{member.bio}
      </p>
      <div className='flex gap-6 items-center justify-left mt-6'>
      <img src='/icons/insta.png' className='w-6' />
      <img src='/icons/git.png' className='w-6'  />
      <img src='/icons/linkedin.png' className='w-6'  />


      </div>
    </div>

  </div>
  

  </div>
))}
          


            <div className='w-full px-24 flex items-center justify-center mt-24'>
              <h1 className=' teamHeading text-[64px] drop-shadow-lg'>
                  Alumni.
              </h1>
            </div>


{alumni.map((alumnus) => (
  <div key={alumnus.id} className={`w-full  flex flex-col-reverse ${alumnus.id % 2 == 0 ? "md:flex-row-reverse" :  "md:flex-row"}  items-center justify-around gap-12 md:gap-24  md:p-12 md:mt-12 py-12`}>
            <div className='md:w-[60%]'>
              <div className='text-white '>
                <h1 className='text-[32px] md:text-[48px]  font-semibold font-bj'>{alumnus.name}</h1>
                <p className='mt-8 font-source text-[20px] font-light tracking-[0.48px]'>
                {alumnus.bio}</p>
              </div>
              <div className='flex gap-6 items-center justify-left mt-6'>
      <img src='/icons/insta.png' className='w-6' />
      <img src='/icons/git.png' className='w-6'  />
      <img src='/icons/linkedin.png' className='w-6'  />


      </div>

            </div>
            <div>
              <img src={alumnus.img} className='w-[388px] drop-shadow-lg ' alt="" />
              
            </div>
            

          </div>
))}
            







        </div>
      
)
}

export default Team;
