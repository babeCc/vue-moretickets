<<<<<<< HEAD
    const path = require("path");
module.exports = {
      devServer:{
          proxy:{
            "/showapi":{
                target:"https://m.moretickets.com",
                changeOrigin:true
            }
          }
         
      },

    configureWebpack:{
      resolve:{
          alias:{
              "@":path.join(__dirname,"./src"),
              "@assets":path.join(__dirname,"./src/assets"),
              "@common":path.join(__dirname,"./src/common"),
              "@components":path.join(__dirname,"./src/components"),
              "@pages":path.join(__dirname,"./src/pages"),
              "@router":path.join(__dirname,"./src/router"),
              "@store":path.join(__dirname,"./src/store"),
              "@utils":path.join(__dirname,"./src/utils"),
              "@api":path.join(__dirname,"./src/api"),
          }
      }
=======
const path = require("path")

module.exports = {
    devServer:{
    "/":{
        target:"",
    }        
 
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.join(__dirname, "./src"),
                "@assets": path.join(__dirname, "./src/assets"),
                "@common": path.join(__dirname, "./src/common"),
                "@components": path.join(__dirname, "./src/components"),
                "@pages": path.join(__dirname, "./src/pages"),
                "@router": path.join(__dirname, "./src/router"),
                "@store": path.join(__dirname, "./src/store"),
                "@utils": path.join(__dirname, "./src/utils"),
                "@api": path.join(__dirname, "./src/api"),
            }
        }
>>>>>>> f5103965017d8d6a505d021fa7a21cd692d376d4
    }
    
}