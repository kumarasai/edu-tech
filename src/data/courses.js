// ------------------------------------------------------------------
// Mock "API" data for the course directory.
// In a real project this would come from a REST endpoint, but the
// assignment lets us mock it - so a plain JS array does the job.
// ------------------------------------------------------------------

const courses = [
  { id: 1,  name: "React for Beginners",          instructor: "Aarav Sharma",   duration: "8 weeks",  category: "Web Development", rating: 4.7, price: 10500 },
  { id: 2,  name: "Advanced Node.js",             instructor: "Priya Mehta",    duration: "10 weeks", category: "Backend",         rating: 4.8, price: 13500 },
  { id: 3,  name: "UI/UX Design Fundamentals",    instructor: "Rohan Verma",    duration: "6 weeks",  category: "Design",          rating: 4.5, price: 11500 },
  { id: 4,  name: "Python for Data Science",      instructor: "Neha Kapoor",    duration: "12 weeks", category: "Data Science",    rating: 4.9, price: 14500 },
  { id: 5,  name: "Machine Learning A-Z",         instructor: "Karan Patel",    duration: "14 weeks", category: "Data Science",    rating: 4.8, price: 15000 },
  { id: 6,  name: "Tailwind CSS Mastery",         instructor: "Sara Iyer",      duration: "4 weeks",  category: "Web Development", rating: 4.6, price: 10000 },
  { id: 7,  name: "iOS App Development",          instructor: "Vikram Singh",   duration: "10 weeks", category: "Mobile",          rating: 4.4, price: 14000 },
  { id: 8,  name: "Android with Kotlin",          instructor: "Anjali Rao",     duration: "9 weeks",  category: "Mobile",          rating: 4.5, price: 13000 },
  { id: 9,  name: "DevOps & Docker Essentials",   instructor: "Manish Gupta",   duration: "7 weeks",  category: "DevOps",          rating: 4.6, price: 12500 },
  { id: 10, name: "AWS Cloud Practitioner",       instructor: "Divya Nair",     duration: "5 weeks",  category: "Cloud",           rating: 4.7, price: 11000 },
  { id: 11, name: "GraphQL with Apollo",          instructor: "Aarav Sharma",   duration: "6 weeks",  category: "Backend",         rating: 4.5, price: 10500 },
  { id: 12, name: "Figma from Zero to Hero",      instructor: "Rohan Verma",    duration: "5 weeks",  category: "Design",          rating: 4.7, price: 10200 },
  { id: 13, name: "TypeScript Deep Dive",         instructor: "Sara Iyer",      duration: "6 weeks",  category: "Web Development", rating: 4.8, price: 12000 },
  { id: 14, name: "Kubernetes in Practice",       instructor: "Manish Gupta",   duration: "8 weeks",  category: "DevOps",          rating: 4.6, price: 13500 },
  { id: 15, name: "Deep Learning with PyTorch",   instructor: "Karan Patel",    duration: "12 weeks", category: "Data Science",    rating: 4.9, price: 15000 },
  { id: 16, name: "Next.js Full Stack",           instructor: "Priya Mehta",    duration: "10 weeks", category: "Web Development", rating: 4.8, price: 14000 },
  { id: 17, name: "Flutter Cross-Platform Apps",  instructor: "Vikram Singh",   duration: "9 weeks",  category: "Mobile",          rating: 4.5, price: 12800 },
  { id: 18, name: "GCP Associate Cloud Engineer", instructor: "Divya Nair",     duration: "6 weeks",  category: "Cloud",           rating: 4.6, price: 11800 },
  { id: 19, name: "Product Design Workshop",      instructor: "Anjali Rao",     duration: "4 weeks",  category: "Design",          rating: 4.4, price: 10800 },
  { id: 20, name: "SQL & Postgres for Devs",      instructor: "Neha Kapoor",    duration: "5 weeks",  category: "Backend",         rating: 4.7, price: 11200 },
];

export default courses;
