import React from 'react';
import {
  Box,
  TextField,
  MenuItem,
  InputAdornment,
  IconButton,
  Paper,
  Stack,
  Chip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';

const FilterSort = ({
  searchText,
  setSearchText,
  sortOption,
  setSortOption,
  filters,
  activeFilters,
  setActiveFilters,
  sortOptions,
  placeholder = "Search...",
}) => {
  const handleFilterToggle = (filter) => {
    setActiveFilters(prev => {
      if (prev.includes(filter)) {
        return prev.filter(f => f !== filter);
      }
      return [...prev, filter];
    });
  };

  const clearSearch = () => {
    setSearchText('');
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setSortOption(sortOptions[0].value);
  };

  return (
    <Paper sx={{ p: 2, mb: 3 }} elevation={1}>
      <Stack spacing={2}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {/* Search */}
          <TextField
            size="small"
            placeholder={placeholder}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            sx={{ flexGrow: 1, minWidth: 200 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: searchText && (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={clearSearch}>
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Sort */}
          <TextField
            select
            size="small"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            sx={{ minWidth: 150 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FilterListIcon />
                </InputAdornment>
              ),
            }}
          >
            {sortOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Filter Chips */}
        {filters && filters.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {filters.map((filter) => (
              <Chip
                key={filter}
                label={filter}
                onClick={() => handleFilterToggle(filter)}
                color={activeFilters.includes(filter) ? "primary" : "default"}
                variant={activeFilters.includes(filter) ? "filled" : "outlined"}
              />
            ))}
            {(activeFilters.length > 0) && (
              <Chip
                label="Clear All"
                onClick={clearFilters}
                color="error"
                variant="outlined"
              />
            )}
          </Box>
        )}
      </Stack>
    </Paper>
  );
};

export default FilterSort;
