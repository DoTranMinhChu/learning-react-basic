**********\_\_\_**********REACT.JS FOR BEGINNERS**********\_\_\_**********

====================================================================

# I . Install Environments

- Dowload and Install Visual Studio Code (https://code.visualstudio.com/download)
- Dowload and Install NodeJS (https://nodejs.org/en/download)
- Dowload and Install Git (https://git-scm.com/downloads) // For source code management
- Check NodeJS : Open 'Command Prompt' enter 'node -v'

====================================================================

# II. Hello World with ReactJS

- Create new React App (https://reactjs.org/docs/create-a-new-react-app.html)

  - Open the folder where you want to create the project
  - Open 'Command Prompt' or 'Git Bash' or 'Termial (in Visual Studio Code)' in this folder
  - Type the following commands

          npx create-react-app react-basic
          cd react-basic
          npm start

  - note : In it you can replace [react-basic] with your project name ( npx create-react-app <project-name> )
  - note : npm start -> Run

  - Reopen your project ReactJS with Visual Studio Code

- Open public>index.html and src>index.js
  - When run code, index.html will call first and then the next call index.js
- Open src>App.js

  - Test enter anything code html inside function App(){return(...............)}

          import logo from "./logo.svg";
          import "./App.css";

          function App() {
          return (
              <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                  Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <p>Hello World</p>
                  <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  Learn React
                  </a>
              </header>
              </div>
          );
          }

          export default App;

====================================================================

# III. Clone project from github

- Clone project

  - Open the folder where you want to create the project

    git clone https://github.com/DoTranMinhChu/learning-react-basic

  - Open the conled project from github using Visual Studio Code
  - Open Terminal and type command :

          npm i

  - Waiting...

====================================================================

# IV. Project React.JS - File Structure

https://reactjs.org/docs/faq-structure.html

- index.html

  - Attention : id="root"

      <div id="root"></div>

  - After index.html then the next call index.js

- index.js

        import React from 'react';
        import ReactDOM from 'react-dom';
        import './index.css';
        import App from './App';
        import reportWebVitals from './reportWebVitals';

        ReactDOM.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
            document.getElementById('root')
        );

        reportWebVitals();

  - Attention :

          import App from './App'

    and

          <App />

  - Firstly : index.js call components App (call [App.js])
  - Later : inject code into

          <div id="root"></div>

    Through the following code:

          ReactDOM.render(
              <React.StrictMode>
                  <App />
              </React.StrictMode>,
              document.getElementById('root')
          );

- Where's the connection between [index.html] and [index.js] in a Create-React-App application?
  link : https://stackoverflow.com/questions/42438171/wheres-the-connection-between-index-html-and-index-js-in-a-create-react-app-app

- Reconstruct project

  - Create new Folder in [src]

          └───src
              ├───assets
              │   ├───audio
              │   └───images
              ├───components
              ├───routes
              ├───services
              ├───store
              ├───styles
              ├───utils
              └───views

  - [src] :

          └───src
              │   App.css
              │   App.js
              │   index.css
              │   index.js
              │   App.test.js
              │   logo.svg
              │   reportWebVitals.js
              │   setupTests.js
              │
              ├───assets
              │   ├───audio
              │   └───images
              ├───components
              ├───routes
              ├───services
              ├───store
              ├───styles
              ├───utils
              └───views

  - Detail :
    - assets : Save image and video .... you want public
    - components : Shared source code , reuse code
    - routes : Define router for website
    - services : API connect backend
    - store : Code Redux
    - styles : Code SCSS (not write CSS here)
    - utils : Shared function
    - views : Page for the user to see
  - File organization

    # Install Dependencies SASS

          npm i --save sass

    - Remove [App.test.js]
    - Remove [setupTests.js]
    - Rename the file [App.css] to [App.scss]

      - Change import in file [App.js] like that

              import './App.css';

        to

              import './App.scss';

    - Rename the file [index.css] to [global.scss]

    - [src] :

            └───src
                │   index.js
                │   reportWebVitals.js
                │
                ├───assets
                │   ├───audio
                │   └───images
                ├───components
                ├───routes
                ├───services
                ├───store
                ├───styles
                │       global.scss
                │
                ├───utils
                └───views
                        App.js
                        App.scss
                        logo.svg

    - [index.js]
      copy and paste

            import React from 'react';
            import ReactDOM from 'react-dom';
            import App from './views/App';
            import reportWebVitals from './reportWebVitals';
            import './styles/global.scss';

            ReactDOM.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
            document.getElementById('root')
            );

            // If you want to start measuring performance in your app, pass a function
            // to log results (for example: reportWebVitals(console.log))
            // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
            reportWebVitals();

====================================================================

# V.React Components (https://reactjs.org/docs/components-and-props.html)

- Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
- 2 type components : Class Component and Function Component (fuction , arrow fuction)
- Fuction Components

  - Open [src>view>App.js] , we have

          import logo from './logo.svg';
          import './App.scss';

          function App() {
              return (
                  <div className="App">
                  <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo" />
                      <p>
                      Edit <code>src/App.js</code> and save to reload.
                      </p>
                      <p>Hello World</p>
                      <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      Learn React
                      </a>
                  </header>
                  </div>
              );
          }

          export default App;

  - Keyword [import]

          import logo from './logo.svg';
          import './App.scss';

    - The static [import] statement is used to import read only live bindings which are exported by another module.
    - We using [import] when you want to use metarial that is not in this file

  - Keyword [function]

            function App() {
              return (
                 .......
              );
          }

    - This is called function component, this is return html block (JSX)
    - Also you can use the following function (Arrow Function)

            const func = () =>{
                return(
                    // HTML
                );
            }

    - Introducing JSX (https://reactjs.org/docs/introducing-jsx.html)
            const element = <h1>Hello, world</h1>
      - This tag syntax is JSX (JavaScript Syntax Extension)

- Class Components

  - Create [views>example>MyClassComponents.js]

          └───views
              │   ....
              │   ...
              │   .....
              │
              └───example
                      MyClassComponent.js

  - Copy and paste the following code into the file [MyClassComponents.js]

          import React from 'react';

          class MyClassComponents extends React.Component{

              render(){
                  const name = 'MinhChu';
                  return(
                      <div>This is Class Component {name}</div>
                  );
              }

          }

          export default MyClassComponents;

    - Keyword [export]
      - The [export] statement is used when creating JS moudules to export live to fuctions, objects, or primitive value from the moudule so they can used by other programs with the [import] statement.
      - Ref : (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

  - Use Class Components

    - Open [views>App.js]

            └───views
                │   App.js
                │   App.scss
                │   logo.svg
                │
                └───example
                        MyClassComponent.js

    - Write the following code into the file [MyClassComponents.js]

            import logo from './logo.svg';
            import './App.scss';
            import MyClassComponents from './example/MyClassComponent';

            function App() {
                return (
                    <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                        Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <p>Hello World</p>
                        <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Learn React
                        </a>

                        <MyClassComponents/>
                        {/* Uncomment to try */}
                        {/* <MyClassComponents></MyClassComponents> */}

                    </header>
                    </div>
                );
            }

            export default App;

      - run and view result

              npm start

====================================================================

# VI. State

    > React components has a built-in state object.
    > The state object is where you store property value that belongs to the component.
    > When the state object changes, the components re-renders.

- JSX

  - JSX like allowing you to write JS code in file html

    - Write the following code into the file [MyClassComponents.js]

            import React from "react";

            class MyClassComponents extends React.Component {
                render() {
                    const name = "MinhChu";
                    return (
                    <div>
                        <div>
                        {"Screen: " + name}
                        {console.log("Console : " + name)}
                        </div>
                        This is Class Component {name}
                    </div>
                    );
                }
            }

            export default MyClassComponents;

    - run and view result
      - Where brower, F12 to open DevTools
      - Open console in DevTools

  - JSX => return block

    - For example:

      - Invalid code :

              function App() {
                  return (
                      <div>
                          ....
                      </div>

                      <div>
                          ........
                      </div>
                  );

      - Valid code :

              function App() {
                  return (
                      <div>
                          <div>
                              ....
                          </div>

                          <div>
                              ........
                          </div>
                      <div>
                  );

    - In JSX you need to return a block in the render()
    - So, if you want to render two render two or more (div,section,...) blocks without any block wrapping it (the parent block), you can use Fragment like this: (https://reactjs.org/docs/fragments.html)

      - Old version ( < 16.8 )

              render() {
                  return (
                      <React.Fragment>
                          <ChildA />
                          <ChildB />
                          <ChildC />
                      </React.Fragment>
                  );
              }

      - New version ( >= 16.8 )

              render() {
                  return (
                      <>
                          <ChildA />
                          <ChildB />
                          <ChildC />
                      </>
                  );
              }

  - Styling and CSS
    (https://reactjs.org/docs/faq-styling.html)
    
            render() {
                return <span className="menu navigation-menu">Menu</span>
            }
