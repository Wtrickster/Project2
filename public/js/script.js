const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'hg1sixrm9gn0c7w7',
});

connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }

    console.log(`connected as id ${connection.threadId}`);
});

$('input#newDog').on('click', function() {
    var dog_Name = $('input#dog_Name').val();
    if ($.trim(dog_name) != ' ') {
        $.post('ajax/dog_Name.php', { dog_Name: dog_Name })
    };
    var owner_Name = $('input#owner_Name').val();
    if ($.trim(owner_Name) != ' ') {
        $.post('ajax/name.php', { owner_Name: owner_Name })
    };
    var dog_info = $('input#dog_info').val();
    $.post('ajax/dog_info.php', { dog_info: dog_info })
    switch (expression) {
        case x:
            // code block
            break;
        case y:
            // code block
            break;
        default:
            // code block
    }
});
// Start our server so that it can begin listening to client requests.
// Log (server-side) when our server has started
app.listen(PORT, () =>
    console.log(`Server listening on: http://localhost:${PORT}`)
);