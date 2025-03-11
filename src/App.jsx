import { useState } from 'react'
import './App.css'

function App() {
  
  const [text , setText] = useState('')
  const [para, setPara] = useState('');
  
  function generateParagraph(){
    const numWords = parseInt(text, 10);

    if(isNaN(numWords) || numWords <= 0){
       setPara('Please enter a valid number of words.');
       return;
    }
    const words = [
        "lorem", "ipsum", "dolor", "sit", "amet", "consectetur",
        "adipiscing", "elit", "sed", "do", "eiusmod", "tempor",
        "incididunt", "ut", "labore", "et", "dolore", "magna",
        "aliqua", "ut", "enim", "ad", "minim", "veniam"
    ];
    let paragraph = [];

    for(let i=0;i<numWords;i++){
       paragraph.push(words[Math.floor(Math.random()*words.length)]);
    }

    setPara(paragraph.join(' ')+'.')
  }

  return (
        <>
        <div className='grid grid-cols-1 m-5 items-center '>
          <h1 className='text-4xl font-bold flex justify-center'>Para Generator</h1>
        <div className='mt-2'>
           <input type="text" placeholder='Enter Number of Words' value={text} onChange={(e)=> setText(e.target.value)} 
                  className='w-300 p-2 m-5' />
           <button className='bg-black text-white  rounded-lg  p-2' 
            onClick={generateParagraph}>Generate</button>
        </div>
        <span className='m-4'>
           {para}
        </span>
        </div>
        </>
  )
}

export default App
