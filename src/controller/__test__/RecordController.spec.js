const app = require("../../app");
const request = require("supertest");
describe("#Records", () => {
  it("returns 422 if the no input is passed", async () => {
    await request(app).post("/api/v1/records").send({}).expect(422);
  });

  it("returns 422 if the startdate is invalid", async () => {
    await request(app)
      .post("/api/v1/records")
      .send({
        startDate: "201226",
        endDate: "2017-02-02",
        minCount: 400,
        maxCount: 9000,
      })
      .expect(422);
  });

  it("returns 422 if the minCount is not a number", async () => {
    await request(app)
      .post("/api/v1/records")
      .send({
        startDate: "2012-26-01",
        endDate: "2017-02-02",
        minCount: "900",
        maxCount: 9000,
      })
      .expect(422);
  });

  it("returns 422 if the maxCount is not a number", async () => {
    await request(app)
      .post("/api/v1/records")
      .send({
        startDate: "2012-26-01",
        endDate: "2017-02-02",
        minCount: 900,
        maxCount: "9000",
      })
      .expect(422);
  });

  it("returns a 200, if the input is valid", async () => {
    await request(app)
      .post("/api/v1/records")
      .send({
        startDate: "2012-05-01",
        endDate: "2017-02-02",
        minCount: 900,
        maxCount: 9000,
      })
      .expect(200);
  });
});
