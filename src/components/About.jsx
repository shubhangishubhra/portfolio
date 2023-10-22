import React from 'react';

const About = () => {
  return (
    <div name = "about" className = "w-full h-auto flex flex-col  bg-black dark:bg-white text-white dark:text-black ">
        <div className="max-w-screen-lg mx-auto pl-4">
            <div className="pb-14">
            <div className="flex items-center justify-center ">
                <p className=" text-4xl font-bold inline border-b-4 border-gray-500 text-center">About Me</p>
                </div>
            </div>
            <p className="text-xl mt20">
          
            </p>
            <br />
            <p className="text-xl mt-10">
            My journey into the world of programming began with a fascination for technology. I started by learning the basics of HTML, CSS, and JavaScript, and I was immediately hooked. Over the years, I've honed my skills, expanded my knowledge, and embraced new technologies to stay at the forefront of the industry.As a full-stack developer, I have the unique ability to work on both the front-end and back-end of web applications. Whether it's building responsive user interfaces, optimizing database performance, or implementing complex server-side logic, I enjoy the challenges that come with being a full-stack developer.
            </p>
        </div>
    </div>
  )
};

export default About