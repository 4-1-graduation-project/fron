import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const tiers = [
    {
        title: 'Free',
        price: '0',
        description: [
            '10 users included',
            '2 GB of storage',
            'Help center access',
            'Email support',
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
    {
        title: 'ㅎㅇ',
        price: '15',
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
            'Dedicated team',
            'Best deals',
        ],
        buttonText: 'Start now',
        buttonVariant: 'contained',
    },
    {
        title: 'Enterprise',
        price: '30',
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },
];

export default function Pricing2() {
    return (
        <Container
            id="pricing"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 3, sm: 6 },
            }}
        >
            <Box
                sx={{
                    width: { sm: '100%', md: '60%' },
                    textAlign: { sm: 'left', md: 'center' },
                }}
            >
                <Typography component="h2" variant="h4" color="text.primary">
                    인구예측
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    인구 예측을 활용하면 사용자의 특정 경로 요구 사항과 선호도에 맞는 보다 개인화되고 효율적인 경로 옵션을 선택할 수 있어 내비게이션 앱의 기능이 향상되요.
                </Typography>
            </Box>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                {tiers.map((tier) => (
                    <Grid
                        item
                        key={tier.title}
                        xs={12}
                        sm={tier.title === 'Enterprise' ? 12 : 6}
                        md={4}
                    >
                        <Card
                            sx={(theme) => ({
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 4,
                            })}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        mb: 1,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        gap: 2,
                                        color: tier.title === 'Professional' ? 'grey.100' : '',
                                    }}
                                >
                                    <Typography component="h3" variant="h6">
                                        {tier.title}
                                    </Typography>
                                    {tier.title === 'Professional' && (
                                        <Chip
                                            icon={<AutoAwesomeIcon />}
                                            label={tier.subheader}
                                            size="small"
                                            sx={{
                                                borderColor: 'hsla(220, 60%, 99%, 0.3)',
                                                backgroundColor: 'hsla(220, 60%, 99%, 0.1)',
                                                '& .MuiChip-label': {
                                                    color: 'hsl(0, 0%, 100%)',
                                                },
                                                '& .MuiChip-icon': {
                                                    color: 'primary.light',
                                                },
                                            }}
                                        />
                                    )}
                                </Box>

                            </CardContent>
                            <CardActions>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
