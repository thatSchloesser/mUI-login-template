import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://developer.stephen.fun/">
        Stephen Schloesser.
      </Link>{' '}
      {/* {new Date().getFullYear()} */}
      {'All Rights Reserved.'}
    </Typography>
  );
};