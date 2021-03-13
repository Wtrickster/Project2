$(document).ready(function() {

    const express = require('express');
    const exphbs = require('express-handlebars');
    const mysql = require('mysql');

    const app = express();

    $(".addForm").hide();

    function addFormDisplay(e) {
        e.preventDefault();
        $(".addForm").show();
    }

    $(".addButton").click(addFormDisplay)

    var todayDisplay = moment().format('ddd[ - ] MMMM Do[,] YYYY');
    console.log(todayDisplay)
    $("#currentDay").text(todayDisplay);

    var currentTime = parseInt(moment().format('hh'));

    // Set the port of our application
    // process.env.PORT lets the port be set by Heroku
    const PORT = process.env.PORT || 8080;

    // Sets up the Express app to handle data parsing
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');

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
    $('input#newDog').on('click', function() {
        var dog_Name = $('input#dog_Name').val();
        if ($.trim(dog_name) != ' ') {
            $.post('ajax/dog_Name.php', { dog_Name: dog_Name })
        };
        var breed = $('input#breed').val();
        if ($.trim(breed) != ' ') {
            $.post('ajax/breed.php', { breed: breed })
        };
        var owner_Name = $('input#owner_Name').val();
        if ($.trim(owner_Name) != ' ') {
            $.post('ajax/owner_Name.php', { owner_Name: owner_Name })
        };
        var dog_info = $('input#dog_info').val();
        $.post('ajax/dog_info.php', { dog_info: dog_info })
        if ($('#long_walk').attr('checked')) {
            $.post('ajax/long_walk.php', { long_walk: true })
        } else {
            $.post('ajax/long_walk.php', { long_walk: false })
        };
    });

    //needs to be walked
    $('input#newDog').on('click', function() {


    });

    //being walked
    $('input#newDog').on('click', function() {


    });

    //finished being walked
    $('input#newDog').on('click', function() {


    });

    // Start our server so that it can begin listening to client requests.
    // Log (server-side) when our server has started
    app.listen(PORT, () =>
        console.log(`Server listening on: http://localhost:${PORT}`)
    );

});