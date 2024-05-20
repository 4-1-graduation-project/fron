import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';
import landingPage from '../../../assets/landingPage.png';

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '51.5%',
  height: '100%',
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  boxShadow:
    theme.palette.mode === 'light'
      ? '0 0 12px 8px hsla(220, 25%, 80%, 0.2)'
      : '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
  outline: '1px solid',
  backgroundImage: `url(${theme.palette.mode === 'light'
    ? landingPage
    : '/static/images/templates/templates-images/hero-dark.png'
    })`,
  backgroundSize: 'contain',
  outlineColor:
    theme.palette.mode === 'light'
      ? 'hsla(220, 25%, 80%, 0.5)'
      : 'hsla(210, 100%, 80%, 0.1)',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 550,
  },
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)'
            : 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          alignItems="center"
          useFlexGap
          sx={{ width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            길찾기&nbsp;·&nbsp;예측&nbsp;·&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'inherit',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              밀집도
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ width: { sm: '100%', md: '80%' } }}
          >
            인구 밀도와 안전 시설 정보를 한눈에, 가장 안전한 경로를 안내하는 등대지기를 이용해보세요.
          </Typography>
        </Stack>
        <StyledBox id="image" />
      </Container>
    </Box>
  );
}
