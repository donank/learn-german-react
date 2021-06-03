import logo from './logo.svg';
import './App.css';
import questions from './questions.json';

const firstQuestionArray = questions.beginner[0].question.split('blank')


function App() {
  console.log(firstQuestionArray)
  return (
    <div className="App">
      <header className="App-header">
        <div>{
          firstQuestionArray.map(element => {
            return (
              <div>
                <p>{element}</p>
                <input type="text"/>
              </div>
            );
          })
        }
</div>
      </header>
    </div>
  );
}

export default App;
