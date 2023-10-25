import "./App.css";
import Card, { Action } from "./components/Card";

const actions: Array<Action> = [
  {
    label: "cancel",
    func: () => console.log("cancel"),
  },
  {
    label: "save",
    func: () => console.log("save"),
  },
];

function App() {
  return (
    <div className="container">
      <h1>CARD COMPONENT</h1>
      <h2>Card + title + subtitle</h2>
      <Card
        title="Beautifull photo"
        subtitle="Random picture from Lorem Picsum"
        image="https://picsum.photos/500/400"
      />
      <h2>Card Actions</h2>
      <Card
        hasActions
        actions={actions}
        title="Item Title"
        subtitle="Item detail (action on console)"
      />
      <h2>Collapsable</h2>
      <Card
        collapsable
        collapsableTitle="Show more"
        title="Collabsable Title"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quam optio delectus, alias cumque eligendi odio vero corporis tempora id consequatur, pariatur fuga. Totam, pariatur reprehenderit? Non maiores asperiores dicta?"
      />
    </div>
  );
}

export default App;
