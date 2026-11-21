import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import StructuredData from '@/components/StructuredData'

const CodeBlock = ({ code }) => {
    return (
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm leading-relaxed">
            <pre><code>{code}</code></pre>
        </div>
    )
}

const TopicCard = ({ title, example, explanation, videoLink, additionalInfo }) => {
    return (
        <motion.div 
            initial={{y:50, opacity:0}} 
            whileInView={{y:0, opacity:1, transition:{duration:0.5}}} 
            viewport={{once:true}}
            className='w-full bg-light border border-solid border-dark/20 dark:border-light/20 rounded-2xl p-6 dark:bg-dark mb-6 shadow-sm'
        >
            <h3 className='text-2xl font-bold mb-4 text-dark dark:text-light'>{title}</h3>
            
            {example && (
                <div className='mb-4'>
                    <h4 className='text-base font-semibold mb-2 text-dark dark:text-light'>Example Code:</h4>
                    <CodeBlock code={example} />
                </div>
            )}
            
            {explanation && (
                <div className='mb-4'>
                    <h4 className='text-base font-semibold mb-2 text-dark dark:text-light'>Explanation:</h4>
                    <p className='text-dark/90 dark:text-light/90 leading-relaxed text-sm'>{explanation}</p>
                </div>
            )}
            
            {videoLink && (
                <div className='mb-4'>
                    <h4 className='text-base font-semibold mb-2 text-dark dark:text-light'>Resource Link:</h4>
                    <Link href={videoLink} target="_blank" className='text-primary dark:text-primaryDark hover:underline text-sm font-semibold'>
                        View Resource
                    </Link>
                </div>
            )}
            
            {additionalInfo && (
                <div className='mt-4 pt-3 border-t border-dark/10 dark:border-light/10'>
                    <h4 className='text-xs font-bold uppercase tracking-wider text-primary dark:text-primaryDark mb-1'>Key Takeaway:</h4>
                    <p className='text-dark/80 dark:text-light/80 leading-relaxed text-xs'>{additionalInfo}</p>
                </div>
            )}
        </motion.div>
    )
}

const JavaScript = () => {
    const [activeTopic, setActiveTopic] = useState('variables');

    const topics = [
        { id: 'variables', name: 'Variables & Scope' },
        { id: 'functions', name: 'Functions & Closures' },
        { id: 'arrays', name: 'Array Methods' },
        { id: 'objects', name: 'Objects & Prototypes' },
        { id: 'promises', name: 'Promises & Async' },
        { id: 'eventloop', name: 'Event Loop' },
        { id: 'es6', name: 'ES6+ Features' },
        { id: 'react', name: 'React Fundamentals' },
        { id: 'typescript', name: 'TypeScript Basics' }
    ];

    const renderContent = () => {
        switch(activeTopic) {
            case 'variables':
                return (
                    <div>
                        <h2 className='text-2xl font-bold mb-6 text-dark dark:text-light'>Variables, Scope &amp; Hoisting</h2>
                        <div className='space-y-6'>
                            <TopicCard 
                                title="Variable Shadowing"
                                example={`function test() {
    var a = "Hi";
    let b = "Goodbye";

    if(true) {
        let a = "Hi"; // Legal: shadowing var with let
        // var b = "Goodbye"; // Illegal: cannot shadow let with var in same or nested block
        console.log(a);
    }
}
test();`}
                                explanation="If we try to shadow a let variable by a var variable in the same scope, it is illegal shadowing. Shadowing a var variable by a let variable is legal and scoped to the enclosing block."
                                additionalInfo="var is function-scoped; let and const are block-scoped."
                            />
                            
                            <TopicCard 
                                title="Variable Hoisting & Temporal Dead Zone (TDZ)"
                                example={`console.log(a); // undefined (hoisted & initialized to undefined)
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// console.log(c); // ReferenceError: Cannot access 'c' before initialization

var a = 10;
let b = 20;
const c = 30;`}
                                explanation="var declarations are hoisted to the top of their scope and initialized with undefined. let and const declarations are also hoisted, but remain uninitialized in the Temporal Dead Zone (TDZ) until their declaration statement is evaluated."
                                additionalInfo="Accessing a variable in its TDZ results in an immediate ReferenceError."
                            />
                        </div>
                    </div>
                );
            case 'functions':
                return (
                    <div>
                        <h2 className='text-2xl font-bold mb-6 text-dark dark:text-light'>Functions, Closures &amp; Currying</h2>
                        <div className='space-y-6'>
                            <TopicCard 
                                title="Closures in JavaScript"
                                example={`function createCounter() {
    let count = 0; // private state
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2`}
                                explanation="A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). A closure gives an inner function access to an outer function's scope even after the outer function has returned."
                                additionalInfo="Used extensively for data privacy, memoization, currying, and factory functions."
                            />

                            <TopicCard 
                                title="Arrow Functions vs Regular Functions"
                                example={`const obj = {
    name: "Alex",
    regularFn: function() {
        console.log("Regular this:", this.name); // "Alex"
    },
    arrowFn: () => {
        console.log("Arrow this:", this.name); // undefined (lexical this from outer scope)
    }
};`}
                                explanation="Arrow functions do not have their own 'this', 'arguments', 'super', or 'new.target'. They inherit 'this' lexically from their enclosing execution context. Regular functions bind 'this' depending on how they are called (method call, standalone, call/apply/bind)."
                            />
                        </div>
                    </div>
                );
            case 'arrays':
                return (
                    <div>
                        <h2 className='text-2xl font-bold mb-6 text-dark dark:text-light'>Array Methods &amp; Immutability</h2>
                        <div className='space-y-6'>
                            <TopicCard 
                                title="map vs filter vs reduce"
                                example={`const numbers = [1, 2, 3, 4, 5];

// Map: transforms each element
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// Filter: selects elements matching condition
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// Reduce: aggregates into a single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15`}
                                explanation="These three higher-order functions are fundamental for functional, declarative programming in JavaScript and modern UI libraries like React and Angular. None of them mutate the original array."
                            />
                        </div>
                    </div>
                );
            case 'objects':
                return (
                    <div>
                        <h2 className='text-2xl font-bold mb-6 text-dark dark:text-light'>Objects &amp; Prototype Inheritance</h2>
                        <div className='space-y-6'>
                            <TopicCard 
                                title="Prototypal Inheritance"
                                example={`function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return "Hello, my name is " + this.name;
};

const alex = new Person("Alex Britto");
console.log(alex.greet()); // "Hello, my name is Alex Britto"
console.log(alex.__proto__ === Person.prototype); // true`}
                                explanation="JavaScript uses prototypal inheritance. Every object has an internal hidden [[Prototype]] property. When accessing a property on an object, JS first checks the object itself, then traverses up the prototype chain until found or reaching null."
                            />
                        </div>
                    </div>
                );
            case 'promises':
                return (
                    <div>
                        <h2 className='text-2xl font-bold mb-6 text-dark dark:text-light'>Promises &amp; Asynchronous Control Flow</h2>
                        <div className='space-y-6'>
                            <TopicCard 
                                title="Promise States &amp; Promise.all vs Promise.allSettled"
                                example={`const p1 = Promise.resolve(10);
const p2 = Promise.reject("Network Error");
const p3 = Promise.resolve(30);

// Promise.all: Fails fast if ANY promise rejects
Promise.all([p1, p3]).then(console.log); // [10, 30]

// Promise.allSettled: Waits for all to complete regardless of outcome
Promise.allSettled([p1, p2, p3]).then(results => {
    // results will have status: "fulfilled" or "rejected"
    console.log(results);
});`}
                                explanation="A Promise has three states: Pending, Fulfilled, or Rejected. Promise.all is all-or-nothing, while Promise.allSettled guarantees that every promise resolves or rejects without short-circuiting."
                            />
                        </div>
                    </div>
                );
            case 'eventloop':
                return (
                    <div>
                        <h2 className='text-2xl font-bold mb-6 text-dark dark:text-light'>Event Loop &amp; Task Queues</h2>
                        <div className='space-y-6'>
                            <TopicCard 
                                title="Microtasks vs Macrotasks"
                                example={`console.log("1: Synchronous");

setTimeout(() => {
    console.log("4: Macrotask (setTimeout)");
}, 0);

Promise.resolve().then(() => {
    console.log("3: Microtask (Promise)");
});

console.log("2: Synchronous");

// Output Order:
// 1: Synchronous
// 2: Synchronous
// 3: Microtask (Promise)
// 4: Macrotask (setTimeout)`}
                                explanation="The JavaScript Call Stack executes synchronous code first. Microtasks (Promise callbacks, queueMicrotask) have higher priority and are completely drained before the Event Loop picks the next macrotask (setTimeout, setInterval, I/O)."
                            />
                        </div>
                    </div>
                );
            case 'es6':
                return (
                    <div>
                        <h2 className='text-2xl font-bold mb-6 text-dark dark:text-light'>Modern ES6+ Features</h2>
                        <div className='space-y-6'>
                            <TopicCard 
                                title="Destructuring, Optional Chaining &amp; Nullish Coalescing"
                                example={`const user = {
    profile: {
        name: "Alex",
        settings: { theme: null }
    }
};

// Optional chaining (?.) safely navigates null/undefined:
const city = user?.address?.city ?? "Default City";

// Nullish coalescing (??) only checks null/undefined (unlike || which treats 0/"" as falsy):
const theme = user.profile.settings.theme ?? "dark"; // "dark"`}
                                explanation="Optional chaining (?.) prevents 'Cannot read properties of undefined' TypeError. Nullish coalescing (??) provides a clean fallback only for nullish values (null or undefined)."
                            />
                        </div>
                    </div>
                );
            case 'react':
                return (
                    <div>
                        <h2 className='text-2xl font-bold mb-6 text-dark dark:text-light'>React Core Principles</h2>
                        <div className='space-y-6'>
                            <TopicCard 
                                title="Virtual DOM &amp; Reconciliation"
                                example={`// In React, whenever state changes, React creates a new Virtual DOM tree.
// The Diffing Algorithm compares the new tree with the previous snapshot:
// 1. Elements of different types produce completely different trees.
// 2. Keys uniquely identify elements across renders in dynamic lists.`}
                                explanation="React maintains a lightweight in-memory representation of the real DOM called the Virtual DOM. Reconciliation is the process of diffing the Virtual DOM trees and computing the minimal set of real DOM mutations necessary."
                            />
                        </div>
                    </div>
                );
            case 'typescript':
                return (
                    <div>
                        <h2 className='text-2xl font-bold mb-6 text-dark dark:text-light'>TypeScript Types &amp; Generics</h2>
                        <div className='space-y-6'>
                            <TopicCard 
                                title="Generics &amp; Utility Types"
                                example={`// Generic API Response Wrapper:
interface ApiResponse<T> {
    data: T;
    statusCode: number;
    success: boolean;
    error?: string;
}

interface Shipment {
    id: string;
    destination: string;
}

// Utility Types:
type PartialShipment = Partial<Shipment>; // All optional
type ReadonlyShipment = Readonly<Shipment>; // Immutable`}
                                explanation="Generics enable creating reusable components, interfaces, and functions that work across multiple data types with complete compile-time type safety."
                            />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Head>
                <title>Alex Britto - JavaScript &amp; Frontend Resources</title>
                <meta name="description" content="Explore JavaScript, TypeScript, and Frontend concepts curated by Alex Britto. Includes variables, scope, closures, event loop, and React." />
            </Head>
            <StructuredData type="articles" />
            <TransitionEffect />

            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-6 sm:pt-4'>
                    {/* Header Banner */}
                    <div className="w-full mb-6 p-3.5 rounded-xl bg-primary/10 border border-primary/20 text-center flex items-center justify-between flex-wrap gap-2">
                        <span className="text-xs font-semibold text-dark dark:text-light">
                            🚀 Looking for .NET, C#, SQL Server &amp; Angular Full Stack Interview Questions?
                        </span>
                        <Link 
                            href="/interview"
                            className="text-xs font-bold px-3.5 py-1.5 rounded-lg bg-primary text-light dark:bg-primaryDark dark:text-dark hover:opacity-90 transition-all"
                        >
                            Open Full Stack Interview Hub →
                        </Link>
                    </div>

                    <AnimatedText text='JavaScript &amp; Frontend Knowledge Base' className='!text-3xl md:!text-2xl sm:!text-xl mb-8 text-center' />
                    
                    <div className='flex flex-row md:flex-col gap-8 min-h-screen w-full'>
                        {/* Left Column - Topics List */}
                        <div className='lg:w-1/3 lg:sticky lg:top-24 lg:h-fit md:w-full'>
                            <div className='bg-light dark:bg-dark p-6 rounded-2xl border border-solid border-dark/20 dark:border-light/20 shadow-md'>
                                <h3 className='text-xl font-bold mb-4 text-dark dark:text-light'>Topics</h3>
                                <nav className='space-y-2'>
                                    {topics.map((topic) => (
                                        <button
                                            key={topic.id}
                                            onClick={() => setActiveTopic(topic.id)}
                                            className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm font-medium ${
                                                activeTopic === topic.id
                                                    ? 'bg-dark text-light dark:bg-light dark:text-dark shadow-md font-semibold'
                                                    : 'text-dark dark:text-light hover:bg-dark/5 dark:hover:bg-light/5'
                                            }`}
                                        >
                                            {topic.name}
                                        </button>
                                    ))}
                                </nav>
                                
                                <div className='mt-6 pt-4 border-t border-dark/10 dark:border-light/10 text-xs text-dark/60 dark:text-light/60'>
                                    Active: <span className="font-semibold text-primary dark:text-primaryDark">{topics.find(t => t.id === activeTopic)?.name}</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Selected Topic Content */}
                        <div className='lg:w-2/3 md:w-full'>
                            <div className='bg-light dark:bg-dark p-6 rounded-2xl border border-solid border-dark/20 dark:border-light/20 shadow-md'>
                                {renderContent()}
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default JavaScript;
