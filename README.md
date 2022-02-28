_______________________REACT.JS FOR BEGINNERS_______________________


====================================================================

# I . Install Environments

* Dowload and Install Visual Studio Code (https://code.visualstudio.com/download)
* Dowload and Install NodeJS (https://nodejs.org/en/download)
* Dowload and Install Git (https://git-scm.com/downloads)   // For source code management
* Check NodeJS : Open 'Command Prompt' enter 'node -v' 


====================================================================
# II. Hello World with ReactJS

* Create new React App (https://reactjs.org/docs/create-a-new-react-app.html)
    * Open the folder where you want to create the project
    * Open 'Command Prompt' or 'Git Bash' or 'Termial (in Visual Studio Code)' in this folder
    * Type the following commands

            npx create-react-app react-basic
            cd react-basic
            npm start

    * note : In it you can replace [react-basic] with your project name ( npx create-react-app <project-name> )
    * note : npm start -> Run

    * Reopen your project ReactJS with Visual Studio Code
* Open public>index.html and src>index.js
    * When run code, index.html will call first and then the next call index.js 
* Open src>App.js
    * Test enter anything code html inside function App(){return(...............)}

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
* Clone project
    * Open the folder where you want to create the project

        git clone https://github.com/DoTranMinhChu/learning-react-basic
    
    * Open the conled project from github using Visual Studio Code
    * Open Terminal and type command :

            npm i

    * Waiting... 


====================================================================
# IV. Project React.JS - File Structure
 https://reactjs.org/docs/faq-structure.html
* index.html
    * Attention : id="root"  

        <div id="root"></div>
    * After index.html then the next call index.js 

* index.js
    
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

    * Attention : 

            import App from './App'  

        and   
    
            <App />

    * Firstly : index.js call components App (call [App.js])
    * Later : inject code into 
        
            <div id="root"></div>

        Through the following code:

            ReactDOM.render(
                <React.StrictMode>
                    <App />
                </React.StrictMode>,
                document.getElementById('root')
            );

* Where's the connection between [index.html] and [index.js] in a Create-React-App application?
 link : https://stackoverflow.com/questions/42438171/wheres-the-connection-between-index-html-and-index-js-in-a-create-react-app-app


 * Reconstruct project
    * Create new Folder in [src]

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

    * src :

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

    * Detail :
        * assets : Save image and video .... you want public
        * components : Shared source code , reuse code
        * routes : Define router for website
        * services : API connect backend
        * store : Code Redux
        * styles : Code SCSS (not write CSS here)
        * utils : Shared function
        * views : Page for the user to see
        
    * File organization
        # Install Dependencies SASS

            npm i --save sass

        * Remove [App.test.js] 
        * Remove [setupTests.js] 
        * Rename the file [App.css] to [App.scss]
            * Change import in file [App.js] like that

                    import './App.css';

                to

                    import './App.scss';
        * Rename the file [index.css] to [global.scss]

        * [src] :
        
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
        * [index.js]
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
