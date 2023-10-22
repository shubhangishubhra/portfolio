import React from "react";

const Skills = () => {
  return (
    <div name="experience" className="w-full h-screen bg-black dark:bg-white text-white dark:text-black flex items-center justify-center">
      <div className="w-full h-full max-w-screen-lg mx-auto p-4">
       
          <div class="grid gap-4 sm:grid-cols-12">
            <div class="col-span-12 sm:col-span-3">
              <div class="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
                <h3 class="text-3xl font-semibold">Work Experience</h3>
               
              </div>
            </div>
            <div class="col-span-12 sm:col-span-9">
              <div class="space-y-6 relative sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                  <h3 class="text-xl font-semibold tracking-wider">Web developer Intern</h3>
                  <h1 class="text-s font-semibold tracking-wider">Nira Edge</h1>
                  <time class="text-xs tracking-wider uppercase text-gray-400">Aug 2023- Present</time>
                  <p class="mt-3">
                    Had a exposure to real world projects by building websites as pe the requirements of the customer. Contributed in projects such as Ecommerce website , coaching website and a fractional marketing website.
                  </p>
                </div>
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                  <h3 class="text-xl font-semibold tracking-wider">Frontend Developer Intern</h3>
                  <time class="text-xs tracking-wider uppercase dark:text-gray-400">Aug 2023 - Sep 2023</time>
                  <p class="mt-3">
                    Use technologies such as React.Js, Tailwind CSS and other frontend development technologies to build website of a construction company and a NGO. 
                  </p>
                </div>
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                  <h3 class="text-xl font-semibold tracking-wider">IEEE-PCS</h3>
                  <time class="text-xs tracking-wider uppercase dark:text-gray-400">October 2021</time>
                  <p class="mt-3">
                    Contributed in technical domain 
                  </p>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Skills;
