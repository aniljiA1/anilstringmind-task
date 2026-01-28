require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Deal = require("./src/models/Deal");
const User = require("./src/models/User");

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  await mongoose.connect(MONGO_URI);
  console.log("MongoDB connected for seeding");
};

const seedDeals = async () => {
  await Deal.deleteMany();

  const deals = [
    {
      title: "AWS Activate Credits",
      description: "Get up to $5,000 in AWS credits for startups",
      category: "Cloud",
      partner: "Amazon Web Services",
      locked: true,
      eligibility: "Verified startup with less than $1M funding",
    },
    {
      title: "Notion Pro – 6 Months Free",
      description: "Free Notion Pro plan for your entire team",
      category: "Productivity",
      partner: "Notion",
      locked: false,
      eligibility: "Any early-stage startup",
    },
    {
      title: "Mixpanel Startup Program",
      description: "Advanced analytics free for 1 year",
      category: "Analytics",
      partner: "Mixpanel",
      locked: true,
      eligibility: "Verified startup",
    },
    {
      title: "Stripe Atlas Discount",
      description: "Incorporation and banking benefits",
      category: "Finance",
      partner: "Stripe",
      locked: false,
      eligibility: "New founders",
    },
  ];

  await Deal.insertMany(deals);
  console.log("Deals seeded");
};

const seedUser = async () => {
  await User.deleteMany();

  const hashedPassword = await bcrypt.hash("password123", 6);

  const user = new User({
    name: "Demo Founder",
    email: "demo@startup.com",
    password: hashedPassword,
    verified: true,
  });

  await user.save();
  console.log("Demo user seeded");
};

const runSeed = async () => {
  try {
    await connectDB();
    await seedDeals();
    await seedUser();
    console.log("Seeding completed");
    process.exit();
  } catch (error) {
    console.error("Seeding failed", error);
    process.exit(1);
  }
};

runSeed();
