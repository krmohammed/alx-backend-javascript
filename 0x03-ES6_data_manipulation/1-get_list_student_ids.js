function getListStudentsId(arr) {
  if (typeof arr !== 'object') {
    return [];
  }
  return arr.map((item) => item.id);
}

export default getListStudentsId;
