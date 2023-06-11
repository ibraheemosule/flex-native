const { getDefaultConfig, mergeConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts },
  } = await getDefaultConfig();
  
  const sassTransformer = {
    transformer: {
      babelTransformerPath: require.resolve("react-native-sass-transformer"),
    },
    resolver: {
      sourceExts: [...sourceExts, "scss", "sass"],
    },
  }
  return mergeConfig( sassTransformer)
})();
