const description = () => {
  return (
    <p>
      The Rwanda Genocide of 1994 occured in the capital of Rwanda, Kigali.
      Let's investigate whether or not countries have had more deaths in their
      capital city, or outside of their capital city. Assuming the maxdeath is
      true for each event available (or the mindeath is true for events with a
      death flag but an unknown maxdeath), for each country, analyize all Urban
      Unrest Events in the country and compare the amount of deaths that occured
      in the capital city vs the amount of deaths total.
      <br />
      Show this data visually through a world map where a country is red if a
      majority of it's deaths occured in the capital, blue if the majority of
      deaths were outside of the capital city, and green if there are no deaths
      found in the database for that country.
    </p>
  );
};

export default description;
