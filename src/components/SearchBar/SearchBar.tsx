import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { useAppDispatch } from '../../store';
import { productSelector, setSearchText } from '../../store/product';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';

export default function SearchBar() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { searchText } = useSelector(productSelector)


  const buttonStyles = useMemo(() => ({
    borderColor: "primary.main",
    color: "primary.main",
    ":hover": {
      color: "secondary.main",
      borderColor: "secondary.main",
      background: "transparent",
    }
  }), [])

  const handleOnSearch = useCallback(() => {
    if(searchText) {
      navigate(`/search/${searchText.replace(/\s/g, '+')}`)
    }
  }, [navigate, searchText])

  const handleOnInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement
    dispatch(setSearchText(value || ''))
  }
  
  return (
    <Box sx={{
      display: "flex",
      flex: 1,
    }}>
      <TextField
        value={searchText}
        sx={{
          mr: "12px",
          width: "100%"
        }}
        onKeyPress={(ev) => {
          if (ev.key === 'Enter') {
            handleOnSearch()
          }
        }}
        onInput={handleOnInput}
        placeholder="Search for new products in 961K stores"
        size='small' 
        variant="outlined" 
      />
      <Button 
        variant="outlined"
        sx={buttonStyles}
        size='small' 
        onClick={handleOnSearch}
      >
        <SearchIcon />
      </Button>
    </Box>
  )
}