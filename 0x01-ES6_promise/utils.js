export function uploadPhoto() {
  return new Promise(function (resolve, reject) {
    resolve({
      status: 200,
      body: "photo-profile-1",
    });
    reject(new Error("Upload photo failed"));
  });
}

export function creatUser() {
    return new Promise(function (resolve, reject) {
    resolve({
    firstName: "Guillaume",
    lastName: "Salva",
  });
    reject(new Error("create User failed"));
  });
  
}
