# Node-Developer-Test

Submission for test assignment.

# Installation

Once the repository is cloned, run `npm i` from the root of the repository. Add the `.env` file from the Google Drive folder linked in the email to the root of the repository.

# Execution

From the root of the repository,

1. Run `docker compose up -d` to start the required Docker containers.
2. `docker ps` lists the `mysql` container, the `STATUS` column specifies the status of this container. Ensure that this container is healthy before proceeding. This usually takes about 30s after the containers have been started.
3. Run `npm start` to start the server.

# API Documentation

If you use the `.env` file as is from the Google Drive folder, the APIs will be hosted at `http://localhost:8000`.

### Create message

This API is used to create a message.

Endpoint: `/message` <br />
Request type: `POST` <br />
`Content-type`: `application/json`

Sample request:

```JSON
{
    "senderPrivilege": "admin",
    "content": "hi there! :D"
}
```

Sample response:

```JSON
{
    "success": true,
    "data": {
        "id": 3
    }
}
```

### Read message

This API is used to read a message.

Endpoint: `/message/:id` <br />
Request type: `GET`

Sample response:

```JSON
{
    "success": true,
    "data": {
        "id": 3,
        "senderPrivilege": "admin",
        "content": "hi there! :D",
        "sentAt": "2023-05-29T07:11:59.000Z"
    }
}
```

### Update message

This API is used to update a message.

Endpoint: `/message/:id` <br />
Request type: `PATCH` <br />
`Content-type`: `application/json`

Sample request:

```JSON
{
    "content": "heyyoooo"
}
```

Sample response:

```JSON
{
    "success": true
}
```

### Delete message

This API is used to delete a message.

Endpoint: `/message/:id` <br />
Request type: `DELETE`

Sample response:

```JSON
{
    "success": true
}
```
