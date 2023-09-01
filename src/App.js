import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TodoHeader from "./components/TodoApp/TodoHeader";
import ToDo from "./components/TodoApp/ToDo";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container pt-5 mt-5">
        <section className="row">
          <section className="col-12 col-lg-8 m-auto border border-2 p-2 round rounded-2">
            <TodoHeader />
            <ToDo />
          </section>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
