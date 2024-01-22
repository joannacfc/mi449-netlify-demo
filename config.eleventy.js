module.exports = function(eleventyConfig) {
    // This will copy these folders to the output without modifying them at all
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("image");

    return {
      dir: {
        input: "src",
        output: "www",
      }
    };
  }  