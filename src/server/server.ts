import fastify from "./app";
require("dotenv").config();

const start = async () => {
  try {
    const port = Number(process.env.API_PORT);
    const url = process.env.API_URL;

    await fastify.listen({ port: port, host: "0.0.0.0" });
    console.log(`Server running at ${url}:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
