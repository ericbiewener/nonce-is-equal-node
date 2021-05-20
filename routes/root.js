"use strict";
const fs = require("fs");
const path = require("path");

const ASSETS_DIR = path.join(__dirname, "../assets");

const csp = "script-src nonce-abc123";

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    reply
      .header("Content-Security-Policy-Report-Only", csp)
      .type("text/html")
      .code(200)
      .send(fs.readFileSync(path.join(ASSETS_DIR, "index.html"), 'utf-8'));
  });
  fastify.get("/test-script.js", async function (request, reply) {
    reply.type("text/javascript").send(fs.readFileSync(path.join(ASSETS_DIR, "test-script.js"), 'utf-8'));
  });
};
