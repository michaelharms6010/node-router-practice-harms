# Quotes DB Exercise

A gremlin has deleted vital parts of the quotes api. We need you to put it back together asap!

## MVP 

1. The gremlin removed all the routing information in `quotes-router.js`, all the global middleware from `server.js`, and the command for the server to listen in `index.js`. It even deleted at least one required package! Can you get this back up and running before the end of standup? (yes)

2. Write one piece of custom middleware. This can be a logger, a validator, anything.

3. Deploy the qutoes API to heroku

### Spec:

Working Deployments: 
https://quotes-gremlin.herokuapp.com   

```
Endpoints:
      GET: /quotes
      GET: /quotes/:id
      POST: /quotes
      PUT: /quotes/:id
      DELETE: /quotes/:id
```
