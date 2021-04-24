import UserForm from "./components/UserForm";

function App() {
  return (
    <div>
      <div className="bg-primary py-2 text-light text-center">
        Multi Step User Form
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <UserForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
