const description = () => {
  return (
    <p>
      Assuming the maxdeath is true for each event available (or the mindeath is
      true for events with a death flag but an unknown maxdeath), for each
      problem type, find the average amount of deaths per each Urban Unrest
      event of this problem type with a confirmed death. Do not include events
      from the Rwanda Genocide of 1994 while calculating the ratio of the "Armed
      Battle/Clash" problem type.
      <br />
      Display this information on two different bar charts:
      <ol>
        <li>
          Include the ratio of deaths/event of the Rwanda Genocide of 1994, and
          compare to all problem types.
        </li>
        <li>Show only the ratios for each problem type.</li>
      </ol>
    </p>
  );
};

export default description;
