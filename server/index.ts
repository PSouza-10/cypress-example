import fastify from 'fastify' 
import fastifyStatic from "fastify-static";
import cors from "fastify-cors";
import path from "path";
const IS_PROD = process.env.NODE_ENV === "production";

const server = fastify({ logger: !IS_PROD });

server.register(cors, {
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  origin: "*",
});
server.register(fastifyStatic, {
  root: path.join(__dirname, "client"),
});
// Declare a route
server.get("/api/health", async (req, res) => {
  return "Ok";
});

// Run the server!
const start = async () => {
  try {
    await server.listen(process.env.PORT || 5000, "0.0.0.0");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start()