## Project App API Documentation

### Routes

#### Endpoint
https://wme-projects-api-v2.herokuapp.com/api

#### Projects

| Method | Endpoint                        | Description                                        |
|--------|---------------------------------|----------------------------------------------------|
| GET    | `/projects` | Returns all projects       |
| GET    | `/projects/:id` | Returns the project with the provided `id` and include a list of the related actions. |
| POST    | `/projects` | Add the project to the database and return the `id` of the new project. |
| PUT    | `/projects/:id` | Modify an existing project.                   |
| DELETE | `/projects/:id`         | Delete a project.                            |

#### Actions

| Method | Endpoint                        | Description                                        |
|--------|---------------------------------|----------------------------------------------------|
| GET    | `/projects/:id/actions`         | Returns all actions for a specific project      |
| GET    | `/projects/:id/actions/:id`         | Returns the action with the provided `id`.       |
| POST    | `/projects/:id/actions`         | Add a action to the database.      |
| PUT    | `/projects/:id/actions/:id`         | Modify an existing action.                   |
| DELETE | `/projects/:id/actions/:id`         | Delete an action.                            |                           |


---
### Data Models

#### Resource Specific Models
| Method | Description |
|--------|-------------|
| `getProject(id)` | Return the project with the provided `id` and include a list of the actions. |
| `getActions(id)` | Return a list of actions for a specific project. |

#### Global Models
| Method | Description |
|--------|-------------|
| `find()` | Returns a promise that resolves to an array of all the resources contained in the database. |
| `findById()` | Takes an id as the argument and returns a promise that resolves to the resource with that id if found. |
| `insert()` | Accepts a `resource` object to add it to the database and return the new `resource`.
| `update()` | Accepts two arguments, the first is the id of the resource to update and the second is an object with the changes to apply. It returns the count of updated records. If the count is 1 it means the record was updated correctly. |
| `remove()` | Accepts an id as it's first parameter and, upon successfully deleting the resource from the database, returns the number of records deleted. |
