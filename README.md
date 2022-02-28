_______________________REACT.JS FOR BEGINNERS_______________________


====================================================================

# I . INSTALL ENVIRONMENTS

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
    note : In it you can replace [react-basic] with your project name ( npx create-react-app <project-name> )
    note : npm start -> Run
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


