// const express = require('express');
// const { exec } = require('child_process');
// const app = express();
// const port = 2024;

// app.get('/run-tests', (req, res) => {
//   exec('npx nightwatch nightwatch/examples/basic/todoList.js', (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error: ${error.message}`);
//       return res.status(500).send('Error running tests');
//     }
//     if (stderr) {
//       console.error(`Stderr: ${stderr}`);
//       return res.status(500).send('Error running tests');
//     }
//     console.log(`Stdout: ${stdout}`);
//     res.send('Tests completed successfully');
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 2024;
const hostname = 'ruchitha';

app.get('/run-tests', (req, res) => {
  exec('npx nightwatch nightwatch/examples/basic/todoList.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Error running tests');
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return res.status(500).send('Error running tests');
    }
    console.log(`Stdout: ${stdout}`);
    res.send('Tests completed successfully');
  });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
