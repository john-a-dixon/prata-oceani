import "../css/style.css";

function SceneButton() {
  const scenes = [...Array(8)].map((x, index) => <li>Hello</li>);

  return (<ul>{scenes}</ul>)
};

export default SceneButton;