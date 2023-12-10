const description = () => {
  return (
    <p>
      Assuming the maxdeath is true for each event available (or the mindeath is
      true for events with a death flag but an unknown maxdeath), visualize and
      compare the two following distributions:
      <ol>
        <li>
          Using data from all events globally, what proportion of all deaths
          resulted from each problem type?
        </li>
        <li>
          Using data from all events that occured in the country with the most
          total deaths globally, what proportion of all deaths resulted from
          each problem type?
        </li>
      </ol>
    </p>
  );
};

export default description;