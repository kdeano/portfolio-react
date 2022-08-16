import React from 'react'
import { VerticleButton as ScrollUpButton } from 'react-scroll-up-button'

const Resume = () => {
  return (
    <div name="resume" className="w-full h-full bg-body text-gray-300 pb-20">
      <ScrollUpButton 
          style={{ backgroundColor: '#db2777' }} 
          ToggledStyle={{ opacity: 0.8 }}
          AnimationDuration={1000}
        />

      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 pt-[10rem] block justify-center w-full h-full">
        {/* Personal information */}
        <h1 className="text-white text-4xl font-bold text-center">Kyle Dean</h1>
        <p className="pt-4 text-center">Chadderton, Oldham, Greater Manchester</p>
        <p className="text-center">+44 7834 281 669 | kyle.antony.dean@gmail.com</p>

        {/* Profile header */}
        <div className="w-full h-[2.5rem] mt-4 bg-pink-600">
          <h1 className="text-white text-xl lg:text-2xl font-bold px-2 py-1.5 lg:py-1">PROFILE</h1>
        </div>

        {/* Profile bio */}
        <p className="text-gray-200 text-left mt-2 px-2">Enthusiastic developer, offering a wealth of experience and education in technical troubleshooting and problem-solving issues. I have over 7 years of experience with programming and digital design to bring to any team. Hard-working, educated, and willing to go the extra mile to complete any task.</p>

        {/* Education & qualifications header */}
        <div className="w-full h-[2.5rem] mt-4 bg-pink-600">
          <h1 className="text-white text-xl lg:text-2xl font-bold px-2 py-1.5 lg:py-1">EDUCATION & QUALIFICATIONS</h1>
        </div>

        {/* Education & qualifications bio */}
        {/* Sheffield Hallam */}
        <h2 className="text-white text-md lg:text-lg text-left mt-2 px-2 font-semibold">Sheffield Hallam University | BSc Computer Science<span className="block lg:flex lg:float-right">Sep 2019 - Jun 2022</span></h2>
        <p className="text-gray-200 text-left mt-3 px-2">Grade achieved: First Class Honors (1st)<br /><br />Modules I passed include (but not limited to): Databases, Mobile Development, Object-oriented Programming, Fundamentals of Programming, Algorithms & Data structures, Fundamentals of Computer architecture</p>

        {/* Oldham College */}
        <h2 className="text-white text-md lg:text-lg text-left mt-10 px-2 font-semibold">Oldham College | Advanced Technical Extended Diploma<span className="block lg:flex lg:float-right">Sep 2017 - Jun 2019</span></h2>
        <p className="text-left mt-3 px-2">Level 3 Application Development - Distinction, Distinction</p>
        <p className="text-left px-2">Core Maths - B</p>
        <p className="text-left px-2">Pearson Extended Project - D</p>
        <p className="text-left mt-3 px-2">I studied a wide range of development skills, such as professional practices in the workplace, fundamentals of programming in VB.NET & C#, as well as design practices which focuses on the UI & UX properties that a good piece of software should entail to meet the client's needs.</p>
        <p className="text-left mt-3 px-2">I studied two extra modules at college - Core maths and the Extended Project. The latter  was a university standard piece of dissertation work, of which I wrote about AI, delving into machine learning; discussing the possible benefits and drawbacks associated with the technology. This gave me understanding and experience on the type of work expected at a higher level and gave me the presentation skills needed in a workplace.</p>

        {/* Newman RC College */}
        <h2 className="text-white text-md lg:text-lg text-left mt-10 px-2 font-semibold">Newman R.C. College<span className="block lg:flex lg:float-right">Sep 2012 - Jun 2017</span></h2>
        <p className="text-left mt-3 px-2">Achieved 9 GCSEs grades A-B, including Mathematics, English, and Computer Science.</p>

        {/* Key skills */}
        <div className="w-full h-[2.5rem] mt-4 bg-pink-600">
          <h1 className="text-white text-2xl font-bold px-2 py-1">KEY SKILLS</h1>
        </div>
        <ul className="mt-3 ml-7 space-y-1 list-disc">
          <li>Cooperated with members of a team to plan & complete tasks to meet deadlines</li>
          <li>Aware of body language when listening and talking to a team member or supervisor</li>
          <li>Concise & literate in my vocabulary</li>
        </ul>

        {/* Development & IT skills */}
        <div className="w-full h-[2.5rem] mt-4 bg-pink-600">
          <h1 className="text-white text-2xl font-bold px-2 py-1">DEVELOPMENT & IT SKILLS</h1>
        </div>
        <ul className="mt-3 ml-7 space-y-1 list-disc">
          <li>Familiar with frameworks such as React, Angular, NextJS, VueJS, .NET</li>
          <li>Proficient in HTML, CSS, JavaScript, React, C#</li>
          <li>Competent in C, C++, C#, SQL</li>
          <li>Experienced use of the Windows operating system, Microsoft Office Suite, Visual Studio, Visual Studio Code & Git</li>
          <li>Experienced with Figma, Adobe Photoshop, Adobe Illustrator, Adobe Xd </li>
          <li>Experienced using FTP</li>
        </ul>

        {/* Work experience */}
        {/* HCC Solicitors */}
        <div className="w-full h-[2.5rem] mt-4 bg-pink-600">
          <h1 className="text-white text-2xl font-bold px-2 py-1">WORK EXPERIENCE</h1>
        </div>
        <h2 className="text-white text-md lg:text-lg text-left mt-2 px-2 font-semibold">Junior Software Developer | HCC Solicitors (Fixed Term)<span className="block lg:flex lg:float-right">Jul 2022 - Present</span></h2>
        <h3 className="px-2 text-gray-400">HCC Solicitors is an injury law firm in Manchester.</h3>
        <ul className="mt-3 ml-7 space-y-1 list-disc">
          <li>Successfully cleared backlogs of software support tickets on the help desk</li>
          <li>Taught myself the VF (Visual Files) programming language</li>
          <li>Assisted colleagues with software tasks</li>
          <li>Participated in daily stand-up meetings and offered my services to struggling colleagues</li>
          <li>Played a vital role in changing the company’s letter headers and footers to go paperless</li>
        </ul>

        {/* CODE Nightclub */}
        <div className="w-full h-[2.5rem] mt-4 bg-pink-600">
          <h1 className="text-white text-2xl font-bold px-2 py-1">WORK EXPERIENCE</h1>
        </div>
        <h2 className="text-white text-md lg:text-lg text-left mt-2 px-2 font-semibold">Bar Staff | CODE Nightclub<span className="block lg:flex lg:float-right">Jun 2021 - Present</span></h2>
        <h3 className="px-2 text-gray-400">CODE is a reputable nightclub in Sheffield.</h3>
        <ul className="mt-3 ml-7 space-y-1 list-disc">
          <li>Volunteered and worked as a team to manage incoming stock during the day</li>
          <li>Assisted supervisors with closing, cleaning, and managing stock at the end of the night</li>
          <li>Helped with setting up an outdoor festival site to then work on the bars</li>
          <li>Developed my communication skills further whilst working directly with customers</li>
          <li>Taught colleagues how to use tills and what steps to take in numerous situations</li>
          <li>Encouraged team members when faced with a high volume of customers</li>
        </ul>

        {/* Additional information */}
        <div className="w-full h-[2.5rem] mt-4 bg-pink-600">
          <h1 className="text-white text-2xl font-bold px-2 py-1">ADDITIONAL INFORMATION</h1>
        </div>
        <p className="text-left mt-3 px-2">I have a personal portfolio website which is live. It was made using React and Tailwind to make it fast and accessible to all devices.</p>
        <p className="text-left mt-3 px-2">Also, I have been working through the Harvard CS50 course online to sharpen my skills and broaden my knowledge on Computer Science, as well as focusing my learning more on web development and the technology stacks associated with them such as MERN.</p>
        <p className="text-left mt-3 px-2">Currently, I am building a website for my friend’s company using the MERN stack. I am focused more on the front end, but I assist in programming the back end also. The company can be best compared to the likes of Khan Academy and Brilliant.</p>

        {/* Hobbies & Interests */}
        <div className="w-full h-[2.5rem] mt-4 bg-pink-600">
          <h1 className="text-white text-2xl font-bold px-2 py-1">HOBBIES & INTERESTS</h1>
        </div>
        <p className="text-left mt-3 px-2">Passionate football fan, and a club captain at a young age which taught me how to effectively communicate and show leadership. Although I do not get to play as much as I would like to at this stage but given the chance, I would get straight back into it.</p>
        <p className="text-left mt-3 px-2">In my spare time, I own and manage a game server and community which gives me a chance to take a break from work and talk to friends whilst learning valuable Java development and server infrastructure skills along the way.</p>
        <p className="text-left mt-3 px-2">I have a keen eye for digital design and often find myself watching and listening to tutorials on how to improve the UI/UX of any projects I might be working on.</p>

        {/* References */}
        <div className="w-full h-[2.5rem] mt-4 bg-pink-600">
          <h1 className="text-white text-2xl font-bold px-2 py-1">REFERENCES</h1>
        </div>
        <p className="text-left mt-3 px-2">
          <span className="text-white">Soyful Islam</span> |
          Digital & Creative Tutor at Oldham College - 
          <span className="text-white"> soyful.islam@oldham.ac.uk</span>
        </p>
        <p className="text-left mt-3 px-2">
          <span className="text-white">Sam Clowes</span> |
          Manager at CODE Nightclub - 
          <span className="text-white"> sam@codesheffield.com</span>
        </p>

      </div>
    </div>
  )
}

export default Resume