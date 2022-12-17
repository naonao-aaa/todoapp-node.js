// /api/v1/tasksからタスクを読み込む
const showTasks = async () => {
  try {
    //自作のAPIを叩く
    const { data: tasks } = await axios.get("/api/v1/tasks");
    console.log(tasks);
  } catch (err) {
    console.log(err);
  }
};

showTasks();
