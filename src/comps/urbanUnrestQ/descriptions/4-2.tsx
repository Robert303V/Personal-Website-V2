const description = () => {
  return (
    <p>
      To collect this data, I had two find two different totals, with similar
      queries. The first found the total deaths (using the previoud maximum
      deaths possible list) of all events that have occured in Rwanda. The
      second finds the total deaths from all events that occured in countries
      that are not rwanda. I then used SQL's UNION syntax to combine these
      results into a single query. I then took the outputted totals and turned
      them into a bar graph using pyplot from matplotlib.
      <br />
      <br />
      The results of this query really hits the nail on the head of just how
      brutal the Rwanda genocide of 1994 is. With just 5 events, the death total
      in Rwanda is almost as big as the death total of every other country
      combined. This chart shows us really just how large of a proportion of the
      total deaths in the database were from the Rwanda Genocide of 1994.
    </p>
  );
};

export default description;
