const request = require("supertest"); // Correct library
const app = require("../app"); // Import your app
const { connect, clear, close } = require("./setupTestDb");
const trainerReview = require("../Model/trainerReview");

describe("Trainer Review API Tests", (req, res, next) => {
  beforeAll(async () => {
    await connect();
    await app.ready; // Connect to in-memory database
  });

  afterEach(async () => {
    await clear(); // Clear database after each test
  });

  afterAll(async () => {
    await close(); // Close database connection
  });

  // Test case to create a trainer review
  test("Should create a trainer review", async () => {
    const reviewData = {
      trainer_id: "673d946f663654228567e3d5", // Mock valid ObjectId
      student_id: "673f0481ef6258465f02b46a", // Mock valid ObjectId
      rating: 4,
      description: "good",
      reviewDate: "2024-11-22",
    };

    // Send POST request to the reviews endpoint
    const response = await request(app)
      .post("/api/v1/trainer-reviews")
      .send(reviewData);

    // Verify HTTP response
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe("Review created successfully");

    // Check the database for the saved review
    const savedReview = await trainerReview.findOne({ trainer_id: trainer });
    expect(savedReview).not.toBeNull(); // Ensure the review exists
    expect(savedReview.rating).toBe(4); // Ensure the rating matches
  }, 10000);

  // Test case for missing required fields
  test("Should return 400 if required fields are missing", async () => {
    const reviewDate = {
      trainer_id: "673d946f663654228567e3d5", // Mock valid ObjectId
      student_id: "673f0481ef6258465f02b46a",
      rating: "4", // Missing `trainer` and `Student` fields
      description: "good",
      review_date: "2024-11-22",
    };
    console.log(reviewDate);
    // Send POST request with incomplete data
    const response = await request(app)
      .post("/api/v1/trainer-reviews")
      .send(reviewDate);

    // Verify HTTP response
    expect(response.statusCode).toBe(400); // Expect Bad Request
    expect(response.body.message).toBe("Trainer ID is required"); // Check error message
  }, 10000);
});
