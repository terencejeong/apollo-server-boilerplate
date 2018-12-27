import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ApolloServer, gql } from 'apollo-server-express';
import { connect } from './db/index';
import { router } from './router';

const dotenv = require('dotenv');

dotenv.config();

const app = express();

// god damn cors
app.use(cors());

app.use(bodyParser.json());

// create mongodb connection
connect();

//routes
router(app);

const PORT = process.env.PORT  || 4000;

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  },
};


const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});
server.applyMiddleware({ app });


app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);

