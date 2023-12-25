import Cors from 'cors';
import initMiddleware from '@/lib/init-middleware'; // Replace with the correct path

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ['GET', 'HEAD'],
  })
);

export default async function handler(req, res) {
  // Run cors
  await cors(req, res);

  try {
    // Connect to MongoDB using mongoose.connect
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const courseQuestionPaperCount = await CourseQuestionPaperCount.find({});

    // Close the connection
    await mongoose.connection.close();

    // Send a proper JSON response
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(courseQuestionPaperCount);
  } catch (error) {
    console.error("Error:", error);

    // Send an error response
    res.status(500).json({ error: "Failed to fetch the Category" });
  }
}
