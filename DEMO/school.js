function showTopic(topic) {
    const content = document.getElementById("content");
  
    let notes = "";
    let practice = "";
  
    switch (topic) {
      case "variables":
        notes = `
          <h2>Variables & Data Types</h2>
          <p>In C, variables must be declared before use. Common data types include int, float, char, and double.</p>
        `;
        practice = `
          <h3>Practice Questions:</h3>
          <ul>
            <li>Declare an integer variable and assign it a value.</li>
            <li>Write a program to input a float and print it.</li>
          </ul>
        `;
        break;
  
      case "loops":
        notes = `
          <h2>Loops in C</h2>
          <p>C supports for, while, and do-while loops to repeat code blocks.</p>
        `;
        practice = `
          <h3>Practice Questions:</h3>
          <ul>
            <li>Print numbers from 1 to 10 using a for loop.</li>
            <li>Write a program to sum numbers using a while loop.</li>
          </ul>
        `;
        break;
  
      case "functions":
        notes = `
          <h2>Functions in C</h2>
          <p>Functions are blocks of code that perform specific tasks. Use <code>returnType functionName()</code> syntax.</p>
        `;
        practice = `
          <h3>Practice Questions:</h3>
          <ul>
            <li>Write a function to add two numbers.</li>
            <li>Write a program that calls a function to find factorial.</li>
          </ul>
        `;
        break;
  
      case "arrays":
        notes = `
          <h2>Arrays in C</h2>
          <p>Arrays store multiple values of the same type. Declare with square brackets, e.g. <code>int arr[5];</code></p>
        `;
        practice = `
          <h3>Practice Questions:</h3>
          <ul>
            <li>Declare and initialize an array of 5 integers.</li>
            <li>Write a program to find the sum of array elements.</li>
          </ul>
        `;
        break;
  
      default:
        notes = "<h2>Topic not found</h2>";
    }
  
    content.innerHTML = notes + practice;
  }
  