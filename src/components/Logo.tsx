// material
import { Box, BoxProps } from '@material-ui/core';

// ----------------------------------------------------------------------

export default function Logo({ sx }: BoxProps) {
  return <Box component="img" src="/static/logo_uni.png" sx={{ width: 48, height: 48, ...sx }} />;
}
