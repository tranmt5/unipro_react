// material
import { Box, BoxProps } from '@material-ui/core';

// ----------------------------------------------------------------------

export default function Logo({ sx }: BoxProps) {
  return <Box component="img" src="/static/reso_logo.png" sx={{ width: 40, height: 40, ...sx }} />;
}
