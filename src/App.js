
// Form Field Object
// https://github.com/john-smilga/redux-toolkit-jobster/blob/main/src/pages/Register.js
import React, {useState} from 'react';
import DungeunCrawler from './DungeunCrawler';
import Questioner from './Questioner';

const story = "Let me live life [distance] deep. Let me know the rich flaver of red [animal] meat on my palate and sweet stinging [fruit] wine in my throat, the [temperature] embrace of [texture] arms around my body, the mad exultation of battle when the [color] [weapon] flame crimson, and I am content."

const prompts = [
  "name",
  "warrior-type",
  "distance",
  "animal",
  "fruit",
  "temperature",
  "texture",
  "color",
  "weapon"
]

const dungeunNarritives = [
  "A shady character in front of an old pub approaches you and asks your name.",
  "You look like a warrior, he says, but what kind?",
  "You settle in wih this character, you have ridden long and far.",
  "What is your favorite animal, the man asks",
  "Order your food, are you vegitarian?",
  "The weather today is a good topic for conversation.",
  "What does the dirt feel like in this dew.",
  "The color of the sky",
  "And your weapon of choice, good sir."
]

function App() {
  const [location,setLocation] = useState(0);
  const [values,setValues] = useState({});
  const [loading,setLoading] = useState(false)
  const [story,setStory] = useState(false)
  const [error, setError] = useState(false)

  const handleMove = (which) => {
    if (which === "dec") {
      if (location > 0){
        setLocation(location - 1)
        setError(false)
      }
    }
     else {
      if (location < prompts.length - 1) {
        if(!!values[`${prompts[location]}`]) {
          setLocation(location + 1)
          setError(false)
        }
        else{
          setError(true)
        }
          
      } else {
        setLoading(true)
        setError(false)
        setTimeout(()=>{
        setLoading(false)
        setStory(true)
        })
      }
    }
  }

  const generateStory = () => {
    return (
      <div>
      <p>
        {
          `
          Let me live life ${(values[prompts[2]]).toLowerCase()} deep. 
          Let me know the rich flaver of red ${(values[prompts[3]]).toLowerCase()} 
          meat on my palate and sweet stinging ${(values[prompts[4]]).toLowerCase()} 
          wine in my throat, the ${(values[prompts[5]]).toLowerCase()} 
          embrace of ${(values[prompts[6]]).toLowerCase()} arms around my body, 
          the mad exultation of battle when the ${(values[prompts[7]]).toLowerCase()} 
          ${(values[prompts[8]]).toLowerCase()} flame crimson, and I am content.
          `
        }
      </p>
      <h3>~ {values[prompts[0]]}, {values[prompts[1]]}</h3>
      </div>
      
    )
    return 
  }

  const handleReset = () => {
    setLocation(0)
    setValues({})
    setLoading(false)
    setStory(false)
    setError(false)
  }

  if (story) {
    return <div className="App">
       <h1 className="header-txt">Dungeon Crawl</h1>
       <main className="center-box-holder">
        <div className="generate-story-inner">
          {generateStory()}
        </div>
       </main>
       <footer>
        <h2 className="reset" onClick={handleReset}><u>Go on another adventure</u></h2></footer>
    </div>
   
  }

  console.log(`values location ${location}     / prompts[location] ${prompts[location]}    / values.prompts.location : `,values[`${prompts[location]}`])
  console.log("values : ",values)

  return (
    <div className="App">
      <h1 className="header-txt">Dungeon Crawl</h1>
      <DungeunCrawler 
        setLocation={setLocation} 
        location={location} 
        handleMove={handleMove}
        loading={loading}
        dungeunNarritives={dungeunNarritives}
      />
      <Questioner 
        prompts={prompts} 
        location={location} 
        values={values}
        setValues={setValues}
        handleMove={handleMove}
        loading={loading}
        error={error}
        />
        <footer onClick={handleReset}>Reset</footer>
    </div>
  );
}

export default App;
