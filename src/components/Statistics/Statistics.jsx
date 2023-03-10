// import data from '/path/to/data.json';
import PropTypes from 'prop-types';
import {
  Section,
  Title,
  List,
  ItemsFile,
  Label,
  Percentage,
} from './Statistics.styled';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <ItemsFile key={id} style={{ backgroundColor: getRandomColor() }}>
              <Label>{label}</Label>
              <Percentage> {percentage}%</Percentage>
            </ItemsFile>
          );
        })}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
