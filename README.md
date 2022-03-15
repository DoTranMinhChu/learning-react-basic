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

    * [src] :

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
            * Change import in file [App.js] as follows

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
# V.React Components (https://reactjs.org/docs/components-and-props.html)
* Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
* 2 type components : Class Component and Function Component (fuction , arrow fuction)
* Fuction Components
    * Open [src>view>App.js] , we have

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

    * Keyword [import]

            import logo from './logo.svg';
            import './App.scss';
        
        * The static [import] statement is used to import read only live bindings which are exported by another module.
        * We using [import] when you want to use metarial that is not in this file
    * Keyword [function]

              function App() {
                return (
                   .......
                );
            }
        * This is called function component, this is return html block (JSX)
        * Also you can use the following function (Arrow Function)

                const func = () =>{
                    return(
                        // HTML
                    );
                }

        * Introducing JSX (https://reactjs.org/docs/introducing-jsx.html)
            
                const element = <h1>Hello, world</h1>
            
            * This tag syntax is JSX (JavaScript Syntax Extension)
            


* Class Components
    * Create [views>example>MyClassComponents.js]

            └───views
                │   ....
                │   ...
                │   .....
                │
                └───example
                        MyClassComponent.js

    * Copy and paste the following code into the file [MyClassComponents.js]

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
        
      * Keyword [export]
        * The [export] statement is used when creating JS moudules to export live to fuctions, objects, or primitive value from the moudule so they can used by other programs with the [import] statement.
        * Ref : (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

    * Use Class Components
        * Open [views>App.js]

                └───views
                    │   App.js
                    │   App.scss
                    │   logo.svg
                    │
                    └───example
                            MyClassComponent.js
        
        * Write the following code into the file [MyClassComponents.js]

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

            * run and view result

                    npm start
        

====================================================================
# VI. State
    > React components has a built-in state object.
    > The state object is where you store property value that belongs to the component.
    > When the state object changes, the components re-renders.

* JSX 
    * JSX like allowing you to write JS code in file html
        * Write the following code into the file [MyClassComponents.js]

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

        * run and view result
            * Where brower, F12 to open DevTools
            * Open console in DevTools
    
    * JSX => return block
        * For example:
            * Invalid code :
            
                    function App() {
                        return (
                            <div>
                                ....
                            </div>

                            <div>
                                ........
                            </div>
                        );

            * Valid code :
            
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

        * In JSX you need to return a block in the render()
        * So, if you want to render two render two or more (div,section,...) blocks without any block wrapping it (the parent block), you can use Fragments like this: (https://reactjs.org/docs/fragments.html)
            * Old version (< 16.8)

                    render() {
                        return (
                            <React.Fragment>
                                <ChildA />
                                <ChildB />
                                <ChildC />
                            </React.Fragment>
                        );
                    }

            * New version (>= 16.8)

                    render() {
                        return (
                            <>
                                <ChildA />
                                <ChildB />
                                <ChildC />
                            </React.Fragment>
                        );
                    }


    * Styling and CSS
    (https://reactjs.org/docs/faq-styling.html)
        
            render() {
                return <span className="menu navigation-menu">Menu</span>
            }

* State
    * Write the following code into the file [MyClassComponents.js]

            import React from "react";

            class MyClassComponents extends React.Component {
                state = {
                    name: "DoTranMinhChu",
                    yob: 2001,
                };

                render() {
                    return (
                        <>
                            <div>This is Class Component, My name is {this.state.name}</div>
                            <div>Year of birth is {this.state['yob']} </div>
                        </>
                    );
                }
            }

            export default MyClassComponents;

        
        * [this] : The call method on a function accepts an object that [this] will refer to and any other parameters defined in the function
        * [this.state] is object

                state = {
                    name: "DoTranMinhChu",
                    yob: 2001,
                };

            > Use this.state.name and this.state.yob to get value of key name and yob in object state

    * When the state object changes, the components re-renders.
        * Write the following code into the file [MyClassComponents.js]
        
                import React from "react";

                class MyClassComponents extends React.Component {
                    state = {
                        name: "DoTranMinhChu",
                        yob: 2001
                    };

                    handleOnChangeName(event){
                        this.setState({
                            name : event.target.value
                        })
                    }


                    handleOnChangeYob = (event) =>{
                        this.setState({
                            yob : event.target.value
                        })
                    }

                    render() {
                        return (
                        <>
                            
                            <div>This is Class Component, My name is {this.state.name}</div>
                            <div>Year of birth is {this.state["yob"]} </div>
                            <div>
                                <input value={this.state.name} type="text" onChange={(event) => { return this.handleOnChangeName(event)} }/>
                            </div>
                            <div>
                                <input value={this.state.yob} type="number" onChange={ (event) => this.handleOnChangeYob(event)}/>
                            </div>
                        </>
                        );
                    }
                }

                export default MyClassComponents;


            * Run and view result
                > Try change value two input
                > As this time, the interface will aslo change (this is call DOM events)
            * Explain code
                * We have events onChange in each input 

                        onChange={(event) => { return this.handleOnChangeName(event)} }

                        onChange={(event) => this.handleOnChangeYob(event)}

                * There two envents are basically the same (use arrow fuction)
                * In first event this return handleOnChangeName(event) 
                    * And we have 

                            handleOnChangeName(event){
                                this.setState({
                                    name : event.target.value
                                })
                            }

                    * This is the code that define handleOnChangeName(event) . It's same way we define a fuction in a class.
                    * this.setState allows us to set the value for State, and we can set new value for key 'name' as follows

                            this.setState({
                                name : event.target.value
                            })
                        
                        * In which, use [event.target.value] to get the value of input throught the parameter event
                * handleOnChangeYob = (event) =>{....}  is same handleOnChangeName(event){...} (handleOnChangeYob use arrow function to)


====================================================================
# VII. DOM Events
* DOM: (https://www.w3schools.com/js/js_htmldom.asp)
* DOM Events : (https://www.w3schools.com/jsref/dom_obj_event.asp)
* Handling Events: (https://reactjs.org/docs/handling-events.html)

* Test event onClick and onChange 
    * Write the following code into the file [MyClassComponents.js]

            import React from "react";

            class MyClassComponents extends React.Component {
                state = {
                    name: "DoTranMinhChu",
                    yob: 2001
                };

                handleOnChangeName(event){
                    this.setState({
                        name : event.target.value
                    })
                }


                handleOnChangeYob = (event) =>{
                    this.setState({
                        yob : event.target.value
                    })
                }

                handleClickButton = (event) =>{
                    console.log(event.target.innerText);
                    alert("Hello " + this.state.name);
                }

                render() {
                    return (
                        <>
                            
                            <div>This is Class Component, My name is {this.state.name}</div>
                            <div>Year of birth is {this.state["yob"]} </div>
                            <div>
                                <input value={this.state.name} type="text" onChange={(event) => { return this.handleOnChangeName(event)} }/>
                            </div>
                            <div>
                                <input value={this.state.yob} type="number" onChange={ (event) => this.handleOnChangeYob(event)}/>
                            </div>
                            <div>
                                <button onClick={(event)=>this.handleClickButton(event)}>Hey {this.state.name}, click me</button>
                            </div>
                        </>
                    );
                }
            }

            export default MyClassComponents;


====================================================================
# VIII. setSate - Change State and Re-render (https://reactjs.org/docs/conditional-rendering.html)

* Open file [MyClassComponents.js]
    * We can see code as follows :


            .....
            ....
            ......
            handleOnChangeName(event){
                this.setState({
                    name : event.target.value
                })
            }


            handleOnChangeYob = (event) =>{
                this.setState({
                    yob : event.target.value
                })
            }
            ..
            ....
            ..

    
    * This is setState
        > When one or more value of object [state] update , react will recall render() to re-render
* Bad code
    * Invalid code 

            this.state.name = event.target.value
        
    * Valid code 

            this.setState({
                name : event.target.value
            })


====================================================================
# IX. Forms in ReactJS - HTML Inputs
* HTML Form (https://www.w3schools.com/html/html_forms.asp)

* Desgin React Form
     * Write the following code into the file [src>views>App.js]


            import logo from './logo.svg';
            import './App.scss';
            import MyClassComponents from './example/MyClassComponent';

            function App() {
                return (
                    <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" /> 

                        <MyClassComponents/>
                        {/* Uncomment to try */}
                        {/* <MyClassComponents></MyClassComponents> */}

                    </header>
                    </div>
                );
            }

            export default App;


    * Write the following code into the file [src>views>example>MyClassComponents.js]


            import React from "react";

            class MyClassComponents extends React.Component {

                state={
                    firstName :'Minh',
                    lastName :'Chu'
                }

                render() {
                    return (
                        <>
                            <form action="">
                            <label >First name:</label>
                            <br />
                            <input type="text" value={this.state.firstName} />
                            <br />
                            <label>Last name:</label>
                            <br />
                            <input type="text" value="" />
                            <br />
                            <br />
                            <input type="submit" value="Submit" />
                            </form>
                        </>
                    );
                }
            }

            export default MyClassComponents;

     > Run code and try change data in form input
     > You can see, we can't change value of input

     * So we can fix this problem by creating event for it
        * Now write the following code into the file [src>views>example>MyClassComponents.js]


                import React from "react";

                class MyClassComponents extends React.Component {
                    state = {
                        firstName: "Minh",
                        lastName: "Chu",
                    };

                    handleChangeFirstName = (event) => {
                        this.setState({
                        firstName: event.target.value,
                        });
                    };

                    handleChangeLastName = (event) => {
                        this.setState({
                        lastName: event.target.value,
                        });
                    };

                    render() {
                        return (
                            <>
                                <h1>
                                Your name : {this.state.firstName} {this.state.lastName}
                                </h1>
                                <form action="">
                                <label>First name:</label>
                                <br />
                                <input
                                    type="text"
                                    value={this.state.firstName}
                                    onChange={(event) => this.handleChangeFirstName(event)}
                                />
                                <br />
                                <label>Last name:</label>
                                <br />
                                <input
                                    type="text"
                                    value={this.state.lastName}
                                    onChange={(event) => this.handleChangeLastName(event)}
                                />
                                <br />
                                <br />
                                <input type="submit" value="Submit" />
                                </form>
                            </>
                        );
                    }
                }

                export default MyClassComponents;

        > Run code and try change data in form input
        > You can see, problem soloved


* Submit form

        import React from "react";

        class MyClassComponents extends React.Component {
        state = {
            firstName: "Minh",
            lastName: "Chu",
        };

        handleChangeFirstName = (event) => {
            this.setState({
            firstName: event.target.value,
            });
        };

        handleChangeLastName = (event) => {
            this.setState({
            lastName: event.target.value,
            });
        };

        handleSubmit = (event)=>{
            event.preventDefault(); // prevent action defaut (submit) of button (type="submit")
            console.log("Check data input : " + this.state);
            alert("Hello " + this.state.firstName + " " + this.state.lastName);
        }

        render() {
            return (
            <>
                <h1>
                Your name : {this.state.firstName} {this.state.lastName}
                </h1>
                <form action="">
                <label>First name:</label>
                <br />
                <input
                    type="text"
                    value={this.state.firstName}
                    onChange={(event) => this.handleChangeFirstName(event)}
                />
                <br />
                <label>Last name:</label>
                <br />
                <input
                    type="text"
                    value={this.state.lastName}
                    onChange={(event) => this.handleChangeLastName(event)}
                />
                <br />
                <br />
                <input type="submit" value="Submit" onClick={(event)=>this.handleSubmit(event)}/>
                </form>
            </>
            );
        }
        }

        export default MyClassComponents;



====================================================================
# X. Nesting Components 

* React Nesting Components
    * In React, we can nest components inside within one another. This helps in creating more complex User Interfaces. The components that are nested inside parent components are called child components. Import and Export keywords facilitate nesting of the components.
        > Export - This keyword is used to export a particular module or file and use it in another module.
        > Import - This keyword is used to import a particular module or file and use it in the existing module.
    * Importing named values allows the user to import multiple objects from a file.

            import {Class1, Class2} from "./Component";


* Child - Parent 
    * In [views>App.js]


            import logo from './logo.svg';
            import './App.scss';
            import MyClassComponents from './example/MyClassComponent';

            function App() {
            return (
                <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" /> 

                    <MyClassComponents/>
                    {/* Uncomment to try */}
                    {/* <MyClassComponents></MyClassComponents> */}

                </header>
                </div>
            );
            }

            export default App;

    
    > We have line [<MyClassComponents/>]
        > We can see it as  MyClassComponents is child and App is parent

                App
                    MyClassComponents

* Props (https://reactjs.org/docs/components-and-props.html)
    * Create [src>views>example>ChildComponent.js]

            ───src
                │   ..
                │   ...       
                │
                ├───...
                └───views   
                    │   ...
                    │
                    └───example
                            ChildComponent.js
                            MyClassComponent.js

    * Write the following code into the file [ChildComponent.js]

            import React from "react";

            class ChildComponent extends React.Component {
                render() {
                    return (
                        <>
                            <div>Child Component : {this.props.nameCustomer}</div>
                        </>
                    );
                }
            }

            export default ChildComponent;



    * Write the following code into the file [src>views>App.js]



            import logo from './logo.svg';
            import './App.scss';
            import MyClassComponents from './example/MyClassComponent';
            import ChildComponent from './example/ChildComponent';

            function App() {
                return (
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" /> 

                            <MyClassComponents/>
                            {/* Uncomment to try */}
                            {/* <MyClassComponents></MyClassComponents> */}

                            <ChildComponent nameCustomer="First Component"/>
                            <ChildComponent nameCustomer="Second Component"/>
                            <ChildComponent nameCustomer="Third Component"/>

                            
                        </header>
                    </div>
                );
            }

            export default App;


    * Run code you will see the web display 3 lines as follows
    
            Child Component : First Component
            Child Component : Second Component
            Child Component : Third Component

    * Explain code :
        * Child Parent components

                App
                    MyClassComponent
                    ChildComponent  
                    ChildComponent
                    ChildComponent

        * Even though it's the same component [ChildComponent], it's displayed differently
            > To explain this, in [App.js] we have as follows 

                    <ChildComponent nameCustomer="First Component"/>
                    <ChildComponent nameCustomer="Second Component"/>
                    <ChildComponent nameCustomer="Third Component"/>

            > Here, for each ChildComponent we pass an attribute to it
            > Next we will try to get these attributes and to do whatever we want in child component.

        * In file [ChildComponent.js] we have

                 <div>Child Component : {this.props.nameCustomer}</div>
            
            > Here the line [this.props.nameCustomer] the effect of getting data from the parent component
            > And the data that we have taken here is also the data we assign to the nameCustomer in [App.js] (Parent Component)




====================================================================
# XI. Props  (https://reactjs.org/docs/components-and-props.html)
> Props are arguments passed into React components
> Props are passed to components via HTML attribute
> Props stands for properties


* Example props
    * Write the following code into the file [src>view>app.js]

            import logo from './logo.svg';
            import './App.scss';
            import MyClassComponents from './example/MyClassComponent';

            function App() {
                return (
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" /> 

                            <MyClassComponents/>
                            {/* Uncomment to try */}
                            {/* <MyClassComponents></MyClassComponents> */}
                    
                        </header>
                    </div>
                );
            }

            export default App;

    * Write the following code into the file [src>example>MyClassComponent.js]

            import React from "react";
            import ChildComponent from './ChildComponent';

            class MyClassComponents extends React.Component {
                state = {
                    firstName: "Minh",
                    lastName: "Chu",
                };

                handleChangeFirstName = (event) => {
                    this.setState({
                    firstName: event.target.value,
                    });
                };

                handleChangeLastName = (event) => {
                    this.setState({
                    lastName: event.target.value,
                    });
                };

                handleSubmit = (event) => {
                    event.preventDefault(); // prevent action defaut (submit) of button (type="submit")
                    console.log("Check data input : " + this.state);
                    alert("Hello " + this.state.firstName + " " + this.state.lastName);
                };

                render() {
                    return (
                        <>
                            <div>
                                <h1>
                                    Your name : {this.state.firstName} {this.state.lastName}
                                </h1>
                                <form action="">
                                    <label>First name:</label>
                                    <br />
                                    <input
                                    type="text"
                                    value={this.state.firstName}
                                    onChange={(event) => this.handleChangeFirstName(event)}
                                    />
                                    <br />
                                    <label>Last name:</label>
                                    <br />
                                    <input
                                    type="text"
                                    value={this.state.lastName}
                                    onChange={(event) => this.handleChangeLastName(event)}
                                    />
                                    <br />
                                    <br />
                                    <input
                                    type="submit"
                                    value="Submit"
                                    onClick={(event) => this.handleSubmit(event)}
                                    />
                                </form>
                            </div>

                            <ChildComponent name={'Child one'} age={21}/>
                        </>
                    );
                }
            }

            export default MyClassComponents;


    * Write the following code into the file [src>example>ChildComponent.js]

            import React from "react";

            class ChildComponent extends React.Component {
                render() {
                    console.log('>> Check props : ' + this.props);
                    return (
                        <>
                            <div>Child Component : {this.props.name} - {this.props.age}</div>
                        </>
                    );
                }
            }

            export default ChildComponent;


    * Child parent component

            App
                MyClassCompent
                    ChildComponent

    * Run code




====================================================================
# XII. Outputting Lists - Render a lot of data with props 

* Example 
    * Write the following code into the file [views>example>MyClassComponent.js]


            import React from "react";
            import ChildComponent from "./ChildComponent";

            class MyClassComponents extends React.Component {
                state = {
                    name:'',
                    jobs: [
                        {id : 'j001',title: 'Developer',salary:'500$'},
                        {id : 'j002',title: 'Tester',salary:'400$'},
                        {id : 'j003',title: 'Project manager',salary:'1000$'},
                    ],
                };

                handleChangeName = (event) => {
                    this.setState({
                        name: event.target.value,
                    });
                };


                render() {
                    return (
                        <>
                            <div>
                            <h1>
                                Your name : {this.state.name} {this.state.lastName}
                            </h1>
                            <form action="">
                                <label>Name:</label>
                                <br />
                                <input
                                type="text"
                                value={this.state.name}
                                onChange={(event) => this.handleChangeName(event)}
                                />
                            </form>
                            </div>

                            <ChildComponent name={this.state.name } age={21} jobs={this.state.jobs}/>
                        </>
                    );
                }
            }

            export default MyClassComponents;



    * Write the following code into the file [views>example>ChildComponent.js]

            import React from "react";

            class ChildComponent extends React.Component {
                render() {
                    console.log(">> Check props : " + this.props);
                    let { name, age, jobs } = this.props;
                    return (
                        <>
                            <div>
                            Child Component : {name} - {age}
                            </div>
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>index</th>
                                            <th>id</th>
                                            <th>title</th>
                                            <th>salary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {jobs.map((item, index) => {
                                            return (
                                            <tr key={item.id}>
                                                <td>{index}</td>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td>{item.salary}</td>
                                            </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    );
                }
            }

            export default ChildComponent;


    * Explain code:
        * In file [MyClassComponent.js]
            * We declare array object jobs as follows

                    state = {
                        name:'',
                        jobs: [
                            {id : 'j001',title: 'Developer',salary:'500$'},
                            {id : 'j002',title: 'Tester',salary:'400$'},
                            {id : 'j003',title: 'Project manager',salary:'1000$'},
                        ],
                    };
            
            * Then we pass this array to component [ChildComponent] as follows

                    <ChildComponent name={this.state.name} age={21} jobs={this.state.jobs}/>

                
        * In file [ChildComponent.js]
            * We use 'Destructuring assignment' to declare as follows
            >Ref(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

                    let { name, age, jobs } = this.props;

            * Then we display all information array jobs by table
                * We use map() method to display 
                >(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?retiredLocale=vi)
                
                        <tbody>
                            {jobs.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{index}</td>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.salary}</td>
                                    </tr>
                                );
                            })}
                        </tbody>

                    
                * You can see 

                        <tr key={item.id}>
                            ..
                            ..
                            ..
                        </tr>

                    * So , what is [key] and why we need use it
                        > https://reactjs.org/docs/lists-and-keys.html
                        > Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity (That's why we used [item.key] as a key).
                * Final, why we should use map() method
                    > (https://www.javatpoint.com/react-map#:~:text=method%20used%20to%20traverse%20and,element%20in%20the%20calling%20array.)
                
            


====================================================================
# XIII. Stateless/Stateful Components(Function and Class) 
> (https://www.codecademy.com/learn/react-component-state/modules/react-102-stateless-inherit-stateful-u/cheatsheet#:~:text=Stateful%20and%20Stateless%20Components,there%20are%20two%20React%20components.)
* In React, a stateful component is a component that holds some state. Stateless components, by contrast, have no state. Note that both types of components can use props.

* Statefull (Class Components)
    * Write the following code into the file [src>views>example>ChildComponent.js]

            import React from "react";

            class ChildComponent extends React.Component {
                render() {
                    console.log(">> Check props : ", this.props);
                    let { name, age, jobs } = this.props;
                    return (
                        <>
                            <div>
                                Child Component : {name} - {age}
                            </div>
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>index</th>
                                            <th>id</th>
                                            <th>title</th>
                                            <th>salary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {jobs.map((item, index) => {
                                            return (
                                            <tr key={item.id}>
                                                <td>{index}</td>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td>{item.salary}</td>
                                            </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    );
                }
            }

            export default ChildComponent;

    * Run and see result

* Stateless (Function Components)
    * Now, we will rewrite the above code but use Stateless (Fuction Component) into file [src>views>example>ChildComponent.js]

            const ChildComponent = (props) => {
                console.log(">> Check props : ", props);
                let { name, age, jobs } = props;
                return (
                    <>
                        <div>
                            Child Component : {name} - {age}
                        </div>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                    <th>index</th>
                                    <th>id</th>
                                    <th>title</th>
                                    <th>salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobs.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                        <td>{index}</td>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.salary}</td>
                                        </tr>
                                    );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </>
                );
            };

            export default ChildComponent;


    * Run and see the result
    * Just use Fuction component when we use Hook



====================================================================
# XIV. Conditional Output (https://reactjs.org/docs/conditional-rendering.html)




* Example
     * Write the following code into the file [src>views>example>ChildComponent.js]


            import React from "react";

            class ChildComponent extends React.Component {

                render() {
                    console.log(">> Check props : " + this.props);
                    let { jobs } = this.props;
                    return (
                        <table>
                        <thead>
                            <tr>
                            <th>index</th>
                            <th>id</th>
                            <th>title</th>
                            <th>salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                <td>{index}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.salary}</td>
                                </tr>
                            );
                            })}
                        </tbody>
                        </table>
                    );
                }
            }

            export default ChildComponent;


    * Write the following code into the file [src>views>example>MyClassComponent.js]


            import React from "react";
            import ChildComponent from "./ChildComponent";

            class MyClassComponents extends React.Component {
                state = {
                    jobs: [
                    { id: "j001", title: "Developer", salary: 500 },
                    { id: "j002", title: "Tester", salary: 400 },
                    { id: "j003", title: "Project manager", salary: 1000 },
                    ],
                    showJobs: false,
                };

                handleShowHide = () => {
                    this.setState({
                        showJobs: !this.state.showJobs,
                    });
                };

                render() {
                    let { showJobs } = this.state;
                    return (
                        <>
                            {showJobs === false && (
                            <button onClick={() => this.handleShowHide()}>Show</button>
                            )}

                            {showJobs && (
                            <>
                                <ChildComponent jobs={this.state.jobs} />
                                <button onClick={() => this.handleShowHide()}>Hide</button>
                            </>
                            )}
                        </>
                    );
                }
            }

            export default MyClassComponents;

    * Run and view result
    * Explain code
        * In [MyClassComponent.js], we have


                state = {
                    ...
                    ...
                    showJobs: false,
                };

                handleShowHide = () => {
                    this.setState({
                        showJobs: !this.state.showJobs,
                    });
                };


            > Arrow function handleShowHide allow variable showJobs convert true to false vice varsa
        
        * The next

                {showJobs === false && (
                    <button onClick={() => this.handleShowHide()}>Show</button>
                )}


                {showJobs && (
                    <>
                        <ChildComponent jobs={this.state.jobs} />
                        <button onClick={() => this.handleShowHide()}>Hide</button>
                    </>
                )}


            > This code mean if 
            
                        (showJobs === false) 
            
                is true then 

                        <button onClick={() => this.handleShowHide()}>Show</button>

                will run


            * Note: To make it easier to understand, you can try to run the following JS code:


                    const checkTrue = true;
                    const checkFalse = false;
                    (checkTrue && alert("Hello this is checkTrue"))
                    (checkFalse && alert("Hello this is checkFalse"))



* Besides, we can use the 'ternary operator' to shorten the above code
    * Rewrite the following code into the file [src>views>example>MyClassComponent.js]

            import React from "react";
            import ChildComponent from "./ChildComponent";

            class MyClassComponents extends React.Component {
                state = {
                    jobs: [
                    { id: "j001", title: "Developer", salary: 500 },
                    { id: "j002", title: "Tester", salary: 400 },
                    { id: "j003", title: "Project manager", salary: 1000 },
                    ],
                    showJobs: false,
                };

                handleShowHide = () => {
                    this.setState({
                    showJobs: !this.state.showJobs,
                    });
                };

                render() {
                    let { showJobs } = this.state;
                    return (
                        <>
                            {!showJobs ? (
                                <button onClick={() => this.handleShowHide()}>Show</button>
                            ) : (
                                <>
                                    <ChildComponent jobs={this.state.jobs} />
                                    <button onClick={() => this.handleShowHide()}>Hide</button>
                                </>
                            )}
                        </>
                    );
                }
            }

            export default MyClassComponents;




====================================================================
# XV. Split Components

* Create new new file [src>views>example>AddComponent.js]


        └───src
            │   ...
            └───views     
                │   ....
                │
                └───example
                        AddComponent.js
                        ChildComponent.js
                        MyClassComponent.js


* Example:
    * Write the following code in to the file [src>views>example>AddComponent.js]

            import React from "react";

            class AddComponent extends React.Component {
                state = {
                    jobName: "",
                    salary: +'',
                };

                handleChangeJobName = (event) => {
                    this.setState({
                    jobName: event.target.value,
                    });
                };

                handleChangeSalary = (event) => {
                    this.setState({
                    salary: +event.target.value,
                    });
                };

                handleSubmit = (event) => {
                    event.preventDefault(); // prevent action defaut (submit) of button (type="submit")
                    console.log("Check data input : " + this.state);
                };
                render() {
                    return (
                        <>
                                <form action="">
                                    <label>Job name:</label>
                                    <br />
                                    <input
                                    type="text"
                                    value={this.state.jobName}
                                    onChange={(event) => this.handleChangeJobName(event)}
                                    />
                                    <br />
                                    <label>Salary:</label>
                                    <br />
                                    <input
                                    type="number"
                                    value={this.state.salary}
                                    onChange={(event) => this.handleChangeSalary(event)}
                                    />
                                    <br />
                                    <br />
                                    <input
                                    type="submit"
                                    value="Submit"
                                    onClick={(event) => this.handleSubmit(event)}
                                    />
                                </form>
                        </>
                    );
                }
            }

            export default AddComponent;



    * Write the following code in to the file [src>views>example>ChildComponent.js]

            import React from "react";

            class ChildComponent extends React.Component {

                render() {
                    console.log(">> Check props : " + this.props);
                    let { jobs } = this.props;
                    return (
                        <table>
                        <thead>
                            <tr>
                            <th>index</th>
                            <th>id</th>
                            <th>Job Name</th>
                            <th>salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                <td>{index}</td>
                                <td>{item.id}</td>
                                <td>{item.jobName}</td>
                                <td>{item.salary}</td>
                                </tr>
                            );
                            })}
                        </tbody>
                        </table>
                    );
                }
            }

            export default ChildComponent;


    * Write the following code in to the file [src>views>example>MyCalssComponent.js]


        import React from "react";
        import ChildComponent from "./ChildComponent";
        import AddComponent from "./AddComponent";

        class MyClassComponents extends React.Component {
        state = {
            jobs: [
            { id: "j001", jobName: "Developer", salary: 500 },
            { id: "j002", jobName: "Tester", salary: 400 },
            { id: "j003", jobName: "Project manager", salary: 1000 },
            ],
            showJobs: false,
        };

        handleShowHide = () => {
            this.setState({
            showJobs: !this.state.showJobs,
            });
        };

        render() {
            let { showJobs } = this.state;
            return (
            <>
                <AddComponent />
                <>
                {!showJobs ? (
                    <button onClick={() => this.handleShowHide()}>Show</button>
                ) : (
                    <>
                    <ChildComponent jobs={this.state.jobs} />
                    <button onClick={() => this.handleShowHide()}>Hide</button>
                    </>
                )}
                </>
            </>
            );
        }
        }

        export default MyClassComponents;



====================================================================
# XVI. Functions as props

* Example
    * Write the following code in to the file [src>views>example>AddComponent.js]

            
            import React from "react";

            class AddComponent extends React.Component {
                state = {
                    jobName: "",
                    salary: +"",
                };

                handleChangeJobName = (event) => {
                    this.setState({
                    jobName: event.target.value,
                    });
                };

                handleChangeSalary = (event) => {
                    this.setState({
                    salary: +event.target.value,
                    });
                };

                handleSubmit = (event) => {
                    event.preventDefault(); // prevent action defaut (submit) of button (type="submit")
                    if(!this.state.jobName || !this.state.salary){
                        alert('Missing infomation');
                        return;
                    }
                    console.log("Check data input : " + this.state);
                    this.props.addNewJob({
                        id: "j" + this.getRandomInt(0, 1000),
                        jobName: this.state.jobName,
                        salary: this.state.salary,
                    });
                    this.setState({
                        jobName:'',
                        salary:+''
                    })
                };

                getRandomInt(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
                }

                render() {
                    return (
                        <>
                            <form action="">
                            <label>Job name:</label>
                            <br />
                            <input
                                type="text"
                                value={this.state.jobName}
                                onChange={(event) => this.handleChangeJobName(event)}
                            />
                            <br />
                            <label>Salary:</label>
                            <br />
                            <input
                                type="number"
                                value={this.state.salary}
                                onChange={(event) => this.handleChangeSalary(event)}
                            />
                            <br />
                            <br />
                            <input
                                type="submit"
                                value="Submit"
                                onClick={(event) => this.handleSubmit(event)}
                            />
                            </form>
                        </>
                    );
                }
            }

            export default AddComponent;



    * Write the following code in to the file [src>views>example>ChildComponent.js]

            import React from "react";

            class ChildComponent extends React.Component {
                render() {
                    console.log(">> Check props : " + this.props);
                    let { jobs } = this.props;
                    return (
                        <table>
                            <thead>
                            <tr>
                                <th>index</th>
                                <th>id</th>
                                <th>Job Name</th>
                                <th>salary</th>
                            </tr>
                            </thead>
                            <tbody>
                            {jobs.map((item, index) => {
                                return (
                                <tr key={item.id}>
                                    <td>{index}</td>
                                    <td>{item.id}</td>
                                    <td>{item.jobName}</td>
                                    <td>{item.salary}</td>
                                </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    );
                }
            }

            export default ChildComponent;


    * Write the following code in to the file [src>views>example>MyClassComponent.js]

            import React from "react";
            import ChildComponent from "./ChildComponent";
            import AddComponent from "./AddComponent";

            class MyClassComponents extends React.Component {
                state = {
                    jobs: [
                        { id: "j001", jobName: "Developer", salary: 500 },
                        { id: "j002", jobName: "Tester", salary: 400 },
                        { id: "j003", jobName: "Project manager", salary: 1000 },
                    ],
                    showJobs: false,
                };

                handleShowHide = () => {
                        this.setState({
                        showJobs: !this.state.showJobs,
                    });
                };

                addNewJob = (job) => {
                        this.setState({
                        jobs: [...this.state.jobs,job] // this.state.jobs.push(job)
                    });
                };

                render() {
                    let { showJobs } = this.state;
                    return (
                        <>
                            <AddComponent addNewJob={this.addNewJob} />
                            <>
                                {!showJobs ? (
                                    <button onClick={() => this.handleShowHide()}>Show</button>
                                ) : (
                                    <>
                                    <ChildComponent jobs={this.state.jobs} />
                                    <button onClick={() => this.handleShowHide()}>Hide</button>
                                    </>
                                )}
                            </>
                        </>
                    );
                }
            }

            export default MyClassComponents;


    * Explain code:
    > Ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        * In the file [MyClassComponent.js] we have

                <AddComponent addNewJob={this.addNewJob} />

            > The above code helps the *addNewJob function* assign to the *addNewJob parameter*
        
        * In the file [AddComponent.js] we have 

                handleSubmit = (event) => {
                    event.preventDefault(); // prevent action defaut (submit) of button (type="submit")
                    if(!this.state.jobName || !this.state.salary){
                        alert('Missing infomation');
                        return;
                    }
                    console.log("Check data input : " + this.state);
                    this.props.addNewJob({
                        id: "j" + this.getRandomInt(0, 1000),
                        jobName: this.state.jobName,
                        salary: this.state.salary,
                    });
                    this.setState({
                        jobName:'',
                        salary:+''
                    })
                };


            * Especially the following code
            
                    this.props.addNewJob({
                        id: "j" + this.getRandomInt(0, 1000),
                        jobName: this.state.jobName,
                        salary: this.state.salary,
                    });

            > *this.props.addNewJob()* call the *addNewJob fuction* assigned to the *addNewJob parameter* at the file [MyClassComponent.js]





====================================================================
# XVII. Deleting Data with ReactJS


* Example code
    * Write the following code in to the file [src>views>example>MyClassComponent.js]
    
            import React from "react";
            import ChildComponent from "./ChildComponent";
            import AddComponent from "./AddComponent";

            class MyClassComponents extends React.Component {
                state = {
                    jobs: [
                        { id: "j001", jobName: "Developer", salary: 500 },
                        { id: "j002", jobName: "Tester", salary: 400 },
                        { id: "j003", jobName: "Project manager", salary: 1000 },
                    ],
                    showJobs: false,
                };

                handleShowHide = () => {
                    this.setState({
                        showJobs: !this.state.showJobs,
                    });
                };

                addNewJob = (job) => {
                    let currentJobs = this.state.jobs;
                    currentJobs.push(job);
                    this.setState({
                        jobs: currentJobs, // [...this.state.jobs,job]
                    });
                };

                deleteAJob = (job) => {
                    let currentJobs = this.state.jobs;
                    currentJobs = currentJobs.filter((item) => item.id !== job.id);
                    this.setState({
                        jobs: currentJobs,
                    });
                };

                render() {
                    let { showJobs } = this.state;
                    return (
                    <>
                        <AddComponent addNewJob={this.addNewJob} />
                        <>
                            {!showJobs ? (
                                <button onClick={() => this.handleShowHide()}>Show</button>
                            ) : (
                                <>
                                <ChildComponent
                                    jobs={this.state.jobs}
                                    deleteAJob={this.deleteAJob}
                                />
                                <button onClick={() => this.handleShowHide()}>Hide</button>
                                </>
                            )}
                        </>
                    </>
                    );
                }
            }

            export default MyClassComponents;


    * Write the following code in to the file [src>views>example>ChildComponent.js]


            import React from "react";

            class ChildComponent extends React.Component {

                handleOnclickDelete = (job) =>{
                    console.log(job);
                    this.props.deleteAJob(job);
                }

                render() {
                    console.log(">> Check props : " + this.props);
                    let { jobs } = this.props;
                    return (
                    <table>
                        <thead>
                        <tr>
                            <th>index</th>
                            <th>id</th>
                            <th>Job Name</th>
                            <th>salary</th>
                            <th>action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {jobs.map((item, index) => {
                                return (
                                <tr key={item.id}>
                                    <td>{index}</td>
                                    <td>{item.id}</td>
                                    <td>{item.jobName}</td>
                                    <td>{item.salary}</td>
                                    <td><button onClick={()=>this.handleOnclickDelete(item)}>X</button></td>
                                </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    );
                }
            }

            export default ChildComponent;


    * Explain code
        * In file [MyClassComponent.js]

                deleteAJob = (job) => {
                    let currentJobs = this.state.jobs;
                    currentJobs = currentJobs.filter((item) => item.id !== job.id);
                    this.setState({
                        jobs: currentJobs,
                    });
                };
        
        > ref Filter : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?retiredLocale=vi

        
                <ChildComponent
                    jobs={this.state.jobs}
                    deleteAJob={this.deleteAJob}
                />
        > The next we to the *deleteAJob function* assign to the *deleteAJob parameter*


        * In file [ChildComponent.js]


                handleOnclickDelete = (job) =>{
                    console.log(job);
                    this.props.deleteAJob(job);
                }

        > We use this.props.deleteAJob(..) to call the function

                deleteAJob = (job) => {
                    let currentJobs = this.state.jobs;
                    currentJobs = currentJobs.filter((item) => item.id !== job.id);
                    this.setState({
                        jobs: currentJobs,
                    });
                };

         In file [MyClassComponent.js] , and pass parameter job by *this.props.deleteAJob(job)*

        > Here, although the *deleteAJob function* is called in the [ChildComponent], but key *this* (this.state....)here still refers to [MyClassComponent]





====================================================================
# XVIII. React Lifecycle Methods 
>(https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
>(https://reactjs.org/docs/state-and-lifecycle.html)


====================================================================
# XIX. Build Todo App - CRUD

* Reference code TodoApp
    * Install [React-Toastify]
        > ref : (https://www.npmjs.com/package/react-toastify)

                npm install --save react-toastify

        > Try Toast here https://fkhadra.github.io/react-toastify/introduction/

                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    <ToastContainer />

        > We will use this Toast Container

    * Code TodoApp
        * Create files and folders as follows:

                └───views
                    │
                    │
                    ├─....
                    ├─....
                    │
                    └───Todos
                            AddTodo.js
                            ListTodo.js
                            ListTodo.scss

        * Write the following code into the file [src>views>App.js]

                import logo from "./logo.svg";
                import "./App.scss";
                import ListTodo from "./Todos/ListTodo";
                import { ToastContainer } from "react-toastify";
                import "react-toastify/dist/ReactToastify.css";

                function App() {
                    return (
                        <div className="App">
                            <header className="App-header">
                                <img src={logo} className="App-logo" alt="logo" />
                                <p>Todo app</p>
                                <ListTodo />
                            </header>
                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                            <ToastContainer />
                        </div>
                    );
                }

                export default App;


        *  Write the following code into the file [src>views>App.scss]


                .App {
                    text-align: center;
                }

                .App-logo {
                    height: 40vmin;
                    pointer-events: none;
                }

                @media (prefers-reduced-motion: no-preference) {
                    .App-logo {
                        animation: App-logo-spin infinite 20s linear;
                    }
                }

                .App-header {
                    background-color: #282c34;
                    min-height: 100vh;
                    // display: flex;
                    // flex-direction: column;
                    // align-items: center;
                    // justify-content: center;
                    font-size: calc(10px + 2vmin);
                    color: white;
                    padding: 64px;
                }

                .App-link {
                    color: #61dafb;
                }

                @keyframes App-logo-spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

        * Write the following code into the file [src>views>Todos>ListTodo.js]


                import React from "react";
                import AddTodo from "./AddTodo";
                import { toast } from "react-toastify";
                import "./ListTodo.scss";

                class ListTodo extends React.Component {
                    state = {
                        listTodo: [
                        { id: "todo1", title: "Learning" },
                        { id: "todo2", title: "Cooking" },
                        { id: "todo3", title: "Sleeping" },
                        { id: "todo4", title: "Working" },
                        ],
                        editTodo: {},
                    };

                    handleAddTodo = (newTodo) => {
                        this.setState({
                        listTodo: [...this.state.listTodo, newTodo],
                        });
                        toast.success("Success adding to listTodo!");
                    };

                    handleDeleteTodo = (todo) => {
                        let currentTodo = this.state.listTodo;
                        currentTodo = currentTodo.filter((item) => item.id !== todo.id);
                        this.setState({
                        listTodo: currentTodo,
                        });
                        toast.success("Success delete!");
                    };

                    handleEditTodo = (todo) => {
                        this.setState({
                        editTodo: todo,
                        });
                    };

                    handlSaveTodo = () => {
                        let { editTodo, listTodo } = this.state;
                        let currentTodo = [...listTodo];
                        let objIndex = currentTodo.findIndex((obj) => obj.id === editTodo.id);
                        currentTodo[objIndex].title = editTodo.title;
                        this.setState({
                        listTodo: currentTodo,
                        editTodo: {},
                        });
                        toast.success("Success save!");
                    };

                    handleChangeEditTodo = (event) => {
                        this.setState({
                        editTodo: { id: this.state.editTodo.id, title: event.target.value },
                        });
                    };

                    render() {
                        let { listTodo, editTodo } = this.state;
                        let isEmptyObj = Object.keys(editTodo).length === 0;
                        console.log(">>> check isEmptyObj : ", isEmptyObj);
                        return (
                            <div className="list-todo-container">
                                <AddTodo addTodo={this.handleAddTodo} />
                                <div className="list-todo-content">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>NO</th>
                                                <th>Todo id</th>
                                                <th>Title</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listTodo.map((item, index) => {
                                                return (
                                                <tr key={item.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.id}</td>
                                                    <td>
                                                    {!isEmptyObj && item.id === editTodo.id ? (
                                                        <input
                                                        title="text"
                                                        value={editTodo.title}
                                                        onChange={(event) => this.handleChangeEditTodo(event)}
                                                        ></input>
                                                    ) : (
                                                        item.title
                                                    )}
                                                    </td>
                                                    <td>
                                                    {!isEmptyObj && item.id === editTodo.id ? (
                                                        <button onClick={() => this.handlSaveTodo()}>
                                                        Save
                                                        </button>
                                                    ) : (
                                                        <button onClick={() => this.handleEditTodo(item)}>
                                                        Edit
                                                        </button>
                                                    )}

                                                    <button onClick={() => this.handleDeleteTodo(item)}>
                                                        Delete
                                                    </button>
                                                    </td>
                                                </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        );
                    }
                }

                export default ListTodo;


        * Write the following code into the file [src>views>Todos>AddTodo.js]

                import React from "react";
                import { toast } from "react-toastify";

                class AddTodo extends React.Component {
                    state = {
                        newTitle: "",
                    };

                    getRandomInt(min, max) {
                        min = Math.ceil(min);
                        max = Math.floor(max);
                        return Math.floor(Math.random() * (max - min) + min);
                    }
                    handleAdd = (event) => {
                        event.preventDefault();
                        if (!this.state.newTitle) {
                        toast.error(`Missing title's Todo!`);
                        return;
                        }
                        let newId = "todo" + this.getRandomInt(0, 1000);
                        let newTitle = this.state.newTitle;

                        this.props.addTodo({
                        id: newId,
                        title: newTitle,
                        });
                        this.setState({
                        newTitle: "",
                        });
                    };
                    handleChangeNewTitle = (event) => {
                        this.setState({
                        newTitle: event.target.value,
                        });
                    };
                    render() {
                        return (
                        <>
                            <div className="add-todo">
                                <input
                                    type="text"
                                    value={this.state.newTitle}
                                    onChange={(event) => {
                                    this.handleChangeNewTitle(event);
                                    }}
                                />
                                <button
                                    className="btn"
                                    onClick={(event) => {
                                    this.handleAdd(event);
                                    }}
                                >
                                    Add
                                </button>
                            </div>
                        </>
                        );
                    }
                }

                export default AddTodo;
    * Explain code:
        * In file [src>views>App.js]

                import { ToastContainer } from "react-toastify";
                import "react-toastify/dist/ReactToastify.css";

        > Import react toastify we installed above, it helps us to show the notifications

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <ToastContainer />
        

        > This is Toast Container 
        > We can copy this code in (https://fkhadra.github.io/react-toastify/introduction/)
        
        * In file [src>views>Todos>ListTodo.js]

                state = {
                    listTodo: [
                        { id: "todo1", title: "Learning" },
                        { id: "todo2", title: "Cooking" },
                        { id: "todo3", title: "Sleeping" },
                        { id: "todo4", title: "Working" },
                    ],
                    editTodo: {},
                };


        > Object *editTodo* to save object (item of listTodo) to update

                handleDeleteTodo = (todo) => {
                    let currentTodo = this.state.listTodo;
                    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
                    this.setState({
                        listTodo: currentTodo,
                    });
                    toast.success("Success delete!");
                };

        > Line *currentTodo = currentTodo.filter((item) => item.id !== todo.id);* to filter all object in *state.listTodo* that is not paramter *todo* (*todo* is object we need remove from *state.listTodo*).
        > Line *toast.success("Success delete!");* is display notification with content "Success delete!" (react-toastify)

        * In file [src>views>Todos>ListTodo.js]

                ..
                ...
                <tbody>
                    {listTodo.map((item, index) => {
                        return (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.id}</td>
                            <td>
                            {!isEmptyObj && item.id === editTodo.id ? (
                                <input
                                title="text"
                                value={editTodo.title}
                                onChange={(event) => this.handleChangeEditTodo(event)}
                                ></input>
                            ) : (
                                item.title
                            )}
                            </td>
                            <td>
                            {!isEmptyObj && item.id === editTodo.id ? (
                                <button onClick={() => this.handlSaveTodo()}>
                                Save
                                </button>
                            ) : (
                                <button onClick={() => this.handleEditTodo(item)}>
                                Edit
                                </button>
                            )}

                            <button onClick={() => this.handleDeleteTodo(item)}>
                                Delete
                            </button>
                            </td>
                        </tr>
                        );
                    })}
                </tbody>

            * The line
            
                    {!isEmptyObj && item.id === editTodo.id ? <something-A> : <something-B>}

            >  With  let isEmptyObj = Object.keys(editTodo).length === 0;
            >  This meaning *editTodo* (this.state.editTodo) is empty and *item.id === editTodo.id* (*item* is each item in table display *listTodo*) , will display *something-A* , and if vice versa display *something-B* 



====================================================================
# XX. React Routers (https://reactrouter.com/)
> ref : https://v5.reactrouter.com/web/guides/quick-start
* Install react-router-dom 
> (https://www.npmjs.com/package/react-router-dom)
> (https://github.com/remix-run/react-router)


        npm install react-router-dom


* Upgrading from v5
> https://reactrouter.com/docs/en/v6/upgrading/v5#upgrading-from-v5


* Example:
    * Create files and folders (Home.js & Navigation..)following:


            │
            ├───...
            └───views
                │   ...
                │   ....
                ├───example
                │       Home.js
                │       .....
                ├───Navigation
                │       Navigation.js
                │       Navigation.scss
                │
                └───Todos
                        ....
                        ....
                        ....


    * Writing the following code into the file [src>views>App.js]

            import logo from "./logo.svg";
            import "./App.scss";
            import ListTodo from "./Todos/ListTodo";
            import MyClassComponent from "./example/MyClassComponent";
            import Home from "./example/Home";
            import { ToastContainer } from "react-toastify";
            import "react-toastify/dist/ReactToastify.css";
            import Navigation from "./Navigation/Navigation";
            import { BrowserRouter, Routes, Route } from "react-router-dom";

            function App() {
                return (
                    <BrowserRouter>
                    <div className="App">
                        <Navigation />
                        <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <Routes>
                            <Route path="/home" element={<Home />} />
                            <Route path="/todo-app" element={<ListTodo />} />
                            <Route path="/about" element={<MyClassComponent />} />
                            <Route path="/" element={<div>Main page</div>} />
                        </Routes>
                        </header>
                    </div>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <ToastContainer />
                    </BrowserRouter>
                );
            }

            export default App;


    * Writing the following code into the file [src>views>Navigation>Navigation.js]

            import React from "react";
            import "./Navigation.scss";
            import { Link, NavLink } from "react-router-dom";

            class Navigation extends React.Component {
                render() {
                    return (
                        <>
                            <div className="topnav">
                            <Link to="/">Main</Link>
                            <Link to="home">Home</Link>
                            <Link to="todo-app">Todo App</Link>
                            <Link to="about">About</Link>
                            </div>
                            {/* Uncomand and try code */}
                            {/* <div className="topnav">
                            <NavLink to="/" activeClass="active">Main</NavLink>
                            <NavLink to="home" activeClass="active">Home</NavLink>
                            <NavLink to="todo-app" activeClass="active">Todo App</NavLink>
                            <NavLink to="about" activeClass="active">About</NavLink>
                            </div> */}
                            {/* Uncomand and try code V.6 */}
                            {/* <div className="topnav">
                                <NavLink
                                    to="/"
                                    className={(navData) => (navData.isActive ? "active" : "")}
                                >
                                    Main
                                </NavLink>
                                <NavLink
                                    to="/home"
                                    className={(navData) => (navData.isActive ? "active" : "")}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="todo-app"
                                    className={(navData) => (navData.isActive ? "active" : "")}
                                >
                                    Todo App
                                </NavLink>
                                <NavLink
                                    to="about"
                                    className={(navData) => (navData.isActive ? "active" : "")}
                                >
                                    About
                                </NavLink>
                            </div> */}
                        </>
                    );
                }
            }

            export default Navigation;


    * Writing the following code into the file [src>views>Navigation>Navigation.scss]

            .topnav {
                overflow: hidden;
                background-color: rgb(124, 124, 124);
            }

            .topnav a {
                float: left;
                color: #f2f2f2;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
                font-size: 17px;
            }

            .topnav a:hover {
                background-color: #b4b4b4;
                color: black;
            }

            .topnav a.active {
                background-color: #b4b4b4;
                color: white;
            }

    * Writing the following code into the file [src>views>example>Home.js]


            import React, { useEffect } from "react";
            import { useNavigate } from "react-router-dom";

            function Home() {
                let navigate = useNavigate();
                useEffect(() => {
                    setTimeout(() => {
                    console.log("check todo-app");
                    navigate("/todo-app");
                    }, 3000);
                    setTimeout(() => {
                    console.log("check 4500");
                    }, 4500);
                    setTimeout(() => {
                    console.log("check 6000");
                    }, 6000);
                });
                return (
                    <div>
                    <h1>Home page. Wating 3 second</h1>
                    </div>
                );
            }

            export default Home;



* Explain code 
    # Route react
    * In the file [src>views>App.js]
        
        * Brower Router (https://v5.reactrouter.com/web/api/BrowserRouter)

                <BrowserRouter>
                    .... 
                </BrowserRouter>
            
            * That use the HTML5 history API to keep your UI in sync with the URL

        * Routes and Route
        > V.5 : Using Switch and Route 
            > https://v5.reactrouter.com/web/example/nesting
            > https://v5.reactrouter.com/web/api/Switch
            > https://v5.reactrouter.com/web/api/Route
        > V.6 : Upgrade all Switch to Routes
            >  https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-all-switch-elements-to-routes


                <BrowserRouter>
                    <div className="App">
                        <Navigation />
                        <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <Routes>
                            <Route path="/home" element={<Home />} />
                            <Route path="/todo-app" element={<ListTodo />} />
                            <Route path="/about" element={<MyClassComponent />} />
                            <Route path="/" element={<div>Main page</div>} />
                        </Routes>
                        </header>
                    </div>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <ToastContainer />
                </BrowserRouter>
        

        > &lt;Routes&gt; is **unique** in that it renders a route *exclusiety*.  In contrast, every &lt;Route&gt; that matches the location renders inclusively. Consider these routes(In the file [src>views>App.js]):

                 <BrowserRouter>
                   ...
                   ..
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/todo-app" element={<ListTodo />} />
                        <Route path="/about" element={<MyClassComponent />} />
                        <Route path="/" element={<div>Main page</div>} />
                    </Routes>
                   ...
                   ....
                </BrowserRouter>
            
        > If the URL is **/home** then &lt;Routes /&gt; will *render* because it match the path.


    # Link & NavLink
    > https://v5.reactrouter.com/web/api/Link
    > https://v5.reactrouter.com/web/api/NavLink
    > https://reactrouter.com/docs/en/v6/upgrading/v5#note-on-link-to-values
    
    * Link 

            <div className="topnav">
                <Link to="/">Main</Link>
                <Link to="home">Home</Link>
                <Link to="todo-app">Todo App</Link>
                <Link to="about">About</Link>
            </div>
        
        > Link to="..." presentaion of the Link location, create by concatenating the location's pathname...
    
    * NavLink (v.5)

            <div className="topnav">
                <NavLink to="/" activeClass="active">Main</NavLink>
                <NavLink to="home" activeClass="active">Home</NavLink>
                <NavLink to="todo-app" activeClass="active">Todo App</NavLink>
                <NavLink to="about" activeClass="active">About</NavLink>
            </div>

        > A special version of the &lt;Link&gt; that will add styling attributes to the rendered element when it matches the current URL.
        > activeClassName: The class to give the element when it is active. The default given class is active. This will be joined with the className prop.
        > In React Router v6, activeClassName will be removed and you should use the function className to apply classnames to either active or inactive NavLink components.
    
    * NavLink (V.6)
    > As of v6.0.0-beta.3, the activeClassName and activeStyle props have been removed from NavLinkProps. Instead, you can pass a function to either style or className that will allow you to customize the inline styling or the class string based on the component's active state.
    > https://reactrouter.com/docs/en/v6/upgrading/v5#remove-activeclassname-and-activestyle-props-from-navlink-

                <div className="topnav">
                    <NavLink
                        to="/"
                        className={(navData) => (navData.isActive ? "active" : "")}
                    >
                        Main
                    </NavLink>
                    <NavLink
                        to="/home"
                        className={(navData) => (navData.isActive ? "active" : "")}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="todo-app"
                        className={(navData) => (navData.isActive ? "active" : "")}
                    >
                        Todo App
                    </NavLink>
                    <NavLink
                        to="about"
                        className={(navData) => (navData.isActive ? "active" : "")}
                    >
                        About
                    </NavLink>
                </div>
    
    * Redirect using withRouter (V.5) or useNavigate (V.6)
    > https://v5.reactrouter.com/web/api/withRouter
    > https://reactrouter.com/docs/en/v6/faq#what-happened-to-withrouter-i-need-it
    > https://reactrouter.com/docs/en/v6/getting-started/overview#navigation
    > In the file [src>views>example>Home.js]

            import React, { useEffect } from "react";
            import { useNavigate } from "react-router-dom";

            function Home() {
                let navigate = useNavigate();
                useEffect(() => {
                    setTimeout(() => {
                        navigate("/todo-app");
                    }, 3000);
                    setTimeout(() => {
                        navigate("/home");
                    }, 6000);
                });
                return (
                    ...
                );
            }

            export default Home;

    > **useEffect()**  like **componentDidUpdate()**
    
            setTimeout(() => {
                navigate("/todo-app");
            }, 3000);
    
    > navigate
        > https://reactnavigation.org/docs/use-navigation/
        > https://reactnavigation.org/docs/navigation-prop
    > Meaning after 3 second will display with url "/todo-app", this action is same as when we click Link & NavLink 

             useEffect(() => {
                setTimeout(() => {
                console.log("check todo-app");
                navigate("/todo-app");
                }, 3000);
                setTimeout(() => {
                console.log("check 4500");
                }, 4500);
                setTimeout(() => {
                console.log("check 6000");
                }, 6000);
            });

    > Beside we have setTimeout(()=>{..},4500) and setTimeout(()=>{..},6000)
        > Although the url has changed to /todo-app, these 2 blocks will still work


