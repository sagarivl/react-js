# NAMASTE REACT - ASSIGNMENT 03 - LAYING THE FOUNDATION

## CODING
- Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
- - Create the same element using JSX
- - Create a functional component of the same with JSX
- - Pass attributes into the tag in JSX
- - Composition of Component(Add a component inside another)
- - {TitleComponent} vs {```<TitleComponent/>```} vs {```<TitleComponent></TitleComponent>```} in JSX
- Create a Header Component from scratch using Functional Components with JSX
- - Add a Logo on left
- - Add a search bar in middle
- - Add User icon on right
- - Add CSS to make it look nice

## THEORY

### 01. What is JSX?
JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript code. It is used to define the structure of the user interface (UI) in a declarative way.

Here's an example of JSX:
```
const element = <h1>Hello, world!</h1>;
```
JSX is often used in combination with a library like React to build complex UI elements.

When your code is compiled, the JSX is transformed into regular JavaScript code that the browser can understand.

### 02. Superpowers of JSX
JSX has a few features that make it a powerful tool for building user interfaces:

- It is **declarative**: You can write your UI using JSX and describe how it should look, rather than writing imperative code that manually updates the DOM. This can make your code more predictable and easier to understand.

- It is **expressive**: JSX allows you to include expressions in your UI code, which makes it easier to create dynamic and interactive UIs.

- It is **reusable**: You can create reusable UI components using JSX, which can help you avoid repeating code and make your UI development more efficient.

- It is **type-safe**: If you use a type checker like Flow or TypeScript with JSX, you can catch type errors at compile time, which can help you avoid runtime errors and improve the reliability of your code.

- It **integrates seamlessly with modern JavaScript development tools**: JSX works well with build tools like Webpack and Babel, which can help you automate tasks like code transpilation, minification, and hot module reloading.

### 03. Role of type attribute in script tag? What options can I use there?
The **type** attribute in a script tag specifies the type of script that is being used in the webpage. This attribute is optional, but it is a good practice to include it because it helps the browser process the script correctly and can also help protect against malicious code.

The value of the **type** attribute should be set to the MIME type of the script. For example, the MIME type for JavaScript is **text/javascript**, so you would use **type="text/javascript"** in your script tag.

Here are some other options for the type attribute:

- **text/ecmascript**: This is the MIME type for the ECMAScript programming language, which is the standard for modern JavaScript.

- **text/babel**: This is the MIME type for code that has been transpiled from JavaScript using the Babel transpiler.

- **text/jsx**: This is the MIME type for code written in JSX, a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript code.

- **application/javascript**: This is another MIME type for JavaScript, and it is equivalent to text/javascript.

It's worth noting that the type attribute is not necessary in modern browsers, as they can usually determine the correct MIME type for the script based on the file extension. However, it is still a good practice to include the type attribute for the sake of backwards compatibility and to ensure that your code works correctly in all browsers.

### 04. {TitleComponent} vs {```<TitleComponent/>```} vs {```<TitleComponent></TitleComponent>```} in JSX
In JSX, {TitleComponent} is a placeholder for a JavaScript expression that evaluates to a React component. This could be a reference to a named component that you have defined elsewhere in your code, or it could be an anonymous function that returns a React component.

For example, the following code defines a named component called TitleComponent and then uses it in JSX:
```
function TitleComponent() {
  return <h1>Hello, world!</h1>;
}

const element = <div>{TitleComponent}</div>;
```
On the other hand, <TitleComponent/> and <TitleComponent></TitleComponent> are both examples of JSX tags that represent a React component. These tags will be compiled into a call to the React.createElement() function, which creates a new React element that can be rendered to the DOM.

For example, the following code defines a named component called TitleComponent and then uses it in JSX:
```
function TitleComponent() {
  return <h1>Hello, world!</h1>;
}

const element = <div><TitleComponent/></div>;
```
Both <TitleComponent/> and <TitleComponent></TitleComponent> are equivalent, and you can use either one. The self-closing form (<TitleComponent/>) is generally preferred because it is shorter and easier to read.

It's worth noting that in JSX, all component names must be capitalized, regardless of whether they are being used as placeholders or as tags. This is because JSX uses a case-sensitive syntax, and all lowercase tags are treated as HTML elements by default.
