import React from 'react';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Stack,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';

const FilterSort = ({
  searchText,
  onSearchChange,
  sortOption,
  onSortChange,
  sortOptions,
  filters,
  activeFilters,
  onFilterChange,
}) => {
  const handleFilterClick = (filter) => {
    if (activeFilters.includes(filter)) {
      onFilterChange(activeFilters.filter((f) => f !== filter));
    } else {
      onFilterChange([...activeFilters, filter]);
    }
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" sx={{ mb: 2 }}>
        {/* Search Bar */}
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search packages..."
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ flexGrow: 1 }}
        />

        {/* Sort Dropdown */}
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="sort-select-label">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <SortIcon sx={{ mr: 1 }} /> Sort By
            </Box>
          </InputLabel>
          <Select
            labelId="sort-select-label"
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            label="Sort By"
          >
            {sortOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      {/* Filter Chips */}
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {filters.map((filter) => (
          <Chip
            key={filter}
            label={filter}
            onClick={() => handleFilterClick(filter)}
            color={activeFilters.includes(filter) ? 'primary' : 'default'}
            variant={activeFilters.includes(filter) ? 'filled' : 'outlined'}
            sx={{ m: 0.5 }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default FilterSort;
