function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Stats</h2>
      <div className="flex justify-evenly">
        <p>Total Tasks</p>
        <p>Pending Tasks</p>
        <p>Completed Tasks</p>
      </div>
      <h2>Pending Tasks</h2>
      <div className="flex flex-col justify-around">
        <div>Pending Task 1</div>
        <div>Pending Task 2</div>
        <div>Pending Task 3</div>
        <div>Pending Task 4</div>
      </div>
    </div>
  );
}
export default Dashboard;
