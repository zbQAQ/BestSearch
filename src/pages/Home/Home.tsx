import { Box, Typography } from "@mui/material"
import SearchBar from "../../components/SearchBar/SearchBar"

export default function Home() {

  return (
    <Box className="home-container" sx={{ textAlign: "center" }}>
      <Typography
        sx={{
          fontSize: "2rem",
          my: "6rem",
        }}
      >
        Search Trends
      </Typography>
      <SearchBar />
    </Box>
  )
}