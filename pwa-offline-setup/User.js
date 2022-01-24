import { useEffect, useState } from "react";
import React from "react";

const User = () => {
  const [user, setuser] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((result) => result.json())
      .then((results) => {
        setuser(results.results);
        localStorage.setItem("users", JSON.stringify(results.results));
      })
      .catch((err) => {
        console.log("Error");
        alert("you are in Catch State");
        var Collection = localStorage.getItem("users");
        setuser(JSON.parse(Collection));
      });
  }, []);
  return (
    <div className="App">
      user
      {user.map((item, index) => {
        return <h2 key={index}>{item.category}</h2>;
      })}
    </div>
  );
};

export default User;
