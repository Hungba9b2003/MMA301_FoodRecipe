module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./", // alias `@` sẽ trỏ đến thư mục gốc của dự án
          },
        },
      ],
    ],
  };
};
