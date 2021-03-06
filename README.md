# Ionic Ticketing Tool

Ionic doesn't seem to keep track of the bower packages in the bower.json file. I have had to use the .gitignore file and add the packages in the bower.json file.

I usually put in the .git-ignore the sublime project file. But this time I've just decided to keep it.

## Updating with Bower

```
After updating dependencies via **bower update** you have to do **ionic io init** again in order to set the current settings for your services.
```

## Usage

You can run it in local just using the ionic command serve:

```bash
ionic serve
```

## Mock Users

The following users can be used to test the **app**. User: Password.

```
user: user
helpdesk: helpdesk
```

## Models

### Users

+ Normal User
+ Helpdesk
+ Admin

### Use Case

+ Normal User
	+ Submit a Ticket
	+ See "my" tickets
	+ See a ticket detail
	+ Evaluate a ticket

+ Helpdesk
	+ See the total of tickets
	+ Flag a ticket*
	+ Send an email (only link to an email)
	+ See the number of currently opened tickets*
	+ Create an express ticket*
	+ Assign a ticket
	+ Comment a ticket
	+ Close a ticket
	+ Send follow-up message*
	+ See detail of a ticket
	+ See tickets
		+ Filter by office*
		+ Filter by my assigned tickets
		+ Closed Tickets 

+ Admin
	+ See statistics*
	+ CRUD Categories*
	+ Delete a ticket

*pending

### Helpdesk

+ Tickets Assigned to the helpdesk logged user
+ Inbox tickets (tickets which have not been assigned yet)
+ last closed tickets
+ detail ticket
	* assign / reassign
	* close
	* write a comment

## Considerations

+ Cordova should not be included in the repository, remove it.
