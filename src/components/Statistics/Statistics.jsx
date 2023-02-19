import PropTypes from 'prop-types';
import {
  Container,
  Title,
  List,
  ListItem,
  Label,
  Percentage
} from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <Container>
    {title && <Title>{title}</Title>}
    <List>
    {stats.map(({ id, label, percentage }) => 
        <ListItem key={id}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </ListItem>
      )}
    </List>
</Container>)
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
  PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })
  ).isRequired,
}