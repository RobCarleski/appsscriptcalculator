/**
* This function generates HTML to output based on the index.html file.
* @return string HTML
*/
function doGet(){
  return HtmlService.createTemplateFromFile('index').evaluate();
}

/**
* A generic include function to easily include our custom CSS
* @return string HTML 
*/
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
* A function to calculate an equation input into our web application
* @param string The mathematical statement to evaluate
* @return number The result of the calculation 
*/
function calculate(formObject) {
  return eval(formObject['eq']);
}
