import express from 'express'
import config from './config/index.js';
import cors from 'cors'
import { router } from './routes/routes.js';



const app = express()


// 1) Enable CORS for your domains
app.use(
  cors({
    origin: config.ALLOWED_ORIGINS.split(","), // e.g. 'https://club.example.com'
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  }),
);

// 2) body parser
app.use(express.json());

// 3) Routes
app.use("/api/v1", router);

// 4) 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});


export default app;
