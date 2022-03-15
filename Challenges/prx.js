// Takes in an Array of podcast title strings
// Returns an Array of strings where the words are reversed

function reverseWords(podcastTitles) {
    let reversedWordsArray = [];
    for (let i = 0; i < podcastTitles.length; i++) {
      let title = podcastTitles[i]
        .split(' ')
        .filter(podcast => podcast !== '' && podcast.replace('\t', ''))
        .reverse()
        .join(' ');
      reversedWordsArray.push(title);
    }
    return reversedWordsArray;
  }
  
  // Bonus
  // remove tab - podcast.replace('\t', ' ').trim() - ?
  // returns null for weird inputs - ?
  // if(typeof podcast !== 'string'){
  // podcast.replace(null)
  // }
  
  // Takes in an Array of podcast title strings
  // Returns an Array of strings are lowercased and duplicate characters removed.
  
  function removeDupeChars(podcastTitles) {
    let removedDuplicates = [];
  
    for (let i = 0; i < podcastTitles.length; i++) {
      let title = podcastTitles[i].toLowerCase().split('');
      for (let j = 0; j < title.length; j++) {
        for (let k = j + 1; k < title.length; k++) {
          if (title[j] === title[k] && title[k] !== ' ') {
            title.splice(k, 1);
          }
        }
      }
      removedDuplicates.push(title.join(''));
    }
    return removedDuplicates;
  }
  
  // Takes in a podcast title string
  // Returns the number of cool-points that title has, based on how many times it
  // includes the following words:
  // var COOL_WORDS;
  
  const COOL_WORDS = {
    bamboozled: 4,
    picturesque: 2,
    dastardly: 1,
    trapezoid: 1,
  };
  
  function coolPoints(title) {
    let words = title.toLowerCase().split(' ');
    let cool = 0;
  
    for (let i = 0; i < words.length; i++) {
      let string = words[i];
      if (COOL_WORDS.hasOwnProperty(string)) {
        cool += COOL_WORDS[string];
      } else if (!COOL_WORDS.hasOwnProperty(string)) {
        cool += 0;
      }
    }
    return cool;
  }
  
  // Bonus
  // handles pluralize words
  // removes all 's'  - ?
  // if(string.includes('s', string.length-1)){
  //   string = string.substr(0,string.length-1)
  //   console.log(string)
  // }
  
  // Takes in an Array of podcast title strings
  // Returns an Array of those strings, sorted by their "cool" points
  
  function sortCoolest(podcastTitles) {
    // use function coolPoints() as helper func ?
    return podcastTitles.sort((a, b) => b - a);
    // sorts largest to smallest
  }
  
  // Takes in a podcast title string
  // Checks a PRX API to see if the a series with that title already exists
  // Returns true if the title is unique, and false if it is already in use
  
  // TODO query PRX_SEARCH with a query param `?q="some title"`
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  
  const PRX_SEARCH = 'https://cms.prx.org/api/v1/series/search';
  
  function checkUnique(title) {
    if (title === '' || title === '   ' || title === null || title === undefined) {
      return false;
    }
    fetch(`https://cms.prx.org/api/v1/series/search?q=${title}`)
      .then(response => {
        console.log(response.url);
        if (!response.ok) {
          throw Error('ERROR');
        }
        return response.json();
      })
      .then(data => {
        console.log(data.count);
        if (data.count === 0) {
          return true;
        } else if (data.count !== 0) {
          return false;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  checkUnique();
  