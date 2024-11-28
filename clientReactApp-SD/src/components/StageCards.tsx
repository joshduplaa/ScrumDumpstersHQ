import React from "react";
import { Card, CardContent, Typography, Grid, List, ListItem, ListItemText } from "@mui/material";

const stages = [
  {
    title: "Stage 1",
    description: "Planning and initial development phase.",
    contributions: [
      {
        name: "Joshua Duplaa",
        tasks: [
          "Conducted 4 interviews with potential TTUHSC users.",
          "Assigned tickets to team members on Jira.",
          "Contributed to SRS, Report, and Presentation.",
        ],
      },
      {
        name: "Taylor Smith",
        tasks: [
          "Added deliverables on Jira.",
          "Contributed to interview meetings.",
          "Contributed to SRS, Report, and Presentation.",
        ],
      },
      {
        name: "Cristian Cuomo",
        tasks: [
          "Contributed to SRS, Report, and Presentation.",
          "Reported back to Joshua for SRS.",
        ],
      },
      {
        name: "Jaden Haagen",
        tasks: [
          "Contributed to SRS, Report, and Presentation.",
          "Reported back to Joshua for Presentation.",
        ],
      },
    ],
  },
  {
    title: "Stage 2",
    description: "Intermediate development and testing.",
    contributions: [
      {
        name: "Joshua Duplaa",
        tasks: [
          "Focused on the React front end.",
          "Set up the structure and UI for faculty and student views.",
        ],
      },
      {
        name: "Taylor Smith",
        tasks: [
          "Refined database structure.",
          "Contributed to frontend and backend tasks.",
        ],
      },
      {
        name: "Cristian Cuomo",
        tasks: [
          "Worked on frontend development.",
          "Began connecting APIs to the database.",
        ],
      },
      {
        name: "Jaden Haagen",
        tasks: [
          "Developed backend logic.",
          "Integrated with Azure database.",
          "Ensured seamless data flow.",
        ],
      },
    ],
  },
  {
    title: "Stage 3",
    description: "Advanced development and debugging.",
    contributions: [
      {
        name: "Joshua Duplaa",
        tasks: [
          "Created `api_two` module.",
          "Set up the initial React application.",
          "Contributed to frontend interface and connections.",
        ],
      },
      {
        name: "Taylor Smith",
        tasks: [
          "Set up and maintained Azure SQL database.",
          "Contributed to frontend interfaces.",
        ],
      },
      {
        name: "Cristian Cuomo",
        tasks: [
          "Contributed to frontend development.",
          "Worked on documentation and presentation.",
        ],
      },
      {
        name: "Jaden Haagen",
        tasks: [
          "Debugged database connections.",
          "Tested dummy data integration.",
        ],
      },
    ],
  },
  {
    title: "Stage 4",
    description: "Final phase: polishing and deployment.",
    contributions: [
      {
        name: "Joshua Duplaa",
        tasks: [
          "Developed QC page functionalities.",
          "Implemented role-based access and API endpoints.",
          "Acted as team leader.",
          "Organized tasks using Jira.",
          "Ensured proper Git workflows.",
        ],
      },
      {
        name: "Taylor Smith",
        tasks: [
          "Completed QC Builder module.",
          "Ensured database synchronization.",
        ],
      },
      {
        name: "Cristian Cuomo",
        tasks: [
          "Enhanced quizzes page functionality.",
          "Implemented role-specific views for students and admins.",
        ],
      },
      {
        name: "Jaden Haagen",
        tasks: [
          "Assisted with troubleshooting technical issues.",
          "Refined user interface.",
        ],
      },
    ],
  },
];


const StageCards: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {stages.map((stage, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {stage.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {stage.description}
              </Typography>
              {stage.contributions.map((contribution, idx) => (
                <div key={idx}>
                  <Typography variant="subtitle1" gutterBottom>
                    {contribution.name}
                  </Typography>
                  <List dense>
                    {contribution.tasks.map((task, taskIdx) => (
                      <ListItem key={taskIdx}>
                        <ListItemText primary={`- ${task}`} />
                      </ListItem>
                    ))}
                  </List>
                </div>
              ))}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default StageCards;
