/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // The resume PDFs live outside /public so they have no static URL; make
    // sure standalone/serverless builds still ship them to the server.
    outputFileTracingIncludes: {
      "/api/resume": ["./private/resume/**"],
    },
  },
};

module.exports = nextConfig;
