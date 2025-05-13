






    
    const root=ReactDOM.createRoot(document.getElementById("root"));

const div=React.createElement("div",{id:"parent"},
[React.createElement("div",{id: "child1"},[React.createElement("h1",{id: "h1"},"hi there h1")
,React.createElement("h2",{id: "h2 from child 1"},"hi there h2")]),
React.createElement("div",{id: "child 2"},[React.createElement("h3",{id: "h3 from parent child2 "},"hi there from h3")
,React.createElement("h4",{id: "child 2"},"hi there from h4")])
])

 root.render(div);

 console.log(div);