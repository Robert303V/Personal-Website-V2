const description = () => {
  return (
    <p>
      To collect the results, I first made a list of all events that had a
      death, and included their maxdeaths (or their mindeaths in the case that
      maxdeaths are unkown but the death flag is activated). I then grouped this
      list by problem type to find the sum of all deaths per problem type. I
      transferred this list into the first bar chart using pyplot from
      matplotlib.
      <br />
      <br />
      For the second bar chart, I first had to find the country with the most
      total deaths. This turned out to be Rwanda. Once I had that, I made a list
      of all events in Rwanda that had a death, and included their maxdeaths as
      done before. I then grouped this list by problem type to find the sum of
      all deaths per problem type. I transferred this list into the second bar
      chart using pyplot from matplotlib.
      <br />
      <br />
      After visualizing the two charts, It's clear that "Armed Battle/Clash"
      type events have alloted for a majority of the deaths both globally and in
      Rwanda. In Rwanda however, almost every death is from these types of
      events vs globally where only about 5/6 of all total deaths are from these
      types of events. This makes me wonder how big of an impact "Armed
      Battle/Clash" events from Rwanda are effecting the global totals.
    </p>
  );
};

export default description;