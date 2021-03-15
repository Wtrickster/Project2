/* eslint-disable quotes */
$(document).ready(() => {
  const express = require("express");
  const exphbs = require("express-handlebars");
  const mysql = require("mysql");

  const app = express();

  $(".addForm").hide();

  function addFormDisplay(e) {
    e.preventDefault();
    $(".addForm").show();
  }

  $(".addButton").click(addFormDisplay);

/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
$(document).ready(() => {
  const todayDisplay = moment().format("ddd[ - ] MMMM Do[,] YYYY");
  console.log(todayDisplay);
  $("#currentDay").text(todayDisplay);

  const currentTime = parseInt(moment().format("hh"));
  const express = require("express");
  const exphbs = require("express-handlebars");
  const mysql = require("mysql");
  const app = express();

  // Set the port of our application
  // process.env.PORT lets the port be set by Heroku
  const PORT = process.env.PORT || 8080;

  // Sets up the Express app to handle data parsing
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  // const connection = mysql.createConnection({
  //     host: 'localhost',
  //     port: 3306,
  //     user: 'root',
  //     password: '',
  //     database: 'hg1sixrm9gn0c7w7',
  // });

  // connection.connect((err) => {
  //     if (err) {
  //         console.error(`error connecting: ${err.stack}`);
  //         return;
  //     }

  //     console.log(`connected as id ${connection.threadId}`);
  // });

  //add a dog
  // Button functions

  function viewClients(e) {
    e.preventDefault();
    $(".homePage").addClass("hidePage");
    $(".dogBox").removeClass("hidePage");
    // Add script to change text on button from "View Client List" to "View Home Page" or make a second button for view home appear
  }

  function addFormDisplay(e) {
    e.preventDefault();
    $(".addForm").removeClass("hidePage");
  }

  $(".addDogButton").click(addFormDisplay);
  $(".topBtn").click(viewClients);

  $("input#newDog").on("click", () => {
    const dog_Name = $("input#dog_Name").val();
    if ($.trim(dog_name) !== " ") {
      $.post("ajax/dog_Name.php", { dog_Name: dog_Name });
    }
    const breed = $("input#breed").val();
    if ($.trim(breed) !== " ") {
      $.post("ajax/breed.php", { breed: breed });
    }
    const owner_Name = $("input#owner_Name").val();
    if ($.trim(owner_Name) !== " ") {
      $.post("ajax/owner_Name.php", { owner_Name: owner_Name });
    }
    const dog_info = $("input#dog_info").val();
    $.post("ajax/dog_info.php", { dog_info: dog_info });
    if ($("#long_walk").attr("checked")) {
      $.post("ajax/long_walk.php", { long_walk: true });
    } else {
      $.post("ajax/long_walk.php", { long_walk: false });
    }
  });

  //set up listener for dog button
  if (changeDevourBtns) {
    changeDevourBtns.forEach(button => {
      button.addEventListener("click", e => {
        //grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute("data-id");
        const newDevour = e.target.getAttribute("data-newDevour");

        const newDevourState = {
          devoured: newDevour
        };

        fetch(`/api/burgers/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },

          //make sure to serialize the JSON body
          body: JSON.stringify(newDevourState)
        }).then(response => {
          //check that the response is all good
          //reload the page so the user can see the new quote
          if (response.ok) {
            console.log(`changed devour to: ${newDevour}`);
            location.reload("/");
          } else {
            alert("something went wrong!");
          }
        });
      });
    });
  }

  //CREATE
  const createBurgerBtn = document.getElementById("create-form");

  if (createBurgerBtn) {
    createBurgerBtn.addEventListener("submit", e => {
      e.preventDefault();

      //grabs the value of the textarea that goes by the name, "quote"
      const newBurger = {
        name: document.getElementById("ba").value.trim()
        //sleepy: document.getElementById('sleepy').checked,
      };

      //send POST request to create a new quote
      fetch("/api/burgers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },

        //make sure to serialize the JSON body
        body: JSON.stringify(newBurger)
      }).then(() => {
        //empty the form
        document.getElementById("ba").value = "";

        //reload the page so the user can see the new quote
        console.log("Created a new burger!");
        location.reload();
      });
    });
  }
  //start our server so that it can begin listening to client requests.
  //log (server-side) when our server has started
  app.listen(
    PORT,
    () => console.log(`Server listening on: http://localhost:${PORT}`) {
    //eslint-disable-next-line indent
    const address = $("input#address").val();
    //Script for owner address
    const phone_number = $("input#phone_number").val();
    //Script for phone number
    const extra_notes = $("input#extra_notes").val();
    //Script for recording extra notes
    const stage = 0,
    // starting stage is 0, verify if this syntax is correct
    const assigned_walker = 0;
    // assigned walker is default 0
    $(".addForm").addClass("hidePage");
  });

  // Start our server so that it can begin listening to client requests.
  // Log (server-side) when our server has started
  // eslint-disable-next-line prettier/prettier
  app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`)
  );
});
