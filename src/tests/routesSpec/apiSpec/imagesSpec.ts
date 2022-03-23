import supertest from "supertest";
import app from "../../..";
import resizeImgs from "../../../routes/api/resize";

const request = supertest(app);

describe("testing the images endpoints", () => {
  it("using the endpoint without enter img name return 400", async () => {
    await request.get("/images").expect(400);
  });

  it("using the endpoint with invalid image name", async () => {
    await request.get("/images/?imagename=newimg").expect(404);
  });

  it("using the endpoint with width and height = 0", async () => {
    await request.get("/images/?width=0&&height=0").expect(400);
  });

  it("processing image", () => {
    expect(async () => {
      await resizeImgs("fjord", 100, 100, "build/resized-img");
  }).not.toThrow();
  })
});
