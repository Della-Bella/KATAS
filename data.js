// data.js

const portfolioData = [
    // KATAS IF AND ELSE 
    {
        category: 'katas-if-else',
        title: 'Even or Odd Check',
        description: 'Checks if a number is even or odd using the modulo operator and an if / else statement.',
        codeSnippet: `function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}`,
        link: 'https://www.codewars.com/kata/53da3dbb4a5168369a0000fe'
    },
    {
        category: 'katas-if-else',
        title: 'Is n divisible by x and y',
        description: '  Modulo operator (%). The modulo operator gives you the remainder of a division. If a number n is perfectly divisible by x, the remainder n % x will be === 0 "True"',
        codeSnippet: `function isDivisible(n, x, y) {
  if ( (n % x === 0) && (n % y === 0)){
     return true;
  } else {
    return false;
  }
}`,
        link: 'https://www.codewars.com/kata/5545f109004975ea66000086'
    },
    {
        category: 'katas-if-else',
        title: 'Return Negative',
        description: 'To check if a number is negative in JavaScript= compare it to zero using the less than operator(<)',
        codeSnippet: `function makeNegative(num) {
  if (num < 0) {
    return num
  } else{
   return -num
  }
}`,
        link: 'https://www.codewars.com/kata/55685cd7ad70877c23000102'
    },
    {
        category: 'katas-if-else',
        title: 'Converting Values',
        description: 'Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.',
        codeSnippet: `function boolToWord( bool ){
if ( bool === true){
  return "Yes"
  } else{
    return "No"
  }
}`,
        link: 'https://www.codewars.com/kata/53369039d7ab3ac506000467'

    },
    {
        category: 'katas-if-else',
        title: 'Car Rent disconts Daly',
        description: 'Car Rent disconts Daly (if, else if ). Every day you rent the car costs $40.If you rent the car for 7 or more days, you get $50 off your total.Alternatively, if you rent the car for 3 or more days, you get $20 off your total.',
        codeSnippet: `function rentalCarCost(d) {
   if (d >= 7) {
    return 40 * d - 50; }
  else if (d >= 3) {
    return 40 * d - 20; 
  }else {
    return 40 * d;     
  }
}`,
        link: 'https://www.codewars.com/kata/53369039d7ab3ac506000467'
    },
    
    //loops
    {
        category: 'katas-loops', 
        title: 'Summation (Loops)',
        description: 'Initialize a totalSum to 0.Use a forEach loop to look at each number in the input array.Inside the loop, use an if statement to check if the number is > 0.If it is positive, add it to the totalSum. After the loop finishes, return the final totalSum.',
        codeSnippet: `function positiveSum(inputArray) {
   let totalSum = 0;
    inputArray.forEach( function(number) {
        if (number > 0) {
            totalSum += number;
    }
  });
    return totalSum;
}
  }`,

        link: 'https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript'
    },
   
    
    // --- Katas arrays ---
    {
        category: 'katas-arrays',
        title: 'Get the mean(average) of an array',
        description: 'Return the average of the given array rounded down to its nearest integer.',
        codeSnippet: `function getAverage(marks) {
  let sum = 0; 
  for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i]; 
  }
  const count = marks.length; 
  const average = Math.floor(sum / count);                                    
  return average;
}
`,
        link: 'https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript'
    },

    {
        category: 'katas-arrays',
        title: 'Count of positives / sum of negatives',
        description: 'checking elements and managing two different results based on the array s contents.',
        codeSnippet: `function countPositivesSumNegatives(input) {
 
  if (input === null || input.length === 0) {
    return [];
  }

  let positiveCount = 0; 
  let negativeSum = 0;   

  for (let i = 0; i < input.length; i++) {
    const currentNumber = input[i]; 

    if (currentNumber > 0) {
      
      positiveCount++; 
    } else if (currentNumber < 0) {

      negativeSum += currentNumber; 
    }
  }
`,
        link: 'https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript'
    },

    // --- Projects ---
    {
        category: 'projects-frontend', // main-sub
        title: 'Age Calculator (html, CSS and Js)',
        description: 'A simple web application built with HTML, CSS, and vanilla JavaScript that calculates a user s age in years, months, and days based on their entered birth date.',
        link: 'https://age-calculator-app-dellabella.netlify.app/' 
    },
    {
        category: 'projects-frontend', // main-sub
        title: ' Quote Generator (html, CSS and Js)',
        description: 'A simple web application that displays random quotes fetched from an API. This project was built to practice fundamental JavaScript concepts.',
        link: 'https://quotegenerator-dellabella.netlify.app/'
    },
    {
        category: 'projects-frontend', // main-sub
        title: 'To do List (html, CSS and Js)',
        description: 'This is a straightforward To-Do List web application built with HTML, CSS, and vanilla JavaScript. It demonstrates fundamental JavaScript concepts for interacting with the web page. ',
        link: 'https://to-do-list-dellabella.netlify.app/'
    },
    {
        category: 'projects-frontend', // main-sub
        title: 'Weather App (html, CSS and Js)',
        description: 'This project is a basic web app that lets you search for a city and see its current weather conditions. It was built to practice fetching data from an online service (an API) and displaying it on a webpage.',
        link: 'https://weatherapp-dellabella.netlify.app/'
    },
    {
        category: 'projects-frontend', // main-sub
        title: 'Password Generator (html, CSS and Js)',
        description: 'This project is a basic password generator built while learning fundamental JavaScript concepts. It creates random passwords and includes a copy-to-clipboard feature.',
        link: 'https://password-generator-dellabella.netlify.app/'
    },
    {
        category: 'projects-frontend', // main-sub
        title: 'Notes App (html, CSS and Js)',
        description: 'A basic web application built with HTML, CSS, and JavaScript that allows users to create, view, and delete short text notes. Notes are saved in the browser s local storage, so they persist even after closing the tab or browser.',
        link: 'https://notes-app-dellabella.netlify.app/'
    },
    {
        category: 'projects-frontend',
        title: 'QR Code Generator (html, CSS and Js)',
        description: 'Planning to build a simple To-Do list application to practice DOM manipulation and local storage.',
        link: 'https://qrcode-dellabella.netlify.app/'
    },

    {
        category: 'projects-future',
        title: 'Bookmarks (html, Js)',
        description: 'This is a JavaScript learning project where I built a simple bookmark-sharing web app. It allows users to save and display bookmarked links with short descriptions. I focus on JavaScript logic rather than styling, so this project uses only HTML and JavaScript and minimal CSS.',
        link: 'https://piscine-bookmarks.netlify.app/'
    },

    // --- Courses ---
    {
        category: 'courses-online', // main-sub
        title: '(Online)',
        description: '',
        link: '#' // Optional link to course certificate or platform
    },
    {
        category: 'courses-books',
        title: '(Books)',
        description: '',
        link: '#'
    },

    // --- Bio (Special Category) ---
    {
        category: 'bio', // Just the main category
        title: 'About My Journey',
        description: "I'm actively learning web development, focusing on JavaScript. This site serves as a living document of my progress, experiments, and the concepts I'm mastering through katas, projects, and courses. My goal is to build practical, user-friendly web applications.",
        // No link or code snippet needed here usually
    }
];