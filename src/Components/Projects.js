import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import FindACriterion from '../Images/find_a_criterion.jpg';
import CollectionTracker from '../Images/collection_tracker.jpg';
import TwitterClone from '../Images/twitter_clone.jpg';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
    flexGrow: 1,
    margin: 'auto',
  },
  media: {
    height: 240,
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <Box component="span" m={1} p={1}>
      <Container className={classes.root}>
        <Grid container spacing={0} justify="center">
          <Grid item xl={3} lg={3} md={4} sm={7} xs={7}>
            <Card className={classes.card}>
              <ButtonBase
                className={classes.cardAction}
                href="https://racerestream.com"
              >
                <CardMedia
                  className={classes.media}
                  image="https://my-portfolio-storage.s3.amazonaws.com/RaceRestream.jpg"
                  title="Race Restream"
                />
              </ButtonBase>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Race Restream
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Restream speedrun and blind races on twitch with ease.
                  <br />
                  <br />
                  Simplifies and streamlines the race restream process on
                  twitch. Rather than capturing streams with multiple windows,
                  this tool allows the restreamer to capture 20+ channels in one
                  browser window. Easily swap streams in and out of the 4
                  channel windows to capture all participants in the event. This
                  app is ideal for restreaming speedrun and blind races, but can
                  be used for anything that requires restreaming multiple
                  channels.
                  <br />
                  <br />
                  <strong>
                    <u>Technologies</u>
                    <br />
                    Create React App, React Router, React Bootstrap, Node.js,
                    Serverless Application Framework, API Gateway, Lambda, S3,
                    CloudFront, Route 53
                  </strong>
                </Typography>
              </CardContent>
              <Divider />
              <CardActions>
                <Button
                  size="medium"
                  href="https://github.com/rjbettis/race-restreamer"
                >
                  GitHub
                </Button>
                <Button size="medium" href="https://racerestream.com">
                  Website
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xl={3} lg={3} md={4} sm={7} xs={7}>
            <Card className={classes.card}>
              <ButtonBase
                className={classes.cardAction}
                href="https://findacriterion.com"
              >
                <CardMedia
                  className={classes.media}
                  image={FindACriterion}
                  title="Find a Criterion"
                />
              </ButtonBase>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Find a Criterion
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Find a new movie to watch from the Criterion Collection.
                  <br />
                  <br />
                  Recreation of the "Explore" feature on the old criterion
                  website. I set out to make a 1:1 recreation in order to
                  sharpen my styling skills. Built with a few components that
                  render information based on states passed down as props
                  through react router and importing JSON files.
                  <br />
                  <br />
                  <strong>
                    <u>Technologies</u>
                    <br />
                    Create React App, React Router, React Bootstrap, S3,
                    CloudFront, Route 53
                  </strong>
                </Typography>
              </CardContent>
              <Divider />
              <CardActions>
                <Button
                  size="medium"
                  href="https://github.com/rjbettis/find-a-criterion"
                >
                  GitHub
                </Button>
                <Button size="medium" href="https://findacriterion.com">
                  Website
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xl={3} lg={3} md={4} sm={7} xs={7}>
            <Card className={classes.card}>
              <ButtonBase
                className={classes.cardAction}
                href="https://game-collection.org"
              >
                <CardMedia
                  className={classes.media}
                  image={CollectionTracker}
                  title="Find a Criterion"
                />
              </ButtonBase>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Collection Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Build a personalized database to track your video game
                  collection. <br />
                  <br />I was never satisfied with video game collection apps
                  and always wanted to build my own. I took this opportunity to
                  build a full stack app using React, Serverless, AWS and
                  Node.js.
                  <br />
                  <br />
                  <strong>
                    <u>Technologies</u>
                    <br />
                    Create React App, React Router, React Bootstrap, Node.js,
                    Serverless Application Framework, API Gateway, Lambda,
                    DynamoDB, S3, CloudFront, Route 53
                  </strong>
                </Typography>
              </CardContent>
              <Divider />
              <CardActions>
                <Button
                  size="medium"
                  href="https://github.com/rjbettis/collection-tracker"
                >
                  GitHub
                </Button>
                <Button size="medium" href="https://game-collection.org">
                  Website
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xl={3} lg={3} md={4} sm={7} xs={7}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={TwitterClone}
                title="Find a Criterion"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Ryan's Twitter Clone
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Most everyone knows twitter so the reasoning behind this is to
                  give potential interviewers something to see that is familiar
                  and easily recognizable. I am in the early stages of this so
                  it is not hosted yet.
                  <br />
                  <br />
                  <strong>
                    <u>Technologies</u>
                    <br />
                    Create React App, React Router, React Bootstrap, Node.js,
                    Serveless Application Framework, AWS API Gateway, AWS
                    Lambda, AWS S3
                  </strong>
                </Typography>
              </CardContent>
              <Divider />
              <CardActions>
                <Button
                  size="medium"
                  href="https://github.com/rjbettis/twitter-clone"
                >
                  GitHub
                </Button>
                <Button size="medium">
                  <strike>Website</strike>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
