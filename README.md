# react-js
# NAMASTE REACT - ASSIGNMENT 02 - IGNITING OUR APP

## CODING
- intialize `npm` into your repo
- install `react` and `react-dom`
- remove CDN links of react
- install parcel
- ignite your app with parcel
- add scripts for “start” and “build” with parcel commands
- add `.gitignore` file
- add `browserlists`
- build a production version of your code using `parcel build`

## THEORY

### 01. What is NPM?
NPM is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. NPM is used to install, share, and distribute packages (which are collections of code that are designed to be reusable) and to manage dependencies (libraries and packages that are required by your code). NPM is a command-line interface that is installed with Node.js, and it is used to download packages from the npm registry, which is a public repository of packages of open-source code. With NPM, developers can publish their own packages and use packages created by other developers. NPM helps to reduce the time and effort required to build and maintain large JavaScript applications by making it easy to reuse code and manage dependencies.

### 02. What is Parcel/Webpack? Why do we need it?
Parcel and Webpack are both module bundlers for JavaScript. A module bundler is a tool that takes the many small files that make up a large JavaScript application and combines them into a single file (or a few files) that can be loaded by the browser.

There are several reasons why developers use module bundlers:

- **Modularity:** JavaScript applications are often made up of many small files, each containing a specific piece of functionality. By using a module bundler, developers can organize their code into small, reusable modules that can be imported and exported as needed. This makes it easier to develop and maintain large applications.

- **Code optimization:** Module bundlers can perform various types of code optimization, such as minification (removing unnecessary characters from the code), tree shaking (removing unused code), and dead code elimination (removing code that is never executed). This can help to reduce the size of the final bundled code and improve the performance of the application.

- **Compatibility:** Some JavaScript features are not supported by all browsers. A module bundler can transform the code to make it compatible with a wider range of browsers, allowing developers to use newer features without worrying about browser compatibility issues.

- **Easy to use:** Module bundlers provide a simple interface for building and deploying JavaScript applications, making it easy for developers to set up and maintain their projects.

Parcel and Webpack are two of the most popular module bundlers. Both have their own strengths and are suitable for different types of projects. Developers can choose the one that best fits their needs.

### 03. What is .parcel-cache?
".parcel-cache" is a directory that is created by the module bundler Parcel when it runs. It is used to store the files that have been processed by Parcel, as well as any intermediate files that are generated during the build process. The cache is used to speed up subsequent builds by allowing Parcel to reuse the previously processed and optimized files, rather than having to start from scratch each time.

For example, if you are using Parcel to build a JavaScript application, it will create the ".parcel-cache" directory in the root of your project. Inside the cache directory, you will find a number of subdirectories that contain the files that have been processed by Parcel. These files may include the original source code, as well as any transformed or optimized versions of the code that were created during the build process.

The ".parcel-cache" directory is usually hidden by default, but you can view it by changing your operating system's settings to show hidden files. It is generally not recommended to modify the contents of the cache, as it is used by Parcel to optimize the build process and may cause issues if the cache is deleted or altered.

### 04. What is npx?
npx is a command-line tool that is included with npm. It is used to execute npm package binaries.

When you install an npm package that has a binary associated with it, the binary is typically added to the node_modules/.bin directory of your project. To run the binary, you would normally need to specify the full path to the binary, which can be cumbersome. With npx, you can run the binary by simply using its name. npx will automatically look in the node_modules/.bin directory for the binary and execute it.

For example, if you have installed an npm package called "my-package" that includes a binary called "my-binary", you can run the binary with the following command:
```
npx my-binary
```
npx can also be used to run packages that are not installed locally in your project. If you specify a package name that is not found in the node_modules/.bin directory, npx will automatically download and install the package from the npm registry, and then run the specified binary. This can be useful for trying out a package or running one-off scripts without the need to install it globally or add it to your project as a dependency.

### 05. What is difference between dependencies vs devDependencies?
In an npm project, dependencies are the packages that are required for the application to run in production. These packages should be installed on the production environment and are listed in the "dependencies" field of the package.json file.

On the other hand, devDependencies are the packages that are only required for development or testing purposes. These packages are not needed in the production environment and should not be installed on it. They are listed in the "devDependencies" field of the package.json file.

One common use case for devDependencies is to include tools and libraries that are used for building, testing, and linting the code, such as linters, test runners, and build tools. These tools are only needed during the development process and are not needed when the application is deployed to production.

It is generally a good practice to keep the production dependencies separate from the development dependencies, as it helps to keep the production environment lean and focused on the core functionality of the application. When you are installing packages in a project, you can use the "--save" flag or without any flags to add the package to the dependencies, or the "--save-dev" or "-D" flag to add it to the devDependencies.

For example, to install a package called "babel" as a dependency, you can use the following command:

```npm install --save babel``` or ```npm install babel```

To install the same package as a devDependency, you can use the following command:

```npm install --save-dev babel``` or ```npm install -D babel```

### 06. What is Tree Shaking?
Tree shaking is a term that refers to the process of removing unused code from a JavaScript bundle. It is typically used in the context of module bundlers such as Webpack and Parcel, which are tools that are used to build and optimize JavaScript applications.

The idea behind tree shaking is that, in a large application, it is common to import many more modules or dependencies than are actually used in the code. For example, you might import an entire library that contains many functions, but only use a small subset of those functions in your application.

Tree shaking helps to optimize the bundle size by identifying the code that is not being used and removing it from the final bundle. This can help to reduce the size of the bundle and improve the performance of the application.

To enable tree shaking, the code needs to be written in a way that allows the bundler to statically analyze the dependencies and determine which ones are being used. This typically involves using a modern module syntax such as ECMAScript modules (ESM) or the JavaScript runtime ES6, which have a clear syntax for importing and exporting code.

Tree shaking is not a silver bullet and it is not always possible to remove all unused code. However, it can be an effective way to optimize the size of a JavaScript bundle and improve the performance of an application.

### 07. What is Hot Module Replacement?
Hot Module Replacement (HMR) is a feature that allows a module bundler, such as Parcel, to update the application code on the fly, without the need for a full refresh of the page. This can greatly improve the development experience by allowing you to make changes to the code and see the results immediately, without having to manually refresh the page.

### 08. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
My favourite 5 superpowers of Parcel are:
- Zero config bundler: It requires zero / no configuration
- HTTPS on development environment - Able to test https on development server using --https flag
- Hot Module Replacement (HMR) - It works using file watcher algorithms and updates the application so that there is no need for a full refresh.
- Image Optimization
- Super fast build algorithm

### 09. What is .gitignore? What should we add and not add into it?
".gitignore" is a file that is used to specify which files and directories should be ignored by Git when committing code changes. The purpose of .gitignore is to prevent certain files from being tracked by Git, such as temporary files, build artifacts, and sensitive information.

It is generally a good idea to include files that can be regenerated on the server in .gitignore, as these files are not necessary for version control and can bloat the repository. Examples of such files include build artifacts, temporary files, and files that are generated by the build process. On the other hand, it is generally not a good idea to include the "package-lock.json" file in .gitignore.

### 10. What is the difference between package.json and package-lock.json?
"package.json" is a file that is used to define the metadata and configuration for an npm project. It is typically located in the root directory of the project and contains information such as the project name, version, dependencies, and scripts.

On the other hand, "package-lock.json" is a file that is created by npm and is used to lock down the exact versions of the dependencies that are installed in a project. It ensures that the same versions of the dependencies are installed on all environments, which can help to prevent compatibility issues.

The "package-lock.json" file contains a complete list of the dependencies, their versions, and the versions of their dependencies. It also includes information about the integrity hashes of the packages, which can be used to verify the authenticity of the packages.

### 11. Why should I not modify package-lock.json?
It is generally not recommended to modify the "package-lock.json" file manually, as it is managed by npm and is used to lock down the exact versions of the dependencies that are installed in a project.

The "package-lock.json" file is generated automatically when you install dependencies in an npm project. It contains a complete list of the dependencies, their versions, and the versions of their dependencies. It also includes information about the integrity hashes of the packages, which can be used to verify the authenticity of the packages.

The purpose of the "package-lock.json" file is to ensure that the same versions of the dependencies are installed on all environments, which can help to prevent compatibility issues. Modifying the "package-lock.json" file manually can disrupt this process and may cause issues when installing or updating the dependencies.

If you need to modify the dependencies in an npm project, you should use the npm commands, such as "npm install" and "npm update", rather than modifying the "package-lock.json" file directly. These commands will update the "package-lock.json" file and the dependencies in the project as needed.

It is generally a good practice to commit the "package-lock.json" file to the repository, as it is an important part of the project configuration. This will ensure that the correct versions of the dependencies are installed on all environments, regardless of whether they are available in the npm registry.

### 12. What is node_modules? Is it a good idea to push that on git?
"node_modules" is a directory that is created by npm and is used to store the dependencies of an npm project. When you install a package using npm, the package and its dependencies are downloaded and stored in the "node_modules" directory.

The "node_modules" directory typically contains a large number of subdirectories, each of which corresponds to a specific package that has been installed in the project. It is not uncommon for the "node_modules" directory to contain hundreds or even thousands of packages, depending on the size of the project.

It is generally not a good idea to commit the "node_modules" directory to a Git repository. The "node_modules" directory can be very large, and it is not necessary for version control as the packages can be installed from the npm registry. Committing the "node_modules" directory to the repository can bloat the repository and make it more difficult to clone and work with.

Instead of committing the "node_modules" directory to the repository, it is generally recommended to include the "package.json" and "package-lock.json" files in the repository. These files contain the information about the dependencies that are needed to install the packages in the "node_modules" directory.

### 13. What is the dist folder?
The "dist" (short for "distribution") folder is a directory that is used to store the distributable version of an application. It typically contains the built or compiled version of the application, along with any static assets such as images and fonts.

The contents of the "dist" folder are typically generated by a build process, which can involve tasks such as transpiling code, minifying files, and bundling assets. The purpose of the build process is to optimize the code and assets for production, so that the application can be deployed and run efficiently.

The "dist" folder is not typically committed to version control, as the contents of the folder can be regenerated by running the build process. Instead, the source code and build configuration files are typically committed to the repository, and the "dist" folder is generated as needed during the build process.

### 14. What is browserlists?
In "package.json", "browserslist" is a property that can be used to specify the target browsers for an application. It is typically used in conjunction with tools such as Autoprefixer and Babel, which are tools that are used to transpile and polyfill modern JavaScript and CSS code for older browsers.

The "browserslist" property in "package.json" is typically an array of browser versions or queries that match the browsers that the application should support. The list can be specified in a variety of formats, including ranges, versions, and queries.

Here is an example of a "package.json" file with a "browserslist" property:
```
{
  "name": "my-project",
  "version": "1.0.0",
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ],
  "devDependencies": {
    "parcel": "^2.8.2",
    "process": "^0.11.10"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "scripts": {
    "start": "parcel index.html --open",
    "build": "parcel build index.html",
    "test": "jest"
  }
}
```
The "browserslist" property in "package.json" is used by tools such as Autoprefixer and Babel to determine which browser features to support and which polyfills or transpilation to apply. It is a flexible and powerful way to specify the target browsers for an application, and it can help to ensure that the application is compatible with a wide range of browser versions.

### 15. Vite, Webpack, Parcel
Vite, Webpack, and Parcel are all tools that are used for building and bundling JavaScript applications. They are commonly used to process and optimize the code and assets of an application, and to create a distributable version that can be deployed to a production environment.

Here is a brief overview of each tool:

- **Vite** is a modern build tool that is designed to be lightweight and fast. It uses native ES modules and leverages the capabilities of modern browsers to deliver a fast and efficient build process. Vite is particularly well-suited for building small to medium-sized applications and for hot module replacement (HMR).

- **Webpack** is a powerful and flexible build tool that is widely used for building JavaScript applications. It can be configured to perform a wide range of tasks, such as transpiling code, minifying files, and bundling assets. Webpack has a large and active community, and it is supported by a wide range of plugins and integrations.

- **Parcel** is a build tool that is designed to be easy to use and fast. It uses a zero-configuration approach and can automatically infer the configuration for many tasks, such as transpiling code and bundling assets. Parcel is a good choice for simple projects that do not require a lot of custom configuration.

All three tools are capable of building and bundling JavaScript applications, and they each have their own strengths and weaknesses. The right choice for your project will depend on your specific requirements and preferences.

### 16. ^ - caret and ~ - tilda
~version “**Approximately equivalent to version**”, will update you to all future patch versions, without incrementing the minor version. 
~1.2.3 will use releases from 1.2.3 to <1.3.0.

^version “**Compatible with version**”, will update you to all future minor/patch versions, without incrementing the major version. 
^2.3.4 will use releases from 2.3.4 to <3.0.0.

### 17. Script types in html
This attribute indicates the type of script represented. The value of this attribute will be one of the following:

- **Attribute is not set (default), an empty string, or a JavaScript MIME type**
Indicates that the script is a "classic script", containing JavaScript code. Authors are encouraged to omit the attribute if the script refers to JavaScript code rather than specify a MIME type. JavaScript MIME types are listed in the [IANA media types specification](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#javascript_types).

- **module**
This value causes the code to be treated as a JavaScript module. The processing of the script contents is deferred. The charset and defer attributes have no effect. Unlike classic scripts, module scripts require the use of the CORS protocol for cross-origin fetching.

- **importmap**
This value indicates that the body of the element contains an import map. The import map is a JSON object that developers can use to control how the browser resolves module specifiers when importing JavaScript modules.

- **Any other value**
The embedded content is treated as a data block, and won't be processed by the browser. Developers must use a valid MIME type that is not a JavaScript MIME type to denote data blocks. All of the other attributes will be ignored, including the src attribute.
