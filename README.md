test-api (BACKEND)

This is a simple express server with nodejs where I handle requests, create token and return data. 
This api is not connected to database and the data is saved in JSON file called data.json.
That means that if you restart the server you will lost all saved data exept the dummy data that is already in the json file.

Steps to start:
1. npm install
2. npm start

It will listen on localhost:3001.
On every request you will see log in the console with updated data so you can see what is currently in the data.json.
