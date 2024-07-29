function getListStudentsId(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((item) => item.id);
}

export default getListStudentsId;
