import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material"
import { clearSearchText } from '../../store/product';
import { useAppDispatch } from '../../store';

export default function Logo() {
  const matches = useMediaQuery('(min-width:600px)');
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleLogoClick = () => {
    dispatch(clearSearchText())
    navigate('/')
  }

  return (
      <Box className="logo-container" sx={{ cursor: "pointer" }} onClick={handleLogoClick}>
      {
        matches ?  (
          <Box sx={{
            lineHeight: 1.4,
            fontSize: "1.4rem",
            mr: "12px"
          }}>
            <Typography component="span" sx={{ fontWeight: "bold", fontSize: "inherit" }}>Best</Typography>Search
          </Box>
        ): (
          <Box
            sx={{
              width: "40px",
              height: "40px",
              lineHeight: "40px",
              boxShadow: 3,
              bgcolor: "#000",
              color: "grey.50",
              borderRadius: 2,
              textAlign: 'center',
              fontSize: '1rem',
              fontWeight: 'bold',
              mr: "12px"
            }}
          >
          ST
        </Box>
        )
      }
    </Box>
  )
}