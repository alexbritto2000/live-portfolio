import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import StructuredData from '@/components/StructuredData'

const CodeBlock = ({ code, language = "javascript" }) => {
    return (
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm">
            <pre><code>{code}</code></pre>
        </div>
    )
}

const TopicCard = ({ title, example, explanation, videoLink, additionalInfo, imageUrl }) => {
    return (
        <motion.div 
            initial={{y:50, opacity:0}} 
            whileInView={{y:0, opacity:1, transition:{duration:0.5}}} 
            viewport={{once:true}}
            className='w-full bg-light border border-solid border-dark rounded-2xl p-6 dark:bg-dark dark:border-light mb-6'
        >
            <h3 className='text-2xl font-bold mb-4 text-dark dark:text-light'>{title}</h3>
            
            {example && (
                <div className='mb-4'>
                    <h4 className='text-lg font-semibold mb-2 text-dark dark:text-light'>Example:</h4>
                    <CodeBlock code={example} />
                </div>
            )}
            
            {imageUrl && (
                <div className='mb-4'>
                    <h4 className='text-lg font-semibold mb-2 text-dark dark:text-light'>Visual Reference:</h4>
                    <div className='flex justify-center'>
                        <img 
                            src={imageUrl} 
                            alt={title}
                            className='max-w-full h-auto rounded-lg shadow-lg'
                            style={{ maxHeight: '400px' }}
                        />
                    </div>
                </div>
            )}
            
            {explanation && (
                <div className='mb-4'>
                    <h4 className='text-lg font-semibold mb-2 text-dark dark:text-light'>Explanation:</h4>
                    <p className='text-dark dark:text-light leading-relaxed'>{explanation}</p>
                </div>
            )}
            
            {videoLink && (
                <div className='mb-4'>
                    <h4 className='text-lg font-semibold mb-2 text-dark dark:text-light'>Video Tutorial:</h4>
                    <Link href={videoLink} target="_blank" className='text-primary dark:text-primaryDark hover:underline'>
                        Watch Video Tutorial
                    </Link>
                </div>
            )}
            
            {additionalInfo && (
                <div className='mb-4'>
                    <h4 className='text-lg font-semibold mb-2 text-dark dark:text-light'>Key Points:</h4>
                    <p className='text-dark dark:text-light leading-relaxed'>{additionalInfo}</p>
                </div>
            )}
        </motion.div>
    )
}

const JavaScript = () => {
    const [activeTopic, setActiveTopic] = useState('variables');

    const topics = [
        { id: 'variables', name: 'Variables' },
        { id: 'functions', name: 'Functions' },
        { id: 'arrays', name: 'Arrays' },
        { id: 'objects', name: 'Objects' },
        { id: 'promises', name: 'Promises' },
        { id: 'dom', name: 'DOM' },
        { id: 'es6', name: 'ES6+' },
        { id: 'react', name: 'React' },
        { id: 'nodejs', name: 'Node.js' }
    ];

    const renderContent = () => {
        switch(activeTopic) {
            case 'variables':
                return (
                    <div>
                        <h2 className='text-3xl font-bold mb-8 text-center text-dark dark:text-light'>JavaScript Variables</h2>
                        <div className='space-y-6'>
                        
                        <TopicCard 
                            title="Variable Shadowing"
                            example={`function test() {
    var a = "Hi";
    let b = "Goodbye";

    if(true) {
        let a = "Hi";
        var b = "Goodbye";

        console.log(a);
        console.log(b);
    }
}
test();`}
                            explanation="If we try to shadow let variable by var variable it's illegal shadowing. If we try to shadow var variable by let variable it's legal."
                        />
                        
                        <TopicCard 
                            title="Variable Declaration"
                            example={`var a; // (will work)
const b; // (error)
let a; // (will work)`}
                            explanation="1. Redeclare: we can redeclare var, but we can't redeclare let and const. Example: let ab; let ab; (error) & var ab; var ab; (fine). 2. Declaration without initialization: in var it's possible but in const it's not possible."
                            additionalInfo="Var → can redeclare and reassign | let → can reassign | const → can't redeclare and reassign"
                        />
                        
                        <TopicCard 
                            title="JavaScript Execution Context"
                            example={`let a = 10;

function multiply(x){
    return x * 10;
}

let b = multiply(a);
console.log(b)`}
                            explanation="JavaScript Execution Context has two phases: Creation Phase and Execution Phase. In the Creation Phase, variables are initialized to undefined and functions are fully hoisted. In the Execution Phase, the code is executed line by line and variables get their actual values."
                            imageUrl="https://drive.google.com/uc?export=view&id=1IEZfjAAMdPhL2bFxRC915SqYngJWw8iQ"
                            additionalInfo="Creation Phase: a = undefined, multiply() function is hoisted, b = undefined. Execution Phase: a = 10, b = 100 (result of multiply(a)), console.log(b) outputs 100."
                        />
                        
                        <TopicCard 
                            title="Variable Hoisting"
                            example={`function abc() {
    console.log(a,b,c);

    const c = 20;
    let b = 20;
    var a = 10;
    //here c & b will initialize in temporary dead zone
}

abc()`}
                            explanation="In JavaScript, variables declared with var are hoisted to the top of their scope and initialized with undefined. However, variables declared with const and let are also hoisted to the top of their scope but not initialized. Instead, they are placed in a 'temporal dead zone' until their declaration is encountered in the code."
                            videoLink="https://drive.google.com/file/d/1IEZfjAAMdPhL2bFxRC915SqYngJWw8iQ/view"
                            imageUrl="https://drive.google.com/uc?export=view&id=1IEZfjAAMdPhL2bFxRC915SqYngJWw8iQ"
                            additionalInfo="So, when you try to log a, b, and c before their actual declarations in the function abc(), a is hoisted and initialized to undefined, but b and c are still in the temporal dead zone, causing a ReferenceError when you try to access them."
                        />
                        </div>
                    </div>
                );
            case 'functions':
                return (
                    <div>
                        <h2 className='text-3xl font-bold mb-8 text-center text-dark dark:text-light'>JavaScript Functions</h2>
                        <p className='text-center text-dark dark:text-light'>Coming soon... Add your function topics here!</p>
                    </div>
                );
            case 'arrays':
                return (
                    <div>
                        <h2 className='text-3xl font-bold mb-8 text-center text-dark dark:text-light'>JavaScript Arrays</h2>
                        <p className='text-center text-dark dark:text-light'>Coming soon... Add your array topics here!</p>
                    </div>
                );
            case 'objects':
                return (
                    <div>
                        <h2 className='text-3xl font-bold mb-8 text-center text-dark dark:text-light'>JavaScript Objects</h2>
                        <p className='text-center text-dark dark:text-light'>Coming soon... Add your object topics here!</p>
                    </div>
                );
            case 'promises':
                return (
                    <div>
                        <h2 className='text-3xl font-bold mb-8 text-center text-dark dark:text-light'>JavaScript Promises</h2>
                        <p className='text-center text-dark dark:text-light'>Coming soon... Add your promise topics here!</p>
                    </div>
                );
            case 'dom':
                return (
                    <div>
                        <h2 className='text-3xl font-bold mb-8 text-center text-dark dark:text-light'>DOM Manipulation</h2>
                        <p className='text-center text-dark dark:text-light'>Coming soon... Add your DOM topics here!</p>
                    </div>
                );
            case 'es6':
                return (
                    <div>
                        <h2 className='text-3xl font-bold mb-8 text-center text-dark dark:text-light'>ES6+ Features</h2>
                        <p className='text-center text-dark dark:text-light'>Coming soon... Add your ES6+ topics here!</p>
                    </div>
                );
            case 'react':
                return (
                    <div>
                        <h2 className='text-3xl font-bold mb-8 text-center text-dark dark:text-light'>React JavaScript</h2>
                        <p className='text-center text-dark dark:text-light'>Coming soon... Add your React topics here!</p>
                    </div>
                );
            case 'nodejs':
                return (
                    <div>
                        <h2 className='text-3xl font-bold mb-8 text-center text-dark dark:text-light'>Node.js</h2>
                        <p className='text-center text-dark dark:text-light'>Coming soon... Add your Node.js topics here!</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Head>
                <title>Alex Britto - JavaScript Resources | Tutorials, Tips & Best Practices</title>
                <meta name="description" content="Explore Alex Britto's curated JavaScript resources, tutorials, tips, and best practices. Learn modern JavaScript, ES6+, React, Node.js, and advanced concepts for web development." />
                <meta name="keywords" content="JavaScript Resources, JavaScript Tutorials, ES6 Tutorials, React JavaScript, Node.js Tutorials, JavaScript Best Practices, Modern JavaScript, JavaScript Tips, Web Development JavaScript" />
                <meta property="og:title" content="Alex Britto - JavaScript Resources | Tutorials, Tips & Best Practices" />
                <meta property="og:description" content="Explore Alex Britto's curated JavaScript resources, tutorials, tips, and best practices. Learn modern JavaScript, ES6+, React, Node.js, and advanced concepts." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://alexbritto.dev/javascript" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Alex Britto - JavaScript Resources | Tutorials, Tips & Best Practices" />
                <meta name="twitter:description" content="Explore Alex Britto's curated JavaScript resources, tutorials, tips, and best practices." />
            </Head>
            <StructuredData type="articles" />
            <TransitionEffect />

            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text='JavaScript Resources & Tutorials' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    
                    <div className='flex flex-row md:flex-col gap-8 min-h-screen'>
                        {/* Left Column - Topics List */}
                        <div className='lg:w-1/3 lg:sticky lg:top-24 lg:h-fit md:w-full'>
                            <div className='bg-light dark:bg-dark p-6 rounded-2xl border border-solid border-dark dark:border-light shadow-lg md:w-full'>
                                <h3 className='text-xl font-bold mb-4 text-dark dark:text-light'>JavaScript Topics</h3>
                                <nav className='space-y-2'>
                                    {topics.map((topic) => (
                                        <button
                                            key={topic.id}
                                            onClick={() => setActiveTopic(topic.id)}
                                            className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                                                activeTopic === topic.id
                                                    ? 'bg-primary text-light dark:bg-primaryDark shadow-md'
                                                    : 'text-dark dark:text-light hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-sm'
                                            }`}
                                        >
                                            <span className='font-medium'>{topic.name}</span>
                                            {activeTopic === topic.id && (
                                                <span className='ml-2 text-xs opacity-75'>← Active</span>
                                            )}
                                        </button>
                                    ))}
                                </nav>
                                
                                {/* Quick Stats */}
                                <div className='mt-6 pt-4 border-t border-gray-300 dark:border-gray-600'>
                                    <p className='text-sm text-gray-600 dark:text-gray-400'>
                                        Total Topics: {topics.length}
                                    </p>
                                    <p className='text-sm text-gray-600 dark:text-gray-400'>
                                        Current: {topics.find(t => t.id === activeTopic)?.name}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Selected Topic Content */}
                        <div className='lg:w-2/3 md:w-full'>
                            <div className='bg-light dark:bg-dark p-6 rounded-2xl border border-solid border-dark dark:border-light shadow-lg md:w-full'>
                                {renderContent()}
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default JavaScript 