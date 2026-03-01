import { createSchema } from 'graphql-yoga'
import { readFileSync } from 'fs'
import path from 'path'
import { Query } from './resolvers/Query.js'

const typeDefs = readFileSync(
  path.join(process.cwd(), 'src/schema/schema.graphql'),
  'utf-8'
)

export const schema = createSchema({
  typeDefs,
  resolvers: {
    Query
  }
})