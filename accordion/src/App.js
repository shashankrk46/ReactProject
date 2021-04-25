
import './App.css';
import questions from './data'
import SingleQuestion from './Question';

function App() {
  return (
    <main>
      <div className="container">
        <h3>question and answer about login</h3>
        <section className="info">

          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question}></SingleQuestion>
          })}

        </section>
      </div>

    </main>
  );
}

export default App;
