# Films App

This project is a microfrontend application called Films App, with the host project responsible for coordinating the two microfrontends. It is built using React.js and follows a microfrontend architecture based on custom elements.
![App](https://raw.githubusercontent.com/JooseNavarro/mf-films-item/main/app.png)

## Microfrontend: mf-film-item

The `Mf-film-item` is a custom element responsible for fetching and providing data to the application.

## Local Setup

To run the project locally, you will need to have the host and both microfrontends running. Follow the steps below:

1. Navigate to the `films-app` directory:
    ```
    cd mf-films-item
    ```

2. Install dependencies:
    ```
    npm install
    ```

3. Start the development server:
    ```
    npm run build:element
    ```
4. Open custom element:
    ```
    http://localhost:8085/assets/mf-film-item.min.js
    ```
5. Open mf:
    ```
    npm run dev
    ```
Make sure to have the necessary configurations in place for each microfrontend to ensure smooth operation.
