import * as React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HeaderButtons from './HeaderButtons';

import logo from './logo.jpg';

class App extends React.Component {

  public render() {

    const exact: boolean = true;

    const home = () => {
      return <div>Home page coming</div>;
    };

    const admin = () => {
      return <div>Admin page coming</div>;
    };

    return (<Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Airport Currency Exchange Office</h1>
            <HeaderButtons />
          </header>

          <Route exact={exact} path="/" component={home}/>
          <Route path="/home" component={home}/>
          <Route path="/admin" component={admin}/>

        </div>
      </Router>
    );
  }
}

export default App;

//EXAMPLE: DELETE THIS
// import * as React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';

// const home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const about = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );

// const topic = (match: {params: {topicId: string}}) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );

// const topics = (match: {url: string, path: string}) => {
  
//   const exact: boolean = true;

//   return (<div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.path}/:topicId`} component={topic}/>
//     <Route exact={exact} path={match.path} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>);
// };

// const basicExample = () => {
//   const exact: boolean = true;

//   return (<Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//       </ul>

//       <hr/>

//       <Route exact={exact} path="/" component={home}/>
//       <Route path="/about" component={about}/>
//       <Route path="/topics" component={topics}/>
//     </div>
//   </Router>
//   );
// };
// export default basicExample;
