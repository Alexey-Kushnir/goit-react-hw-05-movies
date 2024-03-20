import { Input, Button } from './QueryForm.styled';

export const QueryForm = ({ updateQueryString }) => (
  <form onSubmit={e => updateQueryString(e)}>
    <Input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="  Search movies"
    />
    <Button type="submit">Search</Button>
  </form>
);
