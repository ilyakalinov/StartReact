import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/app/app'

import './index.css'

// class WhoAmI extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       years: 26,
//       nationality: 'USA'
//     }
//     // this.nextYear = this.nextYear.bind(this)    // жестко с помощью байнда

//     // this.nextYear = () => {
//     //   this.setState(state => ({                     // сразу в конструкторе
//     //     years: ++state.years
//     //   }))
//     // }
//   }

//   nextYear = () => {
//     this.setState(state => ({                // не записывая в конструктор
//     }))
//   }

// // nextYear() {
// //   this.setState(state => ({                // жестко с помощью байнда
// //     years: ++state.years
// //   }))
// // }

//   render() {
//     const {name, surname, link} = this.props
//     const {years} = this.state
//     return (
//       <>
//       <button onClick={this.nextYear}>++</button>
//         <h1>My name is {name}, surname {surname}, years: {years}</h1>
//         <a href={link}>My profile</a>
//       </>
//     )
//   }
// }

// const All = () => {
//   return (
//     <>
//       <WhoAmI name="John" surname="Smith" link="vk.com"/>
//       <WhoAmI name="Alex" surname="Bradly" link="vk.com"/>
//       <WhoAmI name="Genry" surname="Kavil" link="vk.com"/>
//     </>
//   )
// }

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
