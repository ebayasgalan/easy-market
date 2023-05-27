const nextConfig = {
  compiler: {
      styledComponents: true
  }
}

module.exports = nextConfig

// import withPreconstruct from '@preconstruct/next';

// export default withPreconstruct({
//   experimental: {
//     appDir: true,

//     // without this, 'Error: Expected Upload to be a GraphQL nullable type.'
//     serverComponentsExternalPackages: ['graphql'],
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   compiler: {
//     styledComponents: true,
//   },
// });