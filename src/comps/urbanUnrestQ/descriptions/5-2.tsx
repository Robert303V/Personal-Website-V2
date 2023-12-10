const description = () => {
  return (
    <p>
      To get this result, I first made two lists using the list of the maximum
      possible deaths for each event. One being the amount of total deaths for
      each country, the other being the amount of total deaths for each country
      in that countries capital city. I then did a leftjoin between the first
      list and second list, so that I still had data for a country if it had
      deaths but none in it's capital city. I then produced a ratio for each
      country of total deaths in capital over total deaths, the ratio being 0 if
      there were no recorded deaths in it's capital city. I then used the SQL
      'CASE' Syntax to assign either a 1 or a 0 to each country: 1 if it has had
      a majority of it's deaths in the capital, 0 if not. I then translated this
      into a world map, showing countries as red if they have a 1, blue if they
      have a 0, and green if the sequal query didn't return the country, which
      means there were no recorded deaths from an Urban Unrest Event in that
      country in the database. To make this map I used pygal_maps_world.
      <br />
      <br />
      The first and most obvious takeaway is that for a majority of countries
      with a death recorded in the database, they had a majority of their
      recorded deaths happen in the capital city. Next we can look at each
      region to see if we can take something away. We see in South America and
      Africa, a majority of countries are in the red (have had more than half of
      their total deaths in the capital city). For the Middle East and Oceania,
      it seems that almost all countries have deaths recorded, and most of them
      are in the red. Asia, not including the Middle East, has a lot of
      countries in the blue meaning that there are deaths recorded in the
      database for these countries, but a majority of them are outside of the
      capital city. For europe on the other hand, almost every country is green
      meaning that there are no deaths recorded in the database.
      <br />
      <br />
      <br />
      <br />
      Thanks for reading, I hope you enjoyed and learned something new!
    </p>
  );
};

export default description;
