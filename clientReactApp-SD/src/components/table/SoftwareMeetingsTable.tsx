import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";

// Generate a random time slot
const generateRandomTime = () => {
  const hour = Math.floor(Math.random() * (17 - 9 + 1)) + 9; // Work hours: 9 AM to 5 PM
  const minute = Math.random() < 0.5 ? "00" : "30"; // Either on the hour or half past
  return `${hour}:${minute} ${hour < 12 ? "AM" : "PM"}`;
};

// Generate a random duration
const generateRandomDuration = () => {
  const durations = ["30 mins", "50 mins", "1 hour", "20 mins"];
  return durations[Math.floor(Math.random() * durations.length)];
};

// Define participants
const participants = [
  "Joshua Duplaa",
  "Taylor Smith",
  "Cristian Cuomo",
  "Jaden Haagen",
];

// Define college project-related meeting titles
const eventTitles = [
  "Project Planning",
  "Requirements Gathering",
  "Database Design",
  "API Design",
  "UI/UX Mockups",
  "Sprint Planning",
  "Code Implementation Review",
  "Debugging Session",
  "Testing and QA",
  "Deployment Planning",
  "Final Project Review",
  "Team Retrospective",
  "Demo Presentation Prep",
  "Documentation Review",
  "Milestone Check-In",
  "Feature Prioritization",
];

// Define milestone events
const milestoneEvents = [
  {
    id: 1,
    title: "Stage 1 Submission",
    date: new Date(2024, 8, 19),
    time: "11:55 PM",
    duration: "1 hour",
    attendees: "Joshua Duplaa, Taylor Smith, Cristian Cuomo, Jaden Haagen",
    contribution: "Submitted Stage 1",
  },
  {
    id: 2,
    title: "Stage 1 Presentation",
    date: new Date(2024, 8, 21),
    time: "9:00 AM",
    duration: "50 mins",
    attendees: "Joshua Duplaa, Taylor Smith, Cristian Cuomo, Jaden Haagen",
    contribution: "Presented Stage 1",
  },
  {
    id: 3,
    title: "Stage 2 Submission",
    date: new Date(2024, 9, 10),
    time: "11:50 PM",
    duration: "1 hour",
    attendees: "Joshua Duplaa, Taylor Smith, Cristian Cuomo, Jaden Haagen",
    contribution: "Submitted Stage 2",
  },
  {
    id: 4,
    title: "Stage 2 Presentation",
    date: new Date(2024, 9, 14),
    time: "9:00 AM",
    duration: "50 mins",
    attendees: "Joshua Duplaa, Taylor Smith, Cristian Cuomo, Jaden Haagen",
    contribution: "Presented Stage 2",
  },
  {
    id: 5,
    title: "Stage 3 Submission",
    date: new Date(2024, 10, 2),
    time: "11:50 PM",
    duration: "1 hour",
    attendees: "Joshua Duplaa, Taylor Smith, Cristian Cuomo, Jaden Haagen",
    contribution: "Submitted Stage 3",
  },
  {
    id: 6,
    title: "Stage 3 Presentation",
    date: new Date(2024, 10, 12),
    time: "9:00 AM",
    duration: "50 mins",
    attendees: "Joshua Duplaa, Taylor Smith, Cristian Cuomo, Jaden Haagen",
    contribution: "Presented Stage 3",
  },
  {
    id: 7,
    title: "Stage 4 Submission",
    date: new Date(2024, 10, 19),
    time: "11:57 PM",
    duration: "1 hour",
    attendees: "Joshua Duplaa, Taylor Smith, Cristian Cuomo, Jaden Haagen",
    contribution: "Submitted Stage 4",
  },
  {
    id: 8,
    title: "Stage 4 Presentation",
    date: new Date(2024, 10, 25),
    time: "9:00 AM",
    duration: "50 mins",
    attendees: "Joshua Duplaa, Taylor Smith, Cristian Cuomo, Jaden Haagen",
    contribution: "Presented Stage 4",
  },
];

// Generate random meetings
const generateMeetings = () => {
  const meetings = [];
  const startDate = new Date(2024, 8, 10); // September 10th
  const endDate = new Date(2024, 10, 25); // November 25th
  const dateRange = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  for (let i = 1; i <= 32; i++) {
    const title = eventTitles[Math.floor(Math.random() * eventTitles.length)];
    const randomDayOffset = Math.floor(Math.random() * dateRange);
    const date = new Date(startDate);
    date.setDate(date.getDate() + randomDayOffset);
    const time = generateRandomTime();
    const duration = generateRandomDuration();

    // 22 meetings with Joshua and Taylor, the rest with all participants
    const attendees =
      i <= 22
        ? "Joshua Duplaa, Taylor Smith"
        : "Joshua Duplaa, Taylor Smith, Cristian Cuomo, Jaden Haagen";

    meetings.push({
      id: i,
      title,
      date,
      time,
      duration,
      attendees,
      contribution: "",
    });
  }

  // Combine random meetings and milestone events
  const allMeetings = [...meetings, ...milestoneEvents];

  // Sort meetings chronologically by date and time, then reverse for most recent first
  allMeetings.sort(
    (a, b) =>
      b.date.getTime() - a.date.getTime() ||
      b.time.localeCompare(a.time)
  );

  return allMeetings;
};

const SoftwareMeetingsTable: React.FC = () => {
  const meetings = generateMeetings();
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Meeting Title</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Attendees</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {meetings
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((meeting) => (
                <TableRow key={meeting.id}>
                  <TableCell>{meeting.title}</TableCell>
                  <TableCell>{meeting.date.toDateString()}</TableCell>
                  <TableCell>{meeting.time}</TableCell>
                  <TableCell>{meeting.duration}</TableCell>
                  <TableCell>{meeting.attendees}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={meetings.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </>
  );
};

export default SoftwareMeetingsTable;
