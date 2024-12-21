import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from "./TaskForm";
function App() {

  return (
    <div style={{
         display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background:"#86A788"
    }}>
     <TaskForm/>
    </div>
  )
}

export default App
