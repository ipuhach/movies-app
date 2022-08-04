import { IconButton, TextField, ToggleButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import css from "../styles/FilterTopBar.module.css";

const FilterTopBar: React.FC<{
  submitHandler: (event: React.FormEvent) => void;
  searchTextFilter: string;
  handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sortByFilter: boolean;
  sortByHandler: () => void;
}> = (props) => {
  return (
    <form className={css.topFilterContainer} onSubmit={props.submitHandler}>
      <div className={css.searchContainer}>
        <TextField
          id="outlined-basic"
          value={props.searchTextFilter}
          onChange={props.handleTitleChange}
          label="Title"
          variant="outlined"
          fullWidth
        />
        <IconButton type="submit" aria-label="delete">
          <SearchIcon />
        </IconButton>
      </div>
      <ToggleButton
        className={css.sortByButton}
        value="check"
        selected={props.sortByFilter}
        onChange={props.sortByHandler}
        color="primary"
      >
        <SortByAlphaIcon />
      </ToggleButton>
    </form>
  );
};

export default FilterTopBar;
