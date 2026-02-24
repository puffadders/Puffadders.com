const blogs = [
  {
    title: "How Kenyan Students Are Revolutionizing Healthcare Through Tech",
    excerpt:
      "Discover how university students are building innovative health solutions that are transforming access to medical care across Kenya.",
    content:
      "In the heart of Kenya's universities, a new generation of innovators is tackling healthcare challenges head-on. From AI-powered diagnostic tools to mobile apps connecting patients with doctors in remote areas, student developers are creating solutions that address real healthcare gaps.\n\nAt the recent Puffadders Health Innovation Hackathon, teams developed prototypes for maternal health monitoring, pharmacy management systems, and telemedicine platforms designed for low-bandwidth environments. These projects demonstrate how student innovation can drive meaningful change in healthcare delivery.\n\nThe winning team from the University of Nairobi created a mobile app that helps community health workers track vaccination schedules and patient data, even in areas with limited internet connectivity. This project is now being piloted in three counties across Kenya.",
    author: "James Ngandu",
    date: "Mar 15, 2026",
    readTime: "6 min read",
    category: "health",
  },
  {
    title: "From Campus to Market: Student AgriTech Startups Taking Root",
    excerpt:
      "Meet the student entrepreneurs who are using technology to solve challenges in Kenya's agricultural sector.",
    content:
      "Agriculture is the backbone of Kenya's economy, and student innovators are stepping up to modernize the sector. Through Puffadders hackathons and incubation programs, student-led AgriTech startups are emerging with solutions that help farmers increase yields, access markets, and adapt to climate change.\n\nOne standout success story is FarmConnect, a platform built by Egerton University students that connects smallholder farmers directly with buyers, eliminating middlemen and increasing farmer profits by up to 40%. The platform now serves over 5,000 farmers in the Rift Valley region.\n\nAnother team developed a crop disease detection system using smartphone photos and machine learning, helping farmers identify and treat diseases before they destroy harvests. These innovations show how university talent can drive agricultural transformation.",
    author: "Enoch Juma",
    date: "Feb 18, 2026",
    readTime: "7 min read",
    category: "agriculture",
  },
  {
    title: "Bridging the Digital Divide: Student-Led EdTech Innovations",
    excerpt:
      "How university students are creating educational technology to make learning more accessible across Kenya.",
    content:
      "The COVID-19 pandemic exposed deep inequalities in access to education, but it also sparked a wave of EdTech innovation. Kenyan university students have been at the forefront of creating solutions that make quality education accessible to all.\n\nFrom offline-capable learning platforms to interactive STEM education tools, student developers are reimagining what education can look like. A team from Kenyatta University developed 'Elimu Nyumbani' (Education at Home), a platform that allows students in areas with limited internet access to download lessons and submit assignments when they reconnect.\n\nAnother project, 'Code for Kids,' introduces primary school students to programming through gamified lessons in Swahili and English. These student-led initiatives are not just building technology—they're building a more equitable future for education in Kenya.",
    author: "Fidel Kivumbi",
    date: "Jan 22, 2026",
    readTime: "5 min read",
    category: "education",
  },
  {
    title: "Fintech Disruptors: How University Students Are Reshaping Financial Services",
    excerpt:
      "Young innovators are creating financial technology solutions that promote inclusion and empower communities.",
    content:
      "Financial inclusion remains a challenge in Kenya, but student fintech innovators are developing solutions that make banking, saving, and investing accessible to all. From mobile payment innovations to savings apps designed for students, these young developers are gaining attention from industry players.\n\nA team from Strathmore University created 'CampusSave,' a micro-investment app that allows students to invest small amounts in government bonds and money market funds. The app has already attracted over 2,000 users in its pilot phase.\n\nAnother group developed a blockchain-based solution for verifying academic credentials, helping employers quickly and securely verify job applicants' qualifications. These projects demonstrate the potential of student innovation to transform Kenya's financial landscape.",
    author: "David Wambua",
    date: "Dec 12, 2025",
    readTime: "6 min read",
    category: "fintech",
  },
  {
    title: "Inside Puffadders: Building Kenya's Premier Student Innovation Community",
    excerpt:
      "A behind-the-scenes look at how Puffadders is discovering talent and supporting the next generation of problem-solvers.",
    content:
      "Since its founding, Puffadders has grown into one of Kenya's most vibrant student innovation communities. With members from over 10 universities across the country, the community has become a launchpad for student developers, designers, and innovators.\n\nOur monthly hackathons bring together students from diverse backgrounds to tackle real-world challenges in health, agriculture, education, and fintech. Participants work alongside industry mentors who provide guidance on everything from technical implementation to business model development.\n\nBut Puffadders is more than just hackathons. We provide ongoing support through mentorship programs, internship opportunities, and connections to investors. Several startups born from our hackathons have gone on to secure funding and scale their solutions.\n\nAs we look to the future, we're expanding our reach to more universities and launching new programs designed to support students at every stage of their innovation journey.",
    author: "Eunice Otieno",
    date: "Nov 5, 2025",
    readTime: "8 min read",
    category: "community",
  },
  {
    title: "From Hackathon Project to Startup: A Student Founder's Journey",
    excerpt:
      "How one student turned a weekend hackathon project into a growing technology startup.",
    content:
      "For many student innovators, the journey from idea to startup begins at a hackathon. In this inspiring story, we follow the journey of a University of Nairobi student whose hackathon project evolved into a successful tech company.\n\nIt started at a Puffadders 48-hour hackathon focused on education technology. The team built a simple prototype for a peer-to-peer tutoring platform that connects university students who need help with those who excel in specific subjects. The project won the hackathon, but the team didn't stop there.\n\nWith mentorship from Puffadders partners and support from the university's incubation center, they refined their product, conducted user testing, and eventually launched 'TutorConnect.' Today, the platform serves over 3,000 students across three universities and has been featured in local tech publications.\n\nThis story illustrates the power of student innovation communities to transform ideas into impactful ventures. With the right support and determination, any student can become a founder.",
    author: "Carol Njoroge",
    date: "Oct 18, 2025",
    readTime: "7 min read",
    category: "startup",
  },
  {
    title: "5 Tips for Winning Your First Hackathon",
    excerpt:
      "Essential advice for university students preparing to participate in their first hackathon.",
    content:
      "Participating in your first hackathon can be intimidating, but with the right preparation, it can also be one of the most rewarding experiences of your university journey. Here are five tips to help you succeed:\n\n1. **Form a balanced team**: Look for teammates with complementary skills—developers, designers, and domain experts all bring valuable perspectives.\n\n2. **Solve a real problem**: Judges are impressed by projects that address genuine needs. Talk to potential users before the hackathon to understand their challenges.\n\n3. **Keep it simple**: Focus on building a functional prototype that demonstrates your core idea. You can always add features later.\n\n4. **Prepare your pitch**: You'll need to present your project clearly and concisely. Practice explaining your problem, solution, and impact in under three minutes.\n\n5. **Have fun and network**: Hackathons are about learning and connecting with others. Don't forget to enjoy the experience and make new friends.\n\nWhether you're a first-time participant or a seasoned hacker, these tips will help you make the most of your hackathon experience.",
    author: "Alice Steve",
    date: "Sep 9, 2025",
    readTime: "4 min read",
    category: "hackathon",
  },
  {
    title: "Women in Tech: Empowering Female Innovators at Puffadders",
    excerpt:
      "How Puffadders is working to increase female participation in technology and innovation.",
    content:
      "Diversity drives innovation, and Puffadders is committed to creating an inclusive community where all students can thrive. Our women in tech initiatives are designed to encourage and support female students pursuing careers in technology.\n\nThrough mentorship programs, networking events, and all-female hackathon teams, we're working to close the gender gap in tech. Our female members have gone on to win hackathons, lead tech clubs at their universities, and secure internships at leading companies.\n\nOne of our success stories is a team of female developers from JKUAT who created a mobile app to help survivors of gender-based violence access support services. Their project won the social impact category at our annual innovation showcase and is now being adopted by a local NGO.\n\nWe believe that by empowering female innovators, we're not just building better technology—we're building a more equitable future for Kenya.",
    author: "James Ngandu",
    date: "Aug 22, 2024",
    readTime: "5 min read",
    category: "community",
  },
  {
    title: "The Role of Mentorship in Student Innovation",
    excerpt:
      "Why mentorship matters and how experienced professionals are helping shape the next generation of problem-solvers.",
    content:
      "Behind every successful student innovator is often a mentor who provided guidance, encouragement, and connections. At Puffadders, we believe mentorship is essential to helping students navigate the challenges of building real-world solutions.\n\nOur mentors come from diverse backgrounds—software engineers, product managers, entrepreneurs, and investors—all volunteering their time to support student innovators. They help students refine their ideas, navigate technical challenges, and prepare for careers in tech.\n\nFor mentors, the rewards are equally meaningful. Working with passionate students brings fresh perspectives and the satisfaction of helping shape the next generation of leaders. Many mentors report that their involvement with Puffadders has helped them grow as leaders and stay connected to emerging trends.\n\nIf you're an experienced professional interested in giving back, consider becoming a Puffadders mentor. Your guidance could help launch the next big innovation from Kenya.",
    author: "Fidel Kivumbi",
    date: "Jul 14, 2024",
    readTime: "6 min read",
    category: "community",
  },
  {
    title: "The First Puffadders Hackathon: A Look Back",
    excerpt:
      "Reflecting on our very first hackathon and how it laid the foundation for Kenya's student innovation community.",
    content:
      "In early 2023, a small group of students gathered in a classroom at the University of Nairobi with a shared vision: to create a space where student innovators could build solutions that matter. That first hackathon had just 30 participants, but the energy was electric.\n\nTeams built prototypes for campus navigation apps, peer-to-peer tutoring platforms, and simple health tracking tools. Most importantly, connections were formed that would grow into lasting collaborations.\n\nLooking back, that humble beginning taught us valuable lessons about the power of bringing students together. The friendships formed, the skills developed, and the confidence gained set the stage for everything Puffadders has become today.",
    author: "David Wambua",
    date: "Jun 5, 2023",
    readTime: "5 min read",
    category: "community",
  },
  {
    title: "Why Student Innovation Matters for Kenya's Future",
    excerpt:
      "Exploring the critical role that university students play in driving technological innovation and economic growth.",
    content:
      "Kenya's future prosperity depends on our ability to nurture young talent. With one of the youngest populations in the world, the potential for student-driven innovation is immense.\n\nUniversity students bring fresh perspectives, energy, and a deep understanding of local challenges. When given the right support, they develop solutions that are not only technically sound but also culturally relevant and contextually appropriate.\n\nPuffadders was founded on the belief that the next wave of transformative technologies will come from students who are empowered to build, fail, learn, and try again. By investing in student innovation today, we're building the foundation for Kenya's tech ecosystem tomorrow.",
    author: "Eunice Otieno",
    date: "May 20, 2023",
    readTime: "6 min read",
    category: "community",
  },
];

export default blogs;