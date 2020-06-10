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

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Box component="span" m={1} p={1}>
      <Container className={classes.root}>
        <Grid container spacing={2} justify="center">
          <Grid item xl={3} lg={3} md={4} sm={7} xs={7}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Find a Criterion"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Find a Criterion
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </Typography>
              </CardContent>
              <Divider />
              <CardActions>
                <Button size="medium" color="dark">
                  GitHub
                </Button>
                <Button size="medium" color="dark">
                  Website
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xl={3} lg={3} md={4} sm={7} xs={7}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Find a Criterion"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Collection Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
              <Divider />
              <CardActions>
                <Button size="medium" color="dark">
                  GitHub
                </Button>
                <Button size="medium" color="dark">
                  Website
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xl={3} lg={3} md={4} sm={7} xs={7}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Find a Criterion"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Ryan's Twitter Clone
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
              <Divider />
              <CardActions>
                <Button size="medium" color="dark">
                  GitHub
                </Button>
                <Button size="medium" color="dark">
                  Website
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
