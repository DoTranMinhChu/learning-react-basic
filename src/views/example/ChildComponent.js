const ChildComponent = (props) => {
  console.log(">> Check props : ", props);
  let { name, age, jobs } = props;
  return (
    <>
      <div>
        Child Component : {name} - {age}
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>index</th>
              <th>id</th>
              <th>title</th>
              <th>salary</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.salary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ChildComponent;
