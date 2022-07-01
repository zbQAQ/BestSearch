import { PropsWithChildren } from "react"
import Logo from "../components/Logo/Logo"
import SearchBar from "../components/SearchBar/SearchBar"
import { Container, Box } from "@mui/material"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLocation } from 'react-router-dom'

export default function DefaultLayout(props: PropsWithChildren) {

  const location = useLocation();
  const showSearchBar = location.pathname.includes("/search/")
  const matches = useMediaQuery('(min-width:1200px)');

  return (
    <Box className="layout-container" sx={{
      width: "100vw",
      minHeight: "100vh",
      pb: "1rem",
      backgroundColor: "#fcf7ee",
    }}>
      <Box component="header" sx={{
        display: "flex",
        alignItems: "center",
        height: "60px",
        px: 2,
        borderBottom: "1px solid #e1e1e1"
      }}>
        <Logo />
        {showSearchBar && <SearchBar />}
        {matches && <Box className="actions" sx={{ width: 360 }}></Box>}
      </Box>
      <Container maxWidth="lg">
        {props.children}
      </Container>
    </Box>
  )
}