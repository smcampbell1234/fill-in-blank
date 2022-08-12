import { Audio } from 'react-loader-spinner';

const DungeunCrawler = ({location, handleMove, loading, dungeunNarritives}) => {
  
    if (loading) {
      return (
        <Audio 
          height = "180"
          width = "180"
          radius = "9"
          color = "#61dafb"
          ariaLabel = 'three-dots-loading'     
          wrapperStyle
          wrapperClass
        />
      )
    } 

  return (
    <main className="center-box-holder">
      <div className="story-nav" onClick= {() => handleMove("dec")}>
        &#x2190;
      </div>
      <div className="center-box">
        {dungeunNarritives[location]}
      </div>
      <div className="story-nav" onClick= {() => handleMove("inc")}>
        &#x2192;
      </div>
    </main>
  )
}

export default DungeunCrawler;