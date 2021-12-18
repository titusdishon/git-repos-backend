import request from "supertest";

import { testApp } from "../app.js";

it("should return a list of repos", async () => {
  const response = await request(testApp)
    .get(`/api/v1/repos`)
    .query({ username: "joshuaclayton" })
    .set("Accept", "application/json");
  expect(response.status).toBe(200);
  expect(response.body.length).toBeGreaterThan(0);
});
it("should return 400 if the user username is not passed", async () => {
  const response = await request(testApp)
    .get("/api/v1/repos")
    .query({ username: "" })
    .set("Accept", "application/json");
  expect(response.status).toBe(400);
});

it("should return a repo", async () => {
  const response = await request(testApp)
    .get("/api/v1/repo")
    .query({
      user: "titusdishon",
      repo: "Deezer-frontend",
      branch: "main",
    })
    .set("Accept", "application/json");
  expect(response.status).toBe(200);
});

it("should return 400 if the user, repo or branch is not passed", async () => {
  const response = await request(testApp)
    .get("/api/v1/repo")
    .query({
      user: "",
      repo: "",
      branch: "",
    })
    .set("Accept", "application/json");
  expect(response.status).toBe(400);
}); 
