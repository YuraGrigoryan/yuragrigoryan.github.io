const root = document.getElementById("root");

function List(todos) {
 const container = document.getElementById("div");   
container.innerHTML = JSON.stringify(todos);

return container;
};

function App() {

   let todos = [
   {label: "LearnJS", completed: false },
   {label: "NodeJS", completed: false },
   {label: "CSS", completed: false },
   ];
   
    const container = document.createElement("div");

    container.appendChild(List(todos));

    return container;
};
root.appendChild(App());