# React, Stripe, and Next.js
This is a modification of Leigh Halliday's tutorial, which is available at  https://youtu.be/WTUYem2IxLA
The original source can be downloaded here https://github.com/leighhalliday/react-stripe-elements-demo

Pre-requisites to recreate and build your own app:
* Create a Directory for your project and clone this repo to it
* Install Yarn ( Run the command "brew install yarn")
* Install React (npx create-react-app my-app)
* Setup a Next.js server(https://nextjs.org/learn/basics/create-nextjs-app)
* Install Stripe CLI for Testing Webhooks (brew install stripe/stripe-cli/stripe)

Starting the App
1. Open your Terminal and navigate to the projects directory
2. Install stripe for back-end, stripe-js for front end, react-stripe.js for front-end, and axios for the http client to communicate between the browser by running the command "yarn add stripe @stripe/stripe-js @stripe/react-stripe-js axios"
3. To start the app run "yarn dev"
4. Access app by navigating to "localhost:3000"

Modifying App with your own test keys
** Since an .env file is not being used only submit your test keys, never embed your live keys for security reasons.
1. Publishable key: Replace the key located in the const stripePromise area of the index.js file
2. Secret key: Replace the key located in the charge.js file

Logging Responses for fulfillment
Option 1: Terminal will show each success and failure in real time.
Option 2: Stripe cli
From terminal enter "stripe listen"
