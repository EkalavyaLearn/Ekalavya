import { CountUpAnimation } from '..';

const reasons = [
    {
        image: 'quiz',
        heading: 'Comprehensive Quiz Library',
        description:
            'Explore a vast array of quizzes covering various subjects. From tech to trivia, our platform offers engaging content to test your knowledge and challenge your skills.'
    },
    {
        image: 'videocam',
        heading: 'Interactive Learning Videos',
        description:
            'Enhance your learning with our collection of interactive videos. They are designed to make complex topics easy to understand, ensuring a comprehensive learning experience.'
  },
    {
        image: 'school',
        heading: 'Earn Recognized Certificates',
        description:
            'Demonstrate your learning progress and achievement with our recognized certificates. They are a great way to showcase your dedication and expertise in your field.'
  },
    {
        image: 'schedule',
        heading: 'Flexible Study Schedules',
        description:
            'Our platform adapts to your pace. Whether you are a quick learner or prefer taking your time, we provide flexible study options to fit your individual learning style.'
  }
];

function BasicInfo() {
    return (
        <>
            <div className="my-32 w-full overflow-x-hidden border-y-2 border-black bg-primary py-10 drop-shadow-lg dark:border-white">
                <div className="mx-auto grid w-[calc(100vw-25%)] grid-cols-2 gap-10 md:grid-cols-4">
                    <p className="stat">
                        <CountUpAnimation end={200} />
                        <span className="block text-base md:text-lg">Questions</span>
                    </p>
                    <p className="stat">
                        <CountUpAnimation end={100} />
                        <span className="block text-base md:text-lg">Quizzes</span>
                    </p>
                    <p className="stat">
                        <CountUpAnimation end={150} />
                        <span className="block text-base md:text-lg">Videos</span>
                    </p>
                    <p className="stat">
                        <CountUpAnimation end={500} />
                        <span className="block text-base md:text-lg">Students</span>
                    </p>
                </div>
            </div>
            <div className="mb-20 w-[85%]">
                <p className="mb-20 text-center text-4xl font-bold uppercase tracking-wider lg:text-5xl">
                    Why Choose Our Platform?
                </p>
                <div className="grid grid-cols-1 place-content-center gap-x-10 gap-y-16 xl:grid-cols-2 2xl:grid-cols-4">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="card mx-auto max-w-[500px] flex flex-col gap-y-4 border-0 border-b-4 !border-b-primary p-8 text-center transition-transform hover:scale-105 hover:shadow-xl"
                        >
                            <div className="mx-auto mb-4 grid h-fit w-fit place-content-center rounded-full border-2 border-primary bg-secondary p-4 drop-shadow-md">
                                <span className="material-symbols-outlined text-5xl text-white">
                                    {reason.image}
                                </span>
                            </div>
                            <p className="text-xl font-semibold">{reason.heading}</p>
                            <p className="font-medium">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default BasicInfo;
