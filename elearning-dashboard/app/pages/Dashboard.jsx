import React from 'react'
import SummaryCard from '../components/SummaryCard'
import { faUserGraduate, faBookOpen, faChalkboardTeacher, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import CourseTable from '../components/CourseTable';
export default function Dashboard() {
  // Dummy Data 
  const summaryCards = [
    {
      title: "Total Courses",
      count: 100,
      icon: faBookOpen
    },
    {
      title: "Total Students",
      count: 1345,
      icon: faUserGraduate,
    },
    {
      title: "Active Instructors",
      count: 45,
      icon: faChalkboardTeacher,
    },
    {
      title: "New Signups This Week",
      count: 120,
      icon: faUserPlus,
    }
  ];

  const courses = [
  {
    title: "Advanced JavaScript",
    category: "Web Development",
    instructor: "Emily Rodriguez",
    initials: "ER",
    enrolled: 0,
    status: "DRAFT",
    date: "Jan 20, 2024"
  },
  {
    title: "Intro to React",
    category: "Web Development",
    instructor: "Sarah Johnson",
    initials: "SJ",
    enrolled: 245,
    status: "ACTIVE",
    date: "Jan 15, 2024"
  },
  {
    title: "Python Basics",
    category: "Programming",
    instructor: "Michael Chen",
    initials: "MC",
    enrolled: 189,
    status: "ACTIVE",
    date: "Jan 12, 2024"
  },
  {
    title: "Data Science Fundamentals",
    category: "Data Science",
    instructor: "David Kim",
    initials: "DK",
    enrolled: 156,
    status: "ACTIVE",
    date: "Jan 8, 2024"
  },
  {
    title: "UI/UX Design Principles",
    category: "Design",
    instructor: "Lisa Thompson",
    initials: "LT",
    enrolled: 78,
    status: "ARCHIVED",
    date: "Dec 28, 2023"
  }
];
  return (
    <div id="dashboard">
      <div className='card' id='dashboardTitle'>
        <h2>Welcome to Dashboard</h2>
        <p style={{ color: "#6b7280" }}>This is the dashboard section of your E-learning Admin Dashboard.</p>
      </div>
      <div id="summaryCards">
        {
          summaryCards.map((card, index) => (
            <SummaryCard key={index} details={card} />
          ))
        }
      </div>
      <CourseTable courses={courses}/>
    </div>
  )
}
