# PortfolioWebsite

Developed my portfolio website using React and React Components like React-MDL, Reactstrap. Implemented sending e-mails functionality using NodeJS and NodeMailer 

You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine.

Install the create-react-app using:

npm install -g create-react-app

To create a new app, you may choose one of the following methods:

npx create-react-app my-app(Portfolio) or npm init create-react-app my-app or yarn create react-app my-app

command: npm start, Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

On the Server End i.e. outside the Portfolio react application: 

Install the following: express, body-parser,nodemailer,nodemon,concurrently.

On the Server End we are using NodeJS and Nodemailer to send an emails automatically when the contact form is being submitted (change the email details mentioned in index.js) 

You can run both server and client concurrently by using command: npm run dev at the MyPortfolio directory level.
