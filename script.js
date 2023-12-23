// Get the mode selector element
const themeSelector = document.getElementById("theme-selector");
// Add eventlistener to handle the change in options
themeSelector.addEventListener('change', () => {
 if(!isMatchMediaSupp){
    alert('matchMedia is not supported in this browser');
 }
 else{
    if(themeSelector.value === 'system'){
        getSystemTheme();
      }
      else{ // option = 'dark' or option = 'light'
        setTheme(themeSelector.value)    
      }
 }
});

// Get the html element
const htmlEl = document.querySelector('html');

// Function setTheme accepts a string and  toggles the dark class 
// for the html element according to the parameter
function setTheme(theme){
    htmlEl.classList.toggle('dark', theme === 'dark')
}

// Check if the browser supports matchMedia
const isMatchMediaSupp = window.matchMedia;

function getSystemTheme(){
    if (isMatchMediaSupp) {
        // Create a media query object
        const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Define a callback function to be executed when the media query matches
        const themeHandler = (event) => {
            if (themeSelector.value === "system"){
                const newTheme = event.matches? 'dark' : 'light';
                setTheme(newTheme);
            }
        };
        // Add the listener to the media query object
        darkMediaQuery.addEventListener('change', themeHandler);

        // Initial check for the current state
        themeHandler(darkMediaQuery);
        } else {
        // Alert for browsers that do not support matchMedia
        alert('matchMedia is not supported in this browser');
        }
}

// Default to system
themeSelector.value = "system";
getSystemTheme();
