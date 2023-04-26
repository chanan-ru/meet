# Meet App
Meet is the app that you will find a number of events in around you!

## Features
- Filter events by city.
- Show/hide event details.
- Specify number of events.
- Use the app when offline.
- Add an app shortcut to the home screen.
- View a chart showing the number of upcoming events by city.

## Technique
- The app is a React application.
- Using a test-driven development (TDD) technique.
- Using the Google Calendar API to fetch upcoming events.
- Using React axios and async/await for the API call.
- Using the Serverless Toolkit

## Serverless installation
- Install Serverless via using npm command in the terminal " npm install -g serverless ".
- Create a Serverless Service within the root directory of the app and type : 
  - serverless create --template aws-nodejs --path auth-server :: Create a new serverless service/project using aws-nodejs
  - cd auth-server 
  - npm init
