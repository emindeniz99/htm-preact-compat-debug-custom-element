import {
  register,
  jsx,
  useEffect,
  useState
} from "htm-preact-compat-debug-custom-element";

const MyComponent = (props) => {
  return jsx` <div>
  <div>Start</div>

  <div>Name:${props.name}</div>
  <p>${props.heading}</p> 

  <div>End</div>

  </div> `;
};

register(MyComponent, "x-my-component", ["name"], { shadow: false });
