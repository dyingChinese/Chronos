declare global {
    namespace NodeJS {
      interface ProcessEnv {
        [k: string]: any; // 假设你有一个以 APP_ 开头的环境变量
        NODE_ENV: "production" | "development" | "test"; // 或者其他你需要的类型
  
        PORT: number;
      }
    }
  
  }


  declare module '*.json' {
    const value: any; 
    export default value;
  }