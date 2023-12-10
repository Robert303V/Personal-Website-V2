const description = () => {
  return (
    <p>
      To collect the results I had to first the country with the most total
      deaths, which is Rwanda, and find the tuples for "Armed Battle/Clash"
      events in Rwanda. I then made a list of all events globally except those
      in Rwanda that are type "Armed Battle/clash". I grouped this list by
      problem type to find the sum of all deaths per problem type. I then
      transferred this list into the second bar chart using pyplot from
      matplotlib.
      <br />
      <br />
      This new chart gives us a much better insight as to the difference in
      proportions between problem types besides "Armed Battle/Clash" (though
      this is still the problem type with the most deaths even while excluding
      the Rwanda genocide). We can now see that the proportion for "General
      Warfare" is about twice as large than that of "Armed Attack", the next
      biggest proportion.
      <br />
      <br />
      The greater visualization this new chart shows us howver is how big of a
      chunk of all global deaths in the database are from "Armed Battle/Clash"
      in Rwanda. It appears that these type of events make up slightly more than
      half of all deaths. As a subquestion below, I will investigate to see what
      proportion of these are from the Rwanda genocide of 1994 by displaying
      each "Armed Battle/Clash" event in Rwanda.
    </p>
  );
};

export default description;
