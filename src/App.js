import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class='card'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="diyiduan">
        An advanced online playground for TailwindCSS, <p>including support for things like:</p>
        </div>
      </header>
      <div class='mid'>
        <li className="juzi">
              <img src='my-app\src\tubiao.png'></img>
              <span>
              Customizing your</span><span className="jiacu">tailwind.config.js</span><span>file</span> 
         </li>
         <li>
              <img src='my-app\src\tubiao.png'></img>
              <span>
                Extracting classes with</span><span className="jiacu">@apply</span> 
         </li>
         <li>
              <img src='my-app\src\tubiao.png'></img>
              <span>
                Extracting classes with</span>
         </li>
          
        </div>
      <div class='dierduanhua'>
      <p>Perfect for learning how the framework works, </p><p>prototyping a new idea, or creating a demo to share online.</p>
        </div>
        <div className='dibu'>
      <p className='yiduanhua'>
      Want to dig deeper into Tailwind?
      </p>
      <div>
          <a
              className="App-link"
              href="https://tailwindcss.com/docs/installation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the docs →
            </a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
