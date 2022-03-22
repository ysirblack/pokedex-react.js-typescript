import React from "react";

function About() {
  return (
    <div>
      <h1 className="text-4xl mb-4">Pokedex</h1>
      <p className="text-3xl mb-3">Using this application, you can search your favourite pokemon!</p>
      <p>
        If you encounter with any problem please{" "}
        <a className="hover:text-red-300 underline underline-offset-1" href="https://github.com/ysirblack">
          contact
        </a>
      </p>
      <p className="text-lg">
        Version <span className="text-red-600">1.0.0</span>
      </p>
    </div>
  );
}

export default About;
