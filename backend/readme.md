# WC_2A15_bazooka-server

<p>Digital Holiday card creator.</p>

## Requirements

- Nodejs <= 14.x and npm <= 8.xx
- [Express](https://expressjs.com/)
- [mongoose](https://www.mongoosejs.com/)

## Installation

- Cloning the repo
  
  ```console
   
    git clone https://github.com/CSEC-ASTU/WC_2A15_bazooka.git

   ```

- Navigating to project directory

    ```console

     cd WC_2A15_bazooka/backend
    ```

- Installing depedencies

    ```console

     npm install
    ```

- Running the server

   ```console
    nodemon index.js
   ```

## Usage

### Endpoints

<b>Base url: </b>

| Endpoint       | Body/Params                               | Request type | URL               |
|----------------|-------------------------------------------|--------------|-------------------|
| AddTemplate    | { Image }                                 | POST         | /api/add          |
| SaveCard       | { image, user_id }                        | POST         | /api/save         |
| ShareCard      | { sender_email, reciever_email, card }    | POST         | /api/share        |
| GetAllTemplates|                                           | GET          | /api/templates    |
| ExportTodoList | Parmas: id <string>                       | GET          | /api/template/:id |
