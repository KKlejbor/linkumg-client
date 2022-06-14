import * as React from 'react';
import Grid from '@mui/material/Grid';
import AdsContainer from 'components/atoms/AdsContainer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from '../layouts/MainFeaturedPost';
import FeaturedPost from '../layouts/FeaturedPost';
import FullScreenContainer from 'components/atoms/FullScreenContainer';
import pracaPhoto from 'assets/images/praca.png';
import microsoftPhoto from 'assets/images/microsoft.png';
import Bar from 'components/layouts/Bar';

const mainFeaturedPost = {
  title: 'Znajdź pracę u solidnego pracodawcy!',
  description:
    "",
  image: pracaPhoto,
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Junior Java Developer',
    date: 'Gdynia',
    description:
      '6000-8000zł',
    image: microsoftPhoto,
    imageLabel: 'Image Text',
  },
  {
    title: 'Junior Java Developer',
    date: 'Gdynia',
    description:
      '6000-8000zł',
    image: microsoftPhoto,
    imageLabel: 'Image Text',
  },
  {
    title: 'Junior Java Developer',
    date: 'Gdynia',
    description:
      '6000-8000zł',
    image: microsoftPhoto,
    imageLabel: 'Image Text',
  },
  {
    title: 'Junior Java Developer',
    date: 'Gdynia',
    description:
      '6000-8000zł',
    image: microsoftPhoto,
    imageLabel: 'Image Text',
  },
];

const theme = createTheme();

export default function AdsJob() {
  return (
    
    <ThemeProvider theme={theme}>
      <FullScreenContainer>
      <AdsContainer>
        <Bar/>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={2}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </AdsContainer>
      </FullScreenContainer>
    </ThemeProvider>
  );
}