```markdown
# Simple GraphQL Server Example

This is a simple GraphQL server example using Apollo Server. It defines a basic schema for querying books.

## Getting Started

To get started with this GraphQL server, you can follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone <[repository_url](https://github.com/J-o-s-eandres/GraphQL_course)>
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Run the server:

   ```bash
   npm start
   ```

The GraphQL server will be available at [http://localhost:4000](http://localhost:4000).

## GraphQL Schema

### Types

- **Book**
  - Fields:
    - `id` (ID!): The ID of the book.
    - `title` (String): The title of the book.
    - `author` (String): The author of the book.

### Queries

- **books**: Get a list of all books.
- **book(id: ID!)**: Get a book by its ID.

## Sample Query

You can use tools like Postman or Apollo Client to send GraphQL queries to the server. Here's a sample query:

```graphql
{
  books {
    id
    title
    author
  }
}
```

## Author

- **Author**: [Joseandres Montesino]

Feel free to modify this README as needed and add more details about your project.

Happy coding!
```
