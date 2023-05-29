# Node-Developer-Test

Submission for test assignment.

# Requirements

- [npm](https://www.npmjs.com/)
- [docker](https://www.docker.com/)

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

### Get all messages

This API is used to retrieve all messages. Optional URL parameters `limit` and `page` can be used to specify the maximum number of search results per page and the page number respectively.

Endpoint: `/get-all-messages` <br />
Request type: `GET`

Sample respose:

```JSON
{
    "success": true,
    "count": 5,
    "next": "/all-messages?page=2&limit=2",
    "previous": null,
    "data": [
        {
            "id": 1,
            "senderPrivilege": "admin",
            "content": "hey man",
            "sentAt": "2023-05-26T16:04:33.000Z"
        },
        {
            "id": 2,
            "senderPrivilege": "member",
            "content": "hey wassup",
            "sentAt": "2023-05-26T16:04:33.000Z"
        }
    ]
}
```
