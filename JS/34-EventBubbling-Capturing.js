//Event Bubbling
/*

<body>
    <div id="container">
      <button id="btn">Click Me</button>
    </div>
  </body>

in event bubbling model an event starts at the most specific element and then flows upward toward the least specific element[the document
or even window]

when we click on button click event occurs in following order
button --> div --> body --> html -- > document


addEventListener(event,function,useCapture)
the default value is false - causes bubbling
if set to true - causes propogation
*/

// to stop propogation event.propogation()
