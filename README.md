# DynamoDB Todo's Demo

This project is a demo of using [DynamoDB](https://aws.amazon.com/dynamodb/) with [React](https://react.dev/).

### Setup & run steps

1. Scaffold a new React app using `npm create vite@latest`
2. Install dependencies with `npm install`
3. Run `npm run dev` to start the app

### AWS credentials

1. Create a `.env.local` file in the root of the project
2. Add your AWS credentials to the file as environment variables
3. Install AWS SDK packages with `npm install @aws-sdk/client-dynamodb @aws-sdk/lib-dynamodb`
4. Restart dev server with `npm run dev`

### Screenshot path *(edited)*

- docs/aws-dynamoDB-table.png
- docs/todo-demo.png

## Day 4 notes

Added a handleToggle and handleDelete function to the App component to update and delete todos.

### handleToggle (checkbox)

- Flips the completed state of the todo item
- Updates the todo item's status in DynamoDB
- Updates the local todos state to reflect the change in the UI

### handleDelete (x button)

- Deletes the todo item from DynamoDB with the specified id
- Updates the local todos state to reflect the change in the UI

### Screenshot additions

- docs/day-4-aws.png
- docs/day-4-crud.png