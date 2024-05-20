import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Chip as MuiChip } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';

import predictImage2 from '../../../assets/predict2.png';
import mainImage from '../../../assets/mainImage.png';

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: '길찾기',
    description:
      '출발지와 목적지를 입력하여 원하는 경로에 도착할 수 있는 방법을 얻을 수 있습니다.',
    imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: '밀집도',
    description:
      '내 주변 위치의 인구 밀집도를 살펴보고 알람을 받아보세요.',
    imageLight: `url(${mainImage})`,
    imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: '인구 예측',
    description:
      '원하는 시간, 원하는 장소의 인구를 예측하여 경로를 선택하는데 도움을 줍니다.',
    imageLight: `url(${predictImage2})`,
    imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
  },
];

const Chip = styled(MuiChip)(({ theme, selected }) => ({
  ...(selected && {
    borderColor:
      theme.palette.mode === 'light'
        ? theme.palette.primary.light
        : theme.palette.primary.dark,
    background:
      'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
    color: 'hsl(0, 0%, 100%)',
    '& .MuiChip-label': {
      color: 'hsl(0, 0%, 100%)',
    },
  }),
}));

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              주요 기능
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              주요 기능으로 길찾기, 밀집도, 맞춤형 알람 서비스가 있습니다. 아래 버튼을 확인할 수 있습니다.
            </Typography>
          </div>
          <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                selected={selectedItemIndex === index}
              />
            ))}
          </Grid>
          <Card
            variant="outlined"
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: 280,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography color="text.primary" fontWeight="medium" gutterBottom>
                {selectedFeature.title}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ mb: 1.5 }}>
                {selectedFeature.description}
              </Typography>
              <Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  '& > svg': { transition: '0.2s' },
                  '&:hover > svg': { transform: 'translateX(2px)' },
                }}
              >
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: '1px', ml: '2px' }}
                />
              </Link>
            </Box>
          </Card>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={(theme) => ({
                  p: 3,
                  height: 'fit-content',
                  width: '100%',
                  background: 'none',
                  ...(selectedItemIndex === index && {
                    backgroundColor: 'action.selected',
                    borderColor:
                      theme.palette.mode === 'light'
                        ? 'primary.light'
                        : 'primary.dark',
                  }),
                  '&:hover': {
                    background:
                      theme.palette.mode === 'light'
                        ? 'linear-gradient(to bottom right, hsla(210, 100%, 97%, 0.5) 25%, hsla(210, 100%, 90%, 0.3) 100%)'
                        : 'linear-gradient(to right bottom, hsla(210, 100%, 12%, 0.2) 25%, hsla(210, 100%, 16%, 0.2) 100%)',
                    borderColor:
                      theme.palette.mode === 'light'
                        ? 'primary.light'
                        : 'primary.dark',
                    boxShadow:
                      theme.palette.mode === 'light'
                        ? '0px 2px 8px hsla(0, 0%, 0%, 0.1)'
                        : '0px 1px 8px hsla(210, 100%, 25%, 0.5) ',
                  },
                })}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={(theme) => ({
                      color:
                        theme.palette.mode === 'light' ? 'grey.400' : 'grey.600',
                      ...(selectedItemIndex === index && {
                        color: 'primary.main',
                      }),
                    })}
                  >
                    {icon}
                  </Box>
                  <div>
                    <Typography
                      color="text.primary"
                      fontWeight="medium"
                      gutterBottom
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ mb: 1.5 }}
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        '& > svg': { transition: '0.2s' },
                        '&:hover > svg': { transform: 'translateX(2px)' },
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                    </Link>
                  </div>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={{
                m: 'auto',
                width: 480,
                height: 470,
                backgroundSize: 'contain',
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
