export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]).then((response) => {
    return response;
  });
}
