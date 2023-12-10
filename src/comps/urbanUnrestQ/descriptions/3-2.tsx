const description = () => {
  return (
    <p>
      To collect this data I first used the previoud list of the maximum
      possible deaths for each event, and grouped it into each problem type to
      find the sum amount of deaths, as well as the count of the amount of
      events. I then compared these two values to find the ratio for each
      problem type. I then used SQL's "UNION" syntax to join that list with
      another. This second list found all events that were a part of the Rwanda
      genocide of 1994, and found the ratio of deaths per event for only these
      events. I then put this unioned list into the first bar graph using pyplot
      from matplotlib. I then used the first list (before the union with the
      ratio for each problem type only) to create the second bar graph using
      pyplot from matplotlib.
      <br />
      <br />
      The first bar graph shows us two things. First is that the Rwanda genocide
      of 1994 is only a few different events, each with an incredibly high death
      count, instead of a lot of events with a large death count. Second is just
      how much more deadly this genocide was than any other Urban Unrest events.
      The Problem Type with the highest deaths per event ratio is Armed
      Battle/Clash (not including the Rwanda genocide), but the ratio for the
      Rwanda genocide is over 2,500 times the ratio for all other Armed
      Battle/Clash events.
      <br />
      <br />
      The second bar graph gives us insights on the differences in ratios
      between each problem type. In conjunction with the pie chart from question
      two, we can analyze if a problem type has plenty events with low deaths,
      or a few events with high deaths. For example, Armed Attack was the 3rd
      highest death total in the pie chart, but has the lowest ratio of deaths
      per event out of any problem type. This shows us that there's a large
      number of different armed attacks in the database, but each one has
      reletively low casualties.
    </p>
  );
};

export default description;
