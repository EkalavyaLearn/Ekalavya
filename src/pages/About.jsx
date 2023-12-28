const aboutDetails = [
    `Dive into the world of coding with Quizzy, your ultimate destination for interactive and insightful coding quizzes! Our platform is dedicated to making coding practice enjoyable and productive. Whether you're a budding coder or a seasoned developer, Quizzy has something for everyone, spanning a variety of programming languages and key computer science topics.`,
  
    `Quizzy champions the idea that coding education should be universally accessible. This is why we've made our entire quiz repository completely free. No matter your expertise level, you'll find our quizzes not just a tool for improvement but also a window to the latest industry trends and practices.`,
  
    `Our quiz selection is diverse and engaging, featuring multiple-choice questions, hands-on coding tasks, and real-world scenarios. We provide instant feedback on your responses, ensuring a dynamic learning experience. Quizzy is more than a quiz platform; it's a learning companion for both educational and recreational use – all at no cost.`,
  
    `Our dedicated team of coding professionals and educators continuously strive to bring you top-notch, up-to-date content. We keep our quizzes in sync with the latest industry developments, ensuring you're always ahead in the fast-evolving world of coding.`,
  
    `Thank you for choosing Quizzy for your coding journey. We're excited to be part of your learning process and can't wait to see you excel in the coding realm!`
  ];
  
  function About() {
    return (
      <div className="mx-auto flex w-[85%] animate-reveal flex-col items-center justify-center">
        <h1 className="page-heading">About EklavyaLearn</h1>
  
        <div className="card flex max-w-4xl flex-col gap-10 p-6 text-justify font-medium dark:text-red-300 sm:w-3/5 sm:text-xl">
          {aboutDetails.map((para, index2) => (
            <p
              key={index2}
              className="indent-10 first-letter:text-xl dark:text-gray-300 sm:first-letter:text-2xl"
            >
              {para}
            </p>
          ))}
        </div>
  
        <span className="mt-14 block font-semibold tracking-wide">
          Developed by &nbsp;
          <a
            className="cursor-pointer hover:underline"
            href="https://www.nalamalan.blogspot.com"
            rel="noreferrer"
            target="_blank"
          >
            Team EklavyaLearn.
          </a>
        </span>
  
        {/*<div className=" mt-8 inline-flex w-full items-center justify-center">
          <hr className="my-8 h-1 w-64 rounded border-0 bg-primary dark:bg-secondary" />
          <div className="absolute left-1/2 -translate-x-1/2 bg-light px-4 dark:bg-dark">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-gray-700 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 27"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
          </div> 
        </div>*/}
      </div>
    );
  }
  
  export default About;
  