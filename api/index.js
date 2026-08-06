export default async (req, res) => {
  // Ganti 'my-angular-app' dengan nama folder proyek Anda yang ada di dalam direktori 'dist' setelah di-build
  const { reqHandler } = await import('../dist/pisicloud.com-v3/server/server.mjs');
  return reqHandler(req, res);
};
