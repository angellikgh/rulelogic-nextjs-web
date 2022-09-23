import Router from 'next/router';
import _ from 'lodash';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/system';
import Switch from '@mui/material/Switch';
import { Button, FormControlLabel } from '@mui/material';
import FusePageSimple from '@fuse/core/FusePageSimple';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import RuleTypeCard from './RuleTypeCard';
import RuleTypes from 'src/constants/RuleTypes';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

function RuleType() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  // const theme = useTheme();
  const [filteredData, setFilteredData] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hideDisabled, sethideDisabled] = useState(false);
  const categories = [];

  useEffect(() => {
    function getFilteredArray() {
      if (
        searchText.length === 0 &&
        selectedCategory === 'all' &&
        !hideDisabled
      ) {
        return RuleTypes;
      }

      return _.filter(RuleTypes, (item) => {
        if (selectedCategory !== 'all' && item.category !== selectedCategory) {
          return false;
        }

        if (hideDisabled && !item.enabled) {
          return false;
        }

        return item.title.toLowerCase().includes(searchText.toLowerCase());
      });
    }

    if (RuleTypes) {
      setFilteredData(getFilteredArray());
    }
  }, [hideDisabled, searchText, selectedCategory]);

  function handleSelectedCategory(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchText(event) {
    setSearchText(event.target.value);
  }
  return (
    <FusePageSimple
      header={
        <Box
          className="relative overflow-hidden flex shrink-0 items-center justify-center px-8 py-36"
          sx={{
            backgroundColor: 'primary.main',
            color: (theme) =>
              theme.palette.getContrastText(theme.palette.primary.main),
          }}
        >
          <div className="flex flex-col items-center justify-center  mx-auto w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              <Typography
                color="inherit"
                className="text-16 sm:text-20 opacity-75 tracking-tight max-w-md text-center"
              >
                Select Rule Type
              </Typography>
            </motion.div>
          </div>

          <svg
            className="absolute inset-0 pointer-events-none"
            viewBox="0 0 960 540"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMax slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              className="text-gray-700 opacity-25"
              fill="none"
              stroke="currentColor"
              strokeWidth="100"
            >
              <circle r="234" cx="196" cy="23" />
              <circle r="234" cx="790" cy="491" />
            </g>
          </svg>
        </Box>
      }
      content={
        <div className="flex flex-col flex-1 w-full mx-auto px-24 pt-24 sm:p-40">
          <div className="flex flex-col shrink-0 sm:flex-row items-center space-y-16 sm:space-y-0">
            <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center space-y-16 sm:space-y-0 sm:space-x-16 mr-auto">
              <FormControl className="flex w-full sm:w-136" variant="outlined">
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select
                  labelId="category-select-label"
                  id="category-select"
                  label="Category"
                  value={selectedCategory}
                  onChange={handleSelectedCategory}
                >
                  <MenuItem value="all">
                    <em> All </em>
                  </MenuItem>
                  {categories.map((category) => (
                    <MenuItem value={category.slug} key={category.id}>
                      {category.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Search for a rules"
                placeholder="Enter a keyword..."
                className="flex w-full sm:w-256 mx-8"
                value={searchText}
                inputProps={{
                  'aria-label': 'Search',
                }}
                onChange={handleSearchText}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>

            <FormControlLabel
              label="Hide disabled"
              control={
                <Switch
                  onChange={(ev) => {
                    sethideDisabled(ev.target.checked);
                  }}
                  checked={hideDisabled}
                  name="hideDisabled"
                />
              }
            />

            <Button
              className="mb-24"
              color="secondary"
              variant="outlined"
              startIcon={
                <FuseSvgIcon size={20}>
                  heroicons-outline:arrow-sm-left
                </FuseSvgIcon>
              }
              onClick={() => Router.push('/rules')}
            >
              Back to rules
            </Button>
          </div>
          {useMemo(() => {
            const container = {
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            };

            const item = {
              hidden: {
                opacity: 0,
                y: 20,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            };

            return (
              filteredData &&
              (filteredData.length > 0 ? (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 mt-32 sm:mt-40"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {filteredData.map((ruleType) => {
                    return (
                      <motion.div variants={item} key={ruleType.recordpk}>
                        <RuleTypeCard ruleType={ruleType} />
                      </motion.div>
                    );
                  })}
                </motion.div>
              ) : (
                <div className="flex flex-1 items-center justify-center">
                  <Typography color="text.secondary" className="text-24 my-24">
                    No ruleTypes found!
                  </Typography>
                </div>
              ))
            );
          }, [filteredData])}
        </div>
      }
      scroll={isMobile ? 'normal' : 'page'}
    />
  );
}

export default RuleType;
