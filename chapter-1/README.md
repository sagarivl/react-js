# NAMASTE REACT - ASSIGNMENT 01 - INCEPTION

## CODING
Create DOM element using both JavaScript and React

## THEORY

### 01. What is Emmet?
Emmet is a tool that allows developers to write and expand abbreviations into HTML, XML, and other structured code. It is a plugin for text editors that supports syntax highlighting, code completion, and other features for writing and editing code.

Emmet abbreviations are written using a special syntax, which can then be expanded into structured code by using a keyboard shortcut or by hovering over the abbreviation and clicking the expansion button.

For example, you can write the abbreviation **`div>p#myid.myclass`** and expand it into the following HTML code:

```
<div>
  <p id="myid" class="myclass"></p>
</div>
```
Emmet is available as a plugin for many popular text editors, including Sublime Text, Visual Studio Code, and Atom. It can also be used in web development tools such as Adobe Dreamweaver and JetBrains WebStorm.

### 02. Difference between a Library and Framework?
A library is a collection of code that you can use in your own code to perform a specific set of functions or tasks. You can think of it as a toolbox that provides a set of tools that you can use to complete a specific task or set of tasks. A library is typically used to perform a specific task or set of tasks, and it is up to the programmer to decide how to use it in their code.

A framework, on the other hand, is a set of libraries and tools that are designed to be used together to build and run a specific type of application. A framework provides a structure for building an application and provides a set of conventions for how the code should be organized and written. It also typically includes a set of libraries and tools that are designed to be used together to perform common tasks, such as database access, input/output, and networking.

In summary, a library is a collection of code that you can use to perform specific tasks, while a framework is a set of libraries and tools that are designed to be used together to build and run a specific type of application.

### 03. What is CDN? Why do we use it?
Content Delivery Network (CDN) is a distributed network of servers that are used to deliver content to users based on their geographic location. CDNs are used to improve the performance and availability of websites and applications by reducing the distance between the user and the server that is delivering the content.

CDNs work by storing copies of content, such as images, videos, and other static files, on servers in multiple locations around the world. When a user requests content from a website or application that is served by a CDN, the CDN will deliver the content from the server that is closest to the user's location. This reduces the amount of time it takes for the content to be delivered to the user, improving the performance of the website or application.

There are several reasons why CDNs are used:

* Improved performance: CDNs can improve the performance of a website or application by reducing the distance between the user and the server, which reduces the amount of time it takes for the content to be delivered.

* Increased availability: CDNs can also improve the availability of a website or application by distributing the content across multiple servers in different locations. This means that if one server goes down, the content can still be delivered from another server.

* Security: CDNs can also provide additional security by protecting against distributed denial of service (DDoS) attacks and other security threats.

* Cost savings: Using a CDN can also help reduce the cost of hosting a website or application, as the content is distributed across multiple servers rather than being hosted on a single server.

Overall, CDNs are used to improve the performance, availability, security, and cost-effectiveness of websites and applications.

### 04. Why is React known as React?
React is a JavaScript library for building user interfaces that was developed and is maintained by Facebook. It is known as React because it was designed to be reactive, meaning that it was designed to update the user interface in response to changes in the underlying data.

React uses a virtual DOM (Document Object Model) to optimize the rendering of components, so that the user interface is updated efficiently when the underlying data changes. When a component's state changes, React compares the virtual DOM with the real DOM and only updates the parts of the user interface that have actually changed, rather than re-rendering the entire user interface. This makes React very efficient for building large, complex user interfaces that need to update frequently in response to changing data.

The name **"React"** is a short form of **"responsive,"** which refers to the reactive nature of the library and its ability to efficiently update the user interface in response to changes in the underlying data.

### 05. What is crossorigin in script tag?
The **`crossorigin`** attribute is used in the script tag to specify whether a script should be loaded using CORS (Cross-Origin Resource Sharing). CORS is a mechanism that allows a web page to make requests to a server that is located in a different domain from the page.

The **`crossorigin`** attribute has the following values:

* **`anonymous`**: Request uses CORS headers and credentials flag is set to **`same-origin`**. There is no exchange of user credentials via cookies, client-side SSL certificates or HTTP authentication, unless destination is the same origin.

* **`use-credentials`**: Request uses CORS headers, credentials flag is set to **`include`** and user credentials are always included.

* **""**: Setting the attribute name to an empty value, like **`crossorigin`** or **`crossorigin=""`**, is the same as anonymous.

If the **`crossorigin`** attribute is not specified, the script is loaded without using CORS.

Here is an example of how the crossorigin attribute can be used in a script tag:

```
<script src="https://example.com/script.js" crossorigin="anonymous"></script>
```
In this example, the script is loaded using CORS, but the server does not need to include the appropriate CORS headers in the response.

### 06. What is difference between React and ReactDOM?
**React** is a JavaScript library for building user interfaces, while ReactDOM is a JavaScript library that provides DOM (Document Object Model) specific methods for rendering React components.

**React** is designed to be used for building reusable UI components that can be easily shared and reused across different applications. It provides a declarative approach to building user interfaces, which means that you can describe the UI you want to see, and React will automatically update the UI to reflect your desired state.

**ReactDOM** is a separate library that provides specific methods for rendering React components to the DOM. It provides a simple way to take a React component and render it to a DOM element in the browser.

Here is an example of how **React** and **ReactDOM** can be used together to render a simple component:

```
import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
```
In this example, the HelloWorld component is imported from the react library, and the render method is imported from the react-dom library. The render method is used to render the HelloWorld component to the DOM element with the ID root.

To summarize, **React** is a library for building user interfaces, while **ReactDOM** is a library that provides specific methods for rendering React components to the DOM.

### 07. What is difference between react.development.js and react.production.js files via CDN?
The **react.development.js** and **react.production.js** files are different versions of the React JavaScript library that are optimized for different environments.

The **react.development.js** file is intended for use during **development**, while the **react.production.js** file is intended for use in **production** environments.

The main difference between these two files is the level of optimization that has been applied to them. The react.development.js file is not minified and includes additional debugging information, such as error messages and warnings, which can be helpful during development. The react.production.js file, on the other hand, is minified and does not include any debugging information, which makes it smaller and faster to load in production environments.

Here is an example of how to include the React library in a web page using CDN links:

```
<!-- Development version -->
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

<!-- Production version -->
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
```
In summary, the react.development.js file is intended for use during development and includes debugging information, while the react.production.js file is intended for use in production environments and is optimized for performance.

### 08. What is async and defer?
**`async`**: When we use the async attribute the script is downloaded asynchronously with the rest of the page without pausing the HTML parsing and the contents of the page are processed and displayed. Once the script is downloaded, the HTML parsing will be paused and the script’s execution will happen. Once the execution is done, HTML parsing will then resume. The page and other scripts don’t wait for async scripts and async scripts also don’t wait for them. It is great for independent scripts and externally located scripts.

Syntax:
```
<script async src = "script.js"></script>
```
**`defer`**: The defer attribute tells the browser not to interfere with the HTML parsing and only to execute the script file once the HTML document has been fully parsed. Whenever a script with this attribute is encountered, the downloading of the script starts asynchronously in the background and when the scripts get downloaded, it is executed only after the HTML parsing is finished.

Syntax:
```
<script defer src = "script.js"></script>
```
<p align="center" width="100%">
    <img src="https://user-images.githubusercontent.com/7704934/210104932-3b9d59c9-3fd6-488f-a2e5-6e650915748c.png"> 
</p>

| **`async`**   | **`defer`**       | 
| ------------- |-------------------| 
| **`async`** blocks the parsing of the page.     | **`defer`** never block the page. | 
| Asynchronous scripts don’t wait for each other. So if a smaller script is second in the order, it will be loaded before the previous longer one.      | Deferred scripts maintain their relative order which means the first script will be loaded first while all other below it will have to wait.      | 
| The execution of scripts begins by pause parsing. | However, the execution of scripts begins only after parsing is completely finished but before the documents’s DOMContentLoadedevent.      | 

