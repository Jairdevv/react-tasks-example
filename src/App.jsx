import TasksLists from "./components/TasksLists";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 min-h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TasksLists />
      </div>
    </main>
  );
}

export default App;
