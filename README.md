# webpush-dev-Lyes

Webpush Service

## Run Sender Application Test

Clone the following repository: https://github.com/solganeo-org/test.produce-service and follow the instrction on the README file. 😁💻

## Run Locally

Firstly start Rabbit MQ instance using:

    docker-compose up

Then install all the dependecies:

    npm run install

and run the application using

    npm run dev


## Run using Heroku


1. Install Heroku cli https://devcenter.heroku.com/articles/heroku-cli
2. Create .env file:

```
ENV=local
PUBLIC_KEY=BNrknLI66******************eSPqIVqwIzVwjRbNvGbfsBfXc_Yvcgxf5eMTz9P2WcgGXgEws
PRIVATE_KEY=ctPxjAFkF************9CHjbarg0fw
SUBJECT=mailto:o.bensouda@solganeo.com
QUEUE=webpush
```

3. Run `npm run build` (This command will build the application by replacing .dist folder)
4. Launch the app using `heroku local --env=./.env` or just `heroku local` if you dont want to specify any .env file. 🚀. Another alternative can be run `npm run heroku-local` instead use `npm run build` and `heroku local`

