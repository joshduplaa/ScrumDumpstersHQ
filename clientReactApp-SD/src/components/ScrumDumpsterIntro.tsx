import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import AppTheme from '../shared-theme/AppTheme.tsx';
import ColorModeSelect from '../shared-theme/ColorModeSelect.tsx';
import { Button, Box, Typography } from '@mui/material';
import SoftwareMeetingsTable from './table/SoftwareMeetingsTable.tsx';
import StageCards from './StageCards.tsx';

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'fixed',
    zIndex: -1,
    inset: 0,
    backgroundColor: theme.palette.mode === 'dark' ? '#457A64' : '#607D8B',
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function ScrumDumpsterIntro(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <SignInContainer>
        <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
          Scrum Dumpster Capstone Group Website; Group #7; MIS Molecular
        </Typography>
          Joshua Duplaa(L), Cristian Cuomo, Jaden Haagen, Taylor Smith,

        <img
          src="https://i.imgur.com/BUKBSt2.png/"
          alt="Scrum Dumpster Logo"
          style={{ width: '200px', height: 'auto' }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 2,
            marginTop: 2,
          }}
        >
          <Button
            variant="contained"
            color="success"
            href="https://joshuaduplaa.atlassian.net/jira/software/projects/CP/boards/1?atlOrigin=eyJpIjoiOTYwOWIxYmE5OTJmNGMxZTg2NzYwZjIxYTQ4NzAwODMiLCJwIjoiaiJ9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jira Page
          </Button>
          <Button
            variant="contained"
            color="success"
            href="https://github.com/yuh137/medical_information_simulation/tree/ScrumDumpsters_MainBranch"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Page
          </Button>
          <Button
            variant="contained"
            color="success"
            href="https://scrumdumpstersmis.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MIS Website
          </Button>
          <Button
            variant="contained"
            color="success"
            href="https://www.youtube.com/watch?v=eBSP4T8iabA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stage 4 Demo Video
          </Button>
          Demo Posted 11:55 PM Nov. 19th
        </Box>
        <Box sx={{ width: '100%', marginTop: 4 }}>
          <Typography variant="h2" component="h2" gutterBottom>
            Meeting Logs and Team Member Contributions
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            Meeting Logs
          </Typography>
          <SoftwareMeetingsTable />
        </Box>
        <Box sx={{ width: '100%', marginTop: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Team Member Contributions by Stage
          </Typography>
          <StageCards />
        </Box>
      </SignInContainer>
    </AppTheme>
  );
}
