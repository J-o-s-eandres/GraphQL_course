import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// Origen de datos
// DB , API
const books = [
    {
        title: 'Titulo libro 1',
        author: 'JGM'
    },
    {
        title: 'Titulo libro 2',
        author: 'JGM2'
    },
    {
        title: 'Titulo libro 3',
        author: 'JGM3'
    }
];
// Definición de tipo
// string template
const typeDefs = `
    
    type Book {
        title: String
        author: String
    }

#Indica que se le va a preguntar al servicio
    type Query {
        books: [Book]
    }
`;
// Describir que datos van a ser entregados 
// Solucionadores
const resolvers = {
    Query: {
        books: () => books
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
