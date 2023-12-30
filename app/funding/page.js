import React from 'react'

const page = () => {

    const funds = [
        {
            id: 1, 
            img: '/funding/logo.png',
            title: 'IISERB Startup Grant'
        },
        {
            id: 2, 
            img: '/funding/meity-removebg.png',
            title: 'MeitY AWS QCAL Grant'
        },
        {
            id: 3, 
            img: '/funding/ihub.png',
            title: 'i-HUB, IISER Pune Fellowship'
        }
    ]


  return (
    // <div>
        <div className="w-full   bg-[url('/figmaStuffs/teambg.png')] bg-cover  p-6">
        
        <div className='w-full  mt-24 md:mt-32 md:px-24  flex items-center justify-left'>
              <h1 className=' teamHeading text-[36px] md:text-[64px] drop-shadow-lg'>
              We are thankful to receive<br /> research funding from 
              </h1>
            </div>

            <div className='w-full grid grid-rows-3 md:grid-cols-3 justify-center  place-items-center'>
            { funds.map((fund) => (
                <div key={fund.id} className='flex items-center justify-center flex-col gap-8 p-6 md:p-12 md:mt-0 mt-6'>
                    <div className='border p-2 rounded-full  bg-white grid place-items-center justify-center shadow-lg'>
                    <img  src={fund.img} alt="" className='  rounded-full aspect-square object-contain w-[150px] h-[150px] md:h-[220px] md:w-[220px] ' />
                    </div>
                    <h1 className='text-white text-2xl md:text-3xl text-center font-bold font-bj hover:text-purple-400 cursor-pointer'>{fund.title} </h1>
                </div>
            ))   
}
            </div>
        
        
        </div>
      
    // </div>
  )
}

export default page
