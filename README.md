# node-mongo-mongoose-demo-MVP
Minimal Viable Product (MVP) example demos showing how to push data into mongo from node with mongoose. Built for my dev team to pick up.


### To setup up a deploy to Heroku
1. install the heroku cli
2. cd into the folder of the app
3. initialize git `git init`
4. add the remote `heroku git:remote -a <remote name>`
5. to push `git push heroku master`


### To setup up mlab
1. go to mlab.com and sign up
2. you will need to make a first user, please make note of the username and password
3. hit "create new" database button
4. select aws, single node, free
5. click on the line item for the new DB and enter the page for it, then create a new user for it
6. make a copy of the line "To connect using a driver via the standard MongoDB URI" and paste in dbconnect.js
    move the username and password values to keys.js

	Things you will need 
    username 'aaa'  
    password 'bbb'  
	mongodb://aaa:bbb@ds012300.mlab.com:12300/myfilms

keys.js should be in the top level and look like this

    module.exports = {
    	// put all security passwords usernames and keys here and DO NOT commit this file
    	// keys.js is listed in the .gitignore
    	mongo : {
    		username : 'aaa',
    		password : 'bbb'
    	}
    }
    

### Caveat aka To Do
Having the username and password for mongo in keys.js is annoying because the .gitignore will also prevent this file from being committed and pushed to heroku.  Possibly another way would be to place them as environment variables that are used if keys.js is missing.


