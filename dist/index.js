import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// Origen de datos
// DB , API
const books = [
    {
        id: 1,
        title: 'Titulo libro 1',
        author: 'JGM'
    },
    {
        id: 2,
        title: 'Titulo libro 2',
        author: 'JGM2'
    },
    {
        id: 3,
        title: 'Titulo libro 3',
        author: 'JGM3'
    }
];
// Definición de tipo
// string template
const typeDefs = `
    
    type Book {
        id: ID!
        title: String
        author: String
    }

#Indica que se le va a preguntar al servicio
    type Query {
        books: [Book]
        book(id:ID!):Book
    }
`;
// Describir que datos van a ser entregados 
// Solucionadores
const resolvers = {
    Query: {
        books: () => books,
        book: (parent, args) => books.find((book) => book.id === parseInt(args.id))
    }
};
const server = new ApolloServer({
    typeDefs, resolvers
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});
console.log(`Server Ready at:${url}`);
// Mutaciones
// Suscripciones
