import React from "react";

const  Contact = () => {
  return (
    <div name = "contact" className = "w-full h-auto bg-black dark:bg-white text-white dark:text-black">
        <div className="flex flex-col p-4 justify-center max-w-screen mx-w-screen h-full"> 
      
            <div className="pb-8">
            <div className="flex items-center justify-center ">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Contact Me
            </p>
            
            </div>
            </div>
            <div className=" flex justify-center items-center pr-6">
                <form action = "https://getform.io/f/680e70e7-608a-4f59-8fa6-6530daccaf04" method="POST" className="flex flex-col w-full md:w-1/2">
                    <input 
                    type = "text"
                    name = "name"
                    placeholder="Enter your name"
                    className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                     <input 
                    type = "text"
                    name = "email"
                    placeholder="Enter your email"
                    className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                     />
                     <textarea 
                    name = "message"
                    rows = "10"
                    placeholder="Enter your message"
                    className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" > </textarea>
                    <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                        Let's Talk

                    </button>
                </form>
            </div>
        </div>
        </div>
   
  )
}

export default Contact