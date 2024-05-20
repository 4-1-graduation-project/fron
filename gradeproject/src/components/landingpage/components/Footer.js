import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { visuallyHidden } from '@mui/utils';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

import SitemarkIcon from './SitemarkIcon';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'유성현 · 이현욱 · 장해준 · 김성섭'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" variant="body2" href="#">
            2024 가천대학교 졸업프로젝트
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            등대지기
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/4-1-graduation-project"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
