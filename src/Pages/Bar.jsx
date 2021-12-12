
import React from 'react';
import {  IconButton, Badge} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link, useLocation} from 'react-router-dom';

const SearchAppBar = ({ totalItems }) => {
  const location = useLocation();
  return (
    <>

          {location.pathname === '/' && (
          <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          )}
    </>
  );
};

export default SearchAppBar;

