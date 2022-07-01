import { Box, Skeleton } from "@mui/material"

export function SearchItemSkeleton() {
  return (
    <Box>
      <Skeleton width="80%"/>
      <Skeleton width="50%" />
      <Skeleton variant="rectangular" width="100%">
        <div style={{ paddingTop: '100%' }} />
      </Skeleton>
    </Box>
  )
}