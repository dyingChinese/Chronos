// @ts-nocheck
import dotenv from "dotenv";
import path from "path";

const envConfig = dotenv.config({
  path: path.resolve(__dirname, "../.env"),
  encoding: "utf8", // 编码方式，默认utf8
  debug: false, // 是否开启debug，默认false
});

const regex = /^APP_/i; //匹配以APP开头的环境变量

process.env = Object.keys(process.env)
  .filter((key) => regex.test(key)) // 遍历只符合正则表达式的环境变量
  .reduce(
    (prev, cur) => {
      prev[cur] = process.env[cur];
      return prev;
    },
    {
      // 一般都有个NODE_ENV环境变量
      NODE_ENV: process.env.NODE_ENV || "development",
      ...envConfig.parsed,
    }
  );
