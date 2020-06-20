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
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <Box component="span" m={1} p={1}>
      <Container className={classes.root}>
        <Grid container spacing={0} justify="center">
          <Grid item xl={3} lg={3} md={4} sm={7} xs={7}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={FindACriterion}
                title="Find a Criterion"
              />
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
                  </strong>
                  <br />
                  Create React App
                  <br />
                  React Router
                  <br />
                  React Bootstrap
                  <br />
                  AWS S3
                  <br />
                  AWS CloudFront
                  <br />
                  AWS Route 53
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
                <Button size="medium" href="https://www.findacriterion.com">
                  Website
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xl={3} lg={3} md={4} sm={7} xs={7}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={CollectionTracker}
                title="Find a Criterion"
              />
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
                  </strong>
                  <br />
                  Create React App
                  <br />
                  React Router
                  <br />
                  React Bootstrap
                  <br />
                  Node.js
                  <br />
                  Serveless Application Framework
                  <br />
                  AWS API Gateway
                  <br />
                  AWS Lambda
                  <br />
                  AWS DynamoDB
                  <br />
                  AWS S3
                  <br />
                  AWS CloudFront
                  <br />
                  AWS Route 53
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
                <Button size="medium" href="https://www.game-collection.org">
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
                  </strong>
                  <br />
                  Create React App
                  <br />
                  React Router
                  <br />
                  React Bootstrap
                  <br />
                  Node.js
                  <br />
                  Serveless Application Framework
                  <br />
                  AWS API Gateway
                  <br />
                  AWS Lambda
                  <br />
                  AWS S3
                  <br />
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
