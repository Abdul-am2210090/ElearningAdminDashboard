import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBookBookmark, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
export default function CourseTable({ courses }) {
    return (
        <div id='CourseTable' className='card'>
            <div>
                <div id='courseTableTitle'>
                    <div>
                        <h3> <FontAwesomeIcon icon={faBookBookmark} /> Latest Courses</h3>
                        <br />
                        <p style={{ color: "#6b7280" }}>This is the dashboard section of your E-learning Admin Dashboard.</p>
                    </div>
                    <div>
                        <button id="viewAllBTN"><FontAwesomeIcon icon={faEye} /> View All</button>
                    </div>
                </div>
            </div>
            <br />
            <table id='courseTable'>
                <thead>
                    <th>Course Title</th>
                    <th>Instructor</th>
                    <th>Enrolled Students</th>
                    <th>Status</th>
                    <th>Created Date</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {courses.map((course, index) => <tr key={index}>
                        <td>
                            {course.title}
                        </td>
                        <td>
                            <span>{course.instructor}</span>
                        </td>
                        <td>
                            👥{course.enrolled}
                        </td>
                        <td>
                            <span
                                style={{
                                    backgroundColor:
                                        course.status === "DRAFT" ? "#fef08a" : course.status === "ACTIVE" ? "#d1fae5" : "#9297a1",
                                    padding: "6px 10px",
                                    borderRadius: "6px",
                                    fontWeight: "bold",
                                    fontSize: "12px",
                                    color: course.status === "DRAFT" ? "#92400e" : course.status === "ACTIVE" ? "#065f46" : "#ffffff",
                                }}>
                                {course.status}
                            </span>

                        </td>
                        <td>📅 {course.date}</td>
                        <td>
                            <button className="actionBTN" id='seeCourseBTN'><FontAwesomeIcon icon={faEye}/></button>
                            <button className="actionBTN" id='editCourseBTN'><FontAwesomeIcon icon={faEdit}/></button>
                            <button className="actionBTN" id='deleteCourseBTN'><FontAwesomeIcon icon={faTrash}/></button>
                        </td>
                    </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}
